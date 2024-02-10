'use client';
import React, { useState } from 'react';
import Header from './Header';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { getApplicationsByCategory } from '@/services/app.api';
import { useToggle } from 'usehooks-ts';
import { getAllCategories, getCategoryById } from '@/services/category.api';
import VItemCard from '../item-card/vertical/VItemCard';
import SkeletonVCard from '../item-card/vertical/SkeletonVCard';

const ApplicationsList = () => {
  const pathname = usePathname();
  const [categoryId, setCategoryId] = useState(pathname.split('/').pop());
  const [isToggled, toggle] = useToggle(false);
  const {
    data: applications,
    isFetched,
    isLoading,
  } = useQuery({
    queryKey: ['apps-by-category', categoryId],
    queryFn: () => getApplicationsByCategory({ categoryId: categoryId as string, limit: 16, page: 1 }),
  });
  const { data: categories, isFetched: isFetchedCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllCategories({ limit: 16, page: 1 }),
    enabled: isToggled,
  });
  const {
    data: categoryDetails,
    isFetched: isFetchedCategoryDetails,
    isLoading: isLoadingCategoryDetails,
  } = useQuery({
    queryKey: ['category-details', categoryId],
    queryFn: () => getCategoryById(categoryId),
    enabled: Boolean(categoryId),
  });

  const handleSelectCategory = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const target = ev.target as HTMLSelectElement;
    setCategoryId(target.value);
    console.log('first');
  };

  return (
    <>
      <Header
        title={`applications in ${categoryDetails?.name}`}
        isLoadingTitle={isLoadingCategoryDetails}
        isFetchedTitle={isFetchedCategoryDetails}
        FilterBtn={<Header.FilterBtn isToggled={isToggled} onClick={() => toggle()} />}
        isShownFiltersMenu={isToggled}
        FiltersMenu={
          <Header.FiltersMenu>
            <Header.SelectItem
              className='tablet:w-1/3'
              onChange={handleSelectCategory}
              defaultValue={categoryId}
              id='category-filter'
              name='category-filter'
            >
              {isFetchedCategories &&
                categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
            </Header.SelectItem>
          </Header.FiltersMenu>
        }
      />
      <div className='w-full flex items-start justify-start gap-6 px-4 mt-8'>
        <ul className='w-full flex items-start justify-start gap-6 flex-wrap'>
          {isLoading &&
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map((app) => (
              <SkeletonVCard
                key={app}
                className='w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.3%-1.5rem)] lg:w-[calc(25%-1.5rem)] xl:w-calc(20%-1.5rem) 2xl:w-[calc(19.5%-1.5rem)]'
              />
            ))}
          {isFetched &&
            applications?.applications.map((app) => (
              <VItemCard
                key={app._id}
                item={app}
                href={`/categories/${categoryId}/${app.shortId}`}
                className='w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.3%-1.5rem)] lg:w-[calc(25%-1.5rem)] xl:w-calc(20%-1.5rem) 2xl:w-[calc(19.5%-1.5rem)]'
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default ApplicationsList;
