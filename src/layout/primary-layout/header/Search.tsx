import Image from 'next/image';
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const Search = () => {
  return (
    <div className='relative w-[32rem] flex flex-col items-start justify-start gap-2 max-md:order-3 max-md:w-full'>
      <form className='flex items-center w-full shadow rounded-md overflow-hidden justify-center dark:bg-dark-primary-300 mx-8 border-b border-transparent focus-within:border-dark-secondary-200'>
        <input
          type='search'
          name='search-items'
          id='search-items'
          placeholder='search on apps...'
          className='px-3 py-2 w-[calc(100%-1rem)] dark:text-white bg-inherit focus:outline-none'
        />
        <button type='submit' className='dark:text-white text-xl p-4'>
          <IoSearchOutline />
        </button>
      </form>
      {/* <Search.SearchResult
        data={[1, 2, 3]}
        isLoading={false}
        isSuccess={true}
      /> */}
    </div>
  );
};

type SearchResultProps = {
  data: null | [];
  isLoading: boolean;
  isSuccess: boolean;
};
const SearchResult = ({ data, isSuccess }: SearchResultProps) => {
  return (
    <div className='absolute top-full left-0 dark:bg-dark-primary-300 p-4 mx-3 mt-2 w-full h-[23rem] flex items-center justify-center'>
      {isSuccess && (
        <ul className='w-full h-full grid grid-flow-row gap-1'>
          {data?.map((item, idx) => (
            <li key={idx} className='flex items-center justify-start gap-5'>
              <figure className='w-12 overflow-hidden'>
                <Image
                  src='https://picsum.photos/80'
                  width={45}
                  height={48}
                  className='max-w-full object-cover object-center'
                  alt='app-image'
                />
              </figure>
              <span className='flex flex-col'>
                <b className='dark:text-white capitalize'>app name</b>
                <small className='text-slate-400 capitalize'>category</small>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
Search.SearchResult = SearchResult;
