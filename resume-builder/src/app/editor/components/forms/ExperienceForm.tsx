"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useResumeContext } from "@/context/ResumeContext";

export default function ExperienceForm() {
  const { resumeData, addExperience } = useResumeContext();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-muted-foreground">
          Add your work experience, including internships
        </p>
        <Button
          onClick={addExperience}
          size="sm"
          className="flex items-center gap-1"
        >
          <Plus className="w-4 h-4" /> Add Experience
        </Button>
      </div>

      <div className="space-y-6">
        {resumeData.experience.length === 0 ? (
          <div className="p-8 text-center border border-dashed rounded-lg">
            <p className="text-muted-foreground">
              No work experience added yet. Click the button above to add your
              first work experience.
            </p>
          </div>
        ) : (
          resumeData.experience.map((exp) => (
            <div
              key={exp.id}
              className="p-4 border rounded-lg bg-card hover:shadow-sm"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{exp.position}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company}, {exp.location}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
