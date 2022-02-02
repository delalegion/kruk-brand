import { AnimationContext } from "providers/AnimationContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const { pathname } = useLocation();
  const [, , runAnimation,setRunAnimation] = useContext(AnimationContext);

  useEffect(() => {
    setRunAnimation(true);
  })
  useEffect(() => {
    setRunAnimation(false);
    window.onbeforeunload = function() {
      window.scrollTo(0, 0);
    };
    window.scrollTo(0, 0);
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