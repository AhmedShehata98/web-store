import React, { HTMLAttributes, forwardRef } from "react";
import { IoIosStar } from "react-icons/io";

type Props = HTMLAttributes<HTMLSpanElement> & {
  rating: number;
  ratingCount: number;
};
const ItemRating = forwardRef<HTMLSpanElement, Props>(
  ({ ratingCount, rating, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        {...rest}
        className="flex items-center justify-center gap-2"
      >
        <p className="text-slate-300 ">{rating}</p>
        <span className="text-slate-300">
          <IoIosStar />
        </span>
      </span>
    );
  }
);

export default ItemRating;
