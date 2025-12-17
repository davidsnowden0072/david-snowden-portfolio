"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const activities = [
  {
    title: "Hanover Men's Soccer",
    role: "First Team Center Forward",
    period: "2022 - Present",
    description:
      "Competed at the collegiate level while balancing rigorous academic coursework. Demonstrated commitment, discipline, and teamwork through four seasons of NCAA Division III soccer. Developed leadership skills both on and off the field.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Phi Delta Theta Fraternity",
    role: "Officer & Chaplain",
    period: "2023 - Present",
    description:
      "Serve as chapter officer responsible for member wellbeing and community engagement. Lead initiatives focused on mental health awareness and support within the brotherhood. Coordinate service projects and facilitate discussions on personal growth and leadership development.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
];

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Leadership & <span className="text-gradient">Activities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mb-16" />

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-8 card-hover"
              >
                <div className="text-accent-primary mb-4">{activity.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-2">
                  {activity.title}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-accent-primary text-sm font-medium">
                    {activity.role}
                  </p>
                  <p className="text-dark-muted text-sm">{activity.period}</p>
                </div>
                <p className="text-dark-muted leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
