import useWindowEvents from "hooks/useWindowEvents";
import { useCallback, useEffect, useMemo, useState } from "react";
import { LOCAL_STORAGE, THEME_MODE_OPTIONS } from "utils/constants";

export type ThemeModeType = {
  isDarkMode: boolean;
  handleToggleMode: () => void;
};

function useDarkMode(): ThemeModeType {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem(LOCAL_STORAGE.THEME) === THEME_MODE_OPTIONS.darkMode,
  );

  useWindowEvents(
    "storage",
    () => {
      const theme = localStorage.getItem(LOCAL_STORAGE.THEME);
      setIsDarkMode(theme === THEME_MODE_OPTIONS.darkMode);
    },
    [],
  );

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem(LOCAL_STORAGE.THEME, THEME_MODE_OPTIONS.darkMode);
      document.body.classList.add(THEME_MODE_OPTIONS.darkMode);
      document.body.classList.remove(THEME_MODE_OPTIONS.lightMode);
    } else {
      localStorage.setItem(LOCAL_STORAGE.THEME, THEME_MODE_OPTIONS.lightMode);
      document.body.classList.add(THEME_MODE_OPTIONS.lightMode);
      document.body.classList.remove(THEME_MODE_OPTIONS.darkMode);
    }
  }, [isDarkMode]);

  const handleToggleMode = useCallback(() => setIsDarkMode(!isDarkMode), [isDarkMode]);

  const initialize = useMemo(
    () => ({ isDarkMode, handleToggleMode }),
    [isDarkMode, handleToggleMode],
  );

  return initialize;
}

export default useDarkMode;
