import React, { HTMLAttributes, forwardRef } from "react";

type Props = HTMLAttributes<HTMLHeadingElement> & {
  title: string;
};
const ItemTitle = forwardRef<HTMLHeadingElement, Props>(
  ({ title, ...rest }, ref) => {
    return (
      <h5
        ref={ref}
        {...rest}
        className="dark:text-slate-100 font-semibold text-lg capitalize max-w-full overflow-hidden truncate"
      >
        {title}
      </h5>
    );
  }
);

export default ItemTitle;
