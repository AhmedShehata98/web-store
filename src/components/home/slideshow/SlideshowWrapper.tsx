"use client";
import Image from "next/image";
import { HTMLAttributes, forwardRef, useState } from "react";
import slideImage1 from "@/assets/pexels-brady-knoll-5409751.jpg";
import slideImage2 from "@/assets/pexels-jeremy-bishop-2922672.jpg";
import slideImage3 from "@/assets/pexels-walid-ahmad-1509582.jpg";
import "swiper/css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SwiperSlider from "./SwiperSlider";

type Props = HTMLAttributes<HTMLDivElement> & {};
const SlideshowWrapper = forwardRef<HTMLDivElement, Props>(
  ({ ...rest }, ref) => {
    const [slidesList] = useState([
      {
        id: "1",
        image: slideImage1,
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos excepturi nihil! Accusamus dolorum harum laborum expedita molestiae.",
        btnLink: "#",
      },
      {
        id: "2",
        image: slideImage2,
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos excepturi nihil! Accusamus dolorum harum laborum expedita molestiae.",
        btnLink: "#",
      },
      {
        id: "3",
        image: slideImage3,
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos excepturi nihil! Accusamus dolorum harum laborum expedita molestiae.",
        btnLink: "#",
      },
      {
        id: "4",
        image: slideImage2,
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos excepturi nihil! Accusamus dolorum harum laborum expedita molestiae.",
        btnLink: "#",
      },
      {
        id: "5",
        image: slideImage1,
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos excepturi nihil! Accusamus dolorum harum laborum expedita molestiae.",
        btnLink: "#",
      },
    ]);
    return (
      <div
        ref={ref}
        className="w-full max-w-full h-[65dvh] flex items-center justify-center "
        {...rest}
      >
        <SwiperSlider isFetched={true} isLoading={false} data={slidesList} />
      </div>
    );
  }
);

export default SlideshowWrapper;
