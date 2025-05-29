import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ConfigurationPanel from "./ConfigurationPanel";
import ComponentShowcase from "./ComponentShowcase";
import ThemeManager from "./ThemeManager";
import CLIGuide from "./CLIGuide";
import TokenShowcase from "./TokenShowcase";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Palette, Layers, Terminal, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Home = () => {
  const [activeTab, setActiveTab] = useState("configuration");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTokenSubmenu, setActiveTokenSubmenu] = useState<"border" | "color" | "types" | "space">("border");

  const tabs = [
    {
      id: "configuration",
      label: "Configuration",
      icon: <Palette className="h-5 w-5" />,
      component: <ConfigurationPanel />,
    },
    {
      id: "tokens",
      label: "Tokens",
      icon: <Sparkles className="h-5 w-5" />,
      component: <TokenShowcase activeSubmenu={activeTokenSubmenu} />,
      submenus: [
        { id: "border" as "border", label: "Border" },
        { id: "color" as "color", label: "Color" },
        { id: "types" as "types", label: "Types" },
        { id: "space" as "space", label: "Space" },
      ],
    },
    {
      id: "components",
      label: "Components",
      icon: <Layers className="h-5 w-5" />,
      component: <ComponentShowcase />,
    },
    {
      id: "themes",
      label: "Themes",
      icon: <BookOpen className="h-5 w-5" />,
      component: <ThemeManager />,
    },
    {
      id: "cli",
      label: "CLI Guide",
      icon: <Terminal className="h-5 w-5" />,
      component: <CLIGuide />,
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 border-r bg-card">
        <div className="p-6">
          <h1 className="text-2xl font-bold">White Label DS</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Design System Framework
          </p>
        </div>
        <Separator />
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <Button
                  variant={activeTab === tab.id ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id !== "tokens") {
                      setActiveTokenSubmenu("border");
                    }
                  }}
                >
                  {tab.icon}
                  <span className="ml-3">{tab.label}</span>
                </Button>
                {activeTab === "tokens" && tab.id === "tokens" && tab.submenus && (
                  <ul className="ml-6 mt-2 space-y-1">
                    {tab.submenus.map((submenu) => (
                      <li key={submenu.id}>
                        <Button
                          variant={activeTokenSubmenu === submenu.id ? "secondary" : "ghost"}
                          className="w-full justify-start text-sm"
                          onClick={() => setActiveTokenSubmenu(submenu.id)}
                        >
                          {submenu.label}
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              WL
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">White Label</p>
              <p className="text-xs text-muted-foreground">v1.0.0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b bg-card z-10 flex items-center px-4">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="p-6">
              <h1 className="text-2xl font-bold">White Label DS</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Design System Framework
              </p>
            </div>
            <Separator />
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <Button
                      variant={activeTab === tab.id ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => {
                        setActiveTab(tab.id);
                        if (tab.id !== "tokens") {
                          setActiveTokenSubmenu("border");
                        }
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {tab.icon}
                      <span className="ml-3">{tab.label}</span>
                    </Button>
                    {activeTab === "tokens" && tab.id === "tokens" && tab.submenus && (
                      <ul className="ml-6 mt-2 space-y-1">
                        {tab.submenus.map((submenu) => (
                          <li key={submenu.id}>
                            <Button
                              variant={activeTokenSubmenu === submenu.id ? "secondary" : "ghost"}
                              className="w-full justify-start text-sm"
                              onClick={() => {
                                setActiveTokenSubmenu(submenu.id);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {submenu.label}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-bold ml-4">White Label DS</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="md:hidden h-16" /> {/* Spacer for mobile header */}
        <div className="flex-1 overflow-auto p-6">
          {activeTab === "tokens" ? (
            <TokenShowcase activeSubmenu={activeTokenSubmenu} />
          ) : (
            tabs.find((tab) => tab.id === activeTab)?.component
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
