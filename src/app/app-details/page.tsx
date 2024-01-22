import AdditionalInformation from '@/components/product-details/AdditionalInformation';
import AppDescription from '@/components/product-details/AppDescription';
import AppScreenshots from '@/components/product-details/AppScreenshots';
import ApplicationPreview from '@/components/product-details/ApplicationPreview';
import OtherApps from '@/components/product-details/OtherApps';
import ReviewAndRating from '@/components/product-details/ReviewAndRating';
import React from 'react';

const AppDetails = () => {
  return (
    <article className='w-full max-w-full flex gap-5 lg:h-full lg:min-h-full max-lg:flex-col items-start justify-start ms-24 max-tablet:ms-0 max-lg:px-4 px-2 py-4 overflow-hidden'>
      <ApplicationPreview
        thumbnail='https://picsum.photos/128'
        name='app name'
        developer='developer name'
        rating={3.6}
        repoUrl='#'
        demoUrl='#'
        ratingCount={63}
        category='social'
      />
      <div className='w-2/3 max-lg:w-full max-lg:min-h-full lg:max-h-full overflow-y-auto flex flex-col items-start justify-start'>
        <AppScreenshots
          imagesList={[
            'https://picsum.photos/400',
            'https://picsum.photos/401',
            'https://picsum.photos/405',
            'https://picsum.photos/409',
            'https://picsum.photos/403',
          ]}
        />
        <AppDescription
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ullam, dolorum nam quaerat libero doloremque deserunt qui distinctio at Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ullam, dolorum nam quaerat libero doloremque deserunt qui distinctio at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ullam, dolorum nam quaerat libero doloremque deserunt qui distinctio at Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ullam, dolorum nam quaerat libero doloremque deserunt qui distinctio at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ullam ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ullam, dolorum nam quaerat libero doloremque deserunt qui distinctio at Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ullam, dolorum nam quaerat libero doloremque deserunt qui distinctio at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ullam, dolorum nam quaerat libero doloremque deserunt qui distin ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ullam, dolorum nam quaerat libero doloremque deserunt qui distinctio at Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ullam, dolorum nam quaerat libero doloremque deserunt qui distinctio at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam laborum facilis autem ex veritatis facere illum velit repellat cupiditate ullam, dolorum nam quaerat libero doloremque deserunt qui distin , dolorum nam quaerat libero doloremque deserunt qui distin ullam, dolorum nam quaerat libero doloremque deserunt qui distinctio at.'
          }
        />
        <AdditionalInformation
          data={{
            publishBy: 'john doe',
            category: 'social',
            releaseDate: new Date().toString(),
            publisherInfo: { github: '#', linkedIn: '#' },
            technologiesAndLibraries: ['html', 'css', 'js', 'react js', 'bootstrap'],
          }}
        />
        <ReviewAndRating />
        <OtherApps />
      </div>
    </article>
  );
};

export default AppDetails;
