import { AnimationContext } from "providers/AnimationContext";
import React, { useEffect, useState, useRef, useContext } from "react";
import { useIntersection } from "react-use";

export const IntersectionContext = React.createContext({ inView: true });

export const IntersectionObserver = ({
  children,
  reset = false 
}) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = useRef(null);

  const intersection = useIntersection(intersectionRef, {
    threshold: 0
  });

  const [animation] = useContext(AnimationContext);

  useEffect(() => {
    if (!animation) {
      const inViewNow = intersection && intersection.intersectionRatio > 0;
      if (inViewNow) {
        return setInView(inViewNow);
      } else if (reset) {
        return setInView(false);
      }
    }
  }, [intersection, reset, animation]);

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={intersectionRef} id="intersection" name="intersection">{children}</div>
    </IntersectionContext.Provider>
  );
};