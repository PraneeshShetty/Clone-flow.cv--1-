"use client";

import { createContext, useState, useContext, type ReactNode } from "react";
import type { ResumeData, SectionType, TemplateConfig } from "@/lib/models";
import { sampleResumeData } from "@/lib/sample-data";
import { v4 as uuidv4 } from "uuid";

interface ResumeContextType {
  resumeData: ResumeData;
  templateId: number | string;
  templateConfig: TemplateConfig;
  activeSection: SectionType;
  setResumeData: (data: ResumeData) => void;
  setTemplateId: (id: number | string) => void;
  setTemplateConfig: (config: TemplateConfig) => void;
  setActiveSection: (section: SectionType) => void;
  updatePersonal: (data: Partial<ResumeData["personal"]>) => void;
  updateContact: (data: Partial<ResumeData["contact"]>) => void;
  addExperience: () => void;
  updateExperience: (id: string, data: Partial<ResumeData["experience"][0]>) => void;
  removeExperience: (id: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, data: Partial<ResumeData["education"][0]>) => void;
  removeEducation: (id: string) => void;
  addSkill: () => void;
  updateSkill: (id: string, data: Partial<ResumeData["skills"][0]>) => void;
  removeSkill: (id: string) => void;
  addLanguage: () => void;
  updateLanguage: (id: string, data: Partial<ResumeData["languages"][0]>) => void;
  removeLanguage: (id: string) => void;
  addProject: () => void;
  updateProject: (id: string, data: Partial<ResumeData["projects"][0]>) => void;
  removeProject: (id: string) => void;
  addCertification: () => void;
  updateCertification: (id: string, data: Partial<ResumeData["certifications"][0]>) => void;
  removeCertification: (id: string) => void;
  addCustomSection: () => void;
  updateCustomSection: (id: string, title: string) => void;
  removeCustomSection: (id: string) => void;
  addCustomSectionItem: (sectionId: string) => void;
  updateCustomSectionItem: (sectionId: string, itemId: string, content: string) => void;
  removeCustomSectionItem: (sectionId: string, itemId: string) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function useResumeContext() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResumeContext must be used within a ResumeProvider");
  }
  return context;
}

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData>(sampleResumeData);
  const [templateId, setTemplateId] = useState<number | string>(1);
  const [activeSection, setActiveSection] = useState<SectionType>("personal");
  const [templateConfig, setTemplateConfig] = useState<TemplateConfig>({
    primaryColor: "#231a38",
    secondaryColor: "#bc5863",
    fontFamily: "DM Sans",
    fontSize: "medium",
    spacing: "normal",
    layoutType: "two-column",
  });

  const updatePersonal = (data: Partial<ResumeData["personal"]>) => {
    setResumeData((prev) => ({
      ...prev,
      personal: { ...prev.personal, ...data },
    }));
  };

  const updateContact = (data: Partial<ResumeData["contact"]>) => {
    setResumeData((prev) => ({
      ...prev,
      contact: { ...prev.contact, ...data },
    }));
  };

  const addExperience = () => {
    const newExperience = {
      id: uuidv4(),
      company: "New Company",
      position: "Position Title",
      startDate: "",
      endDate: "",
      description: "",
      location: "",
      highlights: [""],
    };

    setResumeData((prev) => ({
      ...prev,
      experience: [newExperience, ...prev.experience],
    }));
  };

  const updateExperience = (
    id: string,
    data: Partial<ResumeData["experience"][0]>
  ) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, ...data } : exp
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      school: "School/University Name",
      degree: "Degree",
      fieldOfStudy: "Field of Study",
      startDate: "",
      endDate: "",
      description: "",
      location: "",
    };

    setResumeData((prev) => ({
      ...prev,
      education: [newEducation, ...prev.education],
    }));
  };

  const updateEducation = (
    id: string,
    data: Partial<ResumeData["education"][0]>
  ) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, ...data } : edu
      ),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  const addSkill = () => {
    const newSkill = {
      id: uuidv4(),
      name: "New Skill",
      level: 3,
    };

    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  const updateSkill = (id: string, data: Partial<ResumeData["skills"][0]>) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill) =>
        skill.id === id ? { ...skill, ...data } : skill
      ),
    }));
  };

  const removeSkill = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== id),
    }));
  };

  const addLanguage = () => {
    const newLanguage = {
      id: uuidv4(),
      name: "New Language",
      proficiency: "Basic" as const,
    };

    setResumeData((prev) => ({
      ...prev,
      languages: [...prev.languages, newLanguage],
    }));
  };

  const updateLanguage = (
    id: string,
    data: Partial<ResumeData["languages"][0]>
  ) => {
    setResumeData((prev) => ({
      ...prev,
      languages: prev.languages.map((lang) =>
        lang.id === id ? { ...lang, ...data } : lang
      ),
    }));
  };

  const removeLanguage = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      languages: prev.languages.filter((lang) => lang.id !== id),
    }));
  };

  const addProject = () => {
    const newProject = {
      id: uuidv4(),
      name: "New Project",
      description: "",
      startDate: "",
      endDate: "",
      highlights: [""],
    };

    setResumeData((prev) => ({
      ...prev,
      projects: [newProject, ...prev.projects],
    }));
  };

  const updateProject = (
    id: string,
    data: Partial<ResumeData["projects"][0]>
  ) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) =>
        proj.id === id ? { ...proj, ...data } : proj
      ),
    }));
  };

  const removeProject = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((proj) => proj.id !== id),
    }));
  };

  const addCertification = () => {
    const newCertification = {
      id: uuidv4(),
      name: "New Certification",
      organization: "",
      date: "",
    };

    setResumeData((prev) => ({
      ...prev,
      certifications: [newCertification, ...prev.certifications],
    }));
  };

  const updateCertification = (
    id: string,
    data: Partial<ResumeData["certifications"][0]>
  ) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((cert) =>
        cert.id === id ? { ...cert, ...data } : cert
      ),
    }));
  };

  const removeCertification = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((cert) => cert.id !== id),
    }));
  };

  const addCustomSection = () => {
    const newSection = {
      id: uuidv4(),
      title: "New Section",
      items: [
        {
          id: uuidv4(),
          content: "",
        },
      ],
    };

    setResumeData((prev) => ({
      ...prev,
      customSections: prev.customSections
        ? [...prev.customSections, newSection]
        : [newSection],
    }));
  };

  const updateCustomSection = (id: string, title: string) => {
    setResumeData((prev) => ({
      ...prev,
      customSections: prev.customSections?.map((section) =>
        section.id === id ? { ...section, title } : section
      ),
    }));
  };

  const removeCustomSection = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      customSections: prev.customSections?.filter(
        (section) => section.id !== id
      ),
    }));
  };

  const addCustomSectionItem = (sectionId: string) => {
    const newItem = {
      id: uuidv4(),
      content: "",
    };

    setResumeData((prev) => ({
      ...prev,
      customSections: prev.customSections?.map((section) =>
        section.id === sectionId
          ? { ...section, items: [...section.items, newItem] }
          : section
      ),
    }));
  };

  const updateCustomSectionItem = (
    sectionId: string,
    itemId: string,
    content: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      customSections: prev.customSections?.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId ? { ...item, content } : item
              ),
            }
          : section
      ),
    }));
  };

  const removeCustomSectionItem = (sectionId: string, itemId: string) => {
    setResumeData((prev) => ({
      ...prev,
      customSections: prev.customSections?.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.filter((item) => item.id !== itemId),
            }
          : section
      ),
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        templateId,
        templateConfig,
        activeSection,
        setResumeData,
        setTemplateId,
        setTemplateConfig,
        setActiveSection,
        updatePersonal,
        updateContact,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        addSkill,
        updateSkill,
        removeSkill,
        addLanguage,
        updateLanguage,
        removeLanguage,
        addProject,
        updateProject,
        removeProject,
        addCertification,
        updateCertification,
        removeCertification,
        addCustomSection,
        updateCustomSection,
        removeCustomSection,
        addCustomSectionItem,
        updateCustomSectionItem,
        removeCustomSectionItem,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}
