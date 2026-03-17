"use client";

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

export default function About() {
  const contactInfo = {
    name: "Kautik Mandve",
    school: "Vernon Hills High School",
    classYear: "2027",
    location: "Vernon Hills, Illinois",
    phone: "(224) 778-9009",
    phoneHref: "+12247789009",
    email: "kautikmandve@gmail.com",
    linkedin: "https://www.linkedin.com/in/kautik-mandve-8779b62b7/",
    status: "Open to opportunities",
  };

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-terminal-green">## </span>
            <span className="text-terminal-text">About Me</span>
          </h2>
          <p className="text-terminal-muted text-sm">~/about/README.md</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <TerminalWindow title="cat about.txt" delay={0.1}>
            <div className="space-y-4 text-sm leading-relaxed">
              <div className="flex items-start">
                <span className="text-terminal-green mr-2">❯</span>
                <span className="text-terminal-muted">cat about.txt</span>
              </div>
              
              <p className="text-terminal-text/90">
                I&apos;m a high school engineer focused on software, embedded systems, and
                applied AI. Most of my work has come through building practical systems,
                competing in STEM events, and learning by shipping projects that have to work.
              </p>

              <p className="text-terminal-text/90">
                I teach STEM through XPerience Coding and have worked as a tutor at Kumon,
                which keeps me practical about communication, iteration, and explaining
                technical ideas clearly.
              </p>

              <p className="text-terminal-text/90">
                I pair that engineering focus with a strong math and physics background,
                including USAPhO and AIME qualification.
              </p>

              <div className="pt-4 border-t border-terminal-border/50">
                <span className="text-terminal-cyan">// Currently focused on:</span>
                <ul className="mt-2 space-y-1 text-terminal-muted">
                  <li>• Applied software and system building</li>
                  <li>• Embedded systems, computer vision, and automation</li>
                  <li>• Robotics, prototyping, and competition builds</li>
                  <li>• Competitive mathematics and physics</li>
                </ul>
              </div>
            </div>
          </TerminalWindow>

          <TerminalWindow title="config.json" delay={0.2}>
            <div className="text-sm">
              <div className="flex items-start mb-4">
                <span className="text-terminal-green mr-2">❯</span>
                <span className="text-terminal-muted">cat config.json</span>
              </div>
              
              <pre className="text-terminal-text/90 overflow-x-auto">
                <code>
{`{`}
{`  `}<span className="text-terminal-cyan">&quot;name&quot;</span>: <span className="text-terminal-yellow">&quot;{contactInfo.name}&quot;</span>,
{`  `}<span className="text-terminal-cyan">&quot;school&quot;</span>: <span className="text-terminal-yellow">&quot;{contactInfo.school}&quot;</span>,
{`  `}<span className="text-terminal-cyan">&quot;classYear&quot;</span>: <span className="text-terminal-yellow">&quot;{contactInfo.classYear}&quot;</span>,
{`  `}<span className="text-terminal-cyan">&quot;location&quot;</span>: <span className="text-terminal-yellow">&quot;{contactInfo.location}&quot;</span>,
{`  `}<span className="text-terminal-cyan">&quot;phone&quot;</span>: <span className="text-terminal-yellow">&quot;{contactInfo.phone}&quot;</span>,
{`  `}<span className="text-terminal-cyan">&quot;email&quot;</span>: <span className="text-terminal-yellow">&quot;{contactInfo.email}&quot;</span>,
{`  `}<span className="text-terminal-cyan">&quot;linkedin&quot;</span>: <span className="text-terminal-yellow">&quot;{contactInfo.linkedin}&quot;</span>,
{`  `}<span className="text-terminal-cyan">&quot;status&quot;</span>: <span className="text-terminal-green">&quot;{contactInfo.status}&quot;</span>
{`}`}
                </code>
              </pre>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="tech-badge hover:bg-terminal-green/20"
                >
                  📧 Email
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-badge hover:bg-terminal-cyan/20"
                  style={{ borderColor: "rgba(0, 212, 255, 0.2)", color: "#00d4ff" }}
                >
                  💼 LinkedIn
                </a>
                <a
                  href={`tel:${contactInfo.phoneHref}`}
                  className="tech-badge hover:bg-terminal-purple/20"
                  style={{ borderColor: "rgba(189, 147, 249, 0.2)", color: "#bd93f9" }}
                >
                  📱 Phone
                </a>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
