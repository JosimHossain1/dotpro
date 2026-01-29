import { PricingPlan } from "@/types/type";

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
