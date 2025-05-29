import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TokenShowcaseProps {
  activeSubmenu: "border" | "color" | "types" | "space";
}

const TokenShowcase: React.FC<TokenShowcaseProps> = ({ activeSubmenu }) => {
  return (
    <div className="w-full space-y-6">
      {activeSubmenu === "border" && (
        <>
          {/* Border Radius Tokens */}
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

          {/* Border Width Tokens */}
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle>Border Width Tokens</CardTitle>
              <CardDescription>
                Reference values for border width tokens
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-background border border-current border-0 mb-2"></div>
                <p className="text-sm font-medium">$border-width-none</p>
                <p className="text-xs text-muted-foreground">0px</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-background border border-current border-thin mb-2"></div>
                <p className="text-sm font-medium">$border-width-thin</p>
                <p className="text-xs text-muted-foreground">1px</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-background border border-current border-medium mb-2"></div>
                <p className="text-sm font-medium">$border-width-medium</p>
                <p className="text-xs text-muted-foreground">2px</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-background border border-current border-thick mb-2"></div>
                <p className="text-sm font-medium">$border-width-thick</p>
                <p className="text-xs text-muted-foreground">4px</p>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {activeSubmenu === "color" && (
        <>
          {/* Color Tokens Section */}
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle>Color Tokens</CardTitle>
              <CardDescription>Color palette tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Brand Primary */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Brand Primary</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#FFE3E3' }}></div>
                    <p className="text-sm font-medium">$color-brand-primary-lightest</p>
                    <p className="text-xs text-muted-foreground">#FFE3E3</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#FC867F' }}></div>
                    <p className="text-sm font-medium">$color-brand-primary-light</p>
                    <p className="text-xs text-muted-foreground">#FC867F</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#DA291C' }}></div>
                    <p className="text-sm font-medium">$color-brand-primary-medium</p>
                    <p className="text-xs text-muted-foreground">#DA291C</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#B41E13' }}></div>
                    <p className="text-sm font-medium">$color-brand-primary-dark</p>
                    <p className="text-xs text-muted-foreground">#B41E13</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#83170F' }}></div>
                    <p className="text-sm font-medium">$color-brand-primary-darkest</p>
                    <p className="text-xs text-muted-foreground">#83170F</p>
                  </div>
                </div>
              </div>

              {/* Neutral */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Neutral</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#FFFFFF' }}></div>
                    <p className="text-sm font-medium">$color-neutral-lightest</p>
                    <p className="text-xs text-muted-foreground">#FFFFFF</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#F8F8F8' }}></div>
                    <p className="text-sm font-medium">$color-neutral-light</p>
                    <p className="text-xs text-muted-foreground">#F8F8F8</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#DBDBDB' }}></div>
                    <p className="text-sm font-medium">$color-neutral-medium</p>
                    <p className="text-xs text-muted-foreground">#DBDBDB</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#525252' }}></div>
                    <p className="text-sm font-medium">$color-neutral-dark</p>
                    <p className="text-xs text-muted-foreground">#525252</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#1F1D1D' }}></div>
                    <p className="text-sm font-medium">$color-neutral-darkest</p>
                    <p className="text-xs text-muted-foreground">#1F1D1D</p>
                  </div>
                </div>
              </div>

              {/* Support Highlights */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Support Highlights</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#FFFAAD' }}></div>
                    <p className="text-sm font-medium">$color-support-highlight-lightest</p>
                    <p className="text-xs text-muted-foreground">#FFFAAD</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#FFE458' }}></div>
                    <p className="text-sm font-medium">$color-support-highlight-light</p>
                    <p className="text-xs text-muted-foreground">#FFE458</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#FFC722' }}></div>
                    <p className="text-sm font-medium">$color-support-highlight-medium</p>
                    <p className="text-xs text-muted-foreground">#FFC722</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#FB9C2D' }}></div>
                    <p className="text-sm font-medium">$color-support-highlight-dark</p>
                    <p className="text-xs text-muted-foreground">#FB9C2D</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#B84D01' }}></div>
                    <p className="text-sm font-medium">$color-support-highlight-darkest</p>
                    <p className="text-xs text-muted-foreground">#B84D01</p>
                  </div>
                </div>
              </div>

              {/* Support Success */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Support Success</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#DDF9ED' }}></div>
                    <p className="text-sm font-medium">$color-support-success-light</p>
                    <p className="text-xs text-muted-foreground">#DDF9ED</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#006B4F' }}></div>
                    <p className="text-sm font-medium">$color-support-success-dark</p>
                    <p className="text-xs text-muted-foreground">#006B4F</p>
                  </div>
                </div>
              </div>

              {/* Support Danger */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Support Danger</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#FFFAAD' }}></div>
                    <p className="text-sm font-medium">$color-support-danger-light</p>
                    <p className="text-xs text-muted-foreground">#FFFAAD</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#B84D01' }}></div>
                    <p className="text-sm font-medium">$color-support-danger-dark</p>
                    <p className="text-xs text-muted-foreground">#B84D01</p>
                  </div>
                </div>
              </div>

              {/* Accessibility */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Accessibility</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: '#FFF333' }}></div>
                    <p className="text-sm font-medium">$color-accessibility</p>
                    <p className="text-xs text-muted-foreground">#FFF333</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {activeSubmenu === "types" && (
        <>
          {/* Typography Tokens Section */}
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle>Types Tokens</CardTitle>
              <CardDescription>Font family, size, weight, line height, and text effect tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Font Family */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Font Family</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <p className="font-sans text-base mb-1">$font-family-base</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: Roboto</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-serif text-base mb-1">$font-family-highlight</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: AMX</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-mono text-base mb-1">$font-family-code</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: monospace</p>
                  </div>
                </div>
              </div>

              {/* Font Size */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Font Size</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                  {/* Assuming 'aa' is a visual representation, we'll just display the text and value */}
                  <div className="flex flex-col items-center text-center">
                    <p style={{ fontSize: '12px' }} className="font-bold mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-size-xxxxs</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 12px</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                     <p style={{ fontSize: '14px' }} className="font-bold mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-size-xxs</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 14px</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                     <p style={{ fontSize: '16px' }} className="font-bold mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-size-xs</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 16px</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                     <p style={{ fontSize: '20px' }} className="font-bold mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-size-sm</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 20px</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                     <p style={{ fontSize: '24px' }} className="font-bold mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-size-md</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 24px</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                     <p style={{ fontSize: '28px' }} className="font-bold mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-size-lg</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 28px</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                     <p style={{ fontSize: '32px' }} className="font-bold mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-size-xl</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 32px</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                     <p style={{ fontSize: '36px' }} className="font-bold mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-size-xxl</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 36px</p>
                  </div>
                   <div className="flex flex-col items-center text-center">
                     <p style={{ fontSize: '48px' }} className="font-bold mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-size-xxxl</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 48px</p>
                  </div>
                </div>
              </div>

              {/* Font Line Height */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Font Line Height</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   <div className="flex flex-col">
                    <p className="text-sm font-medium">$font-line-height-none</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 0</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">$font-line-height-sm</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 100%</p>
                  </div>
                   <div className="flex flex-col">
                    <p className="text-sm font-medium">$font-line-height-md</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 130%</p>
                  </div>
                   <div className="flex flex-col">
                    <p className="text-sm font-medium">$font-line-height-lg</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 140%</p>
                  </div>
                </div>
              </div>

              {/* Font Weight */}
              <div>
                 <h4 className="text-lg font-semibold mb-4">Font Weight</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                   <div className="flex flex-col items-center text-center">
                    <p className="text-xl font-light mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-weight-light</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 300</p>
                  </div>
                   <div className="flex flex-col items-center text-center">
                    <p className="text-xl font-normal mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-weight-regular</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 400</p>
                  </div>
                   <div className="flex flex-col items-center text-center">
                    <p className="text-xl font-medium mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-weight-medium</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 500</p>
                  </div>
                   <div className="flex flex-col items-center text-center">
                    <p className="text-xl font-bold mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-weight-bold</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 700</p>
                  </div>
                   <div className="flex flex-col items-center text-center">
                    <p className="text-xl font-black mb-1">Aa</p>
                    <p className="text-sm font-medium">$font-weight-black</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: 800</p>
                  </div>
                </div>
              </div>

              {/* Text Effect */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Text Effect</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <p className="underline text-base mb-1">Example</p>
                    <p className="text-sm font-medium">$text-underline</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: Underline</p>
                  </div>
                   <div className="flex flex-col">
                    <p className="line-through text-base mb-1">Example</p>
                    <p className="text-sm font-medium">$text-strike</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: Line-through</p>
                  </div>
                   <div className="flex flex-col">
                    <p className="uppercase text-base mb-1">Example</p>
                    <p className="text-sm font-medium">$text-uppercase</p>
                    <p className="text-xs text-muted-foreground">Valor de referência: Uppercase</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {activeSubmenu === "space" && (
        <>
          {/* Spacing Tokens Section */}
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle>Spacing Tokens</CardTitle>
              <CardDescription>Spacing scale and unit tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Spacing Squish */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Spacing Squish</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                  {/* XXXS: 4px 8px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ paddingTop: '4px', paddingBottom: '4px', paddingLeft: '8px', paddingRight: '8px' }}>
                      <div className="w-full h-8 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-squish-xxxs</p>
                    <p className="text-xs text-muted-foreground">4px 8px</p>
                  </div>
                  {/* XXS: 4px 16px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ paddingTop: '4px', paddingBottom: '4px', paddingLeft: '16px', paddingRight: '16px' }}>
                       <div className="w-full h-8 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-squish-xxs</p>
                    <p className="text-xs text-muted-foreground">4px 16px</p>
                  </div>
                  {/* XS: 8px 16px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ paddingTop: '8px', paddingBottom: '8px', paddingLeft: '16px', paddingRight: '16px' }}>
                      <div className="w-full h-8 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-squish-xs</p>
                    <p className="text-xs text-muted-foreground">8px 16px</p>
                  </div>
                  {/* SM: 8px 24px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ paddingTop: '8px', paddingBottom: '8px', paddingLeft: '24px', paddingRight: '24px' }}>
                      <div className="w-full h-8 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-squish-sm</p>
                    <p className="text-xs text-muted-foreground">8px 24px</p>
                  </div>
                  {/* MD: 16px 24px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' }}>
                      <div className="w-full h-8 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-squish-md</p>
                    <p className="text-xs text-muted-foreground">16px 24px</p>
                  </div>
                  {/* LG: 16px 32px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '32px', paddingRight: '32px' }}>
                       <div className="w-full h-8 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-squish-lg</p>
                    <p className="text-xs text-muted-foreground">16px 32px</p>
                  </div>
                  {/* XL: 24px 32px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ paddingTop: '24px', paddingBottom: '24px', paddingLeft: '32px', paddingRight: '32px' }}>
                       <div className="w-full h-8 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-squish-xl</p>
                    <p className="text-xs text-muted-foreground">24px 32px</p>
                  </div>
                  {/* XXL: 32px 48px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ paddingTop: '32px', paddingBottom: '32px', paddingLeft: '48px', paddingRight: '48px' }}>
                       <div className="w-full h-8 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-squish-xxl</p>
                    <p className="text-xs text-muted-foreground">32px 48px</p>
                  </div>
                </div>
              </div>

              {/* Spacing Inset Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Spacing Inset</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                   {/* XXXS: 4px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ padding: '4px' }}>
                      <div className="w-full h-12 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inset-xxxs</p>
                    <p className="text-xs text-muted-foreground">4px</p>
                  </div>
                  {/* XXS: 8px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ padding: '8px' }}>
                       <div className="w-full h-12 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inset-xxs</p>
                    <p className="text-xs text-muted-foreground">8px</p>
                  </div>
                  {/* XS: 12px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ padding: '12px' }}>
                      <div className="w-full h-12 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inset-xs</p>
                    <p className="text-xs text-muted-foreground">12px</p>
                  </div>
                  {/* SM: 16px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ padding: '16px' }}>
                      <div className="w-full h-12 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inset-sm</p>
                    <p className="text-xs text-muted-foreground">16px</p>
                  </div>
                  {/* MD: 24px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ padding: '24px' }}>
                      <div className="w-full h-12 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inset-md</p>
                    <p className="text-xs text-muted-foreground">24px</p>
                  </div>
                  {/* LG: 32px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ padding: '32px' }}>
                       <div className="w-full h-12 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inset-lg</p>
                    <p className="text-xs text-muted-foreground">32px</p>
                  </div>
                  {/* XL: 48px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 p-2 flex items-center justify-center" style={{ padding: '48px' }}>
                       <div className="w-full h-12 bg-green-400"></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inset-xl</p>
                    <p className="text-xs text-muted-foreground">48px</p>
                  </div>
                </div>
              </div>

              {/* Spacing Stack Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Spacing Stack</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                   {/* XXXS: 4px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 flex items-center justify-center">
                      <div className="w-full bg-orange-400" style={{ height: '4px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-stack-xxxs</p>
                    <p className="text-xs text-muted-foreground">4px</p>
                  </div>
                  {/* XXS: 8px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 flex items-center justify-center">
                       <div className="w-full bg-orange-400" style={{ height: '8px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-stack-xxs</p>
                    <p className="text-xs text-muted-foreground">8px</p>
                  </div>
                  {/* XS: 12px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 flex items-center justify-center">
                      <div className="w-full bg-orange-400" style={{ height: '12px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-stack-xs</p>
                    <p className="text-xs text-muted-foreground">12px</p>
                  </div>
                  {/* SM: 16px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 flex items-center justify-center">
                      <div className="w-full bg-orange-400" style={{ height: '16px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-stack-sm</p>
                    <p className="text-xs text-muted-foreground">16px</p>
                  </div>
                  {/* MD: 24px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 flex items-center justify-center">
                      <div className="w-full bg-orange-400" style={{ height: '24px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-stack-md</p>
                    <p className="text-xs text-muted-foreground">24px</p>
                  </div>
                  {/* LG: 32px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 flex items-center justify-center">
                       <div className="w-full bg-orange-400" style={{ height: '32px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-stack-lg</p>
                    <p className="text-xs text-muted-foreground">32px</p>
                  </div>
                  {/* XL: 48px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 flex items-center justify-center">
                       <div className="w-full bg-orange-400" style={{ height: '48px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-stack-xl</p>
                    <p className="text-xs text-muted-foreground">48px</p>
                  </div>
                  {/* XXL: 64px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 flex items-center justify-center">
                       <div className="w-full bg-orange-400" style={{ height: '64px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-stack-xxl</p>
                    <p className="text-xs text-muted-foreground">64px</p>
                  </div>
                  {/* XXXL: 96px */}
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 flex items-center justify-center">
                       <div className="w-full bg-orange-400" style={{ height: '96px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-stack-xxxl</p>
                    <p className="text-xs text-muted-foreground">96px</p>
                  </div>
                </div>
              </div>

              {/* Spacing Inline Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Spacing Inline</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                   {/* XXXS: 4px 8px -> Show 8px */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-start w-full bg-gray-200 p-2">
                      <div className="bg-green-400" style={{ width: '8px', height: '32px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inline-xxxs</p>
                    <p className="text-xs text-muted-foreground">8px</p>
                  </div>
                  {/* XXS: 8px 12px -> Show 12px */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-start w-full bg-gray-200 p-2">
                       <div className="bg-green-400" style={{ width: '12px', height: '32px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inline-xxs</p>
                    <p className="text-xs text-muted-foreground">12px</p>
                  </div>
                  {/* XS: 12px 16px -> Show 16px */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-start w-full bg-gray-200 p-2">
                      <div className="bg-green-400" style={{ width: '16px', height: '32px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inline-xs</p>
                    <p className="text-xs text-muted-foreground">16px</p>
                  </div>
                  {/* SM: 16px 24px -> Show 24px */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-start w-full bg-gray-200 p-2">
                      <div className="bg-green-400" style={{ width: '24px', height: '32px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inline-sm</p>
                    <p className="text-xs text-muted-foreground">24px</p>
                  </div>
                  {/* MD: 24px 32px -> Show 32px */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-start w-full bg-gray-200 p-2">
                      <div className="bg-green-400" style={{ width: '32px', height: '32px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inline-md</p>
                    <p className="text-xs text-muted-foreground">32px</p>
                  </div>
                  {/* LG: 32px 48px -> Show 48px */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-start w-full bg-gray-200 p-2">
                      <div className="bg-green-400" style={{ width: '48px', height: '32px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inline-lg</p>
                    <p className="text-xs text-muted-foreground">48px</p>
                  </div>
                  {/* XL: 48px 64px -> Show 64px */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-start w-full bg-gray-200 p-2">
                      <div className="bg-green-400" style={{ width: '64px', height: '32px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inline-xl</p>
                    <p className="text-xs text-muted-foreground">64px</p>
                  </div>
                   {/* XXL: 64px 96px (Extrapolated based on Stack) -> Show 96px*/}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-start w-full bg-gray-200 p-2">
                      <div className="bg-green-400" style={{ width: '96px', height: '32px' }}></div>
                    </div>
                    <p className="text-sm font-medium">$spacing-inline-xxl</p>
                    <p className="text-xs text-muted-foreground">96px</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default TokenShowcase; 