import { useContext, useCallback } from "react";
import { CursorContext } from "providers/CursorContext";
import PropTypes from 'prop-types';

const useCursorHandlers = (options = {}) => {
  const [, setCursor] = useContext(CursorContext);
  const toggleCursor = () => {
    setCursor(({ active }) => ({ active: !active }));
  };
  const onMouseEnter = useCallback(event => {
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }
    setCursor({ active: true });
  });
  const onMouseLeave = useCallback(event => {
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }
    setCursor({ active: false });
  });
  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers;

useCursorHandlers.propTypes = {
  options: PropTypes.array.isRequired
};