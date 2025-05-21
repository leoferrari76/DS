import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertCircle,
  Check,
  Copy,
  Download,
  Eye,
  Palette,
  Save,
  Type,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ColorConfig {
  name: string;
  value: string;
}

interface TypographyConfig {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
}

interface SpacingConfig {
  unit: string;
  scale: number;
}

interface BorderConfig {
  radius: number;
  width: number;
}

const ConfigurationPanel = () => {
  const [activeTab, setActiveTab] = useState("colors");
  const [colors, setColors] = useState<ColorConfig[]>([
    { name: "primary", value: "#0f172a" },
    { name: "secondary", value: "#6366f1" },
    { name: "accent", value: "#22c55e" },
    { name: "background", value: "#ffffff" },
    { name: "foreground", value: "#0f172a" },
    { name: "muted", value: "#f1f5f9" },
    { name: "destructive", value: "#ef4444" },
  ]);

  const [typography, setTypography] = useState<TypographyConfig>({
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: "400",
  });

  const [spacing, setSpacing] = useState<SpacingConfig>({
    unit: "rem",
    scale: 0.25,
  });

  const [border, setBorder] = useState<BorderConfig>({
    radius: 0.5,
    width: 1,
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...colors];
    newColors[index].value = value;
    setColors(newColors);
    setIsSaved(false);
  };

  const handleTypographyChange = (
    key: keyof TypographyConfig,
    value: string,
  ) => {
    setTypography((prev) => ({ ...prev, [key]: value }));
    setIsSaved(false);
  };

  const handleSpacingChange = (key: keyof SpacingConfig, value: any) => {
    setSpacing((prev) => ({ ...prev, [key]: value }));
    setIsSaved(false);
  };

  const handleBorderChange = (key: keyof BorderConfig, value: number) => {
    setBorder((prev) => ({ ...prev, [key]: value }));
    setIsSaved(false);
  };

  const handleSave = () => {
    // In a real implementation, this would save to a database or file
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleExport = () => {
    const config = {
      colors,
      typography,
      spacing,
      border,
      darkMode: isDarkMode,
    };

    const blob = new Blob([JSON.stringify(config, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "theme-config.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-background p-6 rounded-lg w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Configuration Panel</h1>
          <p className="text-muted-foreground">
            Customize your white label design system
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Configuration
          </Button>
        </div>
      </div>

      {isSaved && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-600">
            Configuration saved successfully!
          </AlertDescription>
        </Alert>
      )}

      <div className="flex gap-6">
        <div className="w-2/3">
          <Tabs
            defaultValue="colors"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="colors">
                <Palette className="mr-2 h-4 w-4" />
                Colors
              </TabsTrigger>
              <TabsTrigger value="typography">
                <Type className="mr-2 h-4 w-4" />
                Typography
              </TabsTrigger>
              <TabsTrigger value="spacing">
                <div className="mr-2 h-4 w-4 flex items-center justify-center">
                  ↔
                </div>
                Spacing
              </TabsTrigger>
              <TabsTrigger value="border">
                <div className="mr-2 h-4 w-4 border border-current rounded-md"></div>
                Border
              </TabsTrigger>
            </TabsList>

            <TabsContent value="colors" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Color Palette</CardTitle>
                  <CardDescription>
                    Configure the color palette for your design system
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {colors.map((color, index) => (
                    <div
                      key={color.name}
                      className="grid grid-cols-3 items-center gap-4"
                    >
                      <Label
                        htmlFor={`color-${color.name}`}
                        className="capitalize"
                      >
                        {color.name}
                      </Label>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded border"
                          style={{ backgroundColor: color.value }}
                        />
                        <Input
                          id={`color-${color.name}`}
                          type="text"
                          value={color.value}
                          onChange={(e) =>
                            handleColorChange(index, e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Input
                          type="color"
                          value={color.value}
                          onChange={(e) =>
                            handleColorChange(index, e.target.value)
                          }
                          className="w-full h-8"
                        />
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2 pt-4">
                    <Switch
                      id="dark-mode"
                      checked={isDarkMode}
                      onCheckedChange={setIsDarkMode}
                    />
                    <Label htmlFor="dark-mode">Enable Dark Mode</Label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="typography" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Typography Settings</CardTitle>
                  <CardDescription>
                    Configure font family, size, and weight
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="font-family">Font Family</Label>
                    <div className="col-span-2">
                      <Select
                        value={typography.fontFamily}
                        onValueChange={(value) =>
                          handleTypographyChange("fontFamily", value)
                        }
                      >
                        <SelectTrigger id="font-family">
                          <SelectValue placeholder="Select font family" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Inter, sans-serif">
                            Inter
                          </SelectItem>
                          <SelectItem value="Roboto, sans-serif">
                            Roboto
                          </SelectItem>
                          <SelectItem value="'Open Sans', sans-serif">
                            Open Sans
                          </SelectItem>
                          <SelectItem value="'Playfair Display', serif">
                            Playfair Display
                          </SelectItem>
                          <SelectItem value="system-ui, sans-serif">
                            System UI
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="font-size">Base Font Size</Label>
                    <div className="col-span-2">
                      <Select
                        value={typography.fontSize}
                        onValueChange={(value) =>
                          handleTypographyChange("fontSize", value)
                        }
                      >
                        <SelectTrigger id="font-size">
                          <SelectValue placeholder="Select base font size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="14px">14px</SelectItem>
                          <SelectItem value="16px">16px</SelectItem>
                          <SelectItem value="18px">18px</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="font-weight">Base Font Weight</Label>
                    <div className="col-span-2">
                      <Select
                        value={typography.fontWeight}
                        onValueChange={(value) =>
                          handleTypographyChange("fontWeight", value)
                        }
                      >
                        <SelectTrigger id="font-weight">
                          <SelectValue placeholder="Select font weight" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="300">Light (300)</SelectItem>
                          <SelectItem value="400">Regular (400)</SelectItem>
                          <SelectItem value="500">Medium (500)</SelectItem>
                          <SelectItem value="600">Semibold (600)</SelectItem>
                          <SelectItem value="700">Bold (700)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="spacing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Spacing Settings</CardTitle>
                  <CardDescription>
                    Configure spacing units and scale
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="spacing-unit">Spacing Unit</Label>
                    <div className="col-span-2">
                      <Select
                        value={spacing.unit}
                        onValueChange={(value) =>
                          handleSpacingChange("unit", value)
                        }
                      >
                        <SelectTrigger id="spacing-unit">
                          <SelectValue placeholder="Select spacing unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="px">Pixels (px)</SelectItem>
                          <SelectItem value="rem">REM</SelectItem>
                          <SelectItem value="em">EM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="spacing-scale">
                      Base Scale ({spacing.scale})
                    </Label>
                    <div className="col-span-2">
                      <Slider
                        id="spacing-scale"
                        min={0.125}
                        max={1}
                        step={0.125}
                        value={[spacing.scale]}
                        onValueChange={(value) =>
                          handleSpacingChange("scale", value[0])
                        }
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-medium mb-2">
                      Spacing Preview
                    </h4>
                    <div className="flex gap-2 items-end">
                      {[1, 2, 3, 4, 5].map((multiplier) => (
                        <div
                          key={multiplier}
                          className="bg-primary/20 border border-primary/30"
                          style={{
                            width: `${spacing.scale * multiplier * (spacing.unit === "px" ? 16 : 1)}${spacing.unit}`,
                            height: `${spacing.scale * multiplier * (spacing.unit === "px" ? 16 : 1)}${spacing.unit}`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="border" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Border Settings</CardTitle>
                  <CardDescription>
                    Configure border radius and width
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="border-radius">
                      Border Radius ({border.radius}rem)
                    </Label>
                    <div className="col-span-2">
                      <Slider
                        id="border-radius"
                        min={0}
                        max={2}
                        step={0.125}
                        value={[border.radius]}
                        onValueChange={(value) =>
                          handleBorderChange("radius", value[0])
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="border-width">
                      Border Width ({border.width}px)
                    </Label>
                    <div className="col-span-2">
                      <Slider
                        id="border-width"
                        min={0}
                        max={4}
                        step={1}
                        value={[border.width]}
                        onValueChange={(value) =>
                          handleBorderChange("width", value[0])
                        }
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-medium mb-2">Border Preview</h4>
                    <div className="flex gap-4">
                      <div
                        className="w-16 h-16 bg-background border-primary"
                        style={{
                          borderRadius: `${border.radius}rem`,
                          borderWidth: `${border.width}px`,
                          borderStyle: "solid",
                        }}
                      />
                      <div
                        className="w-16 h-16 bg-background border-primary"
                        style={{
                          borderRadius: `${border.radius * 2}rem`,
                          borderWidth: `${border.width}px`,
                          borderStyle: "solid",
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-1/3">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </CardTitle>
              <CardDescription>
                Live preview of your configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="p-4 rounded-lg mb-4 transition-all"
                style={{
                  backgroundColor: isDarkMode
                    ? colors.find((c) => c.name === "background")?.value ||
                      "#000"
                    : colors.find((c) => c.name === "background")?.value ||
                      "#fff",
                  color: isDarkMode
                    ? "#fff"
                    : colors.find((c) => c.name === "foreground")?.value ||
                      "#000",
                  fontFamily: typography.fontFamily,
                  fontSize: typography.fontSize,
                  fontWeight: typography.fontWeight,
                }}
              >
                <h3
                  className="mb-2"
                  style={{
                    color:
                      colors.find((c) => c.name === "primary")?.value || "#000",
                  }}
                >
                  Sample Heading
                </h3>
                <p className="mb-4">
                  This is a preview of your theme configuration with sample
                  text.
                </p>

                <div className="flex gap-2 mb-4">
                  <button
                    className="px-3 py-1 rounded"
                    style={{
                      backgroundColor:
                        colors.find((c) => c.name === "primary")?.value ||
                        "#000",
                      color: "#fff",
                      borderRadius: `${border.radius}rem`,
                    }}
                  >
                    Primary
                  </button>
                  <button
                    className="px-3 py-1 rounded"
                    style={{
                      backgroundColor:
                        colors.find((c) => c.name === "secondary")?.value ||
                        "#000",
                      color: "#fff",
                      borderRadius: `${border.radius}rem`,
                    }}
                  >
                    Secondary
                  </button>
                </div>

                <div
                  className="p-2 mb-4"
                  style={{
                    backgroundColor:
                      colors.find((c) => c.name === "muted")?.value ||
                      "#f1f5f9",
                    borderRadius: `${border.radius}rem`,
                  }}
                >
                  <p
                    style={{
                      color: isDarkMode
                        ? "#000"
                        : colors.find((c) => c.name === "foreground")?.value ||
                          "#000",
                    }}
                  >
                    Muted background container
                  </p>
                </div>

                <div
                  className="p-2"
                  style={{
                    borderWidth: `${border.width}px`,
                    borderStyle: "solid",
                    borderColor:
                      colors.find((c) => c.name === "accent")?.value ||
                      "#22c55e",
                    borderRadius: `${border.radius}rem`,
                  }}
                >
                  <p>Accent border container</p>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Configuration JSON</h4>
                <div className="relative">
                  <pre className="text-xs p-2 bg-muted rounded-md overflow-auto max-h-40">
                    {JSON.stringify(
                      {
                        colors,
                        typography,
                        spacing,
                        border,
                        darkMode: isDarkMode,
                      },
                      null,
                      2,
                    )}
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        JSON.stringify(
                          {
                            colors,
                            typography,
                            spacing,
                            border,
                            darkMode: isDarkMode,
                          },
                          null,
                          2,
                        ),
                      );
                    }}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPanel;
