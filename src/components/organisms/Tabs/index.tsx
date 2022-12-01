import clsx from "clsx";
import useDeviceQueries from "hooks/useDeviceQueries";
import React, { useLayoutEffect, useRef } from "react";
import { Scrollbar } from "styles/components";
import { handleScrollXCenter } from "utils/functions";

interface TabProps {
  active?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

interface TabPanelProps {
  className?: string;
  children: React.ReactNode;
}

interface TabsProps {
  indexActive: number;
  className?: string;
  classTabsActive?: string;
  children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const Tab: React.FC<TabProps> = ({ active, children, className, onClick }) => (
  <div
    aria-hidden
    role='button'
    onClick={onClick}
    className={clsx("tab-item py-2 sm:px-3", active && "tab-item-active", className)}
  >
    <div
      className={clsx(
        "tab-label px-3 sm:px-4 relative transition-all duration-300 whitespace-nowrap before:content-[] before:bg-black before:rounded-sm before:absolute before:bottom-[-8px] sm:before:bottom-[-12px] before:h-[2px] before:right-0 before:w-0 before:duration-300 before:ease-in-out",
        active && "text-black before:w-full before:left-0",
      )}
    >
      {children}
    </div>
  </div>
);

const Tabs: React.FC<TabsProps> = ({ children, indexActive, className, classTabsActive }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isMobile } = useDeviceQueries();

  useLayoutEffect(() => {
    handleScrollXCenter(ref, classTabsActive || ".tab-item-active");
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
