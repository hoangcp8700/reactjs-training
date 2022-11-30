import { useEffect } from "react";

function useWindowEvents<K extends keyof WindowEventMap>(
  eventName: K,
  callback: (listener: WindowEventMap[K]) => unknown,
  deps: Array<unknown>,
) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listener = (event: any): void => {
      if (callback) callback(event);
    };
    window.addEventListener(eventName, listener);
    return () => {
      window.removeEventListener(eventName, listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useWindowEvents;
