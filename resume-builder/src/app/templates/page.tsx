"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye } from "lucide-react";

// Define template categories
const categories = [
  { id: "all", name: "All Templates" },
  { id: "modern", name: "Modern" },
  { id: "classic", name: "Classic" },
  { id: "professional", name: "Professional" },
  { id: "creative", name: "Creative" },
];

// Mock template data
const templates = [
  {
    id: "1",
    name: "Atlantic Blue",
    description: "Multi-column resume with sidebar left",
    image: "https://ext.same-assets.com/972172114/3650277491.bin",
    categories: ["modern", "professional"],
  },
  {
    id: "2",
    name: "Executive Serif",
    description: "Classic professional black & white template",
    image: "https://ext.same-assets.com/972172114/76253708.bin",
    categories: ["classic", "professional"],
  },
  {
    id: "3",
    name: "Blue Steel",
    description: "Minimalist professional classic design",
    image: "https://ext.same-assets.com/972172114/2125694557.bin",
    categories: ["modern", "professional"],
  },
  {
    id: "4",
    name: "Modern Designer",
    description: "Two-column layout for creative professionals",
    image: "https://ext.same-assets.com/972172114/3434108616.bin",
    categories: ["modern", "creative"],
  },
  {
    id: "5",
    name: "Simply Blue",
    description: "Minimalistic professional design",
    image: "https://ext.same-assets.com/972172114/3415123855.bin",
    categories: ["classic", "professional"],
  },
  {
    id: "6",
    name: "Classic One Column",
    description: "Traditional design for professionals",
    image: "https://ext.same-assets.com/972172114/4103866660.bin",
    categories: ["classic"],
  },
  {
    id: "7",
    name: "Blue Accent",
    description: "Simple design with blue accents",
    image: "https://ext.same-assets.com/972172114/3306471348.bin",
    categories: ["classic", "modern"],
  },
  {
    id: "8",
    name: "Professional Multi-column",
    description: "Business expert template",
    image: "https://ext.same-assets.com/972172114/3037430495.bin",
    categories: ["professional"],
  },
  {
    id: "9",
    name: "Border Professional",
    description: "Multi-column with stylish border",
    image: "https://ext.same-assets.com/972172114/1097205141.bin",
    categories: ["modern", "professional"],
  },
  {
    id: "10",
    name: "Professional Design",
    description: "Multi-column professional layout",
    image: "https://ext.same-assets.com/972172114/1980917511.bin",
    categories: ["professional"],
  },
  {
    id: "11",
    name: "Border Style",
    description: "Multi-column with border accents",
    image: "https://ext.same-assets.com/972172114/1690062233.bin",
    categories: ["creative", "modern"],
  },
  {
    id: "12",
    name: "Harvard Classic",
    description: "Sans-serif traditional style",
    image: "https://ext.same-assets.com/972172114/883033990.bin",
    categories: ["classic"],
  },
];

export default function TemplatesPage() {
  const [activeTab, setActiveTab] = useState("all");

  // Filter templates based on active category
  const filteredTemplates = activeTab === "all"
    ? templates
    : templates.filter(template => template.categories.includes(activeTab));

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Resume Templates</h1>
        <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
          Choose from our professionally designed templates and customize them to match your personal style.
          All templates are ATS-friendly and optimized for job applications.
        </p>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="mx-auto flex flex-wrap justify-center mb-6">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTemplates.map((template) => (
                <Card key={template.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={template.image}
                        alt={template.name}
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/60">
                        <div className="space-y-3">
                          <Button variant="secondary" size="sm" asChild className="w-32">
                            <Link href={`/templates/${template.id}`} className="flex items-center gap-2 justify-center">
                              <Eye className="w-4 h-4" /> Preview
                            </Link>
                          </Button>
                          <Button variant="default" size="sm" asChild className="w-32">
                            <Link href={`/editor?template=${template.id}`}>Use Template</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{template.name}</h3>
                      <p className="text-sm text-foreground/70 mb-4">{template.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {template.categories.map((category) => (
                          <span
                            key={`${template.id}-${category}`}
                            className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs"
                          >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12 bg-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="mb-6 text-foreground/70 max-w-2xl mx-auto">
            Start with a blank template and customize every aspect of your resume to create a unique design that matches your style.
          </p>
          <Button size="lg" asChild>
            <Link href="/editor?template=blank">Start with Blank Template</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
