"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    icon: "💻",
    skills: ["Python", "Java", "C++", "JavaScript", "HTML/CSS"],
    color: "terminal-green",
  },
  {
    name: "Hardware & Embedded",
    icon: "🔌",
    skills: ["Arduino", "Raspberry Pi", "ESP32", "Circuit Design", "Sensor Integration"],
    color: "terminal-cyan",
  },
  {
    name: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git & GitHub", "VS Code", "Arduino IDE", "Fusion 360", "Onshape"],
    color: "terminal-purple",
  },
  {
    name: "Prototyping",
    icon: "🖨️",
    skills: ["3D Printing", "Rapid Prototyping", "CAD Design", "Block Coding"],
    color: "terminal-yellow",
  },
  {
    name: "Soft Skills",
    icon: "🎯",
    skills: ["Team Leadership", "Presentations", "Pitching", "Problem-Solving", "Communication"],
    color: "terminal-orange",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-terminal-green">## </span>
            <span className="text-terminal-text">Skills</span>
          </h2>
          <p className="text-terminal-muted text-sm">~/skills $ cat stack.yml</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="border border-terminal-border rounded-lg overflow-hidden bg-terminal-dark/50 hover:border-terminal-green/30 transition-colors"
            >
              {/* Header */}
              <div className="px-4 py-3 bg-terminal-gray border-b border-terminal-border flex items-center gap-3">
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium text-terminal-text">{category.name}</span>
              </div>

              {/* Skills */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded border transition-all duration-300 cursor-default
                        ${category.color === "terminal-green" ? "bg-terminal-green/10 border-terminal-green/30 text-terminal-green hover:bg-terminal-green/20" : ""}
                        ${category.color === "terminal-cyan" ? "bg-terminal-cyan/10 border-terminal-cyan/30 text-terminal-cyan hover:bg-terminal-cyan/20" : ""}
                        ${category.color === "terminal-purple" ? "bg-terminal-purple/10 border-terminal-purple/30 text-terminal-purple hover:bg-terminal-purple/20" : ""}
                        ${category.color === "terminal-yellow" ? "bg-terminal-yellow/10 border-terminal-yellow/30 text-terminal-yellow hover:bg-terminal-yellow/20" : ""}
                        ${category.color === "terminal-orange" ? "bg-terminal-orange/10 border-terminal-orange/30 text-terminal-orange hover:bg-terminal-orange/20" : ""}
                      `}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Matrix-style floating text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 border border-terminal-border/50 rounded-lg bg-terminal-dark/30 text-center"
        >
          <p className="text-terminal-muted text-sm font-mono">
            <span className="text-terminal-green">&gt;</span> Always learning, always building
            <span className="animate-cursor-blink ml-1">▊</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
