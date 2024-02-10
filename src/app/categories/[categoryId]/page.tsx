import { getApplicationsByCategory } from '@/services/app.api';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import React from 'react';
import ApplicationsList from '@/components/categories/ApplicationsList';

const ApplicationsByCategory = async ({ params }: { params: { categoryId: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['categories', params.categoryId],
    queryFn: () => getApplicationsByCategory({ categoryId: params.categoryId, limit: 16, page: 1 }),
  });
  return (
    <section className='w-full max-w-full flex min-h-screen flex-col items-center justify-start ms-24 max-tablet:ms-0 max-tablet:px-4 px-2 py-4 overflow-x-hidden'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ApplicationsList />
      </HydrationBoundary>
    </section>
  );
};

export default ApplicationsByCategory;
