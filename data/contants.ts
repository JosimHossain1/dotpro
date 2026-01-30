import { BookDetails, FAQItem, Feature, PricingPlan, Testimonial } from "@/types/type"

export const BOOK_INFO: BookDetails = {
  title: "The Unseen Architecture",
  subtitle: "Designing a Life of Radical Intent and Timeless Purpose",
  author: "Dr. Julian Sterling",
  price: 24.99,
  originalPrice: 45.00,
  pages: 342,
  chapters: 12,
  rating: 4.9,
  reviews: 1284,
};


export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Cognitive Science Based',
    description: 'Strategies rooted in neurobiology to help you enter flow state faster and stay there longer.',
    icon : ""
  },
  {
    id: '2',
    title: 'Distraction Immunity',
    description: 'A step-by-step system to audit your environment and silence the digital noise of the 21st century.',
    icon: ""
  },
  {
    id: '3',
    title: 'Deep Scheduling',
    description: 'Learn how to architect your day using time-blocking techniques used by the world\'s top performers.',
    icon: ""
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Senior Software Engineer',
    company: 'Linear',
    content: "This book completely transformed how I approach my deep work blocks. I've doubled my output while working fewer hours.",
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Founder',
    company: 'Stellar Flow',
    content: 'Simple, actionable, and profound. The Deep Work Blueprint is the antidote to modern digital burnout.',
    avatar: 'https://picsum.photos/seed/david/100/100',
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Creative Director',
    company: 'DesignLabs',
    content: 'Finally, a productivity guide that focuses on quality of thought rather than just quantity of tasks.',
    avatar: 'https://picsum.photos/seed/elena/100/100',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Is this eBook suitable for beginners?',
    answer: 'Absolutely. Whether you are a student, a creative, or a corporate professional, the principles of deep work are universal and explained from the ground up.',
  },
  {
    question: 'What format does the eBook come in?',
    answer: 'You will receive PDF, ePub, and Mobi versions, ensuring you can read it on any device including Kindle, iPad, or your phone.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, if you don\'t find the strategies helpful within 30 days, just email us for a full, no-questions-asked refund.',
  },
];

export const PRICING: PricingPlan[] = [
  {
    name: 'The Essential',
    price: '$29',
    description: 'Perfect for individuals starting their focus journey.',
    features: [
      'Digital eBook (PDF, ePub, Mobi)',
      '10-Step Focus Audit Worksheet',
      'Lifetime Updates',
      'Deep Work Habit Tracker'
    ],
  },
  {
    name: 'The Professional',
    price: '$49',
    description: 'Our most popular choice for high achievers.',
    features: [
      'Everything in Essential',
      'Video Masterclass (2 Hours)',
      'Exclusive Community Access',
      'Bonus: The Burnout Recovery Guide',
      'Resource Library Access'
    ],
    isPopular: true,
  },
];
