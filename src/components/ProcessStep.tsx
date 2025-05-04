
import { ReactNode } from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="flex gap-6">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sulah-600 to-accent flex items-center justify-center text-white font-semibold">
          {number}
        </div>
        {number < 5 && <div className="absolute top-12 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%-3rem)] bg-border"></div>}
      </div>
      
      <div className="flex-1 pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-accent">{icon}</span>
          <h3 className="text-xl font-display font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
