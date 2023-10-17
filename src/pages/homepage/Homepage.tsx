import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Hero from '../../components/homepage/Hero';
import Categories from '../../components/homepage/Categories';
import Products from '../../components/homepage/Products';

function Homepage() {
  return (
    <PageLayout>
      <Hero />
      <Categories />
      <Products />
    </PageLayout>
  );
}

export default Homepage;
