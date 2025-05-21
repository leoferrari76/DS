import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Copy, Terminal, CheckCircle2, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CommandProps {
  command: string;
  description: string;
}

const CommandItem = ({ command, description }: CommandProps) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between p-3 border rounded-md bg-muted/30 mb-3">
      <div className="flex items-center space-x-3">
        <Terminal className="h-5 w-5 text-muted-foreground" />
        <code className="font-mono text-sm">{command}</code>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-xs text-muted-foreground">{description}</span>
        <Button variant="ghost" size="sm" onClick={copyToClipboard}>
          {copied ? (
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

const CLIGuide = () => {
  const [projectName, setProjectName] = React.useState("my-white-label-app");
  const [selectedTheme, setSelectedTheme] = React.useState("default");

  return (
    <div className="w-full p-6 bg-background">
      <Card>
        <CardHeader>
          <CardTitle>White Label CLI Tool</CardTitle>
          <CardDescription>
            Quickly scaffold new projects with your custom white label design
            system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="installation">
            <TabsList className="mb-4">
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="commands">Commands</TabsTrigger>
              <TabsTrigger value="builder">Command Builder</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>

            <TabsContent value="installation" className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Install the White Label CLI tool globally to use it across all
                  your projects.
                </AlertDescription>
              </Alert>

              <CommandItem
                command="npm install -g white-label-cli"
                description="Install CLI globally"
              />

              <CommandItem
                command="yarn global add white-label-cli"
                description="Alternative using Yarn"
              />

              <Separator className="my-6" />

              <h3 className="text-lg font-medium mb-2">Verify Installation</h3>
              <CommandItem
                command="white-label --version"
                description="Check installed version"
              />
            </TabsContent>

            <TabsContent value="commands" className="space-y-4">
              <div className="grid gap-4">
                <h3 className="text-lg font-medium">Available Commands</h3>

                <CommandItem
                  command="white-label create <project-name>"
                  description="Create a new project"
                />

                <CommandItem
                  command="white-label themes list"
                  description="List available themes"
                />

                <CommandItem
                  command="white-label themes import <path-to-json>"
                  description="Import a theme configuration"
                />

                <CommandItem
                  command="white-label components add <component-name>"
                  description="Add a component to existing project"
                />

                <CommandItem
                  command="white-label help"
                  description="Show help information"
                />
              </div>
            </TabsContent>

            <TabsContent value="builder" className="space-y-6">
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Project Configuration
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium"
                        htmlFor="project-name"
                      >
                        Project Name
                      </label>
                      <Input
                        id="project-name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="my-white-label-app"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="theme">
                        Base Theme
                      </label>
                      <select
                        id="theme"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        value={selectedTheme}
                        onChange={(e) => setSelectedTheme(e.target.value)}
                      >
                        <option value="default">Default</option>
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Generated Command</h3>
                  <div className="p-4 border rounded-md bg-muted/30">
                    <code className="font-mono text-sm">
                      white-label create {projectName} --theme {selectedTheme}
                    </code>
                  </div>
                  <Button className="mt-2">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Command
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="examples" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Example Projects</h3>

                <div className="border rounded-md p-4 space-y-3">
                  <h4 className="font-medium">Basic React Project</h4>
                  <CommandItem
                    command="white-label create my-react-app --template react --theme default"
                    description="React with default theme"
                  />
                </div>

                <div className="border rounded-md p-4 space-y-3">
                  <h4 className="font-medium">Next.js Dashboard</h4>
                  <CommandItem
                    command="white-label create admin-dashboard --template nextjs --theme dark --components dashboard,auth"
                    description="Next.js with dark theme and dashboard components"
                  />
                </div>

                <div className="border rounded-md p-4 space-y-3">
                  <h4 className="font-medium">E-commerce Site</h4>
                  <CommandItem
                    command="white-label create ecommerce-store --template vite --theme custom --theme-path ./my-brand-theme.json"
                    description="Vite project with custom theme"
                  />
                </div>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-medium mb-2">Terminal Preview</h4>
                <div className="bg-black text-green-400 p-4 rounded-md font-mono text-sm space-y-1 h-64 overflow-y-auto">
                  <div>$ white-label create my-brand-app --theme custom</div>
                  <div>✓ Checking dependencies...</div>
                  <div>✓ Creating project directory...</div>
                  <div>✓ Downloading template files...</div>
                  <div>✓ Installing dependencies...</div>
                  <div>✓ Applying custom theme...</div>
                  <div>✓ Configuring project...</div>
                  <div className="text-white">
                    Success! Created my-brand-app at
                    /Users/developer/projects/my-brand-app
                  </div>
                  <div className="text-white">
                    Inside that directory, you can run several commands:
                  </div>
                  <div className="pl-2">npm start</div>
                  <div className="pl-4 text-gray-400">
                    Starts the development server.
                  </div>
                  <div className="pl-2">npm run build</div>
                  <div className="pl-4 text-gray-400">
                    Bundles the app into static files for production.
                  </div>
                  <div className="text-white mt-2">
                    We suggest that you begin by typing:
                  </div>
                  <div className="pl-2">cd my-brand-app</div>
                  <div className="pl-2">npm start</div>
                  <div className="text-white mt-2">Happy coding!</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CLIGuide;
