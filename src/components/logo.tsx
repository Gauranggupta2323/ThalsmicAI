import { HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <HeartPulse className="h-6 w-6 text-primary" />
      <span className="font-bold text-lg font-headline">ThalAI Bridge Lite</span>
    </div>
  );
}
