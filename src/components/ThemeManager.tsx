import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Edit, Plus, Save, Trash2, Upload } from "lucide-react";

interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
  };
  spacing: {
    unit: string;
    scale: number[];
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
}

const defaultTheme: Theme = {
  id: "1",
  name: "Default Theme",
  description: "The default theme for the application",
  colors: {
    primary: "#0f172a",
    secondary: "#64748b",
    accent: "#0ea5e9",
    background: "#ffffff",
    foreground: "#0f172a",
    muted: "#f1f5f9",
    border: "#e2e8f0",
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
  },
  spacing: {
    unit: "rem",
    scale: [
      0, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24,
    ],
  },
  borderRadius: {
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
};

const brandTheme: Theme = {
  id: "2",
  name: "Brand Theme",
  description: "A branded theme with custom colors",
  colors: {
    primary: "#3b82f6",
    secondary: "#6366f1",
    accent: "#ec4899",
    background: "#f8fafc",
    foreground: "#1e293b",
    muted: "#f1f5f9",
    border: "#e2e8f0",
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
  },
  spacing: {
    unit: "rem",
    scale: [
      0, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24,
    ],
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    full: "9999px",
  },
};

const darkTheme: Theme = {
  id: "3",
  name: "Dark Theme",
  description: "A dark theme for night mode",
  colors: {
    primary: "#f8fafc",
    secondary: "#94a3b8",
    accent: "#0ea5e9",
    background: "#0f172a",
    foreground: "#f8fafc",
    muted: "#1e293b",
    border: "#334155",
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
  },
  spacing: {
    unit: "rem",
    scale: [
      0, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24,
    ],
  },
  borderRadius: {
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
};

const ThemeManager = () => {
  const [themes, setThemes] = useState<Theme[]>([
    defaultTheme,
    brandTheme,
    darkTheme,
  ]);
  const [selectedTheme, setSelectedTheme] = useState<Theme>(defaultTheme);
  const [editingTheme, setEditingTheme] = useState<Theme | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("themes");
  const [jsonPreview, setJsonPreview] = useState("");

  // Create a new theme
  const handleCreateTheme = () => {
    const newTheme: Theme = {
      ...defaultTheme,
      id: `theme-${Date.now()}`,
      name: "New Theme",
      description: "A new custom theme",
    };
    setEditingTheme(newTheme);
    setIsDialogOpen(true);
  };

  // Edit an existing theme
  const handleEditTheme = (theme: Theme) => {
    setEditingTheme({ ...theme });
    setIsDialogOpen(true);
  };

  // Save theme changes
  const handleSaveTheme = () => {
    if (editingTheme) {
      const themeExists = themes.some((theme) => theme.id === editingTheme.id);
      if (themeExists) {
        setThemes(
          themes.map((theme) =>
            theme.id === editingTheme.id ? editingTheme : theme,
          ),
        );
      } else {
        setThemes([...themes, editingTheme]);
      }
      setSelectedTheme(editingTheme);
      setIsDialogOpen(false);
    }
  };

  // Delete a theme
  const handleDeleteTheme = (id: string) => {
    setThemes(themes.filter((theme) => theme.id !== id));
    if (selectedTheme.id === id) {
      setSelectedTheme(themes[0]);
    }
  };

  // Export theme as JSON
  const handleExportTheme = () => {
    const themeJson = JSON.stringify(selectedTheme, null, 2);
    setJsonPreview(themeJson);
    setActiveTab("export");

    // In a real application, you would create a download link
    const blob = new Blob([themeJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedTheme.name.toLowerCase().replace(/\s+/g, "-")}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Generate CSS variables from theme
  const generateCssVariables = (theme: Theme) => {
    return `:root {
  /* Colors */
  --color-primary: ${theme.colors.primary};
  --color-secondary: ${theme.colors.secondary};
  --color-accent: ${theme.colors.accent};
  --color-background: ${theme.colors.background};
  --color-foreground: ${theme.colors.foreground};
  --color-muted: ${theme.colors.muted};
  --color-border: ${theme.colors.border};
  
  /* Typography */
  --font-family: ${theme.typography.fontFamily};
  --font-size-xs: ${theme.typography.fontSize.xs};
  --font-size-sm: ${theme.typography.fontSize.sm};
  --font-size-base: ${theme.typography.fontSize.base};
  --font-size-lg: ${theme.typography.fontSize.lg};
  --font-size-xl: ${theme.typography.fontSize.xl};
  --font-size-2xl: ${theme.typography.fontSize["2xl"]};
  
  /* Border Radius */
  --radius-sm: ${theme.borderRadius.sm};
  --radius-md: ${theme.borderRadius.md};
  --radius-lg: ${theme.borderRadius.lg};
  --radius-full: ${theme.borderRadius.full};
}`;
  };

  // Export theme as CSS
  const handleExportCss = () => {
    const css = generateCssVariables(selectedTheme);
    setJsonPreview(css);
    setActiveTab("export");

    // In a real application, you would create a download link
    const blob = new Blob([css], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedTheme.name.toLowerCase().replace(/\s+/g, "-")}.css`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Import theme from JSON
  const handleImportTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedTheme = JSON.parse(e.target?.result as string) as Theme;
          if (importedTheme.id && importedTheme.name && importedTheme.colors) {
            // Generate a new ID to avoid conflicts
            importedTheme.id = `theme-${Date.now()}`;
            setThemes([...themes, importedTheme]);
            setSelectedTheme(importedTheme);
          }
        } catch (error) {
          console.error("Failed to parse theme JSON:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  // Preview component with selected theme
  const ThemePreview = ({ theme }: { theme: Theme }) => {
    return (
      <div
        className="p-6 rounded-lg"
        style={{
          backgroundColor: theme.colors.background,
          color: theme.colors.foreground,
        }}
      >
        <h3
          className="text-xl font-bold mb-4"
          style={{ fontFamily: theme.typography.fontFamily }}
        >
          Theme Preview
        </h3>
        <div className="flex flex-wrap gap-4 mb-4">
          {Object.entries(theme.colors).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center">
              <div
                className="w-12 h-12 rounded-md border"
                style={{
                  backgroundColor: value,
                  borderColor: theme.colors.border,
                }}
              />
              <span className="text-xs mt-1">{key}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="p-3 rounded-md"
            style={{
              backgroundColor: theme.colors.primary,
              color: "#fff",
              borderRadius: theme.borderRadius.md,
            }}
          >
            Primary Button
          </div>
          <div
            className="p-3 rounded-md"
            style={{
              backgroundColor: theme.colors.secondary,
              color: "#fff",
              borderRadius: theme.borderRadius.md,
            }}
          >
            Secondary Button
          </div>
          <div
            className="p-3 rounded-md border"
            style={{
              borderColor: theme.colors.border,
              borderRadius: theme.borderRadius.md,
            }}
          >
            Outlined Component
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Theme Manager</h1>
            <p className="text-muted-foreground">
              Create, edit, and export theme configurations
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleCreateTheme}>
              <Plus className="mr-2 h-4 w-4" /> New Theme
            </Button>
            <label htmlFor="import-theme">
              <Button variant="outline" as="span" className="cursor-pointer">
                <Upload className="mr-2 h-4 w-4" /> Import
              </Button>
            </label>
            <input
              id="import-theme"
              type="file"
              accept=".json"
              className="hidden"
              onChange={handleImportTheme}
            />
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="themes">Themes</TabsTrigger>
            <TabsTrigger value="export">Export</TabsTrigger>
          </TabsList>

          <TabsContent value="themes" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Themes</CardTitle>
                    <CardDescription>
                      Select a theme to preview or edit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px] pr-4">
                      <div className="space-y-2">
                        {themes.map((theme) => (
                          <div
                            key={theme.id}
                            className={`p-3 rounded-md cursor-pointer flex justify-between items-center ${selectedTheme.id === theme.id ? "bg-accent/10 border border-accent" : "hover:bg-muted"}`}
                            onClick={() => setSelectedTheme(theme)}
                          >
                            <div>
                              <div className="font-medium">{theme.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {theme.description}
                              </div>
                            </div>
                            <div className="flex gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditTheme(theme);
                                }}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              {themes.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteTheme(theme.id);
                                  }}
                                >
                                  <Trash2 className="h-4 w-4 text-destructive" />
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>{selectedTheme.name}</CardTitle>
                        <CardDescription>
                          {selectedTheme.description}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={() => handleEditTheme(selectedTheme)}
                        >
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </Button>
                        <Button onClick={handleExportTheme}>
                          <Download className="mr-2 h-4 w-4" /> Export
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">
                          Theme Properties
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-1">Colors</h4>
                            <div className="grid grid-cols-4 gap-2">
                              {Object.entries(selectedTheme.colors).map(
                                ([key, value]) => (
                                  <div
                                    key={key}
                                    className="flex flex-col items-center"
                                  >
                                    <div
                                      className="w-8 h-8 rounded-md border"
                                      style={{ backgroundColor: value }}
                                    />
                                    <span className="text-xs mt-1">{key}</span>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1">
                              Typography
                            </h4>
                            <div className="text-sm">
                              <p>
                                <span className="font-medium">
                                  Font Family:
                                </span>{" "}
                                {selectedTheme.typography.fontFamily}
                              </p>
                              <div className="mt-1">
                                <span className="font-medium">Font Sizes:</span>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {Object.entries(
                                    selectedTheme.typography.fontSize,
                                  ).map(([key, value]) => (
                                    <Badge key={key} variant="outline">
                                      {key}: {value}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1">
                              Border Radius
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {Object.entries(selectedTheme.borderRadius).map(
                                ([key, value]) => (
                                  <Badge key={key} variant="outline">
                                    {key}: {value}
                                  </Badge>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Preview</h3>
                        <ThemePreview theme={selectedTheme} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="export">
            <Card>
              <CardHeader>
                <CardTitle>Export Theme</CardTitle>
                <CardDescription>
                  Export your theme as JSON or CSS variables
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">Export Options</h3>
                      <div className="flex gap-2">
                        <Button onClick={handleExportTheme}>
                          <Download className="mr-2 h-4 w-4" /> JSON
                        </Button>
                        <Button variant="outline" onClick={handleExportCss}>
                          <Download className="mr-2 h-4 w-4" /> CSS Variables
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Export your theme configuration to use in your projects.
                      Choose between JSON format for full theme configuration or
                      CSS variables for direct styling.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">
                          Implementation Guide
                        </h4>
                        <div className="text-sm space-y-2">
                          <p>
                            <span className="font-medium">JSON:</span> Import
                            the JSON file and use it with your theming system.
                          </p>
                          <p>
                            <span className="font-medium">CSS Variables:</span>{" "}
                            Include the CSS file in your project or copy the
                            variables to your stylesheet.
                          </p>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="text-sm font-medium mb-1">
                          Selected Theme
                        </h4>
                        <div className="flex items-center gap-2">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{
                              backgroundColor: selectedTheme.colors.primary,
                            }}
                          />
                          <span>{selectedTheme.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Preview</h3>
                    <div className="relative">
                      <Textarea
                        className="font-mono text-xs h-[400px] bg-muted/50"
                        value={jsonPreview}
                        readOnly
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          navigator.clipboard.writeText(jsonPreview);
                        }}
                      >
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingTheme?.id.startsWith("theme-")
                ? "Create New Theme"
                : "Edit Theme"}
            </DialogTitle>
            <DialogDescription>
              Customize your theme properties. Changes will be previewed in
              real-time.
            </DialogDescription>
          </DialogHeader>

          {editingTheme && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Theme Name</label>
                  <Input
                    value={editingTheme.name}
                    onChange={(e) =>
                      setEditingTheme({ ...editingTheme, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={editingTheme.description}
                    onChange={(e) =>
                      setEditingTheme({
                        ...editingTheme,
                        description: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Colors</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(editingTheme.colors).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-md border"
                          style={{ backgroundColor: value }}
                        />
                        <label className="text-xs w-20">{key}</label>
                        <Input
                          type="color"
                          value={value}
                          className="w-12 h-8 p-0 border-0"
                          onChange={(e) =>
                            setEditingTheme({
                              ...editingTheme,
                              colors: {
                                ...editingTheme.colors,
                                [key]: e.target.value,
                              },
                            })
                          }
                        />
                        <Input
                          type="text"
                          value={value}
                          className="w-24 h-8 text-xs"
                          onChange={(e) =>
                            setEditingTheme({
                              ...editingTheme,
                              colors: {
                                ...editingTheme.colors,
                                [key]: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Typography</h4>
                  <div className="space-y-2">
                    <div>
                      <label className="text-xs">Font Family</label>
                      <Input
                        value={editingTheme.typography.fontFamily}
                        onChange={(e) =>
                          setEditingTheme({
                            ...editingTheme,
                            typography: {
                              ...editingTheme.typography,
                              fontFamily: e.target.value,
                            },
                          })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(editingTheme.typography.fontSize).map(
                        ([key, value]) => (
                          <div key={key} className="flex items-center gap-2">
                            <label className="text-xs w-10">{key}</label>
                            <Input
                              value={value}
                              className="text-xs"
                              onChange={(e) =>
                                setEditingTheme({
                                  ...editingTheme,
                                  typography: {
                                    ...editingTheme.typography,
                                    fontSize: {
                                      ...editingTheme.typography.fontSize,
                                      [key]: e.target.value,
                                    },
                                  },
                                })
                              }
                            />
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Border Radius</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(editingTheme.borderRadius).map(
                      ([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                          <label className="text-xs w-10">{key}</label>
                          <Input
                            value={value}
                            className="text-xs"
                            onChange={(e) =>
                              setEditingTheme({
                                ...editingTheme,
                                borderRadius: {
                                  ...editingTheme.borderRadius,
                                  [key]: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Preview</h3>
                <ThemePreview theme={editingTheme} />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveTheme}>
              <Save className="mr-2 h-4 w-4" /> Save Theme
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ThemeManager;
