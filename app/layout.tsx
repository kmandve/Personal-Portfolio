import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Kautik Mandve | Developer & Engineer",
  description: "Portfolio of Kautik Mandve: AI and robotics projects, software engineering, and STEM competition work.",
  keywords: ["Kautik Mandve", "Developer", "Engineer", "Portfolio", "AI", "Robotics", "Computer Science", "USAPhO", "AIME"],
  authors: [{ name: "Kautik Mandve" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Kautik Mandve | Developer & Engineer",
    description: "AI and robotics projects, software engineering, and STEM competition work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-terminal-black text-terminal-text antialiased">
        <div className="scanlines" aria-hidden="true" />
        <div className="matrix-bg grid-pattern min-h-screen">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
