import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ColorConfig {
  name: string;
  value: string;
}

interface ThemeContextType {
  colors: ColorConfig[];
  updateColors: (newColors: ColorConfig[]) => void;
  getColorValue: (name: string) => string;
}

const defaultColors: ColorConfig[] = [
  { name: "primary", value: "#0f172a" },
  { name: "secondary", value: "#6366f1" },
  { name: "accent", value: "#22c55e" },
  { name: "background", value: "#ffffff" },
  { name: "foreground", value: "#0f172a" },
  { name: "muted", value: "#f1f5f9" },
  { name: "destructive", value: "#ef4444" },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [colors, setColors] = useState<ColorConfig[]>(defaultColors);

  const updateColors = (newColors: ColorConfig[]) => {
    setColors(newColors);
  };

  const getColorValue = (name: string): string => {
    const color = colors.find(c => c.name === name);
    return color?.value || '';
  };

  return (
    <ThemeContext.Provider value={{ colors, updateColors, getColorValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 