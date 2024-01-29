'use client';
import { getAllCategories } from '@/services/category.api';
import { useQuery } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';

type CategoryType = {
  categoriesList: ICategory[] | undefined;
  isLoading: boolean;
  isError: boolean;
  isFetched: boolean;
};
type Props = {
  children: (categoriesState: CategoryType) => ReactNode;
};
const CategoriesData: FC<Props> = ({ children }) => {
  const {
    data: categoriesList,
    isLoading,
    isError,
    isFetched,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllCategories({ limit: 20, page: 1 }),
  });
  return <>{children({ categoriesList, isLoading, isError, isFetched })}</>;
};

export default CategoriesData;
