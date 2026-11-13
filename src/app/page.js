"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Download,
  Code2,
  Database,
  Server,
  Globe,
  Cpu,
  Menu,
  Sparkles,
  Rocket,
  Layers,
  Shield,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Brain,
  Cloud,
  Terminal,
  BarChart2,
  Palette,
  Zap,
  FlaskConical,
  ScrollText,
  X,
} from "lucide-react";
import {
  FiGithub as Github,
  FiLinkedin as Linkedin,
  FiMail as MailIcon,
} from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiFramer,
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiGithubactions,
  SiPostman,
  SiApachehive,
  SiFlutter,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const skillsWithIcons = {
  Frontend: [
    { name: "React", Icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Framer Motion", Icon: SiFramer, color: "#D450C8" },
  ],
  Backend: [
    { name: "Node.js", Icon: FaNodeJs, color: "#6CC24A" },
    { name: "Express", Icon: SiExpress, color: "#A0AEC0" },
    { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    { name: "Hive", Icon: SiApachehive, color: "#FDCC00" },
    { name: "SQLite", Icon: Database, color: "#003B57" },
  ],
  Database: [
    { name: "MongoDB", Icon: SiMongodb, color: "#4DB33D" },
    { name: "MySQL", Icon: SiMysql, color: "#00758F" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  ],
  DataScience: [
    { name: "Python", Icon: FaPython, color: "#FFD43B" },
    { name: "Pandas", Icon: SiPandas, color: "#130754" },
    { name: "NumPy", Icon: SiNumpy, color: "#4DABCF" },
    { name: "Machine Learning", Icon: Cpu, color: "#A78BFA" },
  ],
  DevOps: [
    { name: "Docker", Icon: FaDocker, color: "#2496ED" },
    { name: "Linux", Icon: FaLinux, color: "#FCC624" },
    { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  ],
  Tools: [
    { name: "Git", Icon: FaGitAlt, color: "#F05032" },
    { name: "VS Code", Icon: VscCode, color: "#007ACC" },
    { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
    { name: "Figma", Icon: FaFigma, color: "#A259FF" },
  ],
};

const projects = [
  {
    id: "wisteria",
    name: "Wisteria",
    category: "Healthcare Technology / AI / Desktop Application",
    description:
      "Wisteria is an offline-first clinical workstation built with Flutter, designed to streamline patient record management, medical examinations and AI-assisted clinical workflows. It uses local storage and on-device inference to support medical image analysis and local conversational assistance without depending on cloud-based inference.",
    note: "Academic prototype under active development, not a certified medical device.",
    logo: "/projectlogos/wisteria.png",
    features: [
      "Patient registration, searching and record management",
      "Medical history and examination tracking",
      "Doctor profile and clinic information management",
      "Offline-first local database using Drift and SQLite",
      "Medical image management and local file storage",
      "ONNX Runtime-based medical image inference",
      "WisChat integration using a local Ollama service",
      "Light and dark theme support",
      "Desktop-first clinical workflow interface",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Drift",
      "SQLite",
      "ONNX Runtime",
      "Ollama",
      "Flutter Markdown",
    ],
    githubUrl: "https://github.com/FazilPRaphi/Wisteria",
    liveUrl: null,
    apkUrl: null,
  },
  {
    id: "elcopt",
    name: "Elcopt",
    category: "Web Application / Cloud Storage",
    description:
      "Elcopt is a personal photo storage and management web application built using Flask and Jinja2. It provides authenticated users with a dedicated interface to upload, access and manage their personal image collections using cloud-backed services.",
    logo: "/projectlogos/elcopt.png",
    features: [
      "User authentication and login",
      "Personal photo management",
      "Image upload and deletion",
      "Dashboard for accessing stored images",
      "Server-rendered frontend using Jinja2",
      "Flask-based application architecture",
      "Firebase integration for authentication and user data",
      "Cloudinary integration for image storage and hosting",
    ],
    technologies: [
      "Python",
      "Flask",
      "Jinja2",
      "Firebase Authentication",
      "Cloud Firestore",
      "Cloudinary",
      "HTML",
      "CSS",
    ],
    githubUrl: "https://github.com/FazilPRaphi/Elcopt",
    liveUrl: "https://elcopt-3.onrender.com/login",
    apkUrl: null,
  },
  {
    id: "rpg-app",
    name: "RPG App",
    category: "Mobile Application / Gaming",
    description:
      "RPG App is a cross-platform role-playing game character manager built with Flutter and Firebase. It allows users to create, customize and manage RPG characters, vocations, character statistics and custom skills through a responsive mobile interface.",
    note: "Open-source project · MIT License",
    logo: "/projectlogos/rpg.png",
    features: [
      "RPG character creation and customization",
      "Character statistics management",
      "Vocation management",
      "Custom skill management",
      "Firebase Cloud Firestore integration",
      "Real-time data synchronization",
      "Responsive mobile UI",
      "Provider-based state management",
      "Android APK releases through GitHub",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Provider",
      "Google Fonts",
    ],
    githubUrl: "https://github.com/FazilPRaphi/rpg",
    liveUrl: null,
    apkUrl: "https://github.com/FazilPRaphi/rpg/releases/latest",
  },
  {
    id: "causeconnect",
    name: "CauseConnect",
    category: "Civic Technology / NGO / Social Impact",
    description:
      "CauseConnect is a community-focused NGO platform designed to connect citizens with authorities by providing a way to report public and social infrastructure problems. Users can raise concerns about issues such as broken streetlights, damaged roads and other problems affecting their communities, while administrators can manage and monitor submitted reports.",
    logo: "/projectlogos/causeconnect.png",
    features: [
      "User registration and authentication",
      "Separate user and administrator access",
      "Community issue reporting",
      "Reporting of public infrastructure problems",
      "Firebase Authentication",
      "Firebase-backed data management",
      "Administrative issue monitoring",
      "Centralized issue management interface",
    ],
    technologies: [
      "Firebase",
      "Firebase Authentication",
      "Cloud Firestore",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    githubUrl: "https://github.com/FazilPRaphi/CauseConnect",
    liveUrl: "https://causeconnectorg.netlify.app/",
    apkUrl: null,
  },
  {
    id: "healthsync",
    name: "HEALTHSYNC",
    category: "Doctor-Patient Consultation Platform",
    description:
      "A full-stack doctor-patient consultation platform built using React (Vite), designed to streamline appointment booking, patient management, real-time communication, and responsive medical dashboard UI.",
    logo: "/projectlogos/Healthsync.svg",
    features: [
      "Appointment booking",
      "Patient management",
      "Real-time communication",
      "Responsive medical dashboard UI",
    ],
    technologies: [
      "React (Vite)",
      "Node.js",
      "Express",
      "MongoDB",
      "Full Stack",
      "Realtime Communication",
    ],
    githubUrl: "https://github.com/FazilPRaphi/mini",
    liveUrl: "https://mini-gamma-kohl.vercel.app/",
    apkUrl: null,
  },
  {
    id: "vaulta-iq",
    name: "VAULTA-IQ",
    category: "FinOps Intelligence & Financial Management",
    description:
      "A full-stack financial management platform designed to provide users with real-time insights, budget tracking, spending behavior analysis, data-driven financial decisions, and secure transaction management.",
    logo: "/projectlogos/Vaulta IQ Crimson Orbit Logo.png",
    features: [
      "Real-time insights",
      "Budget tracking",
      "Spending behavior analysis",
      "Data-driven decisions",
      "Secure transaction management",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "FinOps Suite",
      "Financial Intelligence",
    ],
    githubUrl: "https://github.com/FazilPRaphi/vaultaiq",
    liveUrl: "https://vaultaiq.vercel.app/",
    apkUrl: null,
  },
  {
    id: "atstrack-pdfs",
    name: "ATS-TRACK PDFs",
    category: "Document Automation Core",
    description:
      "Developed ATS Track, a full-stack PDF toolkit application using React, Node.js, pdf-lib, and async job handling.",
    logo: "/projectlogos/atstrack.png",
    features: [
      "PDF merging",
      "PDF splitting",
      "PDF manipulation",
      "Efficient file processing",
    ],
    technologies: ["React", "Node.js", "pdf-lib", "Async Jobs"],
    githubUrl: "https://github.com/FazilPRaphi/atstrack-pdfs",
    liveUrl: "https://atstrack-pdfs.vercel.app/",
    apkUrl: null,
  },
  {
    id: "synapse",
    name: "SYNAPSE",
    category: "NeuroVision AI Medical Classifier",
    description:
      "A deep-learning MRI tumor detection system that classifies MRI scans into multiple categories using React frontend, Python FastAPI/Flask backend, and AI prediction pipeline.",
    logo: "/projectlogos/synapse.svg",
    features: [
      "MRI classification",
      "AI prediction pipeline",
      "Deep Learning",
      "Medical AI",
    ],
    technologies: [
      "Deep Learning",
      "React",
      "Python API",
      "Medical AI",
      "FastAPI",
    ],
    githubUrl: "https://github.com/FazilPRaphi/Synapse",
    liveUrl: "https://synapse-frontend-amber.vercel.app/",
    apkUrl: null,
  },
  {
    id: "smart-loan",
    name: "SMART LOAN RISK PREDICTOR",
    category: "ML Classification & Risk Intelligence",
    description:
      "An ML project that takes form input values to predict whether a loan request will be approved or not.",
    logo: null,
    features: [
      "Input-driven predictions",
      "Loan approval scoring",
      "Form Intelligence",
    ],
    technologies: ["ML Classification", "Risk Analysis", "Python", "React"],
    githubUrl: "https://github.com/FazilPRaphi/loanfrontend",
    liveUrl: "https://loanfrontend-three.vercel.app/",
    apkUrl: null,
  },
];

const experience = [
  {
    date: "March 2025",
    role: "Flutter Training",
    organization: "COXDO SOLUTIONS",
    description:
      "Completed hands-on Flutter development training focused on cross-platform mobile app development, UI engineering, state management, and responsive mobile interfaces.",
    badges: ["Flutter", "UI Engineering", "State Management", "Responsive Mobile UI"],
    icon: Layers,
  },
  {
    date: "June 2025",
    role: "Cloud Computing Internship",
    organization: "PACELAB",
    description:
      "Worked on cloud computing fundamentals and deployment workflows involving cloud infrastructure concepts, deployment pipelines, hosting environments, and scalable cloud systems.",
    badges: ["Cloud Infrastructure", "Deployment Pipelines", "Hosting", "Scalability"],
    icon: Globe,
  },
  {
    date: "August 2025",
    role: "Web Development Training",
    organization: "Advanced Training Program",
    description:
      "Advanced frontend and backend development training focused on React ecosystems, API integrations, responsive UI systems, and full-stack workflows.",
    badges: ["React Ecosystem", "API Integration", "Responsive UI", "Full-Stack"],
    icon: Code2,
  },
  {
    date: "December 2025",
    role: "Python Bootcamp",
    organization: "Intensive Program",
    description:
      "Completed intensive Python programming training covering core Python, automation, backend concepts, problem solving, and data handling.",
    badges: ["Core Python", "Automation", "Backend Concepts", "Data Handling"],
    icon: Sparkles,
  },
  {
    date: "January - February 2026",
    role: "Python Web Development and Machine Learning",
    organization: "Applied AI Track",
    description:
      "Worked on Python web frameworks, AI/ML workflows, model integration, API-driven ML systems, and data prediction systems.",
    badges: ["Python Web", "AI/ML", "Model Integration", "Prediction APIs"],
    icon: Cpu,
  },
  {
    date: "May 2026",
    role: "Web Development Intern",
    organization: "Internship Program",
    description:
      "Worked on modern web application engineering involving frontend UI systems, backend integrations, responsive architecture, and production workflows.",
    badges: ["Frontend Systems", "Backend Integration", "Responsive Architecture", "Production Flow"],
    icon: Server,
  },
  {
    date: "June 2026",
    role: "Flutter App Development Intern",
    organization: "Mobile Engineering Program",
    description:
      "Focused on mobile app architecture, Flutter UI systems, performance optimization, cross-platform development, and interactive mobile experiences.",
    badges: ["App Architecture", "Flutter UI", "Performance", "Cross-Platform"],
    icon: Rocket,
  },
  {
    date: "October 2026",
    role: "AI/ML Intern",
    organization: "Technologics",
    description: "AI/ML internship at Technologics.",
    badges: ["AI/ML"],
    icon: Brain,
  },
];

const revealVariant = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

function Reveal({ children, className = "", once = true, amount = 0.2 }) {
  return (
    <motion.div
      variants={revealVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <Reveal className="mb-10 text-center sm:mb-14">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-zinc-400 sm:tracking-[0.35em]">
        {subtitle}
      </p>
      <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}

function PremiumButton({ children, className = "", icon: Icon, href, ...props }) {
  const motionProps = {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: `btn-premium group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#4d4d4d] bg-gradient-to-r from-[#1e1e1e] via-[#3c3c3c] to-[#1e1e1e] px-7 py-3.5 font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white ${className}`,
  };

  const innerContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon ? <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" /> : null}
      </span>
      <span className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
    </>
  );

  if (href) {
    return (
      <motion.a href={href} {...motionProps} {...props}>
        {innerContent}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...motionProps} {...props}>
      {innerContent}
    </motion.button>
  );
}

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <Reveal className="w-full">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-[28px] border border-[#3c3c3c] bg-[#1e1e1e] text-white shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-300 hover:border-[#4d4d4d] hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Subtle hover monochrome glow overlay */}
        <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-r from-white/[0.02] via-white/[0.06] to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div
          className={`relative z-10 flex flex-col lg:flex-row items-stretch ${
            !isEven ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Visual / Logo Area */}
          <div
            className={`w-full lg:w-[44%] shrink-0 p-6 sm:p-8 lg:p-10 flex items-center justify-center bg-[#111111] border-b lg:border-b-0 ${
              isEven ? "lg:border-r border-[#3c3c3c]" : "lg:border-l border-[#3c3c3c]"
            }`}
          >
            {project.logo ? (
              <div className="relative w-full h-56 sm:h-64 lg:h-80 flex items-center justify-center p-4">
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="w-full h-56 sm:h-64 lg:h-80 flex flex-col items-center justify-center p-4 text-zinc-400">
                <Code2 className="h-16 w-16 text-zinc-400 mb-3" />
                <span className="font-poppins font-semibold text-zinc-200 text-lg">
                  {project.name}
                </span>
              </div>
            )}
          </div>

          {/* Project Information Area */}
          <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Category label */}
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#4d4d4d] border border-zinc-400/30" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {project.category}
                </span>
              </div>

              {/* Project title */}
              <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300/85">
                {project.description}
              </p>

              {/* Academic/License note if applicable */}
              {project.note ? (
                <p className="mt-2 text-xs italic text-zinc-400">
                  Note: {project.note}
                </p>
              ) : null}

              {/* Key Features */}
              {project.features?.length ? (
                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-xs text-zinc-300 leading-snug"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#4d4d4d] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Bottom: Tech Stack Badges and Action Buttons */}
            <div className="mt-6 pt-5 border-t border-[#3c3c3c]">
              {/* Technologies */}
              {project.technologies?.length ? (
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#111111] border border-[#3c3c3c] px-3 py-1 text-[11px] font-medium text-zinc-300 transition-colors hover:border-[#4d4d4d] hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* Animated Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Primary Action Button: GitHub */}
                {project.githubUrl ? (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-animated group relative inline-flex items-center gap-2 rounded-full border border-[#4d4d4d] bg-gradient-to-r from-[#111111] via-[#1e1e1e] to-[#111111] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:border-white overflow-hidden"
                  >
                    <Github className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:rotate-6" />
                    <span className="relative z-10">GitHub</span>
                    <span className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
                  </motion.a>
                ) : null}

                {/* Secondary Action Button: Live Demo */}
                {project.liveUrl ? (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-2 rounded-full border border-[#3c3c3c] bg-[#111111] px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-white hover:text-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] overflow-hidden"
                  >
                    <ExternalLink className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    <span className="relative z-10">Live Demo</span>
                    <span className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
                  </motion.a>
                ) : null}

                {/* Secondary Action Button: APK Download */}
                {project.apkUrl ? (
                  <motion.a
                    href={project.apkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-2 rounded-full border border-[#3c3c3c] bg-[#111111] px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-white hover:text-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] overflow-hidden"
                  >
                    <Download className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-y-0.5" />
                    <span className="relative z-10">Download APK</span>
                    <span className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
                  </motion.a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

function ExperienceTimeline() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(0);
  const item = experience[active];

  return (
    <div className="w-full">

      {/* ── MOBILE: vertical accordion (hidden on md+) ── */}
      <div className="flex flex-col gap-3 md:hidden">
        {experience.map((exp, i) => {
          const Icon = exp.icon;
          const isOpen = mobileOpen === i;
          return (
            <motion.div
              key={`mob-${exp.date}-${exp.role}`}
              layout
              className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-[#4d4d4d] bg-[#1e1e1e]"
                  : "border-[#3c3c3c] bg-[#111111]"
              }`}
            >
              {/* Subtle light glow on active */}
              {isOpen && (
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_70%)]" />
              )}

              {/* Header row — always visible */}
              <button
                type="button"
                onClick={() => setMobileOpen(isOpen ? -1 : i)}
                className="relative z-10 flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-white/[0.02]"
              >
                {/* Icon bubble */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isOpen
                      ? "border-white bg-gradient-to-br from-[#4d4d4d] to-[#1e1e1e] text-white shadow-[0_0_0_4px_rgba(255,255,255,0.12)]"
                      : "border-[#3c3c3c] bg-[#111111] text-zinc-400"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </div>

                {/* Title + date */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold leading-snug truncate ${isOpen ? "text-white" : "text-zinc-300"}`}>
                    {exp.role}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{exp.organization}</p>
                </div>

                {/* Date badge + chevron */}
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span className="rounded-full border border-[#3c3c3c] bg-[#111111] px-2 py-0.5 text-[10px] text-zinc-300">
                    {exp.date}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-zinc-500 text-xs"
                  >
                    ▼
                  </motion.span>
                </div>
              </button>

              {/* Expandable body */}
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="relative z-10 px-4 pb-4 pt-0">
                  <div className="h-px w-full bg-[#3c3c3c] mb-3" />
                  <p className="text-xs leading-6 text-zinc-300/90">{exp.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-[#3c3c3c] bg-[#1e1e1e] px-2.5 py-1 text-[10px] text-zinc-300"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* ── DESKTOP: horizontal node timeline (hidden on mobile) ── */}
      <div className="hidden md:block">
        {/* Timeline nodes row */}
        <div className="relative flex items-start">
          {/* Track line */}
          <div className="pointer-events-none absolute left-10 right-10 top-7 h-[2px] bg-[#3c3c3c]" />
          {/* Progress line */}
          <div
            className="pointer-events-none absolute left-10 top-7 h-[2px] bg-gradient-to-r from-[#4d4d4d] to-white transition-all duration-500"
            style={{
              width: `calc(((100% - 80px) / ${experience.length - 1}) * ${active} + 40px)`,
            }}
          />

          {experience.map((expItem, i) => {
            const Icon = expItem.icon;
            const isActive = i === active;
            return (
              <button
                key={`${expItem.date}-${expItem.role}`}
                type="button"
                onClick={() => setActive(i)}
                className="relative z-10 flex flex-1 flex-col items-center gap-2 group transition-transform duration-200 hover:-translate-y-1"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? "border-white bg-gradient-to-br from-[#4d4d4d] to-[#1e1e1e] shadow-[0_0_0_4px_rgba(255,255,255,0.15)] text-white"
                      : "border-[#3c3c3c] bg-[#111111] text-zinc-400 group-hover:border-[#4d4d4d] group-hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span
                  className={`hidden text-center text-[10px] leading-tight sm:block transition-colors ${
                    isActive ? "text-white font-medium" : "text-zinc-500 group-hover:text-zinc-300"
                  }`}
                >
                  {expItem.date}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 overflow-hidden rounded-3xl border border-[#3c3c3c] bg-[#1e1e1e] p-8 shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_70%)]" />
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-[#4d4d4d] bg-[#111111] px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-300">
              {item.date}
            </span>
            <h3 className="font-poppins mt-4 text-2xl font-semibold text-white">
              {item.role}
            </h3>
            <p className="mt-1 text-sm font-medium text-zinc-400">
              {item.organization}
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-300/90">
              {item.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#3c3c3c] bg-[#111111] px-3 py-1 text-[11px] text-zinc-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}

const orbit3DPlanes = [
  {
    radius: 2.3,
    tiltX: 0.22,
    tiltZ: -0.06,
    color: "#ffffff",
    opacity: 0.22,
  },
  {
    radius: 3.7,
    tiltX: 0.32,
    tiltZ: 0.08,
    color: "#d4d4d8",
    opacity: 0.18,
  },
  {
    radius: 5.1,
    tiltX: 0.24,
    tiltZ: -0.12,
    color: "#a1a1aa",
    opacity: 0.18,
  },
  {
    radius: 6.5,
    tiltX: 0.36,
    tiltZ: 0.14,
    color: "#71717a",
    opacity: 0.16,
  },
];

const technologyPlanets3D = [
  {
    name: "React",
    Icon: FaReact,
    color: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.6)",
    radius: 2.3,
    size: 0.34,
    duration: 12,
    clockwise: true,
    initialAngle: 0,
    tiltX: 0.22,
    tiltZ: -0.06,
  },
  {
    name: "Node.js",
    Icon: FaNodeJs,
    color: "#68A063",
    glowColor: "rgba(104, 160, 99, 0.6)",
    radius: 2.3,
    size: 0.30,
    duration: 17,
    clockwise: true,
    initialAngle: Math.PI,
    tiltX: 0.22,
    tiltZ: -0.06,
  },
  {
    name: "Python",
    Icon: FaPython,
    color: "#FFD43B",
    glowColor: "rgba(255, 212, 59, 0.6)",
    radius: 3.7,
    size: 0.32,
    duration: 22,
    clockwise: false,
    initialAngle: 1.3,
    tiltX: 0.32,
    tiltZ: 0.08,
  },
  {
    name: "Flutter",
    Icon: SiFlutter,
    color: "#45D1FD",
    glowColor: "rgba(69, 209, 253, 0.6)",
    radius: 3.7,
    size: 0.28,
    duration: 15,
    clockwise: false,
    initialAngle: 4.4,
    tiltX: 0.32,
    tiltZ: 0.08,
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    color: "#4DB33D",
    glowColor: "rgba(77, 179, 61, 0.6)",
    radius: 5.1,
    size: 0.31,
    duration: 27,
    clockwise: true,
    initialAngle: 2.5,
    tiltX: 0.24,
    tiltZ: -0.12,
  },
  {
    name: "Express",
    Icon: SiExpress,
    color: "#CBD5E1",
    glowColor: "rgba(203, 213, 225, 0.5)",
    radius: 5.1,
    size: 0.26,
    duration: 32,
    clockwise: true,
    initialAngle: 5.6,
    tiltX: 0.24,
    tiltZ: -0.12,
  },
  {
    name: "Firebase",
    Icon: SiFirebase,
    color: "#FFCA28",
    glowColor: "rgba(255, 202, 40, 0.6)",
    radius: 6.5,
    size: 0.28,
    duration: 24,
    clockwise: false,
    initialAngle: 0.9,
    tiltX: 0.36,
    tiltZ: 0.14,
  },
  {
    name: "GitHub",
    Icon: Github,
    color: "#FFFFFF",
    glowColor: "rgba(255, 255, 255, 0.55)",
    radius: 6.5,
    size: 0.30,
    duration: 36,
    clockwise: false,
    initialAngle: 4.0,
    tiltX: 0.36,
    tiltZ: 0.14,
  },
];

function CentralStar3D() {
  const coronaRef = useRef();
  const auraRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (coronaRef.current) {
      const s = 1 + Math.sin(time * 2.2) * 0.05;
      coronaRef.current.scale.set(s, s, s);
    }
    if (auraRef.current) {
      const s2 = 1 + Math.sin(time * 1.6 + 0.8) * 0.08;
      auraRef.current.scale.set(s2, s2, s2);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Omnidirectional Star Light */}
      <pointLight color="#ffffff" intensity={70} distance={22} decay={1.8} />
      <pointLight color="#e4e4e7" intensity={40} distance={14} decay={1.4} />

      {/* Luminous Star Sphere */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* Inner Radiant Corona */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[0.92, 32, 32]} />
        <meshBasicMaterial
          color="#d4d4d8"
          transparent
          opacity={0.32}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer Atmospheric Aura */}
      <mesh ref={auraRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial
          color="#a1a1aa"
          transparent
          opacity={0.14}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function OrbitRing3D({ radius, tiltX, tiltZ, color, opacity }) {
  const lineGeometry = useMemo(() => {
    const pts = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [radius]);

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      <line geometry={lineGeometry}>
        <lineBasicMaterial color={color} transparent opacity={opacity} />
      </line>
    </group>
  );
}

function OrbitingPlanet3D({ planet, tiltX, tiltZ }) {
  const planetGroupRef = useRef();
  const sphereMeshRef = useRef();

  useFrame((state, delta) => {
    if (!planetGroupRef.current) return;
    const time = state.clock.getElapsedTime();
    const speed = (Math.PI * 2) / planet.duration;
    const angle = (planet.clockwise ? -1 : 1) * time * speed + planet.initialAngle;

    // Revolution around star along the tilted orbit plane
    planetGroupRef.current.position.x = Math.cos(angle) * planet.radius;
    planetGroupRef.current.position.z = Math.sin(angle) * planet.radius;
    planetGroupRef.current.position.y = 0;

    // Axial self-rotation of the spherical planet
    if (sphereMeshRef.current) {
      sphereMeshRef.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      <group ref={planetGroupRef}>
        {/* Genuine 3D Spherical Geometry with realistic lighting & shadows */}
        <mesh ref={sphereMeshRef} castShadow receiveShadow>
          <sphereGeometry args={[planet.size, 32, 32]} />
          <meshStandardMaterial
            color={planet.color}
            roughness={0.32}
            metalness={0.25}
            emissive={planet.color}
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Soft Atmospheric Rim */}
        <mesh>
          <sphereGeometry args={[planet.size * 1.1, 24, 24]} />
          <meshBasicMaterial
            color={planet.color}
            transparent
            opacity={0.18}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Surface Icon & Camera-Facing Billboard Label */}
        <Html
          center
          distanceFactor={13}
          position={[0, 0, 0]}
          className="pointer-events-none select-none"
        >
          <div className="flex flex-col items-center">
            {/* Front-Facing Technology Icon */}
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: `${planet.size * 88}px`,
                height: `${planet.size * 88}px`,
                filter: `drop-shadow(0 0 5px ${planet.glowColor})`,
              }}
            >
              <planet.Icon
                style={{
                  color: "#ffffff",
                  width: `${planet.size * 52}px`,
                  height: `${planet.size * 52}px`,
                }}
              />
            </div>

            {/* Clean Billboard Label */}
            <span
              className="mt-1 font-mono text-[9px] sm:text-[10px] font-medium tracking-wider text-zinc-300 whitespace-nowrap px-1.5 py-0.5 rounded backdrop-blur-md border border-[#3c3c3c]"
              style={{
                background: "rgba(17, 17, 17, 0.85)",
              }}
            >
              {planet.name}
            </span>
          </div>
        </Html>
      </group>
    </group>
  );
}

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (!size.width || !size.height) return;
    const aspect = size.width / size.height;

    // Outermost orbit is radius 6.5, with planet radius and label it reaches ~7.4.
    // 8.1 target radius gives comfortable breathing room on all sides.
    const targetBoundingRadius = 8.1;

    const vFovRad = (camera.fov * Math.PI) / 360;
    const tanFov = Math.tan(vFovRad);

    // Distance required so targetBoundingRadius fits horizontally in visible width
    const distForWidth = targetBoundingRadius / (tanFov * Math.max(aspect, 0.42));

    // Distance required vertically (foreshortened by tilt ~0.82)
    const distForHeight = (targetBoundingRadius * 0.82) / tanFov;

    // Use the larger distance to avoid clipping in either dimension
    const reqDist = Math.max(distForWidth, distForHeight, 14.2);

    // Elevation angle (~27.5 degrees) for an immersive 3D angled perspective
    const elevation = 0.48;
    const y = reqDist * Math.sin(elevation);
    const z = reqDist * Math.cos(elevation);

    camera.position.set(0, y, z);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, size.width, size.height]);

  return null;
}

function SolarSystem() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex min-w-0 w-full items-center justify-center select-none">
      {/* Background subtle monochrome ethereal atmospheric glow */}
      <div className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-white/[0.03] blur-3xl sm:h-[480px] sm:w-[480px] lg:h-[600px] lg:w-[600px]" />
      <div className="pointer-events-none absolute h-[220px] w-[220px] rounded-full bg-zinc-500/[0.03] blur-2xl sm:h-[300px] sm:w-[300px] lg:h-[480px] lg:w-[480px]" />

      {/* Full-size responsive 3D WebGL Canvas Viewport */}
      <div className="relative h-[340px] w-full min-w-0 sm:h-[500px] md:h-[560px] lg:h-[620px] xl:h-[680px]">
        {mounted ? (
          <Canvas
            camera={{ position: [0, 6.8, 14.0], fov: 46 }}
            gl={{ antialias: true, alpha: true }}
            style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
          >
            <ResponsiveCamera />

            {/* Ambient Lighting & Fill */}
            <ambientLight intensity={0.45} color="#27272a" />
            <directionalLight position={[0, 8, 10]} intensity={0.5} color="#e4e4e7" />

            {/* 3D Luminous Central Star */}
            <CentralStar3D />

            {/* 3D Inclined Orbit Rings */}
            {orbit3DPlanes.map((orbit, idx) => (
              <OrbitRing3D
                key={`orbit-3d-${idx}`}
                radius={orbit.radius}
                tiltX={orbit.tiltX}
                tiltZ={orbit.tiltZ}
                color={orbit.color}
                opacity={orbit.opacity}
              />
            ))}

            {/* 3D Spherical Revolving Planets */}
            {technologyPlanets3D.map((planet) => (
              <OrbitingPlanet3D
                key={planet.name}
                planet={planet}
                tiltX={planet.tiltX}
                tiltZ={planet.tiltZ}
              />
            ))}
          </Canvas>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="h-10 w-10 rounded-full border border-[#4d4d4d] animate-pulse bg-[#1e1e1e]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const socialLinks = useMemo(
    () => [
      {
        label: "GitHub",
        href: "https://github.com/FazilPRaphi",
        Icon: Github,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/fazil-p-raphi",
        Icon: Linkedin,
      },
      {
        label: "Email",
        href: "mailto:fazilraphi14@gmail.com",
        Icon: MailIcon,
      },
    ],
    [],
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    // Track each section's current intersection ratio (0 when not visible)
    const ratioMap = new Map();
    sections.forEach((sec) => ratioMap.set(sec.id, 0));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update ratio: 0 when not intersecting so stale values don't win
          ratioMap.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        // Pick the section with the highest visible ratio
        let bestId = null;
        let bestRatio = 0;

        ratioMap.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          setActiveSection(bestId);
        }
      },
      {
        // Clip 15% from top (navbar offset) and 30% from bottom
        // so mid-page sections fire reliably even inside a tall hero
        rootMargin: "-15% 0px -30% 0px",
        // Fine-grained thresholds so the observer fires on small ratio changes
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("fazilraphi14@gmail.com");
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1600);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <main className="relative overflow-x-clip bg-[#111111] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(77,77,77,0.12),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(60,60,60,0.14),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(30,30,30,0.25),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] [background-size:72px_72px]" />

      <nav className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-[#3c3c3c] bg-[#111111]/85 px-3 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:px-5 sm:py-3">
          <a
            href="#home"
            className="text-lg font-semibold tracking-[0.2em] text-white sm:text-xl"
          >
            FAZIL <span className="text-zinc-400">PORTFOLIO</span>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const key = item.toLowerCase();
              const isActive = activeSection === key;

              return (
                <a
                  key={item}
                  href={`#${key}`}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-[#4d4d4d] bg-[#1e1e1e] shadow-[0_0_15px_rgba(255,255,255,0.08)]"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 34,
                      }}
                    />
                  ) : null}
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-white/80 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#3c3c3c] bg-[#1e1e1e] text-zinc-100 transition-colors hover:border-white hover:text-white lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls={open ? "mobile-navigation" : undefined}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div id="mobile-navigation" className="mx-auto mt-2 max-w-7xl rounded-2xl border border-[#3c3c3c] bg-[#111111]/95 p-4 backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-lg px-3 py-2 text-zinc-200 transition-colors hover:bg-[#1e1e1e] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>

      <section
        id="home"
        className="relative scroll-mt-24 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-40"
      >
        <div className="mx-auto grid w-full min-w-0 max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] xl:gap-12">
          <Reveal className="relative z-10 flex min-w-0 flex-col justify-center">
            <h1 className="font-poppins text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] leading-[1.14]">
              Building{" "}
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                futuristic
              </span>
              <br />
              digital experiences.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300/85 sm:text-lg sm:leading-relaxed">
              I design immersive full-stack applications, scalable backend
              systems, networking tools, and premium interfaces with modern web
              technologies.
            </p>

            {/* Animated Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <motion.a
                href="#projects"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-animated group relative inline-flex items-center gap-2 rounded-full border border-[#4d4d4d] bg-gradient-to-r from-[#1e1e1e] via-[#3c3c3c] to-[#1e1e1e] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4 text-zinc-300 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
              </motion.a>

              <motion.a
                href="/FazilPRaphiResume.pdf"
                download="FazilPRaphiResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 rounded-full border border-[#3c3c3c] bg-[#1e1e1e] px-6 py-3 text-sm font-semibold text-zinc-200 shadow-[0_4px_15px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-white hover:text-white overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Resume
                  <Download className="h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
                <span className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
              </motion.a>
            </div>

            <motion.div
              variants={staggerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-7 flex items-center gap-3"
            >
              {socialLinks.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  variants={revealVariant}
                  whileHover={{ y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-[#3c3c3c] bg-[#1e1e1e] text-zinc-400 backdrop-blur-md transition-all duration-300 hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] overflow-hidden"
                >
                  <Icon className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  <span className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-in-out group-hover:translate-x-[150%]" />
                </motion.a>
              ))}
            </motion.div>
          </Reveal>

          <div className="relative flex w-full min-w-0 items-center justify-center overflow-visible">
            <SolarSystem />
          </div>
        </div>
      </section>

      <section id="about" className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(60,60,60,0.18),transparent_40%),radial-gradient(circle_at_80%_65%,rgba(77,77,77,0.15),transparent_46%)]" />

        <div className="mx-auto max-w-7xl">
          <SectionTitle title="About Me" subtitle="Who I Am" />

          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="mx-auto max-w-4xl space-y-6 text-base leading-8 text-zinc-200/90 md:text-lg"
          >
            <motion.p variants={revealVariant}>
              I&apos;m a software developer who enjoys turning ideas into practical,
              polished digital products. I build across the full stack, from
              shaping responsive interfaces to connecting them with dependable
              backend services.
            </motion.p>
            <motion.p variants={revealVariant}>
              My work includes web applications, APIs, and data-driven projects
              using technologies such as React, Next.js, Node.js, and databases.
              I care about clear architecture, performance, and making products
              intuitive to use.
            </motion.p>
            <motion.p variants={revealVariant}>
              I&apos;m also interested in AI/ML, data science, and cloud
              technologies. Through personal projects and internship experience,
              I continue developing my skills and learning how to apply these
              tools to real-world problems.
            </motion.p>
            <motion.p variants={revealVariant}>
              I value curiosity, thoughtful problem-solving, and continuous
              improvement. I enjoy collaborating, taking ownership of challenges,
              and building software that is both useful and reliable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Skills and Technologies" subtitle="Tech Stack" />

          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {Object.entries(skillsWithIcons).map(([category, items]) => (
              <motion.div
                variants={revealVariant}
                whileHover={{ y: -6, scale: 1.01 }}
                key={category}
                className="group relative overflow-hidden rounded-3xl border border-[#3c3c3c] bg-[#1e1e1e] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-[#4d4d4d] sm:p-7"
              >
                {/* Subtle light glow on hover */}
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-40" />

                <div className="relative z-10">
                  <h3 className="mb-5 text-xl font-bold tracking-wide text-white">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {items.map(({ name, Icon, color }) => (
                      <motion.div
                        key={name}
                        whileHover={{ y: -3, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                        className="group/chip relative flex items-center gap-2 rounded-xl border border-[#3c3c3c] bg-[#111111] px-3 py-2 text-xs font-medium text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:border-[#4d4d4d] hover:bg-[#1e1e1e]"
                      >
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                          style={{ color }}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>{name}</span>
                        {/* subtle glow on hover */}
                        <span
                          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-sm transition-opacity duration-300 group-hover/chip:opacity-20"
                          style={{ background: color }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Project Showcase" subtitle="Portfolio" />

          <Reveal className="mb-10 text-center">
            <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-300/90">
              
            </p>
          </Reveal>

          <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(60,60,60,0.2),transparent_42%),radial-gradient(circle_at_85%_65%,rgba(77,77,77,0.15),transparent_48%)]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle title="Experience Timeline" subtitle="Journey" />

          <ExperienceTimeline />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Education and Certifications"
            subtitle="Qualifications"
          />

          {/* ── Education Card ── */}
          <Reveal className="mb-10">
            <div className="relative overflow-hidden rounded-3xl border border-[#3c3c3c] bg-[#1e1e1e] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] [background-size:36px_36px]" />

              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[#4d4d4d] bg-[#111111] shadow-[0_0_25px_rgba(255,255,255,0.06)]"
                >
                  <GraduationCap className="h-10 w-10 text-white" />
                </motion.div>

                {/* Info */}
                <div className="flex-1">
                  <p className="mb-1 text-xs uppercase tracking-[0.3em] text-zinc-400 font-bold">Degree</p>
                  <h3 className="font-poppins text-2xl font-bold text-white md:text-3xl">
                    Bachelor of Computer Science
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-300/85">
                    Specialized in software engineering, networking, and distributed systems.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      { label: "2023 – 2027", icon: BookOpen },
                      { label: "Software Engineering", icon: Code2 },
                      { label: "Networking", icon: Globe },
                      { label: "Distributed Systems", icon: Server },
                    ].map(({ label, icon: Ic }) => (
                      <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-[#3c3c3c] bg-[#111111] px-3 py-1 text-xs font-medium text-zinc-300">
                        <Ic className="h-3 w-3 text-zinc-400" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Certifications Grid ── */}
          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Q2D PEARL State Level Assessment",
                issuer: "IBM Innovation Centre for Education in collaboration with Q2D",
                date: "23 Oct 2026",
                icon: BarChart2,
                color: "#C0C0C0",
                glow: "rgba(192,192,192,0.18)",
                tag: "Silver Badge",
                details: "93% · Data Science - UG Level 1",
              },
              {
                title: "Q2D PEARL UG Level 1",
                issuer: "IBM",
                date: "Academic year 2026-27",
                icon: GraduationCap,
                color: "#CD7F32",
                glow: "rgba(205,127,50,0.18)",
                tag: "Bronze Certificate",
                details: "Grade A · Data Science",
              },
              {
                title: "Q2D PEARL Assessment",
                issuer: "IBM",
                date: "21 Jul 2026",
                icon: BarChart2,
                color: "#60A5FA",
                glow: "rgba(96,165,250,0.18)",
                tag: "Completion",
                details: "100% · Data Science - UG Level 1",
              },
              {
                title: "Virtual Data Science Explorer",
                issuer: "YuvaIntern · NSDC",
                date: "27 Aug 2026",
                icon: Brain,
                color: "#A78BFA",
                glow: "rgba(167,139,250,0.18)",
                tag: "Internship",
                details: "Virtual Data Science Explorer Intern",
              },
              {
                title: "MERN Stack Internship",
                issuer: "Mertxe",
                date: "12 Aug - 16 Sep 2026",
                icon: Code2,
                color: "#34D399",
                glow: "rgba(52,211,153,0.18)",
                tag: "MERN Stack",
                details: "MERN Stack Intern · HomelyHub Property Booking Platform",
              },
              {
                title: "Microsoft Azure Essentials Professional Certificate",
                issuer: "Microsoft and LinkedIn",
                date: "May 2026",
                icon: Cloud,
                color: "#38BDF8",
                glow: "rgba(56,189,248,0.18)",
                tag: "Professional Certificate",
                details: "Cloud Computing",
              },
              {
                title: "Career Essentials in GitHub Copilot",
                issuer: "GitHub",
                date: "May 2026",
                icon: Sparkles,
                color: "#A78BFA",
                glow: "rgba(167,139,250,0.18)",
                tag: "Professional Certificate",
              },
              {
                title: "Docker Foundations",
                issuer: "Docker, Inc.",
                date: "Jun 2026",
                icon: FaDocker,
                color: "#2496ED",
                glow: "rgba(36,150,237,0.18)",
                tag: "Professional Certificate",
                details: "Containerization",
              },
              {
                title: "Optimize Business Processes with Microsoft 365 Copilot",
                issuer: "Microsoft Learning",
                date: "Jun 2026",
                icon: Zap,
                color: "#FBBF24",
                glow: "rgba(251,191,36,0.18)",
                tag: "Microsoft 365 Copilot",
              },
              {
                title: "Learning Docker Compose",
                issuer: "LinkedIn",
                date: "Jun 2026",
                icon: FaDocker,
                color: "#38BDF8",
                glow: "rgba(56,189,248,0.18)",
                tag: "Docker",
              },
              {
                title: "Android Studio User Badge",
                issuer: "Google for Developers Network - Greater Los Angeles",
                date: "Oct 2025",
                icon: Code2,
                color: "#4ADE80",
                glow: "rgba(74,222,128,0.18)",
                tag: "Android",
              },
              {
                title: "Python Coder Badge",
                issuer: "Kaggle",
                icon: FaPython,
                color: "#FFD43B",
                glow: "rgba(255,212,59,0.18)",
                tag: "Python",
              },
              {
                title: "5-Day AI Agents Intensive Vibe Coding Course",
                issuer: "Google x Kaggle",
                icon: Brain,
                color: "#4285F4",
                glow: "rgba(66,133,244,0.18)",
                tag: "AI Agents",
                details: "Completed the five-day course · Project: ClaimPilot",
              },
              {
                title: "Python (Basic)",
                issuer: "HackerRank",
                date: "Mar 2026",
                icon: FaPython,
                color: "#FFD43B",
                glow: "rgba(255,212,59,0.18)",
                tag: "Python",
              },
              {
                title: "Data Fundamentals",
                issuer: "IBM",
                date: "Mar 2026",
                icon: BarChart2,
                color: "#60A5FA",
                glow: "rgba(96,165,250,0.18)",
                tag: "Data",
              },
              {
                title: "AWS Educate ML Foundations",
                issuer: "Amazon Web Services",
                date: "Mar 2026",
                icon: Brain,
                color: "#F97316",
                glow: "rgba(249,115,22,0.18)",
                tag: "ML / AI",
              },
              {
                title: "AWS Educate Intro to Cloud 101",
                issuer: "Amazon Web Services",
                date: "Mar 2026",
                icon: Cloud,
                color: "#38BDF8",
                glow: "rgba(56,189,248,0.18)",
                tag: "Cloud",
              },
              {
                title: "Encoder-Decoder Architecture",
                issuer: "Google Cloud Skills Boost",
                date: "Mar 2026",
                icon: Cpu,
                color: "#34D399",
                glow: "rgba(52,211,153,0.18)",
                tag: "ML / AI",
              },
              {
                title: "Introduction to Looker",
                issuer: "Google Cloud Skills Boost",
                date: "Feb 2026",
                icon: BarChart2,
                color: "#A78BFA",
                glow: "rgba(167,139,250,0.18)",
                tag: "Data",
              },
              {
                title: "Google Prompting Essentials",
                issuer: "Coursera / Google",
                date: "Feb 2026",
                icon: Sparkles,
                color: "#FBBF24",
                glow: "rgba(251,191,36,0.18)",
                tag: "AI",
              },
              {
                title: "Google Prompting Essentials Specialization",
                issuer: "Google",
                date: "Feb 2026",
                icon: Zap,
                color: "#F472B6",
                glow: "rgba(244,114,182,0.18)",
                tag: "AI",
              },
              {
                title: "Use AI as a Creative or Expert Partner",
                issuer: "Google",
                date: "Feb 2026",
                icon: Brain,
                color: "#818CF8",
                glow: "rgba(129,140,248,0.18)",
                tag: "AI",
              },
              {
                title: "Speed Up Data Analysis & Presentation",
                issuer: "Google",
                date: "Feb 2026",
                icon: BarChart2,
                color: "#34D399",
                glow: "rgba(52,211,153,0.18)",
                tag: "Data",
              },
              {
                title: "Flutter Masterclass (Novice to Ninja)",
                issuer: "Udemy",
                date: "Nov 2025",
                icon: Layers,
                color: "#54C5F8",
                glow: "rgba(84,197,248,0.18)",
                tag: "Mobile",
              },
              {
                title: "Linux Command Line: Zero to Hero",
                issuer: "Udemy",
                date: "Sep 2025",
                icon: Terminal,
                color: "#4ADE80",
                glow: "rgba(74,222,128,0.18)",
                tag: "DevOps",
              },
              {
                title: "Goldman Sachs – Risk Job Simulation",
                issuer: "Goldman Sachs",
                date: "Mar 2026",
                icon: Shield,
                color: "#60A5FA",
                glow: "rgba(96,165,250,0.18)",
                tag: "Finance",
              },
              {
                title: "Tata – GenAI Powered Data Analytics",
                issuer: "Tata Group",
                date: "Mar 2026",
                icon: FlaskConical,
                color: "#FB923C",
                glow: "rgba(251,146,60,0.18)",
                tag: "Data",
              },
              {
                title: "Build REST APIs with FastAPI",
                issuer: "LinkedIn Learning",
                date: "Mar 2026",
                icon: Server,
                color: "#38BDF8",
                glow: "rgba(56,189,248,0.18)",
                tag: "Backend",
              },
              {
                title: "CWH – Job-Ready Data Science Course",
                issuer: "Code with Harry",
                date: "Feb 2026",
                icon: Brain,
                color: "#C084FC",
                glow: "rgba(192,132,252,0.18)",
                tag: "ML / AI",
              },
              {
                title: "Complete 2026 Python Bootcamp",
                issuer: "Code with Harry",
                date: "Jan 2026",
                icon: FaPython,
                color: "#FFD43B",
                glow: "rgba(255,212,59,0.18)",
                tag: "Python",
              },
              {
                title: "Figma Essential Training",
                issuer: "LinkedIn Learning",
                date: "Apr 2026",
                icon: Palette,
                color: "#A259FF",
                glow: "rgba(162,89,255,0.18)",
                tag: "Design",
              },
              {
                title: "Figma for UI/UX Design",
                issuer: "Great Learning",
                date: "Apr 2026",
                icon: Palette,
                color: "#F472B6",
                glow: "rgba(244,114,182,0.18)",
                tag: "Design",
              },
              {
                title: "Full Stack Web Development",
                issuer: "Certification Program",
                date: "2025",
                icon: Code2,
                color: "#34D399",
                glow: "rgba(52,211,153,0.18)",
                tag: "Full Stack",
              },
            ].map(({ title, issuer, date, icon: Ic, color, glow, tag, details }) => (
              <motion.div
                key={`${title}-${issuer}`}
                variants={revealVariant}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-[#3c3c3c] bg-[#1e1e1e] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-[#4d4d4d]"
              >
                {/* Glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 70%)` }}
                />

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon bubble */}
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#3c3c3c] bg-[#111111]"
                    style={{ boxShadow: `0 0 18px ${glow}` }}
                  >
                    <Ic className="h-5 w-5" style={{ color }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="break-words text-sm font-semibold leading-snug text-white">{title}</p>
                    <p className="mt-0.5 text-xs text-zinc-400">{issuer}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      {date && (
                        <span className="rounded-full border border-[#3c3c3c] bg-[#111111] px-2 py-0.5 text-[10px] text-zinc-400">
                          {date}
                        </span>
                      )}
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{ background: `${color}20`, color }}
                      >
                        {tag}
                      </span>
                    </div>
                    {details && (
                      <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                        {details}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-[#3c3c3c] bg-[#1e1e1e] p-6 text-center backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:rounded-[40px] sm:p-10 md:p-14">
          <h2 className="mb-5 text-4xl font-black text-white sm:mb-6 sm:text-5xl">Resume</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-zinc-200/90 sm:mb-10 sm:text-lg sm:leading-8">
            Explore a complete overview of projects, technical expertise,
            engineering experience, and professional achievements.
          </p>
          <PremiumButton
            href="/FazilPRaphiResume.pdf"
            download="FazilPRaphiResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            icon={Download}
          >
            Download Resume
          </PremiumButton>
        </Reveal>
      </section>

      <section id="contact" className="relative w-full scroll-mt-24 px-0 py-20 sm:py-28 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(60,60,60,0.2),transparent_45%),radial-gradient(circle_at_82%_76%,rgba(77,77,77,0.18),transparent_52%)]" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] border border-[#3c3c3c] bg-[#1e1e1e] p-5 shadow-[0_30px_85px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] [background-size:42px_42px]" />

            <div className="relative z-10 text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-zinc-400 font-bold">
                Contact
              </p>
              <h2 className="font-poppins text-balance text-4xl font-semibold text-white md:text-6xl">
                Let us Connect
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-200/90 md:text-lg">
                Open to collaborations, internships, and building ambitious
                digital products.
              </p>
            </div>

            <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2">
              <motion.button
                type="button"
                onClick={handleCopyEmail}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group relative rounded-2xl border border-[#3c3c3c] bg-[#111111] p-5 text-left transition-all duration-300 hover:border-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
                <span className="pointer-events-none absolute -top-9 left-4 rounded-md border border-[#3c3c3c] bg-black/90 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Copy Email
                </span>
                <div className="mb-2 flex items-center justify-between relative z-10">
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-zinc-400">
                    <Mail className="h-4 w-4" />
                    Email
                  </span>
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-white" />
                  )}
                </div>
                <span className="relative z-10 break-words text-base font-semibold text-white sm:text-lg">
                  fazilraphi14@gmail.com
                </span>
                <p className="relative z-10 mt-1 text-sm text-zinc-400">
                  {copiedEmail ? "Copied to clipboard" : "Click to copy"}
                </p>
              </motion.button>

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-2xl border border-[#3c3c3c] bg-[#111111] p-5 text-left shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <p className="mb-2 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-zinc-400">
                  <MapPin className="h-4 w-4" />
                  Location
                </p>
                <p className="text-lg font-semibold text-zinc-100">
                  Kochi, India
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Available for remote collaboration
                </p>
              </motion.div>
            </div>

            <div className="relative z-10 mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/fazil-p-raphi",
                  Icon: Linkedin,
                  tooltip: "Open LinkedIn",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/FazilPRaphi",
                  Icon: Github,
                  tooltip: "Open GitHub",
                },
              ].map(({ label, href, Icon, tooltip }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-3 rounded-full border border-[#3c3c3c] bg-[#111111] px-5 py-3 text-zinc-100 transition-all duration-300 hover:border-white hover:text-white overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-[#3c3c3c] bg-black/90 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {tooltip}
                  </span>
                  <span className="rounded-full border border-[#3c3c3c] bg-[#1e1e1e] p-2 transition-colors group-hover:border-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="relative text-sm font-medium">
                    {label}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-400 transition-colors group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[#3c3c3c] bg-[#000000] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-2xl font-black text-white">
              Always <span className="text-zinc-400">Learning</span>
            </h3>
            <p className="mt-2 text-zinc-400">
              Practise is the mother of learning
            </p>
          </div>

          <div className="flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#3c3c3c] bg-[#111111] p-2.5 text-zinc-400 transition-all duration-300 hover:border-white hover:text-white hover:bg-[#1e1e1e] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
              >
                <Icon className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                <span className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-in-out group-hover:translate-x-[150%]" />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
