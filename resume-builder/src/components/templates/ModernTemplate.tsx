"use client";

import { forwardRef } from "react";
import type { ResumeData } from "@/lib/models";

interface ModernTemplateProps {
  data: ResumeData;
}

export const ModernTemplate = forwardRef<HTMLDivElement, ModernTemplateProps>(
  function ModernTemplate({ data }, ref) {
    return (
      <div
        ref={ref}
        className="template bg-white text-black font-sans w-full h-full flex"
      >
        {/* Sidebar */}
        <div className="w-1/3 bg-[#231a38] text-white p-6">
          {/* Photo */}
          {data.personal.photo && (
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={data.personal.photo}
                  alt={`${data.personal.firstName} ${data.personal.lastName}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Contact Info */}
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b border-[#bc5863] pb-1 mb-3">
              Contact
            </h2>
            <div className="space-y-2 text-sm">
              <p>{data.contact.phone}</p>
              <p>{data.contact.email}</p>
              <p>
                {data.contact.city}, {data.contact.state} {data.contact.zip}
              </p>
              {data.contact.website && <p>{data.contact.website}</p>}
              {data.contact.linkedin && (
                <p>LinkedIn: {data.contact.linkedin}</p>
              )}
              {data.contact.github && <p>GitHub: {data.contact.github}</p>}
              {data.contact.twitter && <p>Twitter: {data.contact.twitter}</p>}
            </div>
          </div>

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-[#bc5863] pb-1 mb-3">
                Skills
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>
                        {Array.from({ length: skill.level }).map((_, i) => (
                          <span key={`filled-${skill.id}-${i}`} className="text-[#bc5863]">
                            ●
                          </span>
                        ))}
                        {Array.from({ length: 5 - skill.level }).map((_, i) => (
                          <span key={`empty-${skill.id}-${i}`} className="text-gray-500">
                            ○
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {data.languages.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-[#bc5863] pb-1 mb-3">
                Languages
              </h2>
              <div className="space-y-2 text-sm">
                {data.languages.map((language) => (
                  <div key={language.id} className="flex justify-between">
                    <span>{language.name}</span>
                    <span className="italic">{language.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-[#bc5863] pb-1 mb-3">
                Certifications
              </h2>
              <div className="space-y-2 text-sm">
                {data.certifications.map((cert) => (
                  <div key={cert.id}>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-gray-300">{cert.organization}</p>
                    <p className="text-gray-400">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="w-2/3 p-6">
          {/* Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-[#231a38]">
              {data.personal.firstName} {data.personal.lastName}
            </h1>
            <p className="text-xl text-[#bc5863] font-medium">
              {data.personal.title}
            </p>

            {data.personal.summary && (
              <div className="mt-4">
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
                  Professional Summary
                </h2>
                <p className="text-sm text-gray-700">{data.personal.summary}</p>
              </div>
            )}
          </header>

          {/* Experience */}
          {data.experience.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">
                Professional Experience
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[#231a38]">
                        {exp.position}
                      </h3>
                      <p className="font-medium text-[#bc5863]">
                        {exp.company}, {exp.location}
                      </p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm mt-1 text-gray-700">
                    {exp.description}
                  </p>
                  {exp.highlights.length > 0 && (
                    <ul className="list-disc list-inside text-sm mt-1 ml-2 text-gray-700">
                      {exp.highlights.map((highlight, i) => (
                        <li key={`${exp.id}-highlight-${i}`}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">
                Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[#231a38]">{edu.school}</h3>
                      <p className="font-medium text-[#bc5863]">
                        {edu.degree} in {edu.fieldOfStudy}, {edu.location}
                      </p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-sm mt-1 text-gray-700">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">
                Projects
              </h2>
              {data.projects.map((project) => (
                <div key={project.id} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[#231a38]">
                        {project.name}
                      </h3>
                      {project.url && (
                        <p className="text-sm text-blue-600">{project.url}</p>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>
                        {project.startDate} - {project.endDate}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm mt-1 text-gray-700">
                    {project.description}
                  </p>
                  {project.highlights.length > 0 && (
                    <ul className="list-disc list-inside text-sm mt-1 ml-2 text-gray-700">
                      {project.highlights.map((highlight, i) => (
                        <li key={`${project.id}-highlight-${i}`}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Custom Sections */}
          {data.customSections?.map((section) => (
            <section key={section.id} className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <div key={item.id} className="text-sm text-gray-700">
                    {item.content}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }
);
