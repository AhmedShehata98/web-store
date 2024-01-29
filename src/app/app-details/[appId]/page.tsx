import AppDetails from '@/components/product-details/AppDetails';
import { getApplicationById } from '@/services/app.api';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import React from 'react';

const AppDetailsPage = async ({ params }: { params: { appId: string } }) => {
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

export default AppDetailsPage;
