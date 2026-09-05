import { useEffect, useRef, useState, type ReactNode } from 'react';

type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'blur';

const variantClasses: Record<AnimationVariant, string> = {
  'fade-up': 'opacity-0 translate-y-12',
  'fade-down': 'opacity-0 -translate-y-12',
  'fade-left': 'opacity-0 translate-x-12',
  'fade-right': 'opacity-0 -translate-x-12',
  'scale': 'opacity-0 scale-95',
  'blur': 'opacity-0 blur-md',
};

const visibleClass = 'opacity-100 translate-x-0 translate-y-0 scale-100 blur-0';

interface RevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 600,
  className = '',
  once = true,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${visible ? visibleClass : variantClasses[variant]} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
}

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
