import React from 'react';

export const metadata = {
  title: 'Logo Design | Instant Design Studio',
  description: 'Instant Design is a full-service digital solutions agency specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.',
};

const LogoDesignLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default LogoDesignLayout;
