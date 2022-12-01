import clsx from "clsx";
import Icon from "components/atoms/Icon";
import useDropdown from "hooks/useDropdown";
import React from "react";

interface AccordionWrapperProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}
interface AccordionProps {
  classProps?: {
    wrapper?: string;
    body?: string;
    item?: string;
  };
  headingNode: React.ReactNode;
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ headingNode, classProps, children }) => {
  const { active, wrapRef, bodyRef, handleToggle } = useDropdown();

  return (
    <div className={classProps?.wrapper}>
      {/* heading */}
      <div
        aria-hidden
        role='button'
        className={clsx("relative", children ? "cursor-grab" : "cursor-context-menu")}
        onClick={() => (children ? handleToggle() : undefined)}
      >
        {/* title */}
        <div
          className={clsx(
            "w-auto",
            children && active && "font-semibold",
            children && "flex items-center justify-between cursor-grab hover:font-semibold",
          )}
        >
          {headingNode}
          {children && (
            <span className={clsx(active ? "rotate-0" : "rotate-180", "transition-transform")}>
              <Icon
                iconName='arrowUp'
                size={12}
                className={active ? "fill-blue-500" : "fill-gray-700"}
              />
            </span>
          )}
        </div>
        {/* // iconToggle  */}
        {children && (
          <div
            className={clsx(
              "absolute right-0 top-1/2 before-after:content-[''] before-after:absolute before-after:right-0 before-after:top-1/2 before-after:transition-transform before-after:duration-300 before-after:w-3 md:before-after:w-4 before-after:h-1/2 before-after:bg-gray-400 after:rotate-90",
              active && "after:rotate-180 before:rotate-0",
            )}
          />
        )}
      </div>
      {children && (
        // body
        <div
          className={clsx(
            "overflow-hidden transition-all duration-300 pl-2 pt-2",
            classProps?.body,
          )}
          ref={wrapRef}
        >
          {/* // item */}
          <div ref={bodyRef} className={classProps?.item}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export const AccordionWrapper: React.FC<AccordionWrapperProps> = ({ children, className }) => (
  <div className={clsx("o-accordion", className)}>{children}</div>
);

export default Accordion;
