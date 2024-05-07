import { useCallback, useState, FC, ReactNode, createContext } from 'react';
import { uniqueId } from 'lodash';

enum ThemeBackgroud {
  light = 'light',
  dark = 'dark',
}

enum ThemeHills {
  blue = 'blue',
  green = 'green',
  light = 'light',
}

export interface ThemeContextProps {
  background: ThemeBackgroud;
  hills: ThemeHills;
}
export const ThemeContext = createContext<ThemeContextProps>({
  background: ThemeBackgroud.light,
  hills: ThemeHills.light,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [background, setBackground] = useState<ThemeBackgroud>(ThemeBackgroud.light);
  const [hills, setHills] = useState<ThemeHills>(ThemeHills.light);

  return <ThemeContext.Provider value={{ background, hills }}>{children}</ThemeContext.Provider>;
};
