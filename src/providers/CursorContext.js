import React, { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const CursorContext = createContext();

const CursorContextProvider = (props) => {
  const [cursor, setCursor] = useState({ active: false });

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