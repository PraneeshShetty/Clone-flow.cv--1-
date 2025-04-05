"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useResumeContext } from "@/context/ResumeContext";

export default function EducationForm() {
  const { resumeData, addEducation } = useResumeContext();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-muted-foreground">
          Add your educational background
        </p>
        <Button
          onClick={addEducation}
          size="sm"
          className="flex items-center gap-1"
        >
          <Plus className="w-4 h-4" /> Add Education
        </Button>
      </div>

      <div className="space-y-6">
        {resumeData.education.length === 0 ? (
          <div className="p-8 text-center border border-dashed rounded-lg">
            <p className="text-muted-foreground">
              No education added yet. Click the button above to add your
              educational background.
            </p>
          </div>
        ) : (
          resumeData.education.map((edu) => (
            <div
              key={edu.id}
              className="p-4 border rounded-lg bg-card hover:shadow-sm"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{edu.school}</h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.degree} in {edu.fieldOfStudy}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
