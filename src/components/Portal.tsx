import React, { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

function Portal({ children, id }: { children: ReactNode; id: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById(id));
    setIsMounted(true);
  }, []);
  return isMounted ? createPortal(children, container as HTMLElement) : null;
}

export default Portal;
