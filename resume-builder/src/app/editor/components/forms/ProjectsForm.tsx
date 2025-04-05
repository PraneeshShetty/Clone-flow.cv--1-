"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useResumeContext } from "@/context/ResumeContext";

export default function ProjectsForm() {
  const { resumeData, addProject, addCertification, addCustomSection } = useResumeContext();

  return (
    <div>
      {/* Projects Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Projects</h3>
          <Button
            onClick={addProject}
            size="sm"
            className="flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Add Project
          </Button>
        </div>

        <div className="space-y-6">
          {resumeData.projects.length === 0 ? (
            <div className="p-8 text-center border border-dashed rounded-lg">
              <p className="text-muted-foreground">
                No projects added yet. Click the button above to add your
                projects.
              </p>
            </div>
          ) : (
            resumeData.projects.map((project) => (
              <div
                key={project.id}
                className="p-4 border rounded-lg bg-card hover:shadow-sm"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.startDate} - {project.endDate}
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Certifications</h3>
          <Button
            onClick={addCertification}
            size="sm"
            className="flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Add Certification
          </Button>
        </div>

        <div className="space-y-6">
          {resumeData.certifications.length === 0 ? (
            <div className="p-8 text-center border border-dashed rounded-lg">
              <p className="text-muted-foreground">
                No certifications added yet. Click the button above to add your
                certifications.
              </p>
            </div>
          ) : (
            resumeData.certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-4 border rounded-lg bg-card hover:shadow-sm"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.organization}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {cert.date}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Custom Sections */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Custom Sections</h3>
          <Button
            onClick={addCustomSection}
            size="sm"
            className="flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Add Section
          </Button>
        </div>

        <div className="space-y-6">
          {!resumeData.customSections || resumeData.customSections.length === 0 ? (
            <div className="p-8 text-center border border-dashed rounded-lg">
              <p className="text-muted-foreground">
                No custom sections added yet. Add sections like &quot;Volunteer Experience&quot;,
                &quot;Publications&quot;, or anything else you want to highlight.
              </p>
            </div>
          ) : (
            resumeData.customSections.map((section) => (
              <div
                key={section.id}
                className="p-4 border rounded-lg bg-card hover:shadow-sm"
              >
                <h3 className="font-medium">{section.title}</h3>
                {section.items.length > 0 ? (
                  <ul className="mt-2 text-sm space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>{item.content}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground mt-2">
                    No items in this section
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
