"use client";

import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "kautikmandve@gmail.com",
    href: "mailto:kautikmandve@gmail.com",
    icon: "📧",
    command: "mail -s 'Hello'",
  },
  {
    label: "LinkedIn",
    value: "Kautik Mandve",
    href: "https://www.linkedin.com/in/kautik-mandve-8779b62b7/",
    icon: "💼",
    command: "open linkedin",
  },
  {
    label: "Phone",
    value: "+1 (224) 778-9009",
    href: "tel:+12247789009",
    icon: "📱",
    command: "call --direct",
  },
];

export default function Contact() {
  const currentYear = new Date().getFullYear();
  const birthYear = 2009;
  const uptime = currentYear - birthYear;

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-terminal-green">## </span>
            <span className="text-terminal-text">Contact</span>
          </h2>
          <p className="text-terminal-muted text-sm">~/contact $ ./reach_out.sh</p>
        </motion.div>

        {/* Contact Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-terminal-border rounded-lg overflow-hidden bg-terminal-dark/50 backdrop-blur-sm border-glow"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-terminal-gray border-b border-terminal-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <span className="ml-2 text-xs text-terminal-muted">contact@kautik ~ </span>
          </div>

          {/* Terminal Content */}
          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <span className="text-terminal-green mr-2">❯</span>
                <span className="text-terminal-muted">echo &quot;Let&apos;s connect!&quot;</span>
              </div>
              <p className="text-terminal-text text-lg ml-4">
                I&apos;m always interested in new opportunities, collaborations, or just a chat about tech. 
                Feel free to reach out!
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === "LinkedIn" ? "_blank" : undefined}
                  rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-terminal-border/50 hover:border-terminal-green/50 hover:bg-terminal-green/5 transition-all group"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <div className="flex-1">
                    <div className="text-terminal-muted text-xs font-mono mb-1">
                      $ {link.command}
                    </div>
                    <div className="text-terminal-text group-hover:text-terminal-green transition-colors">
                      {link.value}
                    </div>
                  </div>
                  <span className="text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          {/* ASCII Art Signature */}
          <pre className="text-terminal-green/20 text-[8px] md:text-xs leading-tight font-mono mb-8 select-none inline-block">
{`
██╗  ██╗ █████╗ ██╗   ██╗████████╗██╗██╗  ██╗
██║ ██╔╝██╔══██╗██║   ██║╚══██╔══╝██║██║ ██╔╝
█████╔╝ ███████║██║   ██║   ██║   ██║█████╔╝ 
██╔═██╗ ██╔══██║██║   ██║   ██║   ██║██╔═██╗ 
██║  ██╗██║  ██║╚██████╔╝   ██║   ██║██║  ██╗
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝╚═╝  ╚═╝
`}
          </pre>

          <div className="space-y-2 text-sm text-terminal-muted">
            <p>
              <span className="text-terminal-green">System uptime:</span> {uptime} years
            </p>
            <p className="text-xs">
              Built with <span className="text-terminal-green">Next.js</span> + <span className="text-terminal-cyan">Tailwind</span> + <span className="text-terminal-purple">Framer Motion</span>
            </p>
            <p className="text-xs text-terminal-muted/50">
              © {currentYear} Kautik Mandve. All rights reserved.
            </p>
          </div>

          {/* Terminal prompt at bottom */}
          <div className="mt-8 flex justify-center items-center gap-2 text-sm">
            <span className="text-terminal-green">❯</span>
            <span className="text-terminal-muted">exit</span>
            <span className="animate-cursor-blink text-terminal-green">▊</span>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
