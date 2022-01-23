import { AnimationContext } from "providers/AnimationContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const { pathname } = useLocation();

  const [, , runAnimation,setRunAnimation] = useContext(AnimationContext);

  useEffect(() => {
    window.onbeforeunload = function() {
      window.scrollTo(0, 0);
    };
    window.scrollTo(0, 0);
    if (window.scrollY === 0) { 
      setRunAnimation(true); 
    }
      if (!runAnimation) {
        window.addEventListener("scroll", function() {
          if (window.scrollY === 0) { 
            setRunAnimation(true); 
          }
        })
      }
  }, [pathname]);

  return <>
    {props.children}
  </>;
};

export default ScrollToTop;