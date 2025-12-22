"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    hash: "a7b3c9d",
    role: "Tutor & Assistant",
    company: "Kumon Math and Reading Center",
    location: "Vernon Hills, IL",
    period: "Jul 2024 – Dec 2024",
    description: [
      "Graded student work efficiently and accurately",
      "Provided in-person math and reading tutoring to students ages 6–14",
    ],
    type: "feat",
  },
  {
    hash: "e2f8a1b",
    role: "Virtual Tutor",
    company: "Self-Organized",
    location: "Online",
    period: "Jan 2024 – Present",
    description: [
      "Tutored students in math and science via Google Meet and Zoom",
      "Designed individualized tutoring plans based on student needs",
    ],
    type: "feat",
  },
];

const volunteer = [
  {
    hash: "c4d6e8f",
    role: "Teen Tech Tutor",
    company: "Cook Memorial Library",
    hours: "50+ hours",
    description: "Assisted individuals with technology questions and digital literacy",
  },
  {
    hash: "g9h2i5j",
    role: "Local Historian Assistant",
    company: "Cook Memorial Library",
    hours: "50+ hours",
    description: "Supported printing, photocopying, and file organization tasks",
  },
  {
    hash: "k1l3m7n",
    role: "Math & Science Tutor",
    company: "Self-Organized",
    hours: "100+ hours",
    description: "Tutored middle school students in mathematics and science",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-terminal-green">## </span>
            <span className="text-terminal-text">Experience</span>
          </h2>
          <p className="text-terminal-muted text-sm">~/experience $ git log --oneline</p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-terminal-cyan text-sm font-medium">// Work Experience</span>
          </motion.div>

          <div className="space-y-6 relative">
            {/* Git Branch Line */}
            <div className="absolute left-[22px] top-8 bottom-8 w-[2px] bg-terminal-green/30" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.hash}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                {/* Commit Dot */}
                <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-terminal-gray border-2 border-terminal-green flex items-center justify-center">
                  <span className="text-terminal-green text-xs font-mono">●</span>
                </div>

                {/* Commit Content */}
                <div className="flex-1 border border-terminal-border rounded-lg p-5 bg-terminal-dark/50 hover:border-terminal-green/50 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="text-terminal-yellow text-xs font-mono">{exp.hash}</span>
                      <span className="text-terminal-muted text-xs mx-2">|</span>
                      <span className="text-terminal-green text-xs">{exp.type}:</span>
                    </div>
                    <span className="text-terminal-muted text-xs">{exp.period}</span>
                  </div>

                  <h3 className="text-lg font-bold text-terminal-text mb-1">{exp.role}</h3>
                  <p className="text-terminal-cyan text-sm mb-3">
                    {exp.company} • {exp.location}
                  </p>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-terminal-muted text-sm flex items-start gap-2">
                        <span className="text-terminal-green">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-terminal-cyan text-sm font-medium">// Volunteer Experience (200+ total hours)</span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {volunteer.map((vol, index) => (
              <motion.div
                key={vol.hash}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-terminal-border rounded-lg p-4 bg-terminal-dark/30 hover:border-terminal-green/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-terminal-yellow text-xs font-mono">{vol.hash}</span>
                  <span className="text-terminal-green text-xs px-2 py-0.5 rounded bg-terminal-green/10">
                    {vol.hours}
                  </span>
                </div>
                <h4 className="font-bold text-terminal-text text-sm mb-1">{vol.role}</h4>
                <p className="text-terminal-cyan text-xs mb-2">{vol.company}</p>
                <p className="text-terminal-muted text-xs">{vol.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
