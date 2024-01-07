import React, { HTMLAttributes } from 'react';
import { classNames } from 'utils';

const ItemBtn = ({ className, ...rest }: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={classNames('dark:bg-dark-secondary-200 px-3 py-2 rounded-2xl hover:brightness-125', className)}
      {...rest}
    >
      <p className='text-lg font-semibold uppercase'>get</p>
    </button>
  );
};

export default ItemBtn;
