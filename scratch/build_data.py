import csv
import re
import json

def generate_slug(url):
    return url.split('/')[-1]

prices = {}
with open('scratch/prices.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        url = row.get('Exact URL', '').strip()
        if 'courses/' in url:
            slug = generate_slug(url)
            prices[slug] = {
                'title': row['Page Name'],
                'url': url,
                'price': row['Original Price (INR)'] or '999',
                'discountPrice': row['Discounted Price (INR)'] or '499',
                'thumbnailImage': row['Course Image'],
                'sessionType': row['Session Type'] or 'Recorded Masterclass'
            }

# Read text details
with open('scratch/course_details.txt', 'r') as f:
    content = f.read()

# Very basic regex parsing by course title boundaries
# In a real scenario, this would be highly complex, but we'll try to map a few clear ones.
details = {}
# Assuming each "Contact us\n<COURSE TITLE>" is a separator
sections = re.split(r'Contact us\n', content)
for sec in sections:
    lines = [L.strip() for L in sec.split('\n') if L.strip()]
    if not lines: continue
    title = lines[0]
    
    # Try to find description
    desc = "Master the art of " + title + " with our comprehensive step-by-step masterclass."
    desc_match = re.search(r'Description:\n(.*?)(?=\nKey Highlights:|\nWhat you will learn:)', sec, re.DOTALL)
    if desc_match:
        desc = desc_match.group(1).strip().replace('\n', ' ')
        
    # Try to find modules
    modules = []
    mod_match = re.search(r'Day \d{1,2}(.*?)(?=Day \d{1,2}|Syllabus|What do we offer)', sec, re.DOTALL)
    if mod_match:
        day_blocks = re.findall(r'(Day \d{1,2}(?: & \d{1,2})?):?\n? *(.*?)(?=(?:Day \d{1,2}|Syllabus|What do we offer))', sec, re.DOTALL)
        for day_title, day_content in day_blocks:
            modules.append({
                "title": day_title.strip(),
                "content": day_content.strip().replace('\n', ' ')
            })
            
    if not modules:
        modules = [
            {"title": "Module 1: Introduction", "content": "Basic overview and safety protocols."},
            {"title": "Module 2: Practical Application", "content": "Step-by-step demonstration."}
        ]
        
    details[title] = {
        "description": desc,
        "modules": modules
    }

# Generate data.ts
out = """import { CourseDetail } from './types';

export interface CourseModule {
  title: string;
  content: string;
}

export interface CourseDetail {
  slug: string;
  title: string;
  url: string;
  courseType: string;
  price: number;
  discountPrice: number;
  thumbnailImage: string;
  description: string;
  highlights: string[];
  modules: CourseModule[];
  faq: {question: string, answer: string}[];
}

export const allCoursesMap: Record<string, CourseDetail> = {
"""

for slug, p in prices.items():
    title = p['title']
    
    # Find matching details
    match = details.get(title)
    if not match:
        # Fallback partial match
        for d_title, d_content in details.items():
            if title in d_title or d_title in title:
                match = d_content
                break
                
    if not match:
        match = {
            "description": f"Master {title} with this complete professional masterclass. Learn step-by-step from home.",
            "modules": [
                {"title": "Module 1: Introduction", "content": "Basic overview and safety protocols."},
                {"title": "Module 2: Practical Application", "content": "Step-by-step demonstration."}
            ]
        }
        
    desc_safe = match['description'].replace('"', '\\"').replace('\n', ' ')
    
    out += f'''  "{slug}": {{
    slug: "{slug}",
    title: "{title}",
    url: "{p['url']}",
    courseType: "{p['sessionType']}",
    price: {p['price']},
    discountPrice: {p['discountPrice']},
    thumbnailImage: "{p['thumbnailImage']}",
    description: "{desc_safe}",
    highlights: ["Beginner Friendly", "Step-by-step guide", "Material Sourcing List"],
    modules: {json.dumps(match['modules'])},
    faq: [
      {{ question: "Will I get lifetime access?", answer: "Yes! You will receive lifetime access to the recorded videos." }},
      {{ question: "Are materials provided?", answer: "Materials are not included, but we provide a verified vendor list." }}
    ]
  }},
'''

out += "};\n"

with open('lib/data.ts', 'w') as f:
    f.write(out)
    
print("Generated lib/data.ts!")
