import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Kautik Mandve | Developer & Engineer",
  description: "High school student with a strong foundation in computer engineering, robotics, and AI. Building the future one project at a time.",
  keywords: ["Kautik Mandve", "Developer", "Engineer", "Portfolio", "AI", "Robotics", "Computer Science"],
  authors: [{ name: "Kautik Mandve" }],
  openGraph: {
    title: "Kautik Mandve | Developer & Engineer",
    description: "High school student with a strong foundation in computer engineering, robotics, and AI.",
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
