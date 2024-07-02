import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
}

export default function Portal({ children }: PortalProps) {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    modalRoot?.appendChild(container);
    return () => {
      modalRoot?.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
}
