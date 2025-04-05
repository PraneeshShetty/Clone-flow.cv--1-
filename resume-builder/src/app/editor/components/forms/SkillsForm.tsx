"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useResumeContext } from "@/context/ResumeContext";

export default function SkillsForm() {
  const { resumeData, addSkill, addLanguage } = useResumeContext();

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Skills</h3>
          <Button
            onClick={addSkill}
            size="sm"
            className="flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Add Skill
          </Button>
        </div>

        <div className="space-y-4">
          {resumeData.skills.length === 0 ? (
            <div className="p-6 text-center border border-dashed rounded-lg">
              <p className="text-muted-foreground">
                No skills added yet. Click the button above to add your skills.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeData.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex justify-between items-center p-3 border rounded-lg bg-card"
                >
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={`skill-${skill.id}-${i}`}
                          className={`w-3 h-3 rounded-full ${
                            i < skill.level ? "bg-secondary" : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Languages</h3>
          <Button
            onClick={addLanguage}
            size="sm"
            className="flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Add Language
          </Button>
        </div>

        <div className="space-y-4">
          {resumeData.languages.length === 0 ? (
            <div className="p-6 text-center border border-dashed rounded-lg">
              <p className="text-muted-foreground">
                No languages added yet. Click the button above to add your
                languages.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeData.languages.map((language) => (
                <div
                  key={language.id}
                  className="flex justify-between items-center p-3 border rounded-lg bg-card"
                >
                  <div>
                    <p className="font-medium">{language.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {language.proficiency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
