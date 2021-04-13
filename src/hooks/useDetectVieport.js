import React from 'react';

export const initialViewports = {
  sm: 480,
  md: 768,
  lg: 1024,
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
  const { sm, md, lg } = viewports;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const updateState = newState => dispatch(updateAction(newState));

    const detectionViewport = () => {
      const {
        innerWidth: vw,
        // innerHeight: vh
      } = window;

      if (vw < sm) {
        updateState({
          type: 'xs',
          isMobile: true,
          isDesktop: false,
        });
      }
      if (vw >= sm && vw < md) {
        updateState({
          type: 'sm',
          isMobile: true,
          isDesktop: false,
        });
      }
      if (vw >= md && vw < lg) {
        updateState({
          type: 'md',
          isMobile: false,
          isDesktop: true,
        });
      }
      if (vw >= lg) {
        updateState({
          type: 'lg',
          isMobile: false,
          isDesktop: true,
        });
      }
    };

    detectionViewport();

    window.addEventListener('resize', detectionViewport);

    return () => {
      window.removeEventListener('resize', detectionViewport);
    };
  }, [dispatch, lg, md, sm]);

  return state;
}
