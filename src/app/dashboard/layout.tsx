'use client';

import Link from "next/link"
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  Users,
  HeartPulse,
  Droplets,
  Stethoscope
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/logo"
import { Suspense } from "react"
import { UserRole } from "@/types"
import { useSearchParams } from "next/navigation"

function DashboardNav() {
    const searchParams = useSearchParams();
    const role = searchParams.get('role') as UserRole || 'patient';
    
    const navItems = [
        { href: `/dashboard?role=${role}`, icon: Home, label: "Dashboard" },
        ...(role === 'patient' ? [{ href: "#", icon: HeartPulse, label: "My Health" }] : []),
        ...(role === 'donor' ? [{ href: "#", icon: Droplets, label: "My Donations" }] : []),
        ...(role === 'provider' ? [{ href: "#", icon: Users, label: "My Patients" }] : []),
        { href: "#", icon: Settings, label: "Settings" },
    ];

    return (
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
            ))}
        </nav>
    );
}


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense>
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Logo />
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <DashboardNav />
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Contact support for any questions or issues.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Package2 className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                    <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                    >
                    <Logo />
                    </Link>
                    <DashboardNav />
                </nav>
                <div className="mt-auto">
                    <Card>
                    <CardHeader>
                        <CardTitle>Need Help?</CardTitle>
                        <CardDescription>
                            Contact support for any questions or issues.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button size="sm" className="w-full">
                        Contact Support
                        </Button>
                    </CardContent>
                    </Card>
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-accent">
            {children}
        </main>
      </div>
    </div>
    </Suspense>
  )
}
