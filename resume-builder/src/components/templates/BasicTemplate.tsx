"use client";

import { forwardRef } from "react";
import type { ResumeData } from "@/lib/models";

interface BasicTemplateProps {
  data: ResumeData;
}

export const BasicTemplate = forwardRef<HTMLDivElement, BasicTemplateProps>(
  function BasicTemplate({ data }, ref) {
    return (
      <div
        ref={ref}
        className="template bg-white text-black font-sans w-full h-full p-8"
      >
        {/* Header */}
        <header className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {data.personal.firstName} {data.personal.lastName}
              </h1>
              <p className="text-lg text-gray-700">{data.personal.title}</p>
            </div>
            <div className="text-right text-sm text-gray-700">
              <p>{data.contact.phone}</p>
              <p>{data.contact.email}</p>
              <p>
                {data.contact.city}, {data.contact.state} {data.contact.zip}
              </p>
              {data.contact.website && <p>{data.contact.website}</p>}
            </div>
          </div>

          {data.personal.summary && (
            <div className="mt-4">
              <p className="text-sm text-gray-700">{data.personal.summary}</p>
            </div>
          )}
        </header>

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
              Professional Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-3">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold">{exp.company}</h3>
                    <p className="italic">{exp.position}</p>
                  </div>
                  <div className="text-sm text-right">
                    <p>{exp.location}</p>
                    <p>
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-1">{exp.description}</p>
                {exp.highlights.length > 0 && (
                  <ul className="list-disc list-inside text-sm mt-1 ml-2">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
              Education
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold">{edu.school}</h3>
                    <p className="italic">
                      {edu.degree} in {edu.fieldOfStudy}
                    </p>
                  </div>
                  <div className="text-sm text-right">
                    <p>{edu.location}</p>
                    <p>
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                </div>
                {edu.description && (
                  <p className="text-sm mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Two Column Layout for Skills & Languages */}
        <div className="flex gap-4">
          {/* Skills */}
          {data.skills.length > 0 && (
            <section className="flex-1 mb-4">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="text-sm">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="ml-2">
                      {Array.from({ length: skill.level }).map((_, i) => (
                        <span key={i} className="text-gray-700">
                          ●
                        </span>
                      ))}
                      {Array.from({ length: 5 - skill.level }).map((_, i) => (
                        <span key={i} className="text-gray-300">
                          ●
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {data.languages.length > 0 && (
            <section className="flex-1 mb-4">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
                Languages
              </h2>
              <div className="grid grid-cols-1 gap-1">
                {data.languages.map((language) => (
                  <div key={language.id} className="text-sm">
                    <span className="font-semibold">{language.name}</span>
                    <span className="ml-2 italic">{language.proficiency}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Projects */}
        {data.projects.length > 0 && (
          <section className="mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
              Projects
            </h2>
            {data.projects.map((project) => (
              <div key={project.id} className="mb-3">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold">{project.name}</h3>
                    {project.url && (
                      <p className="text-sm text-blue-600">{project.url}</p>
                    )}
                  </div>
                  <div className="text-sm text-right">
                    <p>
                      {project.startDate} - {project.endDate}
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-1">{project.description}</p>
                {project.highlights.length > 0 && (
                  <ul className="list-disc list-inside text-sm mt-1 ml-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
              Certifications
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {data.certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between">
                  <div className="text-sm">
                    <span className="font-semibold">{cert.name}</span>
                    <span className="ml-2">{cert.organization}</span>
                  </div>
                  <div className="text-sm text-right">{cert.date}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Custom Sections */}
        {data.customSections?.map((section) => (
          <section key={section.id} className="mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {section.items.map((item) => (
                <div key={item.id} className="text-sm">
                  {item.content}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  }
);
