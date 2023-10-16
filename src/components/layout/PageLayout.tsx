import React from 'react';
import Navbar from '../navbar/Navbar';

export interface LayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default PageLayout;
