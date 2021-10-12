import { useState, useEffect, useContext } from "react";

import { AnimationContext } from 'providers/AnimationContext';

function useOnScreen(ref, threshold = 0.3) {

  const [animation] = useContext(AnimationContext);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!animation) { 
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry?.isIntersecting ?? false);
        },
        {
          rootMargin: "0px",
          threshold,
        }
      );
      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
  }
  }, [ref, threshold, animation]);

  return isIntersecting;
}
export default useOnScreen;