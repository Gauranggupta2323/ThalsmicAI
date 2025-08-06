import type { Patient, Donor, Provider, UserRole } from "@/types";

export const mockPatient: Patient = {
  uid: 'patient01',
  name: 'Aisha Khan',
  email: 'aisha.khan@example.com',
  phone: '555-0101',
  role: 'patient',
  location: { city: 'Karachi', state: 'Sindh', coordinates: { lat: 24.8607, lng: 67.0011 } },
  profilePhotoUrl: 'https://placehold.co/100x100.png',
  languagePreference: 'en',
  bloodType: 'B+',
  transfusionHistory: [
    { date: new Date('2024-06-15'), hospital: 'City General Hospital', notes: 'Routine transfusion.' },
    { date: new Date('2024-05-30'), hospital: 'City General Hospital', notes: 'Feeling weak prior.' },
    { date: new Date('2024-05-14'), hospital: 'Community Medical Center', notes: 'Emergency transfusion.' },
  ],
  medicalDocs: [{ name: 'latest_cbc.pdf', url: '#' }],
  assignedDoctorId: 'provider01',
  notifications: ['Your next transfusion is scheduled for July 1, 2024.'],
};

export const mockDonor: Donor = {
  uid: 'donor01',
  name: 'Bilal Ahmed',
  email: 'bilal.ahmed@example.com',
  phone: '555-0102',
  role: 'donor',
  location: { city: 'Lahore', state: 'Punjab', coordinates: { lat: 31.5204, lng: 74.3587 } },
  profilePhotoUrl: 'https://placehold.co/100x100.png',
  languagePreference: 'en',
  bloodType: 'O+',
  lastDonationDate: new Date('2024-04-10'),
  donationEligibility: true,
  donationHistory: [
    { date: new Date('2024-04-10'), location: 'Red Crescent Center' },
    { date: new Date('2023-12-05'), location: 'General Hospital Blood Drive' },
  ],
  badges: ['First Donation', 'Life Saver'],
};

export const mockProvider: Provider = {
  uid: 'provider01',
  name: 'Dr. Fatima Zahra',
  email: 'dr.fatima@example.com',
  phone: '555-0103',
  role: 'provider',
  location: { city: 'Islamabad', state: 'ICT', coordinates: { lat: 33.6844, lng: 73.0479 } },
  profilePhotoUrl: 'https://placehold.co/100x100.png',
  languagePreference: 'en',
  specialization: 'Hematology',
  hospital: 'Capital Health Institute',
  patientList: ['patient01', 'patient02', 'patient03'],
};

const mockPatientListForProvider = [
  { id: 'patient01', name: 'Aisha Khan', bloodType: 'B+', lastVisit: new Date('2024-06-20') },
  { id: 'patient02', name: 'Zainab Ali', bloodType: 'A-', lastVisit: new Date('2024-06-18') },
  { id: 'patient03', name: 'Omar Farooq', bloodType: 'O-', lastVisit: new Date('2024-06-17') },
];


export const getMockUserData = async (role: UserRole) => {
  switch (role) {
    case 'patient':
      return mockPatient;
    case 'donor':
      return mockDonor;
    case 'provider':
      return mockProvider;
    default:
      return mockPatient;
  }
};

export const getMockPatientList = async (providerId: string) => {
  // In a real app, you'd fetch this based on the providerId
  return mockPatientListForProvider;
}
