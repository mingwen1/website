
// Added React import to define the React namespace for React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface PillarItem {
  title: string;
  subtitle?: string;
  description: string;
  outcomes?: string[];
  icon?: React.ReactNode;
}

export interface ValueItem {
  title: string;
  description: string;
  image: string;
}