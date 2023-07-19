import React from 'react';

export const metadata = {
  title: 'Website Development | Instant Design Studio',
  description: 'Instant Design is a full-service digital solutions agency specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.',
};

const WebsiteDevelopmentLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default WebsiteDevelopmentLayout;
