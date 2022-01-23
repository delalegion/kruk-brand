import React, { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AnimationContext = createContext();

const AnimationContextProvider = (props) => {
    const [animation, setAnimation] = useState(true);
    const [runAnimation, setRunAnimation] = useState(false);

    if (animation) {
      document.body.style.overflowY = "hidden";
    } else { document.body.style.overflowY = "visible"; }

    return (
        <AnimationContext.Provider value={[animation, setAnimation, runAnimation, setRunAnimation]}>
          {props.children}
        </AnimationContext.Provider>
    );
};

export default AnimationContextProvider;

AnimationContextProvider.propTypes = {
  children: PropTypes.node
};