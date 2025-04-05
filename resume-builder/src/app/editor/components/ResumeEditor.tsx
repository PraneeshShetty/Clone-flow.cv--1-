"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import ContactInfoForm from "./forms/ContactInfoForm";
import ExperienceForm from "./forms/ExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";
import ProjectsForm from "./forms/ProjectsForm";
import { useResumeContext } from "@/context/ResumeContext";
import type { SectionType } from "@/lib/models";

interface ResumeEditorProps {
  templateId: string;
}

export default function ResumeEditor({ templateId }: ResumeEditorProps) {
  const { setActiveSection, activeSection } = useResumeContext();

  const handleTabChange = (value: string) => {
    setActiveSection(value as SectionType);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Tabs
          defaultValue={activeSection}
          className="w-full"
          onValueChange={handleTabChange}
          value={activeSection}
        >
          <TabsList className="flex flex-wrap mb-6">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <h2 className="text-xl font-bold mb-4">Personal Information</h2>
            <PersonalInfoForm />
          </TabsContent>

          <TabsContent value="contact">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <ContactInfoForm />
          </TabsContent>

          <TabsContent value="experience">
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
            <ExperienceForm />
          </TabsContent>

          <TabsContent value="education">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <EducationForm />
          </TabsContent>

          <TabsContent value="skills">
            <h2 className="text-xl font-bold mb-4">Skills & Languages</h2>
            <SkillsForm />
          </TabsContent>

          <TabsContent value="projects">
            <h2 className="text-xl font-bold mb-4">Projects & Certifications</h2>
            <ProjectsForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
