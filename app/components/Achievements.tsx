"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "AIME Qualifier",
    subtitle: "AMC 12B Score: 114",
    icon: "🧮",
    category: "Mathematics",
    highlight: true,
  },
  {
    title: "Science Olympiad State",
    subtitle: "2nd Place at State Competition",
    icon: "🔬",
    category: "Science",
    highlight: true,
  },
  {
    title: "VHACK Hackathon",
    subtitle: "1st Place Winner • $400 Prize",
    icon: "🏆",
    category: "Competition",
    highlight: true,
  },
  {
    title: "President's Award",
    subtitle: "Volunteer Service Award – Gold Level",
    icon: "🎖️",
    category: "Service",
    highlight: true,
  },
  {
    title: "AP Scholar with Distinction",
    subtitle: "Multiple AP 5s",
    icon: "📚",
    category: "Academic",
    highlight: false,
  },
  {
    title: "Math Team Regional",
    subtitle: "2nd Place at Regionals",
    icon: "📐",
    category: "Mathematics",
    highlight: false,
  },
];

const roles = [
  { title: "President of Business", org: "Computer Science Club" },
  { title: "Vice President", org: "Computer Science Club" },
  { title: "XPerience Intern", org: "Professional" },
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

        {/* Main Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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

        {/* Leadership Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-terminal-border rounded-lg overflow-hidden bg-terminal-dark/30"
        >
          <div className="px-4 py-3 bg-terminal-gray border-b border-terminal-border">
            <span className="text-terminal-cyan text-sm font-medium">// Leadership Roles</span>
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-4">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-terminal-green">◆</span>
                  <span className="text-terminal-text text-sm font-medium">{role.title}</span>
                  <span className="text-terminal-muted text-sm">@ {role.org}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ASCII Trophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <pre className="text-terminal-green/30 text-xs leading-tight font-mono select-none">
{`      ___________
     '._==_==_=_.'
     .-\\:      /-.
    | (|:.     |) |
     '-|:.     |-'
       \\::.    /
        '::. .'
          ) (
        _.' '._
       '-------'`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
