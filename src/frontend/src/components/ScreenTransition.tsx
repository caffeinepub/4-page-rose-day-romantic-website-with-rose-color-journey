import { ReactNode } from 'react';

interface ScreenTransitionProps {
  children: ReactNode;
}

export default function ScreenTransition({ children }: ScreenTransitionProps) {
  return (
    <div className="screen-transition">
      {children}
    </div>
  );
}
