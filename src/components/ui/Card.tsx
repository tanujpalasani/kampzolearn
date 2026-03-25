interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = "", children }: CardProps) {
  return (
    <div className={`surface-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgb(15_23_42_/_0.12)] ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }: CardProps) {
  return <div className={`flex flex-col space-y-1.5 p-5 md:p-6 ${className}`}>{children}</div>;
}

export function CardTitle({ className = "", children }: CardProps) {
  // Using typical clean edtech typography
  return <h3 className={`text-xl font-semibold leading-snug tracking-tight text-dark ${className}`}>{children}</h3>;
}

export function CardContent({ className = "", children }: CardProps) {
  return <div className={`p-5 pt-0 md:p-6 md:pt-0 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }: CardProps) {
  return <div className={`flex items-center p-5 pt-0 md:p-6 md:pt-0 ${className}`}>{children}</div>;
}
