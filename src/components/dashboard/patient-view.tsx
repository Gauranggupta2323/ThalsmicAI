'use client';

import type { Patient } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Calendar } from "lucide-react";

export default function PatientView({ patient }: { patient: Patient }) {
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
                            <AvatarImage src={patient.profilePhotoUrl} alt={patient.name} />
                            <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold text-lg">{patient.name}</p>
                            <p className="text-sm text-muted-foreground">{patient.email}</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Blood Type</p>
                        <Badge variant="destructive" className="text-lg">{patient.bloodType}</Badge>
                    </div>
                     <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">{patient.location.city}, {patient.location.state}</p>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Health Records</CardTitle>
                    <CardDescription>Your transfusion history and medical documents.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <h3 className="font-semibold flex items-center gap-2"><Calendar className="h-5 w-5" /> Transfusion History</h3>
                        <div className="border rounded-lg">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Hospital</TableHead>
                                        <TableHead>Notes</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {patient.transfusionHistory.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.date.toLocaleDateString()}</TableCell>
                                            <TableCell>{item.hospital}</TableCell>
                                            <TableCell>{item.notes}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                     <div className="space-y-4 mt-6">
                        <h3 className="font-semibold flex items-center gap-2"><FileText className="h-5 w-5" /> Medical Documents</h3>
                        <div className="border rounded-lg p-4">
                           {patient.medicalDocs.length > 0 ? (
                                <ul>
                                    {patient.medicalDocs.map(doc => (
                                        <li key={doc.name} className="flex items-center justify-between p-2 hover:bg-muted rounded-md">
                                            <a href={doc.url} className="text-primary hover:underline">{doc.name}</a>
                                        </li>
                                    ))}
                                </ul>
                           ) : (
                                <p className="text-muted-foreground text-center">No documents uploaded.</p>
                           )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
