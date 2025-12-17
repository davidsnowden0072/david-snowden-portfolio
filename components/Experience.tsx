"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Software Developer",
    company: "Hanover College Senior Thesis Project",
    period: "Aug 2024 - Present",
    location: "Hanover, IN",
    description:
      "Leading full-stack development of course rating platform serving 1,000+ students. Architecting scalable backend infrastructure with Node.js and Express, implementing secure authentication, and designing RESTful API endpoints. Managing deployment pipelines and coordinating with team members on feature development.",
    highlights: [
      "Built production-ready web application from ground up",
      "Implemented secure user authentication and authorization",
      "Designed and deployed PostgreSQL database with Supabase",
      "Established CI/CD workflows for automated deployments",
    ],
  },
  {
    title: "IT Support Intern",
    company: "CloudNexus Technologies",
    period: "Jun 2024 - Aug 2024",
    location: "Louisville, KY",
    description:
      "Supported enterprise IT infrastructure and network security operations. Gained hands-on experience with FortiGate firewall configurations, intrusion prevention systems, and network monitoring. Assisted with troubleshooting client technical issues and documenting system configurations.",
    highlights: [
      "Configured FortiGate firewall rules and policies",
      "Monitored network traffic and security events",
      "Documented technical procedures and system architecture",
      "Provided tier 1-2 technical support for client systems",
    ],
  },
  {
    title: "Financial Analytics Intern",
    company: "The Glenview Trust Company",
    period: "May 2023 - Aug 2023",
    location: "Louisville, KY",
    description:
      "Developed analytical tools and financial models for wealth management operations. Presented findings to senior leadership team and collaborated with portfolio managers. Enhanced data processing workflows and created client-facing reports.",
    highlights: [
      "Built Excel-based financial analysis tools",
      "Presented quarterly analysis to executive team",
      "Automated report generation processes",
      "Collaborated with cross-functional teams",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mb-16" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-accent-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-accent-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-dark-muted text-sm">{exp.period}</p>
                    <p className="text-dark-muted text-sm">{exp.location}</p>
                  </div>
                </div>

                <p className="text-dark-muted mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-dark-muted text-sm"
                    >
                      <span className="text-accent-primary mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
