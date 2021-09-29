import React, { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AnimationContext = createContext();

const AnimationContextProvider = (props) => {
    const [animation, setAnimation] = useState(true);

    return (
        <AnimationContext.Provider value={[animation, setAnimation]}>
          {props.children}
        </AnimationContext.Provider>
    );
};

export default AnimationContextProvider;

AnimationContextProvider.propTypes = {
  children: PropTypes.node
};