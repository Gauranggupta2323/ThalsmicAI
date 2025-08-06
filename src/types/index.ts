export type UserRole = 'patient' | 'donor' | 'provider' | 'admin';

export interface User {
  uid: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  location: {
    city: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  profilePhotoUrl: string;
  languagePreference: string;
}

export interface Patient extends User {
  bloodType: string;
  transfusionHistory: {
    date: Date;
    hospital: string;
    notes: string;
  }[];
  medicalDocs: { name: string; url: string }[];
  assignedDoctorId: string;
  notifications: string[];
}

export interface Donor extends User {
  bloodType: string;
  lastDonationDate: Date | null;
  donationEligibility: boolean;
  donationHistory: {
    date: Date;
    location: string;
  }[];
  badges: string[];
}

export interface Provider extends User {
  specialization: string;
  hospital: string;
  patientList: string[]; // array of patient uids
}

export interface BloodRequest {
  id: string;
  patientId: string;
  bloodType: string;
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'matched' | 'completed' | 'cancelled';
  matchedDonorId: string | null;
  requestedAt: Date;
  completedAt: Date | null;
}
