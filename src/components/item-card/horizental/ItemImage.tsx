import Image, { StaticImageData } from "next/image";
import React, { HTMLAttributes, forwardRef } from "react";

type Props = HTMLAttributes<HTMLImageElement> & {
  iconUrl: string | StaticImageData;
};
const ItemImage = forwardRef<HTMLElement, Props>(
  ({ iconUrl, ...rest }, ref) => {
    return (
      <figure
        ref={ref}
        className="flex items-center justify-center w-28 aspect-square overflow-hidden rounded-md"
      >
        <Image
          {...rest}
          className="!min-w-full object-cover object-center"
          src={iconUrl}
          width={64}
          height={64}
          alt="item-image"
        />
      </figure>
    );
  }
);

export default ItemImage;
