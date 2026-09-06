import { useLocation } from 'react-router-dom';

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="animate-page-in">
      {children}
    </div>
  );
}
