import AppDetails from '@/components/product-details/AppDetails';
import { getApplicationById } from '@/services/app.api';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import React from 'react';

const CategoryApplicationDetails = async ({
  params,
}: {
  params: { appId: string; categoryId: string };
  searchParams: string;
}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['application-details'],
    queryFn: () => getApplicationById(params.appId),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AppDetails />
    </HydrationBoundary>
  );
};

export default CategoryApplicationDetails;
