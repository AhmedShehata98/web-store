import Link from "next/link";
import React, { HTMLAttributes, forwardRef } from "react";
import ItemImage from "./ItemImage";
import ItemTitle from "../ItemTitle";
import ItemRating from "../ItemRating";
import ItemCategory from "../ItemCategory";
import { StaticImageData } from "next/image";
import ItemBtn from "../ItemBtn";
import clsx from "clsx";

type Props = HTMLAttributes<HTMLAnchorElement> & {
  item: ItemsType;
};
const ItemCard = forwardRef<HTMLAnchorElement, Props>(
  ({ item, className, ...rest }, ref) => {
    return (
      <Link
        ref={ref}
        href={`${item.title}`}
        {...rest}
        className={`w-full flex items-start justify-start gap-8 px-5 py-7 dark:bg-dark-primary-200 brightness-150 rounded-md shadow-lg transition-transform duration-500 hover:scale-[.99] hover:-translate-y-1.5 ${clsx(
          className
        )}`}
      >
        <ItemImage iconUrl={item.iconUrl} />
        <div className="flex-1 overflow-x-hidden">
          <ItemTitle title={item.title} />
          <span className="w-full max-w-full overflow-x-hidden flex items-center justify-start gap-4">
            <ItemRating ratingCount={item.ratingCount} rating={item.rating} />
            <ItemCategory categoryName={item.category.categoryName} />
          </span>
        </div>
        <ItemBtn className="self-end" />
      </Link>
    );
  }
);

export default ItemCard;