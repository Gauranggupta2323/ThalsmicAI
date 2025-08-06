import { Suspense } from 'react';
import LoginForm from '@/components/auth/login-form';
import Logo from '@/components/logo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function LoginContent() {
  return <LoginForm />;
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader className="space-y-2 text-center">
            <div className="inline-block mx-auto">
                <Logo />
            </div>
          <CardTitle className="text-2xl font-bold font-headline">
            <Suspense fallback={'Login'}>
                <LoginTitle />
            </Suspense>
          </CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginContent />
        </CardContent>
      </Card>
    </Suspense>
  );
}

// Separate component to use useSearchParams
import { useSearchParams } from 'next/navigation';

function LoginTitle() {
    const searchParams = useSearchParams();
    const role = searchParams.get('role') || 'user';
    return <>Login as a {role.charAt(0).toUpperCase() + role.slice(1)}</>;
}
