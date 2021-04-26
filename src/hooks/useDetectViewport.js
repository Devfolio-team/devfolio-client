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
  vw: 0,
  vh: 0,
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
      const { innerWidth: vw, innerHeight: vh } = window;

      if (vw < xs) {
        updateState({
          type: 'xs',
          isMobile: true,
          isDesktop: false,
          vw,
          vh,
        });
      } else if (vw >= xs && vw < sm) {
        updateState({
          type: 'sm',
          isMobile: true,
          isDesktop: false,
          vw,
          vh,
        });
      } else if (vw >= sm && vw < md) {
        updateState({
          type: 'md',
          isMobile: false,
          isDesktop: true,
          vw,
          vh,
        });
      } else if (vw >= md && vw < lg) {
        updateState({
          type: 'lg',
          isMobile: false,
          isDesktop: true,
          vw,
          vh,
        });
      } else if (vw >= lg) {
        updateState({
          type: 'xl',
          isMobile: false,
          isDesktop: true,
          vw,
          vh,
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
