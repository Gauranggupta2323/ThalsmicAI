'use client';

import type { Provider } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { getMockPatientList } from "@/lib/mock-data";

type PatientInList = {
    id: string;
    name: string;
    bloodType: string;
    lastVisit: Date;
}

export default function ProviderView({ provider }: { provider: Provider }) {
    const [patientList, setPatientList] = useState<PatientInList[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMockPatientList(provider.uid).then(data => {
            setPatientList(data);
            setLoading(false);
        });
    }, [provider.uid]);

  return (
    <div className="grid gap-6">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Patient List</CardTitle>
                    <CardDescription>Manage your assigned patients.</CardDescription>
                </div>
                 <Button size="sm" className="gap-1">
                    <PlusCircle className="h-4 w-4" />
                    Add Patient
                </Button>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Patient</TableHead>
                        <TableHead>Blood Type</TableHead>
                        <TableHead>Last Visit</TableHead>
                        <TableHead>
                            <span className="sr-only">Actions</span>
                        </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                             Array.from({ length: 3 }).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="h-4 bg-muted rounded w-1/2 animate-pulse"></div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="h-8 bg-muted rounded w-8 animate-pulse"></div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            patientList.map(patient => (
                                <TableRow key={patient.id}>
                                    <TableCell className="font-medium">{patient.name}</TableCell>
                                    <TableCell>{patient.bloodType}</TableCell>
                                    <TableCell>{patient.lastVisit.toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
