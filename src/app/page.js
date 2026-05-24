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
} from "lucide-react";
import {
  FiGithub as Github,
  FiLinkedin as Linkedin,
  FiMail as MailIcon,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { useEffect, useMemo, useState } from "react";

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const skills = {
  Frontend: ["React", "Next.js", "Tailwind", "Framer Motion"],
  Backend: ["Node.js", "Express", "REST APIs", "Firebase"],
  Database: ["MongoDB", "MySQL", "PostgreSQL"],
  DataScience: ["Python", "Pandas", "NumPy", "Machine Learning"],
  DevOps: ["Docker", "Linux",  "GitHub Actions"],
  Tools: ["Git", "VS Code", "Postman", "Figma"],
};

const projects = [
  {
    title: "HEALTHCARE AI",
    desc: "A ML project that predicts number of days to stay in hospital, bill amount prediction, and outcome prediction based on symptoms.",
    tags: ["Machine Learning", "Healthcare AI", "Prediction Systems"],
    features: ["Stay days prediction", "Bill amount prediction", "Outcome prediction"],
    preview: "Clinical Forecast Engine",
    accent: "from-fuchsia-500/35 via-violet-500/25 to-cyan-400/30",
    size: "xl:col-span-2",
    links: { live: "#", github: "#" },
  },
  {
    title: "SMART LOAN RISK PREDICTOR",
    desc: "An ML project that takes form input values to predict whether a loan request will be approved or not.",
    tags: ["ML Classification", "Risk Analysis", "Form Intelligence"],
    features: ["Input-driven predictions", "Loan approval scoring"],
    preview: "Risk Scoring Matrix",
    accent: "from-cyan-500/35 via-blue-500/25 to-indigo-500/30",
    links: { live: "#", github: "#" },
  },
  {
    title: "PORTFOLIO APP",
    desc: "Designed a Portfolio application using Next.js as frontend with Supabase as backend.",
    tags: ["Next.js", "Supabase", "Frontend Systems"],
    features: ["Dynamic portfolio management", "Backend-powered content flow"],
    preview: "Personal Brand Platform",
    accent: "from-violet-500/35 via-sky-500/20 to-cyan-300/30",
    links: { live: "#", github: "#" },
  },
  {
    title: "HEALTHSYNC",
    desc: "A full-stack doctor-patient consultation platform built using React (Vite), designed to streamline appointment booking, patient management, real-time communication, and responsive medical dashboard UI.",
    tags: ["React (Vite)", "Full Stack", "Realtime Communication"],
    features: [
      "Appointment booking",
      "Patient management",
      "Real-time communication",
      "Responsive medical dashboard UI",
    ],
    preview: "Consultation Cloud",
    accent: "from-emerald-500/35 via-cyan-400/25 to-blue-500/30",
    size: "xl:col-span-2",
    links: { live: "#", github: "#" },
  },
  {
    title: "VAULTA-IQ",
    desc: "A full-stack financial management platform designed to provide users with real-time insights, budget tracking, spending behavior analysis, data-driven financial decisions, and secure transaction management.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Real-time insights",
      "Budget tracking",
      "Spending behavior analysis",
      "Data-driven decisions",
      "Secure transaction management",
    ],
    preview: "FinOps Intelligence Suite",
    accent: "from-blue-500/35 via-indigo-500/25 to-fuchsia-500/30",
    size: "xl:col-span-2",
    links: { live: "#", github: "#" },
  },
  {
    title: "BLIG.",
    desc: "An online Next.js blog platform using PostgreSQL database with Flask backend integration and Cloudinary image/video uploads.",
    tags: ["Next.js", "PostgreSQL", "Flask", "Cloudinary"],
    features: ["Media uploads", "Integrated backend pipeline"],
    preview: "Content Publishing Grid",
    accent: "from-rose-500/30 via-violet-500/20 to-indigo-500/30",
    links: { live: "#", github: "#" },
  },
  {
    title: "ATS-TRACK PDFs",
    desc: "Developed ATS Track, a full-stack PDF toolkit application using React, Node.js, pdf-lib, and async job handling.",
    tags: ["React", "Node.js", "pdf-lib", "Async Jobs"],
    features: [
      "PDF merging",
      "PDF splitting",
      "PDF manipulation",
      "Efficient file processing",
    ],
    preview: "Document Automation Core",
    accent: "from-violet-500/35 via-purple-500/25 to-cyan-400/30",
    size: "xl:col-span-2",
    links: { live: "#", github: "#" },
  },
  {
    title: "SYNAPSE",
    desc: "A deep-learning MRI tumor detection system that classifies MRI scans into multiple categories using React frontend, Python FastAPI/Flask backend, and AI prediction pipeline.",
    tags: ["Deep Learning", "React", "Python API", "Medical AI"],
    features: ["MRI classification", "AI prediction pipeline"],
    preview: "NeuroVision Classifier",
    accent: "from-cyan-500/35 via-blue-500/25 to-violet-500/30",
    links: { live: "#", github: "#" },
  },
  {
    title: "HEALTHSYNC AI CHATBOT",
    desc: "A medical chatbot that provides disease predictions based on user symptoms using AI-driven response generation.",
    tags: ["Conversational AI", "Healthcare", "Prediction Model"],
    features: ["Symptom-aware responses", "Disease prediction flow"],
    preview: "Medical Assist Agent",
    accent: "from-emerald-500/30 via-blue-500/25 to-violet-500/30",
    links: { live: "#", github: "#" },
  },
  {
    title: "WEATHER APP",
    desc: "A React Native weather application delivering real-time weather updates, location-based forecasts, dynamic weather UI, and API-driven weather rendering.",
    tags: ["React Native", "Weather APIs", "Mobile UI"],
    features: ["Real-time updates", "Location forecasts", "Dynamic weather rendering"],
    preview: "Forecast Companion",
    accent: "from-sky-500/35 via-cyan-400/25 to-indigo-500/30",
    links: { github: "#" },
  },
  {
    title: "TODO APP",
    desc: "A simple todo application created at the beginning of the React learning journey.",
    tags: ["React Basics", "State Management"],
    features: ["Task add/remove flow", "First React fundamentals"],
    preview: "Task Starter Kit",
    accent: "from-zinc-500/25 via-violet-500/20 to-cyan-400/25",
    links: { github: "#" },
  },
  {
    title: "CALCULATOR",
    desc: "A simple calculator application built using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    features: ["Core arithmetic operations", "UI interaction logic"],
    preview: "Web Math Utility",
    accent: "from-amber-500/25 via-orange-500/20 to-violet-500/25",
    links: { github: "#" },
  },
];

const experience = [
  {
    year: "2026",
    role: "Frontend Developer Intern",
    company: "NovaStack Labs",
    icon: Rocket,
  },
  {
    year: "2025",
    role: "Built AI PDF Toolkit",
    company: "Independent Project",
    icon: Sparkles,
  },
  {
    year: "2025",
    role: "Socket Programming Projects",
    company: "Networking Lab",
    icon: Layers,
  },
  {
    year: "2024",
    role: "System Security Practice",
    company: "Academic Lab",
    icon: Shield,
  },
];

const featureCards = [
  {
    title: "Scalable Frontends",
    text: "Responsive interfaces with cinematic motion and robust design systems.",
    icon: Code2,
  },
  {
    title: "Cloud Data Layer",
    text: "High-throughput API and database architecture for modern products.",
    icon: Database,
  },
  {
    title: "Realtime Backends",
    text: "Low-latency services, queues, and event-driven systems at scale.",
    icon: Server,
  },
  {
    title: "Global Reach",
    text: "Production-ready deployments with observability and resilience.",
    icon: Globe,
  },
];

const ecosystemNodes = [
  { label: "React", Icon: FaReact, x: "8%", y: "12%", delay: 0 },
  { label: "MongoDB", Icon: SiMongodb, x: "66%", y: "10%", delay: 0.2 },
  { label: "Express", Icon: SiExpress, x: "80%", y: "42%", delay: 0.4 },
  { label: "Node.js", Icon: FaNodeJs, x: "12%", y: "44%", delay: 0.5 },
  { label: "Python", Icon: FaPython, x: "18%", y: "74%", delay: 0.7 },
  { label: "Tailwind", Icon: SiTailwindcss, x: "62%", y: "76%", delay: 0.9 },
  { label: "Firebase", Icon: SiFirebase, x: "44%", y: "6%", delay: 1.1 },
  { label: "Docker", Icon: FaDocker, x: "46%", y: "84%", delay: 1.3 },
  { label: "GitHub", Icon: Github, x: "76%", y: "62%", delay: 1.5 },
];

const snippetCards = [
  {
    title: "queue.ts",
    content: "worker.process(async job => optimize(job.data));",
  },
  {
    title: "api.json",
    content: '{ "latency": "18ms", "uptime": "99.99%" }',
  },
  {
    title: "deploy.yml",
    content: "pipeline: [build, test, ship]",
  },
];

const aboutStats = [
  {
    number: "15+",
    label: "Projects Built",
    icon: Code2,
    details: [
      "Full-stack systems",
      "SaaS platforms",
      
      "AI-integrated apps",
    ],
  },
  {
    number: "20+",
    label: "Technologies",
    icon: Layers,
    details: [
      "Frontend frameworks",
      "Backend infrastructure",
      "Data + caching tools",
     
    ],
  },
  {
    number: "500+",
    label: "GitHub Contributions",
    icon: Github,
    details: [
      
      "Bug fixing + refactoring",
      "Design system updates",
      ,
    ],
  },
  {
    number: "2",
    label: "Internships",
    icon: Rocket,
    details: [
      "Cloud Computing Intern",
      
      
      "Web Development Intern",
    ],
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
    <Reveal className="mb-14 text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-300/80">
        {subtitle}
      </p>
      <h2 className="text-balance text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}

function PremiumButton({ children, className = "", icon: Icon, href }) {
  const motionProps = {
    whileHover: { y: -2, scale: 1.01 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: `btn-premium ${className}`,
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {Icon ? <Icon className="h-4 w-4" /> : null}
        </span>
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...motionProps}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon ? <Icon className="h-4 w-4" /> : null}
      </span>
    </motion.button>
  );
}

function AboutFlipCard({
  icon: Icon,
  title,
  preview,
  badge,
  backTitle,
  backText,
  backPoints = [],
  className = "",
  minHeightClass = "min-h-[280px]",
  frontExtra,
  backExtra,
}) {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 220, damping: 24, mass: 0.5 });
  const smoothY = useSpring(rotateY, { stiffness: 220, damping: 24, mass: 0.5 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMove = (event) => {
    if (isMobile) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setGlowPos({ x: px * 100, y: py * 100 });
    rotateX.set((0.5 - py) * 10);
    rotateY.set((px - 0.5) * 12);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
    setGlowPos({ x: 50, y: 50 });
  };

  const isFlipped = isMobile ? flipped : hovered;

  return (
    <motion.button
      type="button"
      aria-pressed={isFlipped}
      className={`group relative w-full text-left [perspective:1600px] ${className}`}
      style={{ rotateX: smoothX, rotateY: smoothY }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => {
        setHovered(false);
        resetTilt();
      }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      onClick={() => {
        if (isMobile) setFlipped((prev) => !prev);
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        className={`relative h-full ${minHeightClass} [transform-style:preserve-3d]`}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.6rem] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(34,211,238,0.22), transparent 55%)`,
          }}
        />

        <div className="absolute inset-0 rounded-[1.6rem] border border-cyan-300/20 bg-[linear-gradient(130deg,rgba(139,92,246,0.16),rgba(59,130,246,0.11),rgba(11,16,30,0.68))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl [backface-visibility:hidden]">
          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200/85">
                <Icon className="h-3.5 w-3.5" />
                <span>{badge}</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                {isMobile ? "Tap to flip" : "Hover to flip"}
              </span>
            </div>
            <h3 className="font-poppins text-2xl font-semibold leading-tight text-white md:text-3xl">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-200/90">{preview}</p>
            {frontExtra ? <div className="mt-auto pt-6">{frontExtra}</div> : null}
          </div>
        </div>

        <div className="absolute inset-0 rounded-[1.6rem] border border-violet-300/30 bg-[linear-gradient(150deg,rgba(15,23,42,0.9),rgba(30,41,59,0.86),rgba(10,15,24,0.95))] p-6 shadow-[0_22px_55px_rgba(0,0,0,0.48)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col">
            <p className="text-xs uppercase tracking-[0.28em] text-violet-200/85">
              Backside
            </p>
            <h4 className="mt-2 font-poppins text-xl font-semibold text-white md:text-2xl">
              {backTitle}
            </h4>
            <p className="mt-3 text-sm leading-7 text-zinc-200/90">{backText}</p>
            <div className="mt-5 grid gap-2">
              {backPoints.map((point) => (
                <div
                  key={point}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200/90"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {point}
                </div>
              ))}
            </div>
            {backExtra ? <div className="mt-auto pt-4">{backExtra}</div> : null}
          </div>
        </div>
      </motion.div>
    </motion.button>
  );
}

function ProjectShowcaseCard({ project, index }) {
  const [isMobile, setIsMobile] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 220, damping: 24, mass: 0.52 });
  const smoothY = useSpring(rotateY, { stiffness: 220, damping: 24, mass: 0.52 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMove = (event) => {
    if (isMobile) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setGlowPos({ x: px * 100, y: py * 100 });
    rotateX.set((0.5 - py) * 8);
    rotateY.set((px - 0.5) * 10);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <motion.article
      variants={revealVariant}
      style={{ rotateX: smoothX, rotateY: smoothY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -10, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-black/35 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.35)] [perspective:1500px] ${project.size || ""}`}
    >
      <motion.div
        aria-hidden
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
        className={`pointer-events-none absolute -inset-px rounded-3xl bg-[length:200%_200%] bg-gradient-to-r ${project.accent || "from-violet-500/25 via-cyan-400/20 to-blue-500/25"} opacity-35`}
      />
      <div className="pointer-events-none absolute inset-[1px] rounded-3xl bg-[#080b14]/90" />
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(34,211,238,0.22), transparent 58%)`,
        }}
      />

      <div className="relative z-10">
        <div className="relative mb-5 h-52 overflow-hidden rounded-2xl border border-white/15 bg-black/35">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.accent || "from-violet-500/35 via-blue-500/20 to-cyan-400/30"}`}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_55%),linear-gradient(160deg,rgba(0,0,0,0)_10%,rgba(0,0,0,0.42)_90%)]"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="absolute inset-x-4 bottom-4">
            <p className="text-[11px] uppercase tracking-[0.26em] text-cyan-100/85">Project Preview</p>
            <p className="font-poppins mt-1 text-xl font-semibold text-white">{project.preview}</p>
          </div>
        </div>

        <h3 className="font-poppins text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-zinc-300/90">{project.desc}</p>

        {project.features?.length ? (
          <div className="mt-4 grid gap-2">
            {project.features.slice(0, 4).map((feature) => (
              <div
                key={feature}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200/90"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                {feature}
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links?.live ? (
            <motion.a
              href={project.links.live}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-premium px-4 py-2 text-sm"
            >
              Live Demo
            </motion.a>
          ) : null}
          {project.links?.github ? (
            <motion.a
              href={project.links.github}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-premium border-white/20 from-white/10 to-white/5 px-4 py-2 text-sm"
            >
              GitHub
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function TechEcosystemGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-14 w-full max-w-[620px] lg:mt-24"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(139,92,246,0.09),rgba(56,189,248,0.04),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] [background-size:34px_34px]" />

        <div className="relative h-[460px] w-full">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/15"
          />

          <motion.div
            animate={{
              y: [0, -8, 0],
              boxShadow: [
                "0 0 20px rgba(59,130,246,0.22)",
                "0 0 38px rgba(139,92,246,0.35)",
                "0 0 20px rgba(59,130,246,0.22)",
              ],
            }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/20 bg-black/50 backdrop-blur-xl"
          >
            <Cpu className="h-10 w-10 text-cyan-300" />
          </motion.div>

          {ecosystemNodes.map(({ label, Icon, x, y, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.5, delay },
                scale: { duration: 0.5, delay },
                y: {
                  duration: 3.2 + delay,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{ left: x, top: y }}
              className="absolute will-change-transform"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-2 text-xs font-medium text-zinc-100 backdrop-blur-xl transition-colors hover:border-cyan-300/50">
                <Icon className="h-4 w-4 text-cyan-300" />
                <span>{label}</span>
              </div>
            </motion.div>
          ))}

          <div className="absolute inset-x-2 bottom-2 grid gap-3 sm:grid-cols-3">
            {snippetCards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: [0, -4, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.4 + i * 0.12 },
                  y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
                }}
                className="rounded-xl border border-white/15 bg-black/55 p-3 text-xs text-zinc-300"
              >
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
                  {item.title}
                </p>
                <p className="font-mono text-[11px] leading-relaxed text-zinc-200">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        variants={staggerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-5 grid gap-4 sm:grid-cols-2"
      >
        {featureCards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.title}
              variants={revealVariant}
              whileHover={{ y: -6 }}
              className="card-glass p-5"
            >
              <Icon className="mb-3 h-6 w-6 text-cyan-300" />
              <h3 className="mb-2 text-base font-semibold text-white">{card.title}</h3>
              <p className="text-sm leading-6 text-zinc-300/85">{card.text}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.div>
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
    if (typeof window === "undefined" || window.innerWidth < 1024) {
      return undefined;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
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
    <main className="relative overflow-x-clip bg-[#06070d] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(139,92,246,0.22),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.14),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] [background-size:72px_72px]" />

      <nav className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-black/35 px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <a
            href="#home"
            className="text-lg font-semibold tracking-[0.2em] text-white sm:text-xl"
          >
            FAZIL  <span className="text-cyan-300">PORTFOLIO</span>
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
                      className="absolute inset-0 rounded-full border border-cyan-300/50 bg-gradient-to-r from-violet-500/25 to-cyan-400/20 shadow-[0_0_18px_rgba(34,211,238,0.25)]"
                      transition={{ type: "spring", stiffness: 320, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-cyan-300/60 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="rounded-lg border border-white/15 bg-white/5 p-2 text-zinc-100 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open ? (
          <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/15 bg-black/70 p-4 backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-lg px-3 py-2 text-zinc-200 transition-colors hover:bg-white/10"
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
        className="relative px-6 pb-24 pt-36 md:pt-40 lg:pb-32 lg:pt-44"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-2 lg:items-start lg:gap-24">
          <Reveal className="relative z-10">
            <div className="font-poppins mb-6 inline-flex w-fit rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200 backdrop-blur-xl">
              Full Stack Developer and Systems Enthusiast
            </div>

            <h1 className="font-poppins text-balance text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Building
              <span className="ml-3 inline-block bg-gradient-to-r from-violet-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent [text-shadow:0_0_38px_rgba(34,211,238,0.35)]">
                futuristic
              </span>
              <br />
              digital experiences.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300/90 md:text-xl md:leading-9">
              I design immersive full-stack applications, scalable backend systems,
              networking tools, and premium interfaces with modern web technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <PremiumButton href="#projects" icon={ArrowRight}>
                View Projects
              </PremiumButton>
              <PremiumButton
                className="border-white/20 from-white/10 to-white/5"
                icon={Download}
              >
                Resume
              </PremiumButton>
            </div>

            <motion.div
              variants={staggerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {socialLinks.map(({ label, href, Icon }) => (
                <motion.a
                  variants={revealVariant}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 text-zinc-100 backdrop-blur-xl transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </Reveal>

          <TechEcosystemGraphic />
        </div>
      </section>

      <section id="about" className="relative px-6 py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(139,92,246,0.22),transparent_40%),radial-gradient(circle_at_80%_65%,rgba(34,211,238,0.2),transparent_46%)]" />
        <motion.div
          aria-hidden
          animate={{ opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-16 top-12 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          className="pointer-events-none absolute -bottom-10 right-8 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
        />

        <div className="mx-auto max-w-7xl">
          <SectionTitle title="About Me" subtitle="Who I Am" />

          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="grid gap-6 lg:grid-cols-12"
          >
            <motion.div variants={revealVariant} className="lg:col-span-8">
              <AboutFlipCard
                icon={Sparkles}
                badge="Core Story"
                title="Passionate about engineering immersive digital systems."
                preview="Designing high-performance full-stack products where system architecture and cinematic UI are equally intentional."
                backTitle="Engineering Philosophy"
                backText="I build software as an end-to-end product experience: strong architecture, robust APIs, and interface systems that feel effortless."
                backPoints={[
                  "System design + scalability mindset",
                  "UI/UX craft with interaction depth",
                  "Performance-first engineering decisions",
                  
                ]}
                minHeightClass="min-h-[360px]"
                frontExtra={
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-4">
                    <motion.div
                      className="absolute inset-0 bg-[linear-gradient(120deg,rgba(139,92,246,0.2),transparent_50%,rgba(34,211,238,0.2))]"
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative z-10 flex flex-wrap gap-2 text-xs text-zinc-100/90">
                      {["Next.js", "Node.js", "MongoDB", "Framer Motion", "Redis", "Docker"].map((tag) => (
                        <span key={tag} className="rounded-full border border-white/15 bg-black/35 px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                }
                backExtra={
                  <div className="flex items-center gap-2 text-xs text-cyan-200/90">
                    <Cpu className="h-4 w-4" />
                    <span>Systems thinking + motion-led product craft</span>
                  </div>
                }
              />
            </motion.div>

            <motion.div variants={revealVariant} className="lg:col-span-4">
              <AboutFlipCard
                icon={Cpu}
                badge="Current Focus"
                title="Realtime architecture and polished motion interfaces."
                preview="Balancing backend reliability with premium user experiences and frontend performance."
                backTitle="What I am Building Now"
                backText="I am focused on systems that are fast, observable, and delightful to use."
                backPoints={[
                  "Backend engineering + APIs",
                 
                  "Full-stack architecture decisions",
                  "Motion UI systems and microinteractions",
                  "Performance optimization and real-time state",
                ]}
                minHeightClass="min-h-[360px]"
                frontExtra={
                  <div className="grid grid-cols-3 gap-2">
                    {[Server, Database, Sparkles].map((Icon, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 py-2"
                      >
                        <Icon className="h-4 w-4 text-cyan-200" />
                      </motion.div>
                    ))}
                  </div>
                }
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
            className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {aboutStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.label} variants={revealVariant}>
                  <AboutFlipCard
                    icon={Icon}
                    badge="Stat"
                    title={stat.number}
                    preview={stat.label}
                    backTitle={stat.label}
                    backText="Highlights behind this metric."
                    backPoints={stat.details}
                    minHeightClass="min-h-[255px]"
                    frontExtra={
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        Live profile signal
                      </div>
                    }
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="skills" className="px-6 py-28 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Skills and Technologies" subtitle="Tech Stack" />

          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                variants={revealVariant}
                whileHover={{ y: -8 }}
                key={category}
                className="card-glass p-8"
              >
                <h3 className="mb-6 text-2xl font-bold text-cyan-300">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/15 bg-black/35 px-4 py-2 text-sm text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="px-6 py-28 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Project Showcase" subtitle="Portfolio" />

          <Reveal className="mb-10 text-center">
            <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-300/90">
              A premium bento-grid of production projects, ML systems, and full-stack
              platforms with interactive case-card motion.
            </p>
          </Reveal>

          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {projects.map((project, i) => (
              <ProjectShowcaseCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <section id="experience" className="px-6 py-28 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Experience" subtitle="Journey" />

          <Reveal>
            <div className="relative overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="min-w-[980px]">
                <div className="relative h-1 rounded-full bg-gradient-to-r from-violet-500/30 via-cyan-300/50 to-blue-500/30" />

                <motion.div
                  variants={staggerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="mt-8 grid grid-cols-4 gap-6"
                >
                  {experience.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.article
                        key={`${item.year}-${item.role}`}
                        variants={revealVariant}
                        whileHover={{ y: -8 }}
                        className="card-glass relative snap-start p-6"
                      >
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-cyan-200">
                          {item.year}
                        </span>
                        <h3 className="mb-2 text-xl font-semibold">{item.role}</h3>
                        <p className="text-sm text-zinc-300/80">{item.company}</p>
                        {i < experience.length - 1 ? (
                          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-px bg-white/10 xl:block" />
                        ) : null}
                      </motion.article>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-28 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Education and Certifications"
            subtitle="Qualifications"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="card-glass p-10">
              <h3 className="mb-4 text-3xl font-bold">
                Bachelor of Computer Science
              </h3>
              <p className="mb-6 text-zinc-300/90">
                Specialized in software engineering, networking, and distributed
                systems.
              </p>
              <span className="text-cyan-300">2023 - 2027</span>
            </Reveal>

            <Reveal className="card-glass p-10">
              <h3 className="mb-6 text-3xl font-bold">Certifications</h3>
              <div className="space-y-4 text-zinc-200">
                <p>- Full Stack Web Development</p>
                <p>- Linux Essentials</p>
                <p>- Networking Fundamentals</p>
                <p>- Cloud Computing Basics</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:py-32">
        <Reveal className="mx-auto max-w-5xl rounded-[40px] border border-cyan-300/20 bg-gradient-to-br from-violet-500/15 via-blue-500/10 to-cyan-300/10 p-14 text-center backdrop-blur-xl">
          <h2 className="mb-6 text-5xl font-black">Resume</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-zinc-200/90">
            Explore a complete overview of projects, technical expertise,
            engineering experience, and professional achievements.
          </p>
          <PremiumButton icon={Download}>Download Resume</PremiumButton>
        </Reveal>
      </section>

      <section id="contact" className="relative w-full px-0 py-28 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(139,92,246,0.38),transparent_45%),radial-gradient(circle_at_82%_76%,rgba(34,211,238,0.3),transparent_52%)]" />
        <div className="mx-auto w-full max-w-7xl px-6">
          <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(140deg,rgba(139,92,246,0.2),rgba(59,130,246,0.14),rgba(10,20,35,0.7))] p-8 shadow-[0_30px_85px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-12">
            <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] [background-size:42px_42px]" />
            <div className="pointer-events-none absolute -left-20 top-0 h-52 w-52 rounded-full bg-violet-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-14 -right-14 h-56 w-56 rounded-full bg-cyan-300/25 blur-3xl" />

            <div className="relative z-10 text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                Contact
              </p>
              <h2 className="font-poppins text-balance text-4xl font-semibold text-white md:text-6xl">
                Let us Connect
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-200/90 md:text-lg">
                Open to collaborations, internships, and building ambitious digital products.
              </p>
            </div>

            <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2">
              <motion.button
                type="button"
                onClick={handleCopyEmail}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group relative rounded-2xl border border-white/15 bg-black/30 p-5 text-left transition-colors hover:border-cyan-300/45"
              >
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-violet-400/0 via-cyan-300/35 to-violet-400/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute -top-9 left-4 rounded-md border border-white/20 bg-black/85 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Copy Email
                </span>
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-cyan-200/90">
                    <Mail className="h-4 w-4" />
                    Email
                  </span>
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-emerald-300" />
                  ) : (
                    <Copy className="h-4 w-4 text-zinc-300 transition-colors group-hover:text-cyan-200" />
                  )}
                </div>
                <span className="bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-lg font-semibold text-transparent">
                  fazilraphi14@gmail.com
                </span>
                <p className="mt-1 text-sm text-zinc-300/75">
                  {copiedEmail ? "Copied to clipboard" : "Click to copy"}
                </p>
              </motion.button>

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-2xl border border-white/15 bg-black/30 p-5 text-left"
              >
                <p className="mb-2 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-cyan-200/90">
                  <MapPin className="h-4 w-4" />
                  Location
                </p>
                <p className="text-lg font-semibold text-zinc-100">Kochi, India</p>
                <p className="mt-1 text-sm text-zinc-300/75">Available for remote collaboration</p>
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
                  className="group relative inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/35 px-5 py-3 text-zinc-100 transition-colors hover:border-cyan-300/50 hover:text-cyan-100"
                >
                  <div className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-r from-violet-400/0 via-cyan-300/35 to-violet-400/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-white/20 bg-black/85 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {tooltip}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 p-2 transition-colors group-hover:border-cyan-300/45">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="relative text-sm font-medium">
                    {label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-violet-300 to-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-cyan-200/80" />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-2xl font-black">
              Always<span className="text-cyan-300"> Learning</span>
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
                whileHover={{ y: -3, scale: 1.06 }}
                className="rounded-xl border border-white/15 bg-white/5 p-3 transition-colors hover:border-cyan-300/45 hover:bg-cyan-300/10"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
