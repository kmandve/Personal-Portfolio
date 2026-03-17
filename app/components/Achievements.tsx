"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "USAPhO Qualifier",
    subtitle: "Top ~440 physics students nationwide",
    icon: "⚛️",
    category: "Physics",
    highlight: true,
  },
  {
    title: "AIME Qualifier",
    subtitle: "AMC 12B Score: 114",
    icon: "🧮",
    category: "Mathematics",
    highlight: true,
  },
  {
    title: "ICTM State Champion Team",
    subtitle: "State champion team in math competition",
    icon: "🏅",
    category: "Mathematics",
    highlight: true,
  },
  {
    title: "Science Olympiad State",
    subtitle: "2nd Place Robot Tour • 4th Chemistry Lab",
    icon: "🔬",
    category: "Science",
    highlight: true,
  },
  {
    title: "VHACK Hackathon",
    subtitle: "1st Place Engineering • $400 Prize",
    icon: "🏆",
    category: "Competition",
    highlight: true,
  },
  {
    title: "STEAM Showcase",
    subtitle: "1st Place • $700 Prize",
    icon: "🚀",
    category: "Competition",
    highlight: false,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-terminal-green">## </span>
            <span className="text-terminal-text">Achievements</span>
          </h2>
          <p className="text-terminal-muted text-sm">~/achievements $ cat trophies.log</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`relative border rounded-lg p-5 transition-all duration-300 ${
                achievement.highlight
                  ? "border-terminal-green/50 bg-terminal-green/5 hover:border-terminal-green hover:shadow-glow-green"
                  : "border-terminal-border bg-terminal-dark/50 hover:border-terminal-green/30"
              }`}
            >
              {achievement.highlight && (
                <div className="absolute top-2 right-2">
                  <span className="text-terminal-green text-xs">★</span>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <span className="text-xs text-terminal-cyan font-medium">{achievement.category}</span>
                  <h3 className="text-terminal-text font-bold mt-1">{achievement.title}</h3>
                  <p className="text-terminal-muted text-sm mt-1">{achievement.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-terminal-border rounded-lg overflow-hidden bg-terminal-dark/30"
        >
          <div className="px-4 py-3 bg-terminal-gray border-b border-terminal-border">
            <span className="text-terminal-cyan text-sm font-medium">// Leadership</span>
          </div>
          <div className="p-4 space-y-2">
            <p className="text-terminal-text text-sm">
              <span className="text-terminal-green">◆</span> President of Education, Computer Science Club
            </p>
            <p className="text-terminal-text text-sm">
              <span className="text-terminal-green">◆</span> Vice President of Engineering, Science, and Math, Computer Science Club
            </p>
            <p className="text-terminal-text text-sm">
              <span className="text-terminal-green">◆</span> Co-Captain, Science Olympiad
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
