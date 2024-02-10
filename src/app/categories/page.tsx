import CategoriesListWrapper from '@/components/categories/CategoriesListWrapper';
import CategoryCard from '@/components/categories/CategoryCard';
import Header from '@/components/categories/Header';
import SectionHeading from '@/components/home/section-heading/SectionHeading';
import { getAllCategories } from '@/services/category.api';
import { HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react';

const Categories = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['categories'],
    queryFn: () => getAllCategories({ limit: 17, page: 1 }),
  });

  return (
    <section className='w-full max-w-full flex min-h-screen flex-col items-center justify-start ms-24 max-tablet:ms-0 max-tablet:px-4 px-2 py-4 overflow-x-hidden'>
      <SectionHeading title='categories' href={'#'} className='px-3' />
      <HydrationBoundary>
        <CategoriesListWrapper />
      </HydrationBoundary>
    </section>
  );
};

export default Categories;
