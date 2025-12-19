"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-dark-muted leading-relaxed">
              <p>
                I&apos;m a senior Computer Science major at Hanover College with a
                minor in Business, combining technical expertise with strategic
                thinking. Currently maintaining a 3.52 GPA and recognized on the
                Dean&apos;s List for six consecutive semesters, I&apos;m passionate
                about building software that makes a difference.
              </p>
              <p>
                My experience spans full-stack web development, IT
                infrastructure management, and cybersecurity. I thrive in
                collaborative environments where I can leverage both my
                technical skills and strong communication abilities to deliver
                impactful solutions.
              </p>
              <p>
                Whether it&apos;s architecting scalable web applications,
                implementing secure network infrastructure, or leading teams
                toward common goals, I bring dedication, curiosity, and a
                commitment to excellence to everything I do.
              </p>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-sm font-display text-accent-primary mb-2">
                  EDUCATION
                </h3>
                <p className="font-semibold text-lg">Hanover College</p>
                <p className="text-dark-muted text-sm">
                  B.A. Computer Science
                </p>
                <p className="text-dark-muted text-sm">Minor: Business</p>
                <p className="text-dark-muted text-sm mt-1">
                  Expected: May 2026
                </p>
              </div>

              <div className="border-t border-dark-border pt-6">
                <h3 className="text-sm font-display text-accent-primary mb-2">
                  LOCATION
                </h3>
                <p className="text-dark-muted">Goshen, Kentucky</p>
              </div>

              <div className="border-t border-dark-border pt-6">
                <h3 className="text-sm font-display text-accent-primary mb-2">
                  INTERESTS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "Cybersecurity",
                    "IT Infrastructure",
                    "Soccer",
                    "Leadership",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-dark-bg rounded-full text-xs text-dark-muted"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
