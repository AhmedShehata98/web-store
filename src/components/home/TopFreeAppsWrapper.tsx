'use client';

import ItemCard from '../item-card/horizental/ItemCard';
import { useQuery } from '@tanstack/react-query';
import { getAllApplications } from '@/services/app.api';
import { ROUTES_LIST } from '@/common/routes';
import SkeletonHCard from '../item-card/horizental/SkeletonHCard';

const TopFreeAppsWrapper = () => {
  const {
    data: appsList,
    isFetched: isFetchedAppsList,
    isLoading: isLoadingAppsList,
  } = useQuery({
    queryKey: ['applications'],
    queryFn: ({ signal }) => getAllApplications({ signal, limit: 4, page: 1 }),
  });

  return (
    <div className='w-full flex items-start justify-start gap-2 mb-8'>
      <ul className='w-full grid sm:grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5'>
        {!isLoadingAppsList &&
          isFetchedAppsList &&
          appsList &&
          appsList.application.map((app) => (
            <ItemCard
              key={app._id}
              href={{
                pathname: `${ROUTES_LIST.appDetails}/${app._id}`,
                query: {
                  app: app.title,
                },
              }}
              item={app}
            />
          ))}
        {isLoadingAppsList && [1, 2, 3, 4].map((app) => <SkeletonHCard key={app} />)}
      </ul>
    </div>
  );
};

export default TopFreeAppsWrapper;
