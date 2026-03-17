"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "NeuroPosture",
    description: "Passive posture monitoring system using computer vision and machine learning.",
    technologies: ["Python", "Computer Vision", "Machine Learning", "Embedded Systems"],
    outcome: "1st Place at STEAM Showcase ($700)",
    status: "completed",
    icon: "🧠",
  },
  {
    name: "EcoSort Trash Can",
    description: "Computer vision model controlling embedded sorting hardware for trash and recycling.",
    technologies: ["Python", "Flask", "Arduino", "ESP32", "HuggingFace"],
    outcome: "1st Place Engineering at VHACK Hackathon ($400)",
    status: "completed",
    icon: "🗑️",
  },
  {
    name: "VendoMatic-3000",
    description: "Completed smart vending machine with Flask, MQTT hardware comms, dashboard, and inventory tracking.",
    technologies: ["Python", "Flask", "MQTT", "Arduino", "Networking"],
    outcome: "Completed points-based dispensing system",
    status: "completed",
    icon: "🍫",
  },
  {
    name: "Romi Robot",
    description: "Encoder-driven robot with PID control for repeatable autonomous motion.",
    technologies: ["Arduino C++", "32U4", "Encoders", "PID Control"],
    outcome: "2nd Place, Illinois Science Olympiad State (2025)",
    status: "completed",
    icon: "🤖",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-terminal-green">## </span>
            <span className="text-terminal-text">Projects</span>
          </h2>
          <p className="text-terminal-muted text-sm">~/projects $ ls -la</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="border border-terminal-border rounded-lg overflow-hidden bg-terminal-dark/50 backdrop-blur-sm hover:border-terminal-green/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-terminal-gray border-b border-terminal-border">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                  </div>
                  <span className="ml-2 text-xs text-terminal-muted">
                    {project.name.toLowerCase().replace(/\s+/g, "-")}/
                  </span>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    project.status === "completed" || project.status === "active"
                      ? "bg-terminal-green/20 text-terminal-green"
                      : project.status === "in-progress"
                      ? "bg-terminal-yellow/20 text-terminal-yellow"
                      : "bg-terminal-muted/20 text-terminal-muted"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-terminal-text group-hover:text-terminal-green transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-terminal-muted text-sm mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-4 p-3 rounded bg-terminal-gray/50 border-l-2 border-terminal-cyan">
                  <span className="text-terminal-cyan text-xs font-medium">OUTCOME:</span>
                  <p className="text-terminal-text text-sm mt-1">{project.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
