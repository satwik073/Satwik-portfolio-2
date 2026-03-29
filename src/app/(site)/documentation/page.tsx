import { Configuration } from "@/app/components/documentation/Configuration";
import { DocNavigation } from "@/app/components/documentation/DocNavigation";
import { Introduction } from "@/app/components/documentation/Introduction";
import { PackageStructure } from "@/app/components/documentation/PackageStructure";
import { QuickStart } from "@/app/components/documentation/QuickStart";
import type { Metadata } from "next";
import { OG_IMAGE_URL, PATHS, SITE_URL } from "@/constants";

const docTitle = "Documentation";
const docDescription =
  "Setup guide, package structure, configuration, and customization for the Satwik Kanhere portfolio site built with Next.js and Tailwind CSS.";

export const metadata: Metadata = {
  title: docTitle,
  description: docDescription,
  keywords: [
    "Satwik Kanhere",
    "portfolio documentation",
    "Next.js",
    "Tailwind CSS",
    "developer portfolio",
    "site configuration",
  ],
  alternates: {
    canonical: `${SITE_URL.replace(/\/$/, "")}${PATHS.DOCUMENTATION}`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL.replace(/\/$/, "")}${PATHS.DOCUMENTATION}`,
    siteName: "Satwik Kanhere — Portfolio",
    title: `${docTitle} | Satwik Kanhere`,
    description: docDescription,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Satwik Kanhere — Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${docTitle} | Satwik Kanhere`,
    description: docDescription,
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="dark:bg-darkmode pt-2">
      <div className="container p-6 lg:mt-16 mt-16 pt-10!">
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-3 col-span-12 lg:block hidden">
            <DocNavigation />
          </div>
          <div className="lg:col-span-9 col-span-12">
            <Introduction />
            <PackageStructure />
            <QuickStart />
            <Configuration />
          </div>
        </div>
      </div>
    </div>
  );
}
