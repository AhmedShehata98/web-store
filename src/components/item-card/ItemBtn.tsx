import clsx from "clsx";
import React, { HTMLAttributes, forwardRef } from "react";

type Props = HTMLAttributes<HTMLButtonElement> & {};
const ItemBtn = forwardRef<HTMLButtonElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={`dark:bg-dark-secondary-200 px-3 py-2 rounded-2xl hover:brightness-125 ${clsx(
          className
        )}`}
        {...rest}
      >
        <p className="text-lg font-semibold uppercase">get</p>
      </button>
    );
  }
);

export default ItemBtn;
