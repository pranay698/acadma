import csv, json

data = """Homepage,https://www.acadma.com/,,,,,,,
Store,https://www.acadma.com/s/store,,,,,,,
Sessions,https://www.acadma.com/sessions,,,,,,,
Products,https://www.acadma.com/products,,,,,,,
Membership,https://www.acadma.com/membership,,,,,,,
Checkout,https://www.acadma.com/s/checkout,,,,,,,
Privacy Policy,https://www.acadma.com/privacypolicy,,,,,,,
Terms of Use,https://www.acadma.com/termsofuse,,,,,,,
Contact Us,https://www.acadma.com/contactus,,,,,,,
Login,https://www.acadma.com/t/public/login,,,,,,,
All- Course- Access Pass Quarterly,https://www.acadma.com/courses/All--Course--Access-Pass-Quarterly-69a167a0ce605c44ff74ec63,999,999,15,,https://d502jbuhuh9wk.cloudfront.net/resources/images/cc4.jpg,,
All-Course Access Yearly pass,https://www.acadma.com/courses/All-Course-Access-Pass-698edd4dcb12575885256856,1999,1999,13,,https://d502jbuhuh9wk.cloudfront.net/courses/698edd4dcb12575885256856/698edd4dcb12575885256856_scaled_cover.jpg?v=1,,
All-Course Access Pass Monthly,https://www.acadma.com/courses/All-697723333e29496b34bb8869,450,450,14,,https://d502jbuhuh9wk.cloudfront.net/courses/697723333e29496b34bb8869/697723333e29496b34bb8869_scaled_cover.jpg?v=1,,
5 Days Basic Makeup Masterclass,https://www.acadma.com/courses/5-Days-Basic-Makeup-Masterclass-692ed34f72249d2d15f03ef8,675,375,,Pre -Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/692ed34f72249d2d15f03ef8/692ed34f72249d2d15f03ef8_scaled_cover.jpg?v=1,,
Special Baking Combo-15 days Course,https://www.acadma.com/courses/Special-Baking-Combo-15-days-Course-68d0ed17481c8f1fe91cb58e,1500,975,,Pre -Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/68d0ed17481c8f1fe91cb58e/68d0ed17481c8f1fe91cb58e_scaled_cover.jpg?v=1,,
Diwali Special Macrame Art,https://www.acadma.com/courses/Diwali-Special-Macrame-Art-68c5348aaccd78420b51f974,899,595,,,https://d502jbuhuh9wk.cloudfront.net/courses/68c5348aaccd78420b51f974/68c5348aaccd78420b51f974_scaled_cover.jpg?v=1,,
Basic To Advanced Silicon Mould Making Masterclass,https://www.acadma.com/courses/Basic-To-Advanced-Silicon-Mould-Making-Masterclass-68c532a5d05d84082f5d1ee5,999,295,,,https://d502jbuhuh9wk.cloudfront.net/courses/68c532a5d05d84082f5d1ee5/68c532a5d05d84082f5d1ee5_scaled_cover.jpg?v=1,,
DIY Workshop ( 05 Days Course ),https://www.acadma.com/courses/DIY-Workshop--05-Days-Course--68511b2a5717044f1bf37784,999,499,,Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/68511b2a5717044f1bf37784/68511b2a5717044f1bf37784_scaled_cover.jpg?v=1,,
Alcohol Ink Art Workshop ( 04 days course ),https://www.acadma.com/courses/Alcohol-Ink-Art-Workshop--04-days-course--685119c3af1d113a686abc4b,999,475,,Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/685119c3af1d113a686abc4b/685119c3af1d113a686abc4b_scaled_cover.jpg?v=1,,
Concrete Art Masterclass - Beginners,https://www.acadma.com/courses/Concrete-Art-Masterclass---Beginners-6843a0bbee5dab24df234daa,599,299,,Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/6843a0bbee5dab24df234daa/6843a0bbee5dab24df234daa_scaled_cover.jpg?v=2,,
Basic Sculpture Art Masterclass,https://www.acadma.com/courses/Basic-Sculpture-Art-Masterclass-684321651853fe2305c38264,999,681,,Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/684321651853fe2305c38264/684321651853fe2305c38264_scaled_cover.jpg?v=1,,
Art And Craft All Courses - Basic,https://www.acadma.com/courses/Art-And-Craft-All-Courses-682d8520f199e12637879135,1700,1299,3,,https://d502jbuhuh9wk.cloudfront.net/courses/682d8520f199e12637879135/682d8520f199e12637879135_scaled_cover.jpg?v=1,,
Basic to Advanced Candle Making Masterclass,https://www.acadma.com/courses/Basic-to-Advanced-Candle-Making-Masterclass-680785aa2b0fe87922524e6a,1775,1675,,Pre -Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/680785aa2b0fe87922524e6a/680785aa2b0fe87922524e6a_scaled_cover.jpg?v=1,,
Basic to Advanced Texture Art Workshop,https://www.acadma.com/courses/Basic-to-Advanced-Texture-Art-Workshop-6806266b7f970c785d7c1560,1700,1475,,Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/6806266b7f970c785d7c1560/6806266b7f970c785d7c1560_scaled_cover.jpg?v=1,,
Become A Professional Resin Artist,https://www.acadma.com/courses/Become-A-Professional-Resin-Artist-680605aed138a26261523540,2475,2475,,,https://d502jbuhuh9wk.cloudfront.net/courses/680605aed138a26261523540/680605aed138a26261523540_scaled_cover.jpg?v=1,,
Silicon Mould Making for making candles or resin,https://www.acadma.com/courses/Silicon-Mould-Making-for-making-candles-or-resin-680211e3000e7c014071987d,399,199,,Pre -Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/680211e3000e7c014071987d/680211e3000e7c014071987d_scaled_cover.jpg?v=2,,
Basic to Advanced Texture Art workshop,https://www.acadma.com/courses/Basic-to-Advanced-Texture-Art-workshop-67e13bc8a8938f53ab8a8806,1775,1475,,,https://d502jbuhuh9wk.cloudfront.net/courses/67e13bc8a8938f53ab8a8806/67e13bc8a8938f53ab8a8806_scaled_cover.jpg?v=2,,
Basic Texture Art Masterclass,https://www.acadma.com/courses/Textur-67e135e374b82262b21f408f,598,589,,Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/67e135e374b82262b21f408f/67e135e374b82262b21f408f_scaled_cover.jpg?v=2,,
Basic Candle Making Masterclass,https://www.acadma.com/courses/Basic-Candle-Making-Masterclass-67e12ec9a8938f53ab8a7f53,690,681,,Pre -Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/67e12ec9a8938f53ab8a7f53/67e12ec9a8938f53ab8a7f53_scaled_cover.jpg?v=2,,
Basic Resin Art Masterclass,https://www.acadma.com/courses/Basic-Resin-Art-Masterclass-1741003997011-67c59cdd41b8c1642f05ba5e,999,413,,Pre -Recorded Session,https://d502jbuhuh9wk.cloudfront.net/courses/67c59cdd41b8c1642f05ba5e/67c59cdd41b8c1642f05ba5e_scaled_cover.jpg?v=2,,
Basic - Resin Art Masterclass,https://www.acadma.com/courses/Basic-Resin-Art-Masterclass-67c1aca82ab5fd627705918b,592,450,,,https://d502jbuhuh9wk.cloudfront.net/courses/67c1aca82ab5fd627705918b/67c1aca82ab5fd627705918b_scaled_cover.jpg?v=2,,"""

lines = data.strip().split('\n')
courses = []

for line in lines:
    parts = line.split(',')
    name = parts[0]
    url = parts[1]
    if '/courses/' in url:
        slug = url.split('/courses/')[-1]
        price = int(parts[2]) if parts[2] else 0
        discount = int(parts[3]) if parts[3] else price
        ctype = parts[5] if parts[5] else 'Recorded Session'
        image = parts[6] if parts[6] else ''
        
        courses.append({
            "slug": slug,
            "title": name,
            "description": f"Learn how to create beautiful products from home. This step-by-step {name.lower()} is designed for absolute beginners to build confidence and creativity.",
            "price": price,
            "discountPrice": discount,
            "courseType": ctype,
            "category": "Creative Course",
            "thumbnailImage": image,
            "instructor": "Pankhuri Expert",
            "platform": "Acadma",
            "durationDays": 5
        })

print(f"export const allCoursesMap: Record<string, CourseData> = {json.dumps({c['slug']: c for c in courses}, indent=2)};")
