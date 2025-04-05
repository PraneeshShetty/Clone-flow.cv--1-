"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Mock template data (should be fetched in a real app)
const templates = [
  {
    id: "1",
    name: "Atlantic Blue",
    description: "Multi-column resume with sidebar left",
    image: "https://ext.same-assets.com/972172114/3650277491.bin",
    categories: ["modern", "professional"],
    features: [
      "Clean two-column layout",
      "Professional sidebar for skills and contact info",
      "Ample space for experience details",
      "ATS-friendly design",
    ],
  },
  {
    id: "2",
    name: "Executive Serif",
    description: "Classic professional black & white template",
    image: "https://ext.same-assets.com/972172114/76253708.bin",
    categories: ["classic", "professional"],
    features: [
      "Elegant serif typography",
      "Traditional single column layout",
      "Ideal for executive positions",
      "Focus on experience and achievements",
    ],
  },
  {
    id: "3",
    name: "Blue Steel",
    description: "Minimalist professional classic design",
    image: "https://ext.same-assets.com/972172114/2125694557.bin",
    categories: ["modern", "professional"],
    features: [
      "Modern minimalist aesthetic",
      "Subtle color accents",
      "Focus on skills and experience",
      "Great for tech and design roles",
    ],
  },
  {
    id: "4",
    name: "Modern Designer",
    description: "Two-column layout for creative professionals",
    image: "https://ext.same-assets.com/972172114/3434108616.bin",
    categories: ["modern", "creative"],
    features: [
      "Unique artistic layout",
      "Perfect for creative industries",
      "Prominent display of portfolio/projects",
      "Visually distinct sections",
    ],
  },
];

export default function TemplatePage() {
  const params = useParams();
  const router = useRouter();
  const [template, setTemplate] = useState<any>(null);

  useEffect(() => {
    const id = params.id?.toString();
    if (id) {
      const foundTemplate = templates.find((t) => t.id === id);
      if (foundTemplate) {
        setTemplate(foundTemplate);
      } else {
        // Template not found, redirect to templates list
        router.push("/templates");
      }
    }
  }, [params.id, router]);

  if (!template) {
    return <div className="container mx-auto py-8 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Button
        variant="ghost"
        className="mb-6 flex items-center gap-2"
        asChild
      >
        <Link href="/templates">
          <ArrowLeft className="w-4 h-4" />
          Back to Templates
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{template.name}</h1>
          <p className="text-lg text-muted-foreground">{template.description}</p>

          <div className="pt-4">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              {template.features.map((feature: string, index: number) => (
                <li key={`feature-${index}`} className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {template.categories.map((category: string) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <Button size="lg" className="w-full" asChild>
              <Link href={`/editor?template=${template.id}`}>
                Use This Template
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="relative aspect-[3/4]">
              <Image
                src={template.image}
                alt={template.name}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
