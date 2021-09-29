import React, { useContext, useEffect, useState } from "react";
import useMousePosition from "hooks/useMousePosition";
import { CursorContext } from "providers/CursorContext";

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.removeEventListener("mouseenter",   handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const isTouchDevice = 
  "ontouchstart" in window
  || navigator.MaxTouchPoints > 0 
  || navigator.msMaxTouchPoints > 0;

  if (isTouchDevice) {
    return null;
  }
  
  return (
    <div 
      style={{ 
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
        mixBlendMode: "difference"
      }}
    >
      <svg
        width={60}
        height={60}
        viewBox="0 0 60 60"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          pointerEvents: "none",
          translate: `all 0.5s ease`,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          fill: "white",
          transition: "transform .2s ease-in-out",
          opacity: isVisible && clientX > 1 ? 1 : 0,
        }}
      >
        <circle
          cx="30"
          cy="30"
          r="13"
        />
      </svg>
    </div>
  );
};

export default Cursor;