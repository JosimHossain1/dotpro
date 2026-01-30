
import React from 'react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface BookDetails {
  title: string;
  subtitle: string;
  author: string;
  price: number;
  originalPrice: number;
  pages: number;
  chapters: number;
  rating: number;
  reviews: number;
}
