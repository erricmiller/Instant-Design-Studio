'use client'
import '@/styles/globals.css';
import { Poppins } from 'next/font/google';

import { TrpcProvider } from '@/utils/trpc-provider';
import { cn } from '@/utils/utils';

import ContactDialog from '@/components/ContactDialog';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TakeOurWordsCTA from '@/components/TakeOurWordsCTA';
import { Toaster } from '@/components/ui/Toaster';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Instant Design Studio',
  description: 'Instant Design is a full-service digital solutions agency specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     
    <html lang="en" className={cn('mx-auto max-w-[1920px]', poppins.className)}>
      <body cz-shortcut-listen="true" className="relative mx-auto min-h-screen pt-[99px]">
      <TrpcProvider>
        <ContactDialog />
        <Navbar />
              {children}
        {/* <ClientProvider session={undefined}>{children}</ClientProvider> */}
        {/* Take Our Word for It */}
        <TakeOurWordsCTA />
        <Footer />
        <Toaster />
        </TrpcProvider>
      </body>
    </html>
     
  );
}
