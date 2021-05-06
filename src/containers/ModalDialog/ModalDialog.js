import { Button, Dialog, Modal, SVGIcon } from 'components';
import { useEffect, React, useCallback, useRef } from 'react';

const ModalDialog = ({
  setIsModalOpen,
  beforeRef,
  children,
  width,
  height,
  padding,
  textAlign,
  minWidth,
}) => {
  const $rootNode = document.getElementById('root');
  $rootNode.setAttribute('aria-hidden', 'true');

  const ref = useRef(null);

  const onModalCloseHandler = useCallback(
    e => {
      if (e.keyCode === 27) {
        setIsModalOpen(false);
        beforeRef.current.focus();
        document.body.style.overflow = 'unset';
        return;
      }

      if (e.target === e.currentTarget) {
        setIsModalOpen(false);
        beforeRef.current.focus();
        document.body.style.overflow = 'unset';
        return;
      }
    },
    [beforeRef, setIsModalOpen]
  );

  useEffect(() => {
    ref.current.focus();

    const handleFocusTrap = e => {
      const dialogNode = ref.current;
      const focusableNodeList = dialogNode.querySelectorAll('input, button,  select, [href]');

      const [firstFocusableNode] = focusableNodeList;
      const lastFocusableNode = focusableNodeList[focusableNodeList.length - 1];

      const key = e.keyCode;
      if (e.target === firstFocusableNode && e.shiftKey && key === 9) {
        e.preventDefault();
        lastFocusableNode.focus();
      }
      if (e.target === lastFocusableNode && !e.shiftKey && key === 9) {
        e.preventDefault();
        firstFocusableNode.focus();
      }
    };

    window.addEventListener('keydown', handleFocusTrap);
    window.addEventListener('keyup', onModalCloseHandler);

    return () => {
      $rootNode.removeAttribute('aria-hidden');
      window.removeEventListener('keydown', handleFocusTrap);
      window.removeEventListener('keyup', onModalCloseHandler);
    };
  }, [$rootNode, onModalCloseHandler, ref]);

  return (
    <Modal onClick={onModalCloseHandler}>
      <Dialog
        ref={ref}
        role="dialog"
        width={width}
        height={height}
        padding={padding}
        borderRadius={5}
        textAlign={textAlign}
        minWidth={minWidth}
      >
        {children}
        <Button
          width="15px"
          height="15px"
          background="transparent"
          border="0"
          position="absolute"
          top="15px"
          right="15px"
          onClick={onModalCloseHandler}
          color="#FFFFFF"
          padding="0"
          margin="0"
        >
          <SVGIcon type="X" width="15" height="15" onClick={onModalCloseHandler} />
        </Button>
      </Dialog>
    </Modal>
  );
};
export default ModalDialog;
