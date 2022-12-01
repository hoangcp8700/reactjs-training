import clsx from "clsx";
import Button from "components/atoms/Button";
import useWindowEvents from "hooks/useWindowEvents";
import React, { forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import STYLES from "styles";

import "./index.css";

interface ButtonModalProps {
  onClose?: () => void;
  node?: React.ReactNode;
}
interface ModalProps {
  open: boolean;
  onClose?: () => void;
  className?: {
    wrapper?: string;
    content?: string;
    body?: string;
  };
  children: React.ReactNode;
  headerProps?: {
    node: React.ReactNode;
    className?: string;
  };
  footerProps?: {
    node: React.ReactNode;
    className?: string;
  };
}

export const ButtonModal: React.FC<ButtonModalProps> = ({ onClose, node }) => (
  <Button data-dismiss='modal' aria-label='Close' onClick={onClose}>
    {node}
  </Button>
);

const ModalRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalProps> = (
  { className, children, headerProps, footerProps, onClose },
  ref,
) => {
  useWindowEvents("keydown", (event) => (event.key === "Escape" && onClose ? onClose() : null), [
    onClose,
  ]);

  return createPortal(
    <div className='modal modal-portal'>
      <div
        className={clsx(
          STYLES.MIXINS.overlay("bg-gray-800/50"),
          "fixed top-0 left-0 w-full h-full outline-none z-modal",
          className?.wrapper,
        )}
        aria-hidden
        aria-modal
        tabIndex={-1}
        role='dialog'
        onClick={onClose}
      >
        <div
          aria-hidden
          ref={ref}
          onClick={(e) => e.stopPropagation()}
          className='modal-dialog modal-overlay relative w-auto pointer-events-none'
        >
          <div
            className={clsx(
              "modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current",
              className?.content,
            )}
          >
            {headerProps && (
              <div
                className={clsx(
                  "modal-header border-b border-gray-200 rounded-t-md",
                  headerProps?.className,
                )}
              >
                {headerProps.node}
              </div>
            )}
            <div
              className={clsx(
                "modal-body relative px-4 py-2 overflow-x-hidden overflow-y-auto",
                className?.body,
              )}
            >
              {children}
            </div>

            {footerProps && (
              <div
                className={clsx(
                  "modal-footer border-t border-gray-200 rounded-b-md",
                  footerProps?.className,
                )}
              >
                {footerProps.node}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

const Modal = forwardRef(ModalRef);

const ModalWrapper: React.FC<ModalProps> = ({ open, ...props }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition in={open} timeout={400} classNames='modal' unmountOnExit nodeRef={nodeRef}>
      <Modal {...props} open={open} ref={nodeRef} />
    </CSSTransition>
  );
};

export default ModalWrapper;
