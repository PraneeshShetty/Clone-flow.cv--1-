"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TemplateSelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

// Mock template data
const templates = [
  {
    id: "1",
    name: "Basic Template",
    image: "https://ext.same-assets.com/972172114/3650277491.bin",
    description: "Simple and clean professional design",
  },
  {
    id: "2",
    name: "Modern Template",
    image: "https://ext.same-assets.com/972172114/76253708.bin",
    description: "Contemporary design with sidebar",
  },
  {
    id: "3",
    name: "Creative Template",
    image: "https://ext.same-assets.com/972172114/2125694557.bin",
    description: "Stylish design for creative professionals",
  },
  {
    id: "4",
    name: "Minimalist Template",
    image: "https://ext.same-assets.com/972172114/3434108616.bin",
    description: "Clean, minimalist approach",
  },
];

export default function TemplateSelector({ selectedId, onSelect }: TemplateSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {templates.map((template) => (
        <Card
          key={template.id}
          className={`overflow-hidden cursor-pointer transition-all hover:scale-105 ${
            selectedId === template.id
              ? "ring-2 ring-secondary border-secondary"
              : "hover:border-gray-300"
          }`}
          onClick={() => onSelect(template.id)}
        >
          <CardContent className="p-0">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={template.image}
                alt={template.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium">{template.name}</h3>
              <p className="text-xs text-muted-foreground">
                {template.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
