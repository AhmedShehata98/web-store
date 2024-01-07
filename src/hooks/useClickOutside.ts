import React, { useEffect, useRef } from "react";

type Props = {
  cb: Function;
};
const useClickOutside = ({ cb }: Props) => {
  let modalRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement;
      if (target.contains(modalRef.current)) {
        cb();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [modalRef]);

  return { modalRef };
};

export default useClickOutside;
