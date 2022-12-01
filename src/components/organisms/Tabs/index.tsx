import clsx from "clsx";
import useDeviceQueries from "hooks/useDeviceQueries";
import React, { useLayoutEffect, useRef } from "react";
import { Scrollbar } from "styles/components";
import { handleScrollXCenter } from "utils/functions";

interface TabProps {
  active?: boolean;
  className?: string;
  classTabsActive: string; // active to scroll center : ex:  "tab-item-active"
  children: React.ReactNode;
  onClick?: () => void;
}

interface TabPanelProps {
  className?: string;
  children: React.ReactNode;
}

interface TabsWrapperProps {
  indexActive: number;
  className?: string;
  classTabsActive: string; // active to scroll center : ex:  "tab-item-active"
  children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const Tab: React.FC<TabProps> = ({
  active,
  children,
  classTabsActive,
  className,
  onClick,
}) => (
  <div
    aria-hidden
    role='button'
    onClick={onClick}
    className={clsx("tab-item py-2 sm:px-3", active && classTabsActive, className)}
  >
    <div
      className={clsx(
        "tab-label px-3 sm:px-4 relative transition-all duration-300 whitespace-nowrap before:content-[''] before:bg-black before:rounded-sm before:absolute before:bottom-[-8px] sm:before:bottom-[-12px] before:h-[2px] before:right-0 before:w-0 before:duration-300 before:ease-in-out",
        active && "before:w-full before:left-0",
      )}
    >
      {children}
    </div>
  </div>
);

const Tabs: React.FC<TabsWrapperProps> = ({
  children,
  indexActive,
  className,
  classTabsActive,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isMobile } = useDeviceQueries();

  useLayoutEffect(() => {
    handleScrollXCenter(ref, `.${classTabsActive}`);
  }, [classTabsActive, indexActive, isMobile]);

  return (
    <div className={clsx("tab adjust-flex-center", className)}>
      <Scrollbar
        ref={ref}
        className='rounded-sm overflow-x-auto overflow-y-hidden relative flex justify-start items-center'
      >
        {children}
      </Scrollbar>
    </div>
  );
};

export default React.memo(Tabs);
