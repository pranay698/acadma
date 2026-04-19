import { ReactNode } from "react";

// --- Types ---
export interface CourseData {
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  courseType: string;
  category: string;
  thumbnailImage: string;
  courseDetailsImage?: string;
  instructor: string;
  platform: string;
  durationDays: number;
}

export interface ModuleData {
  title: string;
  shortDescription: string;
  moduleContent: string[];
  moduleImage?: string;
  day: number;
  durationMinutes?: number;
}

export interface ReviewData {
  name: string;
  rating: number;
  message: string;
  active: boolean;
  avatar?: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  badgeText?: string;
  link?: string;
}

export interface OutcomeData {
  title: string;
  subtitle: string;
  image: string;
}

// --- Mock Data Mapped to User CMS Requirements ---

export const courseData: CourseData = {
  title: "Basic Resin Art Masterclass",
  description: "Learn how to create beautiful, sellable resin art from home. This step-by-step masterclass is designed for absolute beginners to build confidence and creativity.",
  price: 999,
  discountPrice: 413,
  courseType: "Recorded Session",
  category: "Resin Art",
  thumbnailImage: "https://d502jbuhuh9wk.cloudfront.net/courses/67c59cdd41b8c1642f05ba5e/67c59cdd41b8c1642f05ba5e_scaled_cover.jpg?v=2",
  instructor: "Pankhuri Expert", // Will be detailed below
  platform: "Acadma",
  durationDays: 5,
};

export const highlights = [
  "No prior experience needed",
  "Recorded lessons",
  "Beginner-safe guidance",
  "Material sourcing support",
  "WhatsApp community support"
];

export const trustIcons = [
  { text: "Expert led", icon: "Stars" },
  { text: "Beginner-friendly", icon: "Smile" },
  { text: "Step-by-step execution", icon: "TrendingUp" },
  { text: "Community support", icon: "Users" },
  { text: "Affordable & accessible", icon: "HeartHandshake" },
];

export const outcomes: OutcomeData[] = [
  { title: "Premium Coasters", subtitle: "great for custom orders", image: "https://d502jbuhuh9wk.cloudfront.net/resources/images/cc4.jpg" },
  { title: "Resin Clocks", subtitle: "gift-worthy", image: "https://d502jbuhuh9wk.cloudfront.net/resources/images/cc2.jpg" },
  { title: "Custom Keychains", subtitle: "sellable from home", image: "https://d502jbuhuh9wk.cloudfront.net/resources/images/cc3.jpg" },
  { title: "Elegant Trays", subtitle: "beginner-friendly", image: "https://d502jbuhuh9wk.cloudfront.net/resources/images/cc1.jpg" },
];

export const reassurances = [
  { title: "Zero Experience Needed", description: "Start from scratch with detailed, easy-to-follow directions." },
  { title: "We Save You Money", description: "Buy only what you actually need instead of expensive kits." },
  { title: "Safe Practices First", description: "Learn proper safety protocols for home crafting." },
  { title: "Practical, Not Just Theory", description: "You will make multiple products during the course." },
  { title: "Help When You're Stuck", description: "Active WhatsApp community for quick answers." },
  { title: "Income Oriented", description: "Gain a skill that can easily become a side income." },
];

export const modules: ModuleData[] = [
  {
    day: 1,
    title: "Introduction & Safety",
    shortDescription: "Understanding resin types and crucial safety gear.",
    moduleContent: ["What is resin?", "Safety protocols at home", "Workspace setup", "Essential tools intro"],
    durationMinutes: 45,
  },
  {
    day: 2,
    title: "Mixing & Ratios",
    shortDescription: "Master the perfect pour.",
    moduleContent: ["Measuring correctly", "Mixing techniques to avoid bubbles", "Pot life & cure times"],
    durationMinutes: 50,
  },
  {
    day: 3,
    title: "Your First Coaster",
    shortDescription: "Creating a basic, elegant coaster.",
    moduleContent: ["Mould preparation", "Color pigments & mixing", "Pouring technique"],
    durationMinutes: 60,
  },
  {
    day: 4,
    title: "Advanced Embeds",
    shortDescription: "Adding flowers and gold leaf.",
    moduleContent: ["Working with dry flowers", "Using gold leaf flakes", "Layering resin"],
    durationMinutes: 55,
  },
  {
    day: 5,
    title: "Finishing & Selling",
    shortDescription: "How to polish and price your work.",
    moduleContent: ["Demoulding safely", "Sanding edges", "How to price for profit"],
    durationMinutes: 65,
  },
];

export const includedItems = [
  "Recorded video lessons",
  "Beginner-friendly execution",
  "Material sourcing support",
  "WhatsApp support / community",
  "Product-focused learning",
  "Step-by-step practical demos",
  "Access to structured beginner flow"
];

export const materialsList = [
  { name: "Epoxy Resin & Hardener", note: "Start with a 300g beginner kit" },
  { name: "Safety Gear", note: "Nitrile gloves & basic mask" },
  { name: "Mixing Supplies", note: "Paper cups & wooden stirrers" },
  { name: "Silicone Moulds", note: "1 basic coaster mould" },
  { name: "Basic Pigments", note: "2-3 primary color pigments" },
];

export const instructorData = {
  name: "Master Artist",
  bio: "A warm and practical mentor who believes anyone can create art. Specializing in home-based setups, she will teach you not just the techniques, but how to avoid costly beginner mistakes.",
  rating: 4.8,
  languages: "English & Hindi",
  avatar: "https://d502jbuhuh9wk.cloudfront.net/resources/images/avatar.jpg"
};

export const testimonials: ReviewData[] = [
  {
    name: "Priyanka S.",
    rating: 5,
    message: "I was so confused about what resin to buy. This course made it incredibly clear and now I am making keychains for my friends!",
    active: true,
  },
  {
    name: "Anjali Gupta",
    rating: 5,
    message: "The step-by-step videos are perfect for beginners. I love the WhatsApp group support when I had bubbles in my first pour.",
    active: true,
  },
  {
    name: "Neha V.",
    rating: 4.5,
    message: "Absolutely worth the money. I feel confident enough to start taking small custom orders for Diwali.",
    active: true,
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    title: "Basic Resin Art Masterclass",
    price: courseData.discountPrice,
    features: [
      "Best for first-time learners",
      "Beginner foundation",
      "Basics + safety + product making",
      "Recorded video access",
      "Affordable starting point"
    ]
  },
  {
    id: "bundle",
    title: "All-Access Business Bundle",
    price: 2475,
    isPopular: true,
    badgeText: "Best Value",
    features: [
      "Includes all basic course modules",
      "All advanced course modules",
      "All upcoming live classes",
      "Business setup guidance",
      "Instagram growth strategy",
      "Serious learner path"
    ]
  }
];

export const faqs = [
  {
    question: "I have zero artistic experience, is this for me?",
    answer: "Absolutely. We designed this specifically for complete beginners. Every step is clearly explained so you can confidently create."
  },
  {
    question: "Do I need to buy a lot of expensive materials?",
    answer: "No! We guide you on exactly what essentials to buy so you don't overspend. You can start small."
  },
  {
    question: "Is this safe to do at home?",
    answer: "Yes, our first module focuses entirely on safety, proper ventilation, and the protective gear you need to work safely from your home."
  },
  {
    question: "How long do I have access to the recordings?",
    answer: "You get long-term access, so you can learn at your own pace and revisit the videos anytime you get stuck."
  }
];

export const allCoursesMap: Record<string, CourseData> = {
  "All--Course--Access-Pass-Quarterly-69a167a0ce605c44ff74ec63": {
    "slug": "All--Course--Access-Pass-Quarterly-69a167a0ce605c44ff74ec63",
    "title": "All- Course- Access Pass Quarterly",
    "description": "Learn how to create beautiful products from home. This step-by-step all- course- access pass quarterly is designed for absolute beginners to build confidence and creativity.",
    "price": 999,
    "discountPrice": 999,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/resources/images/cc4.jpg",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "All-Course-Access-Pass-698edd4dcb12575885256856": {
    "slug": "All-Course-Access-Pass-698edd4dcb12575885256856",
    "title": "All-Course Access Yearly pass",
    "description": "Learn how to create beautiful products from home. This step-by-step all-course access yearly pass is designed for absolute beginners to build confidence and creativity.",
    "price": 1999,
    "discountPrice": 1999,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/698edd4dcb12575885256856/698edd4dcb12575885256856_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "All-697723333e29496b34bb8869": {
    "slug": "All-697723333e29496b34bb8869",
    "title": "All-Course Access Pass Monthly",
    "description": "Learn how to create beautiful products from home. This step-by-step all-course access pass monthly is designed for absolute beginners to build confidence and creativity.",
    "price": 450,
    "discountPrice": 450,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/697723333e29496b34bb8869/697723333e29496b34bb8869_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "5-Days-Basic-Makeup-Masterclass-692ed34f72249d2d15f03ef8": {
    "slug": "5-Days-Basic-Makeup-Masterclass-692ed34f72249d2d15f03ef8",
    "title": "5 Days Basic Makeup Masterclass",
    "description": "Learn how to create beautiful products from home. This step-by-step 5 days basic makeup masterclass is designed for absolute beginners to build confidence and creativity.",
    "price": 675,
    "discountPrice": 375,
    "courseType": "Pre -Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/692ed34f72249d2d15f03ef8/692ed34f72249d2d15f03ef8_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Special-Baking-Combo-15-days-Course-68d0ed17481c8f1fe91cb58e": {
    "slug": "Special-Baking-Combo-15-days-Course-68d0ed17481c8f1fe91cb58e",
    "title": "Special Baking Combo-15 days Course",
    "description": "Learn how to create beautiful products from home. This step-by-step special baking combo-15 days course is designed for absolute beginners to build confidence and creativity.",
    "price": 1500,
    "discountPrice": 975,
    "courseType": "Pre -Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/68d0ed17481c8f1fe91cb58e/68d0ed17481c8f1fe91cb58e_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Diwali-Special-Macrame-Art-68c5348aaccd78420b51f974": {
    "slug": "Diwali-Special-Macrame-Art-68c5348aaccd78420b51f974",
    "title": "Diwali Special Macrame Art",
    "description": "Learn how to create beautiful products from home. This step-by-step diwali special macrame art is designed for absolute beginners to build confidence and creativity.",
    "price": 899,
    "discountPrice": 595,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/68c5348aaccd78420b51f974/68c5348aaccd78420b51f974_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Basic-To-Advanced-Silicon-Mould-Making-Masterclass-68c532a5d05d84082f5d1ee5": {
    "slug": "Basic-To-Advanced-Silicon-Mould-Making-Masterclass-68c532a5d05d84082f5d1ee5",
    "title": "Basic To Advanced Silicon Mould Making Masterclass",
    "description": "Learn how to create beautiful products from home. This step-by-step basic to advanced silicon mould making masterclass is designed for absolute beginners to build confidence and creativity.",
    "price": 999,
    "discountPrice": 295,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/68c532a5d05d84082f5d1ee5/68c532a5d05d84082f5d1ee5_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "DIY-Workshop--05-Days-Course--68511b2a5717044f1bf37784": {
    "slug": "DIY-Workshop--05-Days-Course--68511b2a5717044f1bf37784",
    "title": "DIY Workshop ( 05 Days Course )",
    "description": "Learn how to create beautiful products from home. This step-by-step diy workshop ( 05 days course ) is designed for absolute beginners to build confidence and creativity.",
    "price": 999,
    "discountPrice": 499,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/68511b2a5717044f1bf37784/68511b2a5717044f1bf37784_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Alcohol-Ink-Art-Workshop--04-days-course--685119c3af1d113a686abc4b": {
    "slug": "Alcohol-Ink-Art-Workshop--04-days-course--685119c3af1d113a686abc4b",
    "title": "Alcohol Ink Art Workshop ( 04 days course )",
    "description": "Learn how to create beautiful products from home. This step-by-step alcohol ink art workshop ( 04 days course ) is designed for absolute beginners to build confidence and creativity.",
    "price": 999,
    "discountPrice": 475,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/685119c3af1d113a686abc4b/685119c3af1d113a686abc4b_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Concrete-Art-Masterclass---Beginners-6843a0bbee5dab24df234daa": {
    "slug": "Concrete-Art-Masterclass---Beginners-6843a0bbee5dab24df234daa",
    "title": "Concrete Art Masterclass - Beginners",
    "description": "Learn how to create beautiful products from home. This step-by-step concrete art masterclass - beginners is designed for absolute beginners to build confidence and creativity.",
    "price": 599,
    "discountPrice": 299,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/6843a0bbee5dab24df234daa/6843a0bbee5dab24df234daa_scaled_cover.jpg?v=2",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Basic-Sculpture-Art-Masterclass-684321651853fe2305c38264": {
    "slug": "Basic-Sculpture-Art-Masterclass-684321651853fe2305c38264",
    "title": "Basic Sculpture Art Masterclass",
    "description": "Learn how to create beautiful products from home. This step-by-step basic sculpture art masterclass is designed for absolute beginners to build confidence and creativity.",
    "price": 999,
    "discountPrice": 681,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/684321651853fe2305c38264/684321651853fe2305c38264_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Art-And-Craft-All-Courses-682d8520f199e12637879135": {
    "slug": "Art-And-Craft-All-Courses-682d8520f199e12637879135",
    "title": "Art And Craft All Courses - Basic",
    "description": "Learn how to create beautiful products from home. This step-by-step art and craft all courses - basic is designed for absolute beginners to build confidence and creativity.",
    "price": 1700,
    "discountPrice": 1299,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/682d8520f199e12637879135/682d8520f199e12637879135_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Basic-to-Advanced-Candle-Making-Masterclass-680785aa2b0fe87922524e6a": {
    "slug": "Basic-to-Advanced-Candle-Making-Masterclass-680785aa2b0fe87922524e6a",
    "title": "Basic to Advanced Candle Making Masterclass",
    "description": "Learn how to create beautiful products from home. This step-by-step basic to advanced candle making masterclass is designed for absolute beginners to build confidence and creativity.",
    "price": 1775,
    "discountPrice": 1675,
    "courseType": "Pre -Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/680785aa2b0fe87922524e6a/680785aa2b0fe87922524e6a_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Basic-to-Advanced-Texture-Art-Workshop-6806266b7f970c785d7c1560": {
    "slug": "Basic-to-Advanced-Texture-Art-Workshop-6806266b7f970c785d7c1560",
    "title": "Basic to Advanced Texture Art Workshop",
    "description": "Learn how to create beautiful products from home. This step-by-step basic to advanced texture art workshop is designed for absolute beginners to build confidence and creativity.",
    "price": 1700,
    "discountPrice": 1475,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/6806266b7f970c785d7c1560/6806266b7f970c785d7c1560_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Become-A-Professional-Resin-Artist-680605aed138a26261523540": {
    "slug": "Become-A-Professional-Resin-Artist-680605aed138a26261523540",
    "title": "Become A Professional Resin Artist",
    "description": "Learn how to create beautiful products from home. This step-by-step become a professional resin artist is designed for absolute beginners to build confidence and creativity.",
    "price": 2475,
    "discountPrice": 2475,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/680605aed138a26261523540/680605aed138a26261523540_scaled_cover.jpg?v=1",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Silicon-Mould-Making-for-making-candles-or-resin-680211e3000e7c014071987d": {
    "slug": "Silicon-Mould-Making-for-making-candles-or-resin-680211e3000e7c014071987d",
    "title": "Silicon Mould Making for making candles or resin",
    "description": "Learn how to create beautiful products from home. This step-by-step silicon mould making for making candles or resin is designed for absolute beginners to build confidence and creativity.",
    "price": 399,
    "discountPrice": 199,
    "courseType": "Pre -Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/680211e3000e7c014071987d/680211e3000e7c014071987d_scaled_cover.jpg?v=2",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Basic-to-Advanced-Texture-Art-workshop-67e13bc8a8938f53ab8a8806": {
    "slug": "Basic-to-Advanced-Texture-Art-workshop-67e13bc8a8938f53ab8a8806",
    "title": "Basic to Advanced Texture Art workshop",
    "description": "Learn how to create beautiful products from home. This step-by-step basic to advanced texture art workshop is designed for absolute beginners to build confidence and creativity.",
    "price": 1775,
    "discountPrice": 1475,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/67e13bc8a8938f53ab8a8806/67e13bc8a8938f53ab8a8806_scaled_cover.jpg?v=2",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Textur-67e135e374b82262b21f408f": {
    "slug": "Textur-67e135e374b82262b21f408f",
    "title": "Basic Texture Art Masterclass",
    "description": "Learn how to create beautiful products from home. This step-by-step basic texture art masterclass is designed for absolute beginners to build confidence and creativity.",
    "price": 598,
    "discountPrice": 589,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/67e135e374b82262b21f408f/67e135e374b82262b21f408f_scaled_cover.jpg?v=2",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Basic-Candle-Making-Masterclass-67e12ec9a8938f53ab8a7f53": {
    "slug": "Basic-Candle-Making-Masterclass-67e12ec9a8938f53ab8a7f53",
    "title": "Basic Candle Making Masterclass",
    "description": "Learn how to create beautiful products from home. This step-by-step basic candle making masterclass is designed for absolute beginners to build confidence and creativity.",
    "price": 690,
    "discountPrice": 681,
    "courseType": "Pre -Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/67e12ec9a8938f53ab8a7f53/67e12ec9a8938f53ab8a7f53_scaled_cover.jpg?v=2",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Basic-Resin-Art-Masterclass-1741003997011-67c59cdd41b8c1642f05ba5e": {
    "slug": "Basic-Resin-Art-Masterclass-1741003997011-67c59cdd41b8c1642f05ba5e",
    "title": "Basic Resin Art Masterclass",
    "description": "Learn how to create beautiful products from home. This step-by-step basic resin art masterclass is designed for absolute beginners to build confidence and creativity.",
    "price": 999,
    "discountPrice": 413,
    "courseType": "Pre -Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/67c59cdd41b8c1642f05ba5e/67c59cdd41b8c1642f05ba5e_scaled_cover.jpg?v=2",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  },
  "Basic-Resin-Art-Masterclass-67c1aca82ab5fd627705918b": {
    "slug": "Basic-Resin-Art-Masterclass-67c1aca82ab5fd627705918b",
    "title": "Basic - Resin Art Masterclass",
    "description": "Learn how to create beautiful products from home. This step-by-step basic - resin art masterclass is designed for absolute beginners to build confidence and creativity.",
    "price": 592,
    "discountPrice": 450,
    "courseType": "Recorded Session",
    "category": "Creative Course",
    "thumbnailImage": "https://d502jbuhuh9wk.cloudfront.net/courses/67c1aca82ab5fd627705918b/67c1aca82ab5fd627705918b_scaled_cover.jpg?v=2",
    "instructor": "Pankhuri Expert",
    "platform": "Acadma",
    "durationDays": 5
  }
};
