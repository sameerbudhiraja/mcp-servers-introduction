import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mcpservers.iamsameer.dev"),
  title: "MCP Servers Collection - AI Integration Platform",
  description:
    "Production-ready MCP servers for GitHub, Bitbucket, GitLab, and Jira. Seamless integration with major development platforms.",
  keywords: [
    "MCP servers",
    "Model Context Protocol",
    "GitHub MCP",
    "GitLab MCP",
    "Bitbucket MCP",
    "Jira MCP",
    "AI integration",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://mcpservers.iamsameer.dev",
    siteName: "MCP Servers Collection",
    title: "MCP Servers Collection - AI Integration Platform",
    description:
      "Production-ready MCP servers for GitHub, Bitbucket, GitLab, and Jira. Seamless integration with major development platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Servers Collection - AI Integration Platform",
    description:
      "Production-ready MCP servers for GitHub, Bitbucket, GitLab, and Jira. Seamless integration with major development platforms.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "v0.app",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
