"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "EcoSort Trash Can",
    description: "AI-powered trash can using motion detection and image classification to automatically sort trash and recycling.",
    technologies: ["Python", "Flask", "Arduino", "ESP32", "HuggingFace"],
    outcome: "Won $400 at hackathon; sorted 200+ items",
    status: "active",
    icon: "🗑️",
  },
  {
    name: "Romi Robot",
    description: "Encoder- and stepper-driven robot following pre-coded paths with repeatable precision; extended to precisely move water bottles.",
    technologies: ["Arduino C++", "32U4", "Encoders", "PID Control"],
    outcome: "2nd Place, Illinois Science Olympiad State (2025)",
    status: "completed",
    icon: "🤖",
  },
  {
    name: "FreshTrack",
    description: "Pantry tracking app that monitors expiration dates and suggests recipes based on available ingredients.",
    technologies: ["Python", "Flask", "Glide"],
    outcome: "Earned points in team presentation competition",
    status: "completed",
    icon: "🥗",
  },
  {
    name: "VendoMatic-3000",
    description: "Vending machine that uses a digital points system to dispense snacks with networking capabilities.",
    technologies: ["Python", "Flask", "MQTT", "Arduino", "Networking"],
    outcome: "Top contender for 2026 STEAM Showcase",
    status: "in-progress",
    icon: "🍫",
  },
  {
    name: "Timesheet Tracker",
    description: "Web application for tracking work hours with a clean interface and data persistence.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    outcome: "Personal productivity tool",
    status: "completed",
    icon: "⏱️",
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
              {/* Terminal Header */}
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
                    project.status === "active"
                      ? "bg-terminal-green/20 text-terminal-green"
                      : project.status === "in-progress"
                      ? "bg-terminal-yellow/20 text-terminal-yellow"
                      : "bg-terminal-muted/20 text-terminal-muted"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Content */}
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

                {/* Outcome */}
                <div className="mb-4 p-3 rounded bg-terminal-gray/50 border-l-2 border-terminal-cyan">
                  <span className="text-terminal-cyan text-xs font-medium">OUTCOME:</span>
                  <p className="text-terminal-text text-sm mt-1">{project.outcome}</p>
                </div>

                {/* Technologies */}
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

        {/* Additional Projects Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-terminal-muted text-sm">
            <span className="text-terminal-green">+</span> Additional: 3D-printed functional projects using Fusion 360 & rapid prototyping
          </p>
        </motion.div>
      </div>
    </section>
  );
}
