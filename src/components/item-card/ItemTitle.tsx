import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLHeadingElement> & {
  title: string;
};
const ItemTitle = ({ title, ...rest }: Props) => {
  return (
    <h5 {...rest} className='dark:text-slate-100 font-semibold text-lg capitalize max-w-full overflow-hidden truncate'>
      {title}
    </h5>
  );
};

export default ItemTitle;
