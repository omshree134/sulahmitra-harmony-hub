
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="glass-card rounded-lg p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
      <div className="w-12 h-12 rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
