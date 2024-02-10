'use client';
import AdditionalInformation from '@/components/product-details/AdditionalInformation';
import AppDescription from '@/components/product-details/AppDescription';
import AppScreenshots from '@/components/product-details/AppScreenshots';
import ApplicationPreview from '@/components/product-details/ApplicationPreview';
import OtherApps from '@/components/product-details/OtherApps';
import ReviewAndRating from '@/components/product-details/ReviewAndRating';
import { getApplicationById } from '@/services/app.api';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

const AppDetails = () => {
  const pathname = usePathname();
  const appId = pathname.split('/').pop();
  const { data: appDetails, isLoading } = useQuery({
    queryKey: ['application-details', appId],
    queryFn: () => getApplicationById(appId as string),
  });

  return (
    <article className='w-full max-w-full flex gap-5 lg:h-full lg:min-h-full max-lg:flex-col items-start justify-start ms-24 max-tablet:ms-0 max-lg:px-4 px-2 py-4 overflow-hidden'>
      <ApplicationPreview
        thumbnail={appDetails?.thumbnail as string}
        name={appDetails?.title as string}
        developer={appDetails?.developer as UserType}
        rating={3.6}
        repoUrl={appDetails?.repoUrl as string}
        demoUrl={appDetails?.demoUrl as string}
        ratingCount={63}
        category={appDetails?.category.name as string}
        isLoading={isLoading}
      />
      <div className='w-2/3 max-lg:w-full max-lg:min-h-full lg:max-h-full overflow-y-auto flex flex-col items-start justify-start'>
        <AppScreenshots imagesList={appDetails?.images || []} isLoading={isLoading} />
        <AppDescription description={appDetails?.description as string} isLoading={isLoading} />
        <AdditionalInformation
          data={{
            publishBy: appDetails?.developer.fullName as string,
            category: appDetails?.category.name as string,
            releaseDate: appDetails?.createdAt as string,
            publisherInfo: {
              github: appDetails?.developer.githubProfileUrl || '#',
              linkedIn: appDetails?.developer.linkedinProfileUrl || '#',
            },
            technologiesAndLibraries: appDetails?.usedTechnologies || [],
          }}
          isLoading={isLoading}
        />
        <ReviewAndRating />
        <OtherApps />
      </div>
    </article>
  );
};

export default AppDetails;
