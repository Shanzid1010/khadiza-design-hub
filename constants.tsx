
import React from 'react';
import { 
  Megaphone, 
  Layout, 
  Palette, 
  Image as ImageIcon, 
  Target, 
  Zap, 
  Users 
} from 'lucide-react';
import { Project, Service, Advantage } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Eco-Friendly Brand Identity",
    category: "Brand Design",
    image: "https://picsum.photos/seed/design1/800/600",
    size: "large"
  },
  {
    id: 2,
    title: "Facebook Ads Campaign - Tech",
    category: "Ads Design",
    image: "https://picsum.photos/seed/ads1/800/800",
    size: "tall"
  },
  {
    id: 3,
    title: "Organic Juice Social Media",
    category: "Social Media",
    image: "https://picsum.photos/seed/social1/800/600",
    size: "normal"
  },
  {
    id: 4,
    title: "Minimalist Product Poster",
    category: "Product Design",
    image: "https://picsum.photos/seed/product1/600/800",
    size: "tall"
  },
  {
    id: 5,
    title: "E-commerce Seasonal Sale",
    category: "Banner Design",
    image: "https://picsum.photos/seed/banner1/800/600",
    size: "normal"
  },
  {
    id: 6,
    title: "High-Conversion Ad Set",
    category: "Ads Design",
    image: "https://picsum.photos/seed/ads2/800/600",
    size: "large"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Facebook Ads Creative Design",
    description: "Highly engaging and psychological-driven ad creatives designed to stop the scroll and maximize CTR.",
    icon: <Megaphone className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Social Media Poster Design",
    description: "Visually stunning posts that build brand authority and maintain consistent aesthetic across platforms.",
    icon: <Layout className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Product Design",
    description: "Packaging, digital mockups, and product showcase visuals that highlight unique selling points.",
    icon: <Palette className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "Banner & Cover Design",
    description: "Professional headers for Facebook, LinkedIn, and websites that leave a lasting first impression.",
    icon: <ImageIcon className="w-8 h-8 text-cyan-400" />
  }
];

export const WHY_CHOOSE_ME: Advantage[] = [
  {
    title: "Creative Focused Design",
    description: "We don't just make things look pretty; we make them resonate with your target audience.",
    icon: <Zap className="w-10 h-10 text-yellow-400" />
  },
  {
    title: "Marketing-Oriented Visuals",
    description: "Every pixel is placed with a marketing goal in mind—whether it's leads, sales, or awareness.",
    icon: <Target className="w-10 h-10 text-red-400" />
  },
  {
    title: "Client-Centric Approach",
    description: "Your business goals are my priority. I work closely with you to bring your vision to life.",
    icon: <Users className="w-10 h-10 text-green-400" />
  }
];
