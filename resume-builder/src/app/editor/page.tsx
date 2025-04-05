"use client";

import { ResumeProvider } from "@/context/ResumeContext";
import EditorClient from "./EditorClient";

export default function EditorPage() {
  return (
    <ResumeProvider>
      <EditorClient />
    </ResumeProvider>
  );
}
