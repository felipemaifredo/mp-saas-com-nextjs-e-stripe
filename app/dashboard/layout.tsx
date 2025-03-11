import Navbar from './navbar';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = {
    user: {
      id: "123456",
      name: "John Doe",
      email: "felipemaifredo.dev@gmail.com",
      role: "admin",
    },
    expires: "2025-12-31T23:59:59.999Z",
    authenticated: true,
  }

  const userName = session?.user?.name;

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userName={userName ?? ''} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
