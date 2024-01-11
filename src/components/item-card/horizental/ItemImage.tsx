import Image, { StaticImageData } from 'next/image';
import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLImageElement> & {
  iconUrl: string | StaticImageData;
};
const ItemImage = ({ iconUrl, ...rest }: Props) => {
  return (
    <figure className='flex items-center justify-center w-28 max-md:w-16 aspect-square overflow-hidden rounded-md'>
      <Image
        {...rest}
        className='!min-w-full object-cover object-center'
        src={iconUrl}
        width={64}
        height={64}
        alt='item-image'
      />
    </figure>
  );
};

export default ItemImage;
