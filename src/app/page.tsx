import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, HeartPulse, Stethoscope } from 'lucide-react';
import Logo from '@/components/logo';

export default function Home() {
  const roles = [
    {
      name: 'Patient',
      description: 'Find donors, manage your health, and connect with providers.',
      icon: <HeartPulse className="w-12 h-12 text-primary" />,
      link: '/login?role=patient',
    },
    {
      name: 'Donor',
      description: 'Save lives by donating blood to those in need.',
      icon: <Droplets className="w-12 h-12 text-primary" />,
      link: '/login?role=donor',
    },
    {
      name: 'Provider',
      description: 'Manage your patients and coordinate care seamlessly.',
      icon: <Stethoscope className="w-12 h-12 text-primary" />,
      link: '/login?role=provider',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-card shadow-sm">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Logo />
          <span className="sr-only">ThalAI Bridge Lite</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-accent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-accent-foreground">
                  Welcome to ThalAI Bridge Lite
                </h1>
                <p className="mx-auto max-w-[700px] text-accent-foreground/80 md:text-xl">
                  Connecting Thalassemia patients, blood donors, and healthcare providers for a healthier tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="role-selection" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Choose Your Role</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Select your role to get started. Are you a patient, a donor, or a healthcare provider?
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
              {roles.map((role) => (
                <Link href={role.link} key={role.name} className="h-full">
                  <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                    <CardHeader className="items-center">
                      {role.icon}
                      <CardTitle className="mt-4">{role.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <CardDescription>{role.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 ThalAI Bridge Lite. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
