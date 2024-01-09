import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLHeadingElement> & {
  categoryName: string;
};
const ItemCategory = ({ categoryName, ...rest }: Props) => {
  return (
    <small {...rest} className='text-slate-300 capitalize'>
      {categoryName}
    </small>
  );
};

export default ItemCategory;
