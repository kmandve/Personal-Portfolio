"use client";

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const apCourses = [
  { name: "Calculus BC", score: 5 },
  { name: "Computer Science A", score: 5 },
  { name: "Physics I", score: 5 },
  { name: "Physics II", score: 5 },
  { name: "Chemistry", score: 5 },
];

const currentCourses = [
  "Calculus III (Dual Credit)",
  "Advanced Topics",
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-terminal-green">## </span>
            <span className="text-terminal-text">Education</span>
          </h2>
          <p className="text-terminal-muted text-sm">~/education $ cat package.json</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* School Info */}
          <TerminalWindow title="school.info" delay={0.1}>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-terminal-text">Vernon Hills High School</h3>
                <p className="text-terminal-cyan text-sm">Vernon Hills, Illinois</p>
              </div>

              <div className="flex items-center gap-4 py-3 border-y border-terminal-border/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-terminal-green">4.83</div>
                  <div className="text-xs text-terminal-muted">GPA</div>
                </div>
                <div className="h-12 w-px bg-terminal-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-terminal-cyan">2027</div>
                  <div className="text-xs text-terminal-muted">Expected Grad</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-terminal-green">✓</span>
                <span className="text-terminal-text">AP Scholar with Distinction</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-terminal-green">✓</span>
                <span className="text-terminal-text">Science Olympiad Participant</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-terminal-green">✓</span>
                <span className="text-terminal-text">Math Team Member</span>
              </div>
            </div>
          </TerminalWindow>

          {/* Package.json Style Courses */}
          <TerminalWindow title="courses.json" delay={0.2}>
            <div className="text-sm font-mono">
              <pre className="text-terminal-text/90 overflow-x-auto whitespace-pre-wrap">
                <code>
{`{`}
{`  `}<span className="text-terminal-cyan">&quot;name&quot;</span>: <span className="text-terminal-yellow">&quot;academic-profile&quot;</span>,
{`  `}<span className="text-terminal-cyan">&quot;version&quot;</span>: <span className="text-terminal-yellow">&quot;4.83.0&quot;</span>,
{`  `}<span className="text-terminal-cyan">&quot;apCourses&quot;</span>: {`{`}
{apCourses.map((course, i) => (
  <span key={course.name}>
{`    `}<span className="text-terminal-cyan">&quot;{course.name}&quot;</span>: <span className="text-terminal-green">&quot;{course.score}/5 ✓&quot;</span>{i < apCourses.length - 1 ? "," : ""}
</span>
))}
{`  `}{`}`},
{`  `}<span className="text-terminal-cyan">&quot;currentlyEnrolled&quot;</span>: [
{currentCourses.map((course, i) => (
  <span key={course}>
{`    `}<span className="text-terminal-yellow">&quot;{course}&quot;</span>{i < currentCourses.length - 1 ? "," : ""}
</span>
))}
{`  `}]
{`}`}
                </code>
              </pre>
            </div>
          </TerminalWindow>
        </div>

        {/* Extracurriculars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 border border-terminal-border rounded-lg p-6 bg-terminal-dark/30"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green">❯</span>
            <span className="text-terminal-muted text-sm">cat extracurriculars.txt</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-terminal-cyan">📊</span>
              <span className="text-terminal-text">Science Olympiad</span>
              <span className="text-terminal-muted">// State Awards</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-terminal-cyan">🔢</span>
              <span className="text-terminal-text">Math Team</span>
              <span className="text-terminal-muted">// State Participant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-terminal-cyan">💻</span>
              <span className="text-terminal-text">CS Club</span>
              <span className="text-terminal-muted">// President</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
