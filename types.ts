
// Add missing React import to provide the React namespace for ReactNode types
import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size?: 'normal' | 'large' | 'tall';
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Advantage {
  title: string;
  description: string;
  icon: React.ReactNode;
}