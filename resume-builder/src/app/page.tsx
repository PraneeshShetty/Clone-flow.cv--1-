import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, PenLine, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build a job-winning resume for free
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Your first resume is 100% free, including all design features & unlimited downloads.
              Yes, really!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/editor">Get started — it&apos;s free</Link>
              </Button>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs border-2 border-background"
                  ></div>
                ))}
              </div>
              <p className="ml-4 text-sm text-foreground/70">
                Loved by over 3 million happy users
              </p>
            </div>
          </div>

          <div className="relative mt-12 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-xl overflow-hidden">
              <div className="p-1">
                <Image
                  src="https://ext.same-assets.com/3194784291/418344396.webp"
                  alt="Resume example"
                  width={1000}
                  height={600}
                  className="w-full rounded"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-3 rounded shadow-lg max-w-[200px] text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p>
                  Powerful resume builder, easy to customize to look the way you want!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg">
              <div className="bg-secondary/10 p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PenLine className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">1st resume, free forever</h3>
              <p className="text-foreground/70">
                Your first resume is completely free. No hidden fees, no watermarks, unlimited downloads.
              </p>
            </div>

            <div className="p-6 rounded-lg">
              <div className="bg-secondary/10 p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">ATS-friendly templates</h3>
              <p className="text-foreground/70">
                All our templates are optimized for Applicant Tracking Systems to help you get past automated screenings.
              </p>
            </div>

            <div className="p-6 rounded-lg">
              <div className="bg-secondary/10 p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Download & Share</h3>
              <p className="text-foreground/70">
                Download your resume as a PDF or share it online with your unique link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How ResumeBuilder works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">1. Add content</h3>
              <p className="text-foreground/70 mb-4">
                Build your resume - we&apos;ll guide you every step of the way to ensure it&apos;s professional and polished.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://ext.same-assets.com/3194784291/3804924961.webp"
                  alt="Add content"
                  width={400}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">2. Design effortlessly</h3>
              <p className="text-foreground/70 mb-4">
                Choose from over 30 templates and customize every detail to suit your style and career.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://ext.same-assets.com/3194784291/1647624004.webp"
                  alt="Design"
                  width={400}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">3. Download & Share</h3>
              <p className="text-foreground/70 mb-4">
                Download your resume as a PDF or share it online with your unique link.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://ext.same-assets.com/3194784291/1932929965.webp"
                  alt="Download"
                  width={400}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Free Resume Templates</h2>
          <p className="text-lg text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Stop worrying about formatting—our modern, ATS-ready templates help you create a professional resume that stands out at any career level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-background rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
              >
                <Link href="/templates">
                  <div className="p-2">
                    <Image
                      src={`https://ext.same-assets.com/972172114/${2000000000 + i * 100000000}.bin`}
                      alt={`Template ${i}`}
                      width={300}
                      height={400}
                      className="w-full rounded"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <Button variant="ghost" size="sm" className="mt-2">
                      Use template
                    </Button>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/templates">Show all Templates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Loved & Trusted By</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <p className="text-foreground/80 mb-4">
                "ResumeBuilder transformed my career. I was stuck in a dead-end job, using a self-made resume. Unlike other 'free' builders that hold your resume hostage, ResumeBuilder delivered results."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">John Miller</h4>
                  <p className="text-sm text-foreground/60">Marketing Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <p className="text-foreground/80 mb-4">
                "This tool is amazing. It is easy to use and customize to look the way you want. I landed my dream job after using one of their templates!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-foreground/60">Software Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <p className="text-foreground/80 mb-4">
                "Your product is amazing. It's easy to use, and I have fun creating my CV. I received compliments on my resume design from every interviewer!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Williams</h4>
                  <p className="text-sm text-foreground/60">UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build your professional resume?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">
            Create, customize, and download your perfect resume in minutes with our easy-to-use builder.
          </p>
          <Button size="lg" variant="default" className="bg-white text-secondary hover:bg-white/90" asChild>
            <Link href="/editor">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
