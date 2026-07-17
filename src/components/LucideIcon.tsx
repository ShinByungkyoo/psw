import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

export default function LucideIcon({ name, className = '', size = 24, style }: LucideIconProps) {
  // Safe lookup with type coercion to prevent crashing
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Return a default icon (HelpCircle) if named icon is not found
    const DefaultIcon = Icons.HelpCircle;
    return <DefaultIcon className={className} size={size} style={style} />;
  }

  return <IconComponent className={className} size={size} style={style} />;
}
