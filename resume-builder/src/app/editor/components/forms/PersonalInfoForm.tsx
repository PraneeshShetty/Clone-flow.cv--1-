"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useResumeContext } from "@/context/ResumeContext";
import { Save } from "lucide-react";

export default function PersonalInfoForm() {
  const { resumeData, updatePersonal } = useResumeContext();
  const [formData, setFormData] = useState({
    firstName: resumeData.personal.firstName,
    lastName: resumeData.personal.lastName,
    title: resumeData.personal.title,
    summary: resumeData.personal.summary,
    photo: resumeData.personal.photo || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePersonal(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium">
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium">
            Last Name
          </label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium">
          Professional Title
        </label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Full Stack Developer"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="photo" className="text-sm font-medium">
          Photo URL
        </label>
        <Input
          id="photo"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          placeholder="Enter URL to your professional photo"
        />
        {formData.photo && (
          <div className="mt-2">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src={formData.photo}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="summary" className="text-sm font-medium">
          Professional Summary
        </label>
        <Textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          placeholder="Write a brief summary of your professional background and key strengths"
          className="min-h-[120px]"
        />
      </div>

      <Button type="submit" className="flex items-center gap-2">
        <Save className="w-4 h-4" />
        Save Changes
      </Button>
    </form>
  );
}
