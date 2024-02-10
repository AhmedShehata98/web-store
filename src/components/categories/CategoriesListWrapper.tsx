'use client';

import { getAllCategories } from '@/services/category.api';
import { useQuery } from '@tanstack/react-query';
import React, { FC } from 'react';
import CategoryCard from './CategoryCard';

const CategoriesListWrapper: FC = () => {
  const { data: categoriesList, isFetched } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllCategories({ limit: 17, page: 1 }),
  });

  return (
    <div className='w-full mt-8'>
      <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {isFetched &&
          categoriesList &&
          categoriesList.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              href={`/categories/${encodeURIComponent(category._id)}`}
            />
          ))}
      </ul>
    </div>
  );
};

export default CategoriesListWrapper;
