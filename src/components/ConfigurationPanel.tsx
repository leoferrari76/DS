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
    <div className="bg-background p-6 rounded-lg w-full border-0 shadow-none">
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

      <Tabs
        defaultValue="colors"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-4 w-full mb-6">
          <TabsTrigger value="colors" className="w-full">
            <Palette className="mr-2 h-4 w-4" />
            Colors
          </TabsTrigger>
          <TabsTrigger value="typography" className="w-full">
            <Type className="mr-2 h-4 w-4" />
            Typography
          </TabsTrigger>
          <TabsTrigger value="spacing" className="w-full">
            <div className="mr-2 h-4 w-4 flex items-center justify-center">
              ↔
            </div>
            Spacing
          </TabsTrigger>
          <TabsTrigger value="border" className="w-full">
            <div className="mr-2 h-4 w-4 border border-current rounded-md"></div>
            Border
          </TabsTrigger>
        </TabsList>

        {/* Conteúdo das abas e Preview em uma única coluna */}
        <div className="space-y-6">
          <TabsContent value="colors" className="space-y-0 mt-0 w-full">
            <Card className="mt-0 border-0 shadow-none">
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
                <CardDescription>
                  Configure the color palette for your design system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  {colors.map((colorItem, colorIndex) => (
                    <div
                      key={colorItem.name}
                      className="flex items-center gap-1"
                    >
                      <div
                        className="w-8 h-8 rounded-md border cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
                        style={{ backgroundColor: colorItem.value }}
                        onClick={() => {
                          const input = document.createElement('input');
                          input.type = 'color';
                          input.value = colorItem.value;
                          input.onchange = (e) => {
                            const target = e.target as HTMLInputElement;
                            handleColorChange(colorIndex, target.value);
                          };
                          input.click();
                        }}
                      />
                      <Label
                        htmlFor={`color-${colorItem.name}`}
                        className="capitalize"
                      >
                        {colorItem.name}
                      </Label>
                    </div>
                  ))}
                </div>
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

          <TabsContent value="typography" className="space-y-4 w-full">
            <Card className="border-0 shadow-none">
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

          <TabsContent value="spacing" className="space-y-4 w-full">
            <Card className="border-0 shadow-none">
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

          <TabsContent value="border" className="space-y-4 w-full">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <CardTitle>Border Radius Tokens</CardTitle>
                <CardDescription>
                  Reference values for border radius tokens
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-none mb-2"></div>
                  <p className="text-sm font-medium">$border-radius-none</p>
                  <p className="text-xs text-muted-foreground">0px</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-xs mb-2"></div>
                  <p className="text-sm font-medium">$border-radius-xs</p>
                  <p className="text-xs text-muted-foreground">4px</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-sm mb-2"></div>
                  <p className="text-sm font-medium">$border-radius-sm</p>
                  <p className="text-xs text-muted-foreground">12px</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-md mb-2"></div>
                  <p className="text-sm font-medium">$border-radius-md</p>
                  <p className="text-xs text-muted-foreground">24px</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">$border-radius-lg</p>
                  <p className="text-xs text-muted-foreground">32px</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full mb-2"></div>
                  <p className="text-sm font-medium">$border-radius-circle</p>
                  <p className="text-xs text-muted-foreground">50%</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-pill mb-2"></div>
                  <p className="text-sm font-medium">$border-radius-pill</p>
                  <p className="text-xs text-muted-foreground">≥ 500px</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ConfigurationPanel;
