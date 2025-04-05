"use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-accent"
              >
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-bold text-xl">ResumeBuilder</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              We are a team dedicated to helping job seekers worldwide. Our mission is to make your
              job search journey smoother, more enjoyable, and ultimately successful.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/templates" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Resume Templates
                </Link>
              </li>
              <li>
                <Link href="/editor" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link href="/cover-letter" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Cover Letter
                </Link>
              </li>
              <li>
                <Link href="/cover-letter-templates" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Cover Letter Templates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} ResumeBuilder. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com" className="text-primary-foreground/60 hover:text-primary-foreground">
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com" className="text-primary-foreground/60 hover:text-primary-foreground">
                <FaTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-primary-foreground/60 hover:text-primary-foreground">
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://instagram.com" className="text-primary-foreground/60 hover:text-primary-foreground">
                <FaInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
