import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Hero from '../../components/homepage/Hero';
import Categories from '../../components/homepage/Categories';

function Homepage() {
  return (
    <PageLayout>
      <Hero />
      <Categories />
    </PageLayout>
  );
}

export default Homepage;
