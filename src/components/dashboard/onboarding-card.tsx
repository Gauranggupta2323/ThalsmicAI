import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, HeartPulse, Stethoscope, Lightbulb } from "lucide-react";
import { UserRole } from "@/types";

interface OnboardingCardProps {
  title: string;
  message: string;
  role: UserRole;
}

const roleIcons = {
  patient: <HeartPulse className="h-6 w-6 text-primary" />,
  donor: <Droplets className="h-6 w-6 text-primary" />,
  provider: <Stethoscope className="h-6 w-6 text-primary" />,
  admin: <Stethoscope className="h-6 w-6 text-primary" />,
};

export default function OnboardingCard({ title, message, role }: OnboardingCardProps) {
  return (
    <Card className="bg-card shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold font-headline">{title}</CardTitle>
        {roleIcons[role]}
      </CardHeader>
      <CardContent>
        <CardDescription className="flex items-start gap-2 text-base text-foreground">
          <Lightbulb className="h-5 w-5 mt-1 shrink-0 text-yellow-500"/>
          <span>{message}</span>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
