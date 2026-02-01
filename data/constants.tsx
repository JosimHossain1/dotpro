import { FAQItem, Feature, PricingPlan, Testimonial } from '@/types/type';
import { Code, Eye } from 'lucide-react';


export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Semantic Architecture',
    description: 'Master the hierarchy of HTML5 to ensure search engines and screen readers parse your intent with 100% accuracy.',
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: '2',
    title: 'WCAG 2.2 Implementation',
    description: 'Beyond alt text. Learn a precise protocol for focus management, keyboard traps, and complex ARIA patterns.',
    icon: <Eye className="w-6 h-6" />,
  },
  {
    id: '3',
    title: 'Core Web Vitals',
    description: 'Optimize for LCP, INP, and CLS. A technical roadmap for performance that satisfies both users and Google bots.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Thorne',
    role: 'Senior Frontend Engineer',
    company: 'Stripe',
    content: "This book bridge the gap between 'making it work' and 'making it accessible.' Our Lighthouse scores are permanently green.",
    avatar: 'https://i.pravatar.cc/150?u=marcus',
  },
  {
    id: 't2',
    name: 'Sarah Lee',
    role: 'SEO Director',
    company: 'Airbnb',
    content: "Developers finally have a manual they respect. The semantic strategies alone increased our organic crawl depth by 40%.",
    avatar: 'https://i.pravatar.cc/150?u=sarahlee',
  },
  {
    id: 't3',
    name: 'Julian Pierce',
    role: 'A11y Lead',
    company: 'Microsoft',
    content: 'The ARIA patterns described here should be industry standard. It’s technical, precise, and immediately actionable.',
    avatar: 'https://i.pravatar.cc/150?u=julianp',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Is this guide for beginners or experts?',
    answer: 'It is designed specifically for developers who already know HTML/CSS but want to master the deeper technical layers of SEO and accessibility.',
  },
  {
    question: 'Does it cover modern frameworks like React and Next.js?',
    answer: 'Yes. We include specific patterns for Next.js metadata, React focus management, and hydration-friendly accessibility.',
  },
  {
    question: 'Are there code samples included?',
    answer: 'Every concept includes a technical implementation in clean, semantic HTML and TypeScript-ready ARIA patterns.',
  },
];

export const PRICING: PricingPlan[] = [
  {
    name: 'The Architect',
    price: '$49',
    description: 'The complete guide to SEO and Accessibility.',
    features: [
      'The Semantic Architect eBook',
      'WCAG 2.2 Audit Checklist',
      'Core Web Vitals Roadmap',
      'Code Snippet Library'
    ],
  },
];

// Assets data for TheArtifacts component
 export const assets = [
    {
      title: "The Semantic Manual",
      format: "PDF / EPUB",
      detail: "Complete technical guide from basic landmarks to advanced ARIA-live implementations.",
      icon: "01"
    },
    {
      title: "Audit Checklist",
      format: "EXCEL / NOTION",
      detail: "A 120-point rigorous checklist to ensure every deployment is search and user ready.",
      icon: "02"
    },
    {
      title: "Pattern Library",
      format: "CODE REPO",
      detail: "Ready-to-use semantic components for React, Vue, and Vanilla JS.",
      icon: "03"
    }
  ];