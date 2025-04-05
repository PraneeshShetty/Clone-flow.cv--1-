"use client";

import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BasicTemplate } from "@/components/templates/BasicTemplate";
import { ModernTemplate } from "@/components/templates/ModernTemplate";
import ResumeEditor from "./components/ResumeEditor";
import TemplateSelector from "./components/TemplateSelector";
import { useReactToPrint } from "react-to-print";
import { Download, Share2 } from "lucide-react";
import { useResumeContext } from "@/context/ResumeContext";

export default function EditorClient() {
  const { resumeData } = useResumeContext();
  const searchParams = useSearchParams();
  const initialTemplateId = searchParams.get("template") || "1";
  const [selectedTemplateId, setSelectedTemplateId] = useState(initialTemplateId);
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Resume Builder</h1>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={handlePrint}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
          {/* Template selector */}
          <div className="bg-card rounded-lg p-6 h-fit">
            <h2 className="text-lg font-bold mb-4">Choose Template</h2>
            <TemplateSelector
              selectedId={selectedTemplateId}
              onSelect={setSelectedTemplateId}
            />
          </div>

          {/* Resume preview */}
          <div className="bg-card rounded-lg p-6 flex justify-center">
            <div
              className="resume-container shadow-lg"
              style={{ width: "100%", maxWidth: "800px" }}
            >
              <div className="resume-preview">
                {selectedTemplateId === "1" && (
                  <BasicTemplate ref={printRef} data={resumeData} />
                )}
                {selectedTemplateId === "2" && (
                  <ModernTemplate ref={printRef} data={resumeData} />
                )}
                {/* Add more template options here */}
              </div>
            </div>
          </div>
        </div>

        {/* Editor Section */}
        <div className="mt-8">
          <ResumeEditor templateId={selectedTemplateId} />
        </div>
      </div>
    </div>
  );
}
