import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { LogoutButton } from './auth/logout-button';
import './globals.css';

export const metadata = {
  title: 'Skill Challenge App',
  description: 'The fastest way to test and improve your skills',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <Link href="/" className="font-bold">Home</Link>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}
                <LogoutButton />
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
              </div>
            )}
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}