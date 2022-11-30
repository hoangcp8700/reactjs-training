import clsx from "clsx";
import Button from "components/atoms/Button";
import React, { forwardRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./index.css";

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  className?: {
    wrapper?: string;
    content?: string;
    body?: string;
  };
  children: React.ReactNode;
}

//  data-bs-toggle="modal" data-bs-target="#exampleModal"
const ModalRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalProps> = (
  { open, className, children, onClose },
  ref,
) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const closeOnEscapeKey = (e: any) => (e.key === "Escape" && onClose ? onClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  return createPortal(
    <div className='modal modal-portal' ref={ref}>
      <div className='modal-overlay' />
      <div
        className={clsx(
          "transition-transform duration-300 ease-in-out fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto z-modal",
          className?.wrapper,
          !open && "transform-x-[-1000px]",
        )}
        aria-hidden='true'
        aria-modal
        tabIndex={-1}
        role='dialog'
        onClick={onClose}
      >
        <div className='modal-dialog relative w-auto pointer-events-none'>
          <div
            className={clsx(
              "modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current",
              className?.content,
            )}
          >
            <div className='modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md'>
              <h5
                className='text-xl font-medium leading-normal text-gray-800'
                id='exampleModalLabel'
              >
                Modal title
              </h5>
              <button
                type='button'
                className='btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className={clsx("modal-body relative p-4", className?.body)}>
              Modal body text goes here.
              {children}
            </div>
            <div className='modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md'>
              <Button data-dismiss='modal' aria-label='Close' onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

const Modal = forwardRef(ModalRef);

// TODO:  WIP: TRANSITION NOT WORKING
const ModalWrapper: React.FC<ModalProps> = ({ open, ...props }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition in={open} timeout={200} classNames='modal' unmountOnExit nodeRef={nodeRef}>
      <Modal {...props} open={open} ref={nodeRef} />
    </CSSTransition>
  );
};

export default ModalWrapper;
