import { ReactNode } from 'react';

interface RomanticLayoutProps {
  children: ReactNode;
  backgroundImage?: string;
  overlayOpacity?: number;
}

export default function RomanticLayout({ 
  children, 
  backgroundImage = '/assets/generated/love-background.dim_1600x900.png',
  overlayOpacity = 0.3
}: RomanticLayoutProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-pink-50/40 to-red-100/50"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Animated Hearts Background */}
      <div className="absolute inset-0 hearts-background" />
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
