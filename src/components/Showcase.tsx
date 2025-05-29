import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Showcase = () => {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Botões</CardTitle>
          <CardDescription>
            Exemplos de botões com diferentes variantes e tamanhos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <TooltipProvider>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="default">Default</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Variant: default</p>
                  <p>Size: default (Padrão)</p>
                  <p>Classes Tailwind para Tamanho: h-9 px-4 py-2</p>
                  <p>Estimativa (px): Altura ~36px, Padding Horizontal ~16px, Padding Vertical ~8px</p>
                  <p>Curvatura: rounded-md (~24px - $border-radius-md)</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="destructive">Destructive</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Variant: destructive</p>
                  <p>Size: default (Padrão)</p>
                  <p>Classes Tailwind para Tamanho: h-9 px-4 py-2</p>
                  <p>Estimativa (px): Altura ~36px, Padding Horizontal ~16px, Padding Vertical ~8px</p>
                  <p>Curvatura: rounded-md (~24px - $border-radius-md)</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Outline</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Variant: outline</p>
                  <p>Size: default (Padrão)</p>
                  <p>Classes Tailwind para Tamanho: h-9 px-4 py-2</p>
                  <p>Estimativa (px): Altura ~36px, Padding Horizontal ~16px, Padding Vertical ~8px</p>
                  <p>Curvatura: rounded-md (~24px - $border-radius-md)</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Secondary</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Variant: secondary</p>
                  <p>Size: default (Padrão)</p>
                  <p>Classes Tailwind para Tamanho: h-9 px-4 py-2</p>
                  <p>Estimativa (px): Altura ~36px, Padding Horizontal ~16px, Padding Vertical ~8px</p>
                  <p>Curvatura: rounded-md (~24px - $border-radius-md)</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">Ghost</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Variant: ghost</p>
                  <p>Size: default (Padrão)</p>
                  <p>Classes Tailwind para Tamanho: h-9 px-4 py-2</p>
                  <p>Estimativa (px): Altura ~36px, Padding Horizontal ~16px, Padding Vertical ~8px</p>
                  <p>Curvatura: rounded-md (~24px - $border-radius-md)</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="link">Link</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Variant: link</p>
                  <p>Size: default (Padrão)</p>
                  <p>Classes Tailwind para Tamanho: h-9 px-4 py-2</p>
                  <p>Estimativa (px): Altura ~36px, Padding Horizontal ~16px, Padding Vertical ~8px</p>
                  <p>Curvatura: rounded-md (~24px - $border-radius-md)</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm">Small</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Size: sm (Pequeno)</p>
                  <p>Classes Tailwind para Tamanho: h-8 px-3 text-xs</p>
                  <p>Estimativa (px): Altura ~32px, Padding Horizontal ~12px, Tamanho do Texto ~12px</p>
                  <p>Curvatura: rounded-md (~24px - $border-radius-md)</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="default">Default</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Size: default (Padrão)</p>
                  <p>Classes Tailwind para Tamanho: h-9 px-4 py-2</p>
                  <p>Estimativa (px): Altura ~36px, Padding Horizontal ~16px, Padding Vertical ~8px</p>
                  <p>Curvatura: rounded-md (~24px - $border-radius-md)</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="lg">Large</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Size: lg (Grande)</p>
                  <p>Classes Tailwind para Tamanho: h-10 px-8</p>
                  <p>Estimativa (px): Altura ~40px, Padding Horizontal ~32px</p>
                  <p>Curvatura: rounded-md (~24px - $border-radius-md)</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon">🔍</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Size: icon (Ícone)</p>
                  <p>Classes Tailwind para Tamanho: h-9 w-9</p>
                  <p>Estimativa (px): Altura ~36px, Largura ~36px</p>
                  <p>Curvatura: rounded-md (~24px - $border-radius-md)</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default Showcase; 