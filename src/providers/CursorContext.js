import React, { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

export const CursorContext = createContext();

const CursorContextProvider = (props) => {
  const [cursor, setCursor] = useState({ active: false });

  const { pathname } = useLocation();

  useEffect(() => {
    setCursor({active: false});
  }, [pathname]);

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      {props.children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;

CursorContextProvider.propTypes = {
  children: PropTypes.node
};