import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("zmiana")
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
};

export default ScrollToTop;