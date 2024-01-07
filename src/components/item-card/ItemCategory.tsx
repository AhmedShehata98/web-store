import React, { HTMLAttributes, forwardRef } from "react";

type Props = HTMLAttributes<HTMLHeadingElement> & {
  categoryName: string;
};
const ItemCategory = forwardRef<HTMLHeadingElement, Props>(
  ({ categoryName, ...rest }, ref) => {
    return (
      <small ref={ref} {...rest} className="text-slate-300 capitalize">
        {categoryName}
      </small>
    );
  }
);

export default ItemCategory;
