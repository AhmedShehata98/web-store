import useAverageColor from "@/hooks/useAverageColor";
import clsx from "clsx";
import Image from "next/image";
import React, { HTMLAttributes, forwardRef, useRef } from "react";
import { useInView } from "react-intersection-observer";

type Props = HTMLAttributes<HTMLElement> & {
  iconUrl: string;
};
const ItemImage = forwardRef<HTMLElement, Props>(
  ({ iconUrl, className, ...rest }, ref) => {
    const imageRef = useRef<null | HTMLImageElement>(null);
    const { isSuccess, isError, averageColor } = useAverageColor({
      imageElement: imageRef.current,
    });
    const [intersectionImageRef, isInView] = useInView();
    const enhanceBackgroundBlackColor = (color: string) => {
      if (color.startsWith("rgba(0, 0, 0,")) {
        // color.replace(color.charAt(7), "3");
        // color.replace(color.charAt(8), "3");
        console.log(color.split(","));
        return color;
      }
      return color;
    };

    return (
      <figure
        ref={(ref) => {
          intersectionImageRef(ref);
          ref = ref;
        }}
        {...rest}
        className={`w-full h-52 flex items-center justify-center rounded-t-lg ${clsx(
          className
        )}`}
        style={{
          backgroundColor: isSuccess
            ? `${enhanceBackgroundBlackColor(averageColor?.rgba!)}`
            : "transparent",
        }}
      >
        <Image
          ref={imageRef}
          src={iconUrl}
          alt="item-img"
          width={125}
          height={128}
          className={`max-w-[50%] object-cover object-center drop-shadow-md transition-transform duration-500 delay-200 ${clsx(
            { "scale-125 translate-y-3": !isInView }
          )}`}
        />
      </figure>
    );
  }
);

export default ItemImage;
