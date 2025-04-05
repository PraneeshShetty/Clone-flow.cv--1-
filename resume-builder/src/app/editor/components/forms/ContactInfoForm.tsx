"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useResumeContext } from "@/context/ResumeContext";
import { Save } from "lucide-react";

export default function ContactInfoForm() {
  const { resumeData, updateContact } = useResumeContext();
  const [formData, setFormData] = useState({
    email: resumeData.contact.email,
    phone: resumeData.contact.phone,
    address: resumeData.contact.address,
    city: resumeData.contact.city,
    state: resumeData.contact.state,
    zip: resumeData.contact.zip,
    country: resumeData.contact.country,
    website: resumeData.contact.website || "",
    linkedin: resumeData.contact.linkedin || "",
    github: resumeData.contact.github || "",
    twitter: resumeData.contact.twitter || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateContact(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="address" className="text-sm font-medium">
          Street Address
        </label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="123 Main St"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label htmlFor="city" className="text-sm font-medium">
            City
          </label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="state" className="text-sm font-medium">
            State/Province
          </label>
          <Input
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="zip" className="text-sm font-medium">
            ZIP/Postal Code
          </label>
          <Input
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="ZIP Code"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="country" className="text-sm font-medium">
          Country
        </label>
        <Input
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
        />
      </div>

      <h3 className="text-lg font-medium pt-4 pb-2">Online Presence</h3>

      <div className="space-y-2">
        <label htmlFor="website" className="text-sm font-medium">
          Website
        </label>
        <Input
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="yourwebsite.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="linkedin" className="text-sm font-medium">
          LinkedIn
        </label>
        <Input
          id="linkedin"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="linkedin.com/in/yourprofile"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="github" className="text-sm font-medium">
          GitHub
        </label>
        <Input
          id="github"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="github.com/yourusername"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="twitter" className="text-sm font-medium">
          Twitter
        </label>
        <Input
          id="twitter"
          name="twitter"
          value={formData.twitter}
          onChange={handleChange}
          placeholder="twitter.com/yourusername"
        />
      </div>

      <Button type="submit" className="flex items-center gap-2">
        <Save className="w-4 h-4" />
        Save Changes
      </Button>
    </form>
  );
}
