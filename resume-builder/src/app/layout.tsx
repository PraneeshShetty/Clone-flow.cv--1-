import type { Metadata } from "next";
import { dmSans } from './fonts';
import "./globals.css";
import ClientBody from "./ClientBody";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ResumeBuilder - Free Online Resume Creator",
  description: "Create professional resumes with customizable templates, unlimited downloads, and no watermarks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <ClientBody>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
