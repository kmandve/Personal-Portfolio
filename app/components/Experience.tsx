"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    hash: "xperience-003",
    role: "STEM Instructor",
    company: "XPerience Coding (501c3)",
    period: "Oct 2024 – Present",
    description: [
      "Taught STEM camps in programming, 3D CAD, and engineering design",
      "Led hands-on activities introducing computational thinking",
    ],
    type: "teach",
  },
  {
    hash: "kumon-004",
    role: "Tutor & Assistant",
    company: "Kumon Math and Reading Center",
    period: "Jul 2024 – Jan 2025",
    description: [
      "Tutored students ages 6-14 in mathematics and reading",
      "Managed grading workflows and supported individualized learning",
    ],
    type: "work",
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

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-terminal-cyan text-sm font-medium">// Selected Experience</span>
          </motion.div>

          <div className="space-y-6 relative">
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
                <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-terminal-gray border-2 border-terminal-green flex items-center justify-center">
                  <span className="text-terminal-green text-xs font-mono">●</span>
                </div>

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
                  <p className="text-terminal-cyan text-sm mb-3">{exp.company}</p>

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
      </div>
    </section>
  );
}
