export interface PortalLink {
  title: string;
  url: string;
  description: string;
  iconName: string;
  badgeText?: string;
  accentColor: string;
}

export interface Pledge {
  id: number;
  title: string;
  subtitle: string;
  details: string[];
  iconName: string;
  colorClass: string;
}

export interface CareerItem {
  type: 'current' | 'past';
  text: string;
}

export interface CheerMessage {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  emoji: string;
}
