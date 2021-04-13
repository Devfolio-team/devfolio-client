import _ from 'lodash';
import React from 'react';

export const initialViewports = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1440,
};

const initialState = {
  type: '',
  isMobile: false,
  isDesktop: false,
};

const reducer = (state, action) => {
  if (action.type === 'update') {
    return action.payload;
  }
  return state;
};

const updateAction = newState => ({
  type: 'update',
  payload: newState,
});

/* -------------------------------------------------------------------------- */

export default function useDetectViewport(viewports = initialViewports) {
  const { xs, sm, md, lg } = viewports;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const updateState = newState => dispatch(updateAction(newState));

    const detectionViewport = () => {
      const {
        innerWidth: vw,
        // innerHeight: vh
      } = window;

      if (vw < xs) {
        updateState({
          type: 'xs',
          isMobile: true,
          isDesktop: false,
        });
      } else if (vw >= xs && vw < sm) {
        updateState({
          type: 'sm',
          isMobile: true,
          isDesktop: false,
        });
      } else if (vw >= sm && vw < md) {
        updateState({
          type: 'md',
          isMobile: false,
          isDesktop: true,
        });
      } else if (vw >= lg) {
        updateState({
          type: 'lg',
          isMobile: false,
          isDesktop: true,
        });
      }
    };

    detectionViewport();

    window.addEventListener('resize', _.throttle(detectionViewport, 200));

    return () => {
      window.removeEventListener('resize', detectionViewport);
    };
  }, [dispatch, xs, lg, md, sm]);

  return state;
}
