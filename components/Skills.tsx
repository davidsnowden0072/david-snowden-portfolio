"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Supabase", "SQL"],
  },
  {
    category: "Languages",
    skills: ["Java", "C++", "Python", "JavaScript"],
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "VS Code", "IntelliJ IDEA", "Vercel", "Render", "Vite", "npm"],
  },
  {
    category: "IT & Security",
    skills: [
      "FortiGate Firewalls",
      "Network Security",
      "IPS/IDS",
      "Infrastructure Management",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mb-16 mx-auto" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-accent-primary/50 transition-all duration-300"
              >
                <h3 className="text-accent-primary font-display text-sm mb-4 tracking-wider">
                  {category.category.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-dark-bg rounded-lg text-sm text-dark-text hover:bg-accent-primary/10 hover:text-accent-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
