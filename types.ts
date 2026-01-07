
export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  audience: string;
  description: string;
  status: 'Launch Soon' | 'Active' | 'Beta';
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}
