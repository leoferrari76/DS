import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ColorItem {
  name: string;
  value: string;
}

interface ColorCategory {
  category: string;
  colors: ColorItem[];
}

interface ThemeContextType {
  colors: ColorCategory[];
  updateColorValue: (category: string, name: string, value: string) => void;
}

const defaultColors: ColorCategory[] = [
  {
    category: "Brand Primary",
    colors: [
      { name: "primary", value: "#0f172a" },
      { name: "secondary", value: "#6366f1" },
      { name: "accent", value: "#22c55e" },
      { name: "background", value: "#ffffff" },
      { name: "foreground", value: "#0f172a" },
      { name: "muted", value: "#f1f5f9" },
      { name: "destructive", value: "#ef4444" },
    ]
  },
  {
    category: "Neutral",
    colors: [
      { name: "neutral-lightest", value: "#FFFFFF" },
      { name: "neutral-light", value: "#F8F8F8" },
      { name: "neutral-medium", value: "#DBDBDB" },
      { name: "neutral-dark", value: "#525252" },
      { name: "neutral-darkest", value: "#1F1D1D" },
    ]
  },
  {
    category: "Support Highlights",
    colors: [
      { name: "support-highlight-lightest", value: "#FFFAAD" },
      { name: "support-highlight-light", value: "#FFE458" },
      { name: "support-highlight-medium", value: "#FFC722" },
      { name: "support-highlight-dark", value: "#FB9C2D" },
      { name: "support-highlight-darkest", value: "#B84D01" },
    ]
  },
  {
    category: "Support Success",
    colors: [
      { name: "support-success-light", value: "#DDF9ED" },
      { name: "support-success-dark", value: "#006B4F" },
    ]
  },
  {
    category: "Support Danger",
    colors: [
      { name: "support-danger-light", value: "#FFFAAD" },
      { name: "support-danger-dark", value: "#B84D01" },
    ]
  },
  {
    category: "Accessibility",
    colors: [
      { name: "accessibility", value: "#FFF333" },
    ]
  }
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [colors, setColors] = useState<ColorCategory[]>(defaultColors);

  const updateColorValue = (category: string, name: string, value: string) => {
    setColors(prevColors =>
      prevColors.map(colorCat =>
        colorCat.category === category
          ? {
              ...colorCat,
              colors: colorCat.colors.map(colorItem =>
                colorItem.name === name ? { ...colorItem, value } : colorItem
              )
            }
          : colorCat
      )
    );
  };

  return (
    <ThemeContext.Provider value={{ colors, updateColorValue }}>
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