import React, { useState } from "react";
import { Search, Filter, Copy, Check, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface Component {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  preview: React.ReactNode;
}

const ComponentShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Mock component data
  const components: Component[] = [
    {
      id: "button-1",
      name: "Button",
      description:
        "A clickable button component with various styles and states.",
      category: "inputs",
      code: `import { Button } from "./ui/button";

<Button variant="default">Button</Button>`,
      preview: <Button>Button</Button>,
    },
    {
      id: "card-1",
      name: "Card",
      description: "A container component for grouping related content.",
      category: "layout",
      code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
</Card>`,
      preview: (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "input-1",
      name: "Input",
      description: "A form input component for collecting user data.",
      category: "inputs",
      code: `import { Input } from "./ui/input";

<Input placeholder="Enter text here..." />`,
      preview: <Input placeholder="Enter text here..." />,
    },
    {
      id: "badge-1",
      name: "Badge",
      description: "A small visual indicator component.",
      category: "display",
      code: `import { Badge } from "./ui/badge";

<Badge>New</Badge>`,
      preview: <Badge>New</Badge>,
    },
    {
      id: "select-1",
      name: "Select",
      description: "A dropdown selection component.",
      category: "inputs",
      code: `import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`,
      preview: (
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      ),
    },
  ];

  // Categories derived from components
  const categories = [
    "all",
    ...new Set(components.map((component) => component.category)),
  ];

  // Filter components based on search query and selected category
  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle copy code to clipboard
  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-background p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Component Showcase</h1>
          <p className="text-muted-foreground">
            Browse and implement components from the white label design system.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search components..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-muted-foreground h-4 w-4" />
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredComponents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No components found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((component) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{component.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {component.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {component.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="bg-muted/40 rounded-md p-6 flex items-center justify-center mb-4">
                      {component.preview}
                    </div>
                    <Tabs defaultValue="code">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="code">Code</TabsTrigger>
                        <TabsTrigger value="usage">Usage</TabsTrigger>
                      </TabsList>
                      <TabsContent value="code" className="mt-2">
                        <div className="relative bg-muted rounded-md p-4">
                          <pre className="text-xs overflow-x-auto">
                            <code>{component.code}</code>
                          </pre>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="absolute top-2 right-2"
                                  onClick={() =>
                                    handleCopyCode(component.id, component.code)
                                  }
                                >
                                  {copiedId === component.id ? (
                                    <Check className="h-4 w-4" />
                                  ) : (
                                    <Copy className="h-4 w-4" />
                                  )}
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                {copiedId === component.id
                                  ? "Copied!"
                                  : "Copy code"}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </TabsContent>
                      <TabsContent value="usage" className="mt-2">
                        <div className="bg-muted rounded-md p-4">
                          <p className="text-sm">
                            Import the component from the UI library and use it
                            in your project.
                          </p>
                          <p className="text-sm mt-2">
                            See documentation for more details on props and
                            variants.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Documentation
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentShowcase;
