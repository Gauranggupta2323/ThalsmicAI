'use client';

import type { Donor } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Star } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export default function DonorView({ donor }: { donor: Donor }) {
    const [date, setDate] = useState<Date | undefined>(donor.lastDonationDate || undefined);
    const { toast } = useToast();

    const handleDateUpdate = () => {
        toast({
            title: "Date Updated",
            description: `Your last donation date has been set to ${date ? format(date, "PPP") : ''}.`,
        });
    }

  return (
    <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>My Profile</CardTitle>
                    <CardDescription>Your personal information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={donor.profilePhotoUrl} alt={donor.name} />
                            <AvatarFallback>{donor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold text-lg">{donor.name}</p>
                            <p className="text-sm text-muted-foreground">{donor.email}</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Blood Type</p>
                        <Badge variant="destructive" className="text-lg">{donor.bloodType}</Badge>
                    </div>
                     <div>
                        <p className="font-semibold">Eligibility</p>
                        <Badge variant={donor.donationEligibility ? "default" : "secondary"} className={cn(donor.donationEligibility ? 'bg-green-500' : 'bg-slate-500', 'text-white')}>
                            {donor.donationEligibility ? "Eligible" : "Not Eligible"}
                        </Badge>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>My Badges</CardTitle>
                </CardHeader>
                 <CardContent className="flex flex-wrap gap-2">
                    {donor.badges.map(badge => (
                        <Badge key={badge} variant="secondary" className="text-sm">
                            <Star className="h-4 w-4 mr-1 text-yellow-500" />
                            {badge}
                        </Badge>
                    ))}
                 </CardContent>
            </Card>
        </div>

        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Donation Information</CardTitle>
                    <CardDescription>Update your last donation date and view history.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="font-semibold mb-2">Update Last Donation Date</h3>
                         <Popover>
                            <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <Button className="mt-2 w-full" onClick={handleDateUpdate} disabled={!date}>Update Date</Button>
                    </div>
                     <div>
                        <h3 className="font-semibold mb-2">Donation History</h3>
                        <ul className="space-y-2">
                            {donor.donationHistory.map((item, index) => (
                                <li key={index} className="flex justify-between items-center p-2 border rounded-md">
                                    <span>{item.date.toLocaleDateString()}</span>
                                    <span className="text-muted-foreground">{item.location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
