import React, { createContext, useState, useEffect } from 'react';
import { HeightContext } from './HeightProvider';

export const AppContext = createContext(null);

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // handler to set window width value:
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial function call, so state gets updated with initial window size
    handleResize();

    // event listener on window:
    window.addEventListener('resize', handleResize);

    // Clean up the listener:
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

const AppProvider = ({ children }) => {

  return (
    <AppContext.Provider value={useWindowWidth}>
        {children}
    </AppContext.Provider>
  );
};

export default AppProvider;