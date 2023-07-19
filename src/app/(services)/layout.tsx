import React from 'react';

import CTAContact from '@/components/CTAContact';
import ComboSec from '@/components/ComboSec';
import Testimonials from '@/components/Testimonials';



const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
      {/* Combo Section */}
      <ComboSec />

      {/* CTA Contact */}
      <CTAContact />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
};

export default ServicesLayout;
