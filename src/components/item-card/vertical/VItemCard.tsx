import Link from "next/link";
import React, { HTMLAttributes, forwardRef } from "react";
import ItemTitle from "../ItemTitle";
import ItemRating from "../ItemRating";
import ItemBtn from "../ItemBtn";
import clsx from "clsx";
import ItemImage from "./ItemImage";

type Props = HTMLAttributes<HTMLAnchorElement> & {
  item: ItemsType;
};
const VItemCard = forwardRef<HTMLAnchorElement, Props>(
  ({ item, className, ...rest }, ref) => {
    const { iconUrl, rating, ratingCount, title } = item;
    return (
      <Link
        ref={ref}
        href={`/items/${title}`}
        {...rest}
        className={`w-full dark:bg-dark-primary-200 brightness-150 rounded-lg shadow-lg group ${clsx(
          className
        )}`}
      >
        <ItemImage iconUrl={iconUrl} />
        <div className="px-4 py-5">
          <ItemTitle title={title} />
          <span className="flex items-center justify-between mt-6">
            <ItemRating rating={rating} ratingCount={ratingCount} />
            <ItemBtn />
          </span>
        </div>
      </Link>
    );
  }
);

export default VItemCard;
