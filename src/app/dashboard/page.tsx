import { Suspense } from 'react';
import { getPersonalizedOnboarding } from '@/ai/flows/personalized-onboarding';
import { getMockUserData } from '@/lib/mock-data';
import type { UserRole, Patient, Donor, Provider } from '@/types';
import OnboardingCard from '@/components/dashboard/onboarding-card';
import PatientView from '@/components/dashboard/patient-view';
import DonorView from '@/components/dashboard/donor-view';
import ProviderView from '@/components/dashboard/provider-view';
import { Skeleton } from '@/components/ui/skeleton';

async function DashboardContent({ role }: { role: UserRole }) {
  const [onboardingData, userData] = await Promise.all([
    getPersonalizedOnboarding({ role }),
    getMockUserData(role),
  ]);

  const renderRoleView = () => {
    switch (role) {
      case 'patient':
        return <PatientView patient={userData as Patient} />;
      case 'donor':
        return <DonorView donor={userData as Donor} />;
      case 'provider':
        return <ProviderView provider={userData as Provider} />;
      default:
        return <p>Invalid role selected.</p>;
    }
  };

  return (
    <div className="space-y-6">
      <OnboardingCard
        title={`Welcome, ${userData.name}!`}
        message={onboardingData.onboardingMessage}
        role={role}
      />
      {renderRoleView()}
    </div>
  );
}

function DashboardSkeleton() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                </CardContent>
            </Card>
            <Card>
                 <CardHeader>
                    <Skeleton className="h-8 w-1/2" />
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-40 w-full" />
                </CardContent>
            </Card>
        </div>
    )
}

export default function DashboardPage({
  searchParams,
}: {
  searchParams: { role?: UserRole };
}) {
  const role = searchParams.role || 'patient';

  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent role={role} />
    </Suspense>
  );
}
