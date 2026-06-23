"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// import { TooltipProvider } from "@radix-ui/react-tooltip";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  BsArrowUpRight,
  BsChevronLeft,
  BsChevronRight,
  BsGithub,
  BsX,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react"; // Correct Swiper import

import WorkSliderBtns from "@/components/WorkSliderBtns";
import Image from "next/image";
import "swiper/css";

const projects = [
  {
    num: "01",
    category: [
      "Web Development",
      "Automation",
      "Artificial Intelligence",
      "DevOps",
    ],
    title: "Quickmation",
    description:
      "A complete ERP + CRM solution for businesses, along with AI tools and a complete automation suite. My most Ambitious project till date.",
    stack: [
      { name: "MERN Stack" },
      { name: "Tailwind CSS" },
      { name: "Python Selenium" },
    ],
    live: "https://erp.quickmation.com",
    github: "private",
    date: "Ongoing",
  },

  {
    num: "25",
    category: ["Web Development"],
    title: "PBS NYC",
    description:
      "A portfolio website for PBS NYC (An NYC based construction company), showcasing their services and projects.",
    stack: [{ name: "Next.js" }, { name: "MongoDB" }],
    live: "https://pbs-nyc.vercel.app",
    github: "https://github.com/Overproness/pbs_nyc",
    date: "Mar 2025",
  },
  {
    num: "02",
    category: ["Web Development"],
    title: "AbuBeast",
    description:
      "A website that allows customers to link their crypto wallets and let AI trade on their behalf. ",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "RUST" },
      { name: "Python" },
    ],
    live: "https://abubeast.vercel.app",
    github: "https://github.com/Overproness/abubeast",
  },
  {
    num: "27",
    category: ["Web Development", "Automation", "Artificial Intelligence"],
    title: "Talash",
    description:
      "Built TALASH, an end-to-end LLM-powered recruitment system that transforms unstructured CVs into ranked candidate insights and hiring recommendations.",
    stack: [
      { name: "Next.js" },
      { name: "Fast API" },
      { name: "MongoDB" },
      { name: "Python Selenium" },
    ],
    live: "https://talash-llm-project.vercel.app",
    github: "https://github.com/Overproness/talash_llm_project",
    date: "May 2026",
  },
  {
    num: "12",
    category: ["Game Development"],
    title: "3d Zombie Survival Game",
    description:
      "A 3D zombie survival game where each zombie can be killed with only a specific type of bullet. And you only have one gun, where you can load and fire bullets sequentially.",
    stack: [{ name: "Unreal Engine" }, { name: "C++" }],
    image: "/webp/zombie-game-1.webp",
    github: "https://github.com/Overproness/zombie_game_DSA_Project",
    date: "Feb 2024",
    gallery: [
      {
        src: "/webp/zombie-game-1.webp",
        description: "Main gameplay interface of 3D Zombie Survival Game",
      },
      {
        src: "/webp/zombie-game-2.webm",
        description:
          "Gameplay Video. Each Zombie type can be killed with a specific bullet type only. Its low quality to decrease file size.",
      },
    ],
  },
  {
    num: "08",
    category: ["Management System"],
    title: "Trading System with AI Bot",
    description:
      "A Trading System that let's you trade cryptocurrencies Futures, and has an AI (Unsupervised ML) Trading Bot built into it. More Details on the Github Repo.",
    stack: [{ name: "C++" }, { name: "WinForms" }],
    image: "/trading-project-1.png",
    github: "https://github.com/Overproness/Trading-Project",
    date: "Dec 2023",
    gallery: [
      {
        src: "/trading-project-1.png",
        description: "Main trading interface",
      },
      {
        src: "/trading-project-2.png",
        description:
          "Representation of Trading data in Eucledean and Lorenztain space. Originally done by ©jdehorty on tradingview.com",
      },
      {
        src: "/trading-project-3.png",
        description: "Explanation of the AI Bot logic. By ©jdehorty",
      },
    ],
  },
  {
    num: "10",
    category: ["Web Development"],
    title: "Deimos Tech Website",
    description:
      "A portofilio website for Deimos Tech, showcasing their services and projects.",
    stack: [
      { name: "MERN Stack" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    live: "https://deimos-tech.com",
    github: "private",
    date: "Apr 2024",
  },
  {
    num: "03",
    category: ["Blockchain Development"],
    title: "Swappers 2.0",
    description:
      "A project that buys the newly launched tokens on Solana, holds them for a while, and then sells them for profit. If an anomoly is detected, it immediately sells that token using Jito. ",
    stack: [{ name: "RUST" }, { name: "Python" }],
    github: "private",
  },

  {
    num: "11",
    category: ["App Development"],
    title: "Easy Chat Application",
    description:
      "A chat application built for easy and efficient communication.",
    stack: [{ name: "Java" }, { name: "Firebase" }],
    image: "/webp/easy-chat-app-1.webp",
    github: "https://github.com/Overproness/EasyChat-Java-ChatApp-ESP",
    date: "May 2024",
    gallery: [
      {
        src: "/webp/easy-chat-app-1.webp",
        description: "Chat Interface of Easy Chat Application",
      },
      {
        src: "/webp/easy-chat-app-2.webp",
        description: "Chat Interface of other user",
      },
    ],
  },

  {
    num: "13",
    category: ["Artificial Intelligence"],
    title: "Chess Puzzle Solver",
    description:
      "A python based chess game, that can solve chess puzzles for either side. ",
    stack: [{ name: "Python" }],
    image: "/webp/chess-puzzle-solver-1.webp",
    github:
      "https://github.com/Overproness/chess-puzzle-solver-with-minimax-and-alpha-beta/tree/main",
    date: "Dec 2024",
    gallery: [
      {
        src: "/webp/chess-puzzle-solver-1.webp",
        description: "The game's interface",
      },
      {
        src: "/webp/chess-puzzle-solver-2.webm",
        description: "A demonstration of the puzzle-solving capability",
      },
    ],
  },
  {
    num: "14",
    category: ["DevOps"],
    title: "Webstori",
    description:
      "Deployed a website for a client and created a CI/CD pipeline. ",
    stack: [{ name: "Next.js" }, { name: "MongoDB" }],
    live: "https://webstori.com/en",
    github: "https://github.com/Overproness/webstori_website",
    date: "Feb 2025",
  },
  {
    num: "15",
    category: ["Deep Learning"],
    title: "cGAN Handwritten Digit Generator",
    description:
      "A deep learning project that generates handwritten digits using conditional Generative Adversarial Networks (cGANs). If the preview doesn't load, it means the Streamlit app is currently asleep. Please click the Live button from below and wake it up.",
    stack: [
      { name: "Pytorch" },
      { name: "Streamlit" },
      { name: "Python" },
      { name: "Cuda" },
    ],
    live: "https://cgan-handwritten-digit-generator.streamlit.app",
    github: "https://github.com/Overproness/cGAN-Handwritten-Digit-Generator",
    date: "Jun 2025",
  },
  {
    num: "16",
    category: ["Automation", "Web Development"],
    title: "Political Candidates Scrapper and Dashboard",
    description:
      "A bot that scrapes political candidates data from various websites including Facebook and displays it on a dashboard.",
    stack: [{ name: "MERN Stack" }, { name: "Selenium" }],
    image: "/webp/political-candidates-website-1.webp",
    // live: "https://dataautomation.primetimepremier.com",
    github: "private",
    date: "Jun 2025",
    gallery: [
      {
        src: "/webp/political-candidates-website-1.webp",
        description: "The main Interface of the Dasboard",
      },
      {
        src: "/webp/political-candidates-website-2.webp",
        description: "Advanced Options for Facebook Scraping",
      },
      {
        src: "/webp/political-candidates-website-3.webp",
        description: "Data View Section of the Dashboard",
      },
      {
        src: "/webp/political-candidates-website-4.webp",
        description: "Additional Features like Scheduling and Exporting Data",
      },
    ],
  },

  {
    num: "18",
    category: ["Deep Learning"],
    title: "Gaze Gaussian Transformer",
    description:
      "A Deep Learning model that redirects gaze and face orientation in images and videos using Gaussian Transformers. Built on top of GazeGaussian by @ucwxb on Github. ",
    stack: [{ name: "Python" }, { name: "Pytorch" }, { name: "Cuda" }],
    image: "/webp/gaze-gaussian-1.webp",
    github: "private",
    date: "July 2025",
    gallery: [
      {
        src: "/webp/gaze-gaussian-1.webp",
        description: "Original Work by @ucwxb on Github - GazeGaussian",
      },
      {
        src: "/webp/gaze-gaussian-2.webp",
        description:
          "Complete Architecture Diagram of GazeGaussian of the Original Work. Our Custom work is still unpublished.",
      },
      {
        src: "/webp/gaze-gaussian-3.webm",
        description:
          "Model in working condition - Our Custom Work is still unpublished.",
      },
    ],
  },

  {
    num: "21",
    category: ["Deep Learning"],
    title: "GRU XNet",
    description:
      "A Deep learning model for emotion recognition using clinical EEG",
    stack: [{ name: "Python" }, { name: "Pytorch" }, { name: "Cuda" }],
    image: "/webp/gru-xnet-1.webp",
    github: "https://github.com/Overproness/GRU-XNet_EEG_Emotion_Recognition",
    date: "Dec 2025",
    gallery: [
      {
        src: "/webp/gru-xnet-1.webp",
        description: "Architecture",
      },
      {
        src: "/webp/gru-xnet-2.webp",
        description: "Detailed Diagram",
      },
    ],
  },
  {
    num: "22",
    category: ["Machine Learning", "Data Science"],
    title: "Cross Media Bias Analysis Modular Pipeline",
    description:
      "A complete data science pipeline that analyzes bias in cross media sources using data science techniques.",
    stack: [{ name: "Python" }],
    image: "/webp/cross-media-bias-1.webp",
    github:
      "https://github.com/Overproness/Cross-Media-Bias-Analysis-Modular-Pipeline",
    date: "Dec 2025",
    gallery: [
      {
        src: "/webp/cross-media-bias-1.webp",
        description: "Pipeline Overview",
      },
      {
        src: "/webp/cross-media-bias-2.webp",
        description:
          "Detailed Module Explanation of complete pipeline architecture",
      },
    ],
  },
  {
    num: "23",
    category: ["Data Science"],
    title: "F1 Historical & Telemetry Data Visualization",
    description:
      "A Power BI dashboard that visualizes historical and telemetry data of Formula 1 races. If the preview doesn't load, please click the Github button from below to view the report.",
    stack: [{ name: "Power Bi" }, { name: "Python" }],
    image: "/webp/f1-visualization-1.webp",
    github:
      "https://drive.google.com/drive/folders/1dcrOYepBGXEs5ffOzSa_ojgRklX5t8r7?usp=sharing", // its not possible for me to upload PowerBI reports to github as of now, but hopefully in future the problem that I'm facing will be resolved.
    live: "https://app.powerbi.com/reportEmbed?reportId=0ea98eb2-b04a-42e7-8273-b020bd08e2eb&autoAuth=true&ctid=1511ab2e-502b-4e2d-bd68-f679f549b5a2&actionBarEnabled=true&reportCopilotInEmbed=true",
    date: "Dec 2025",
    gallery: [
      {
        src: "/webp/f1-visualization-1.webp",
        description: "First Dashboard Tab. (Visit Github for full report)",
      },
      {
        src: "/webp/f1-visualization-2.webp",
        description: "Second Dashboard Tab. (Visit Github for full report)",
      },
    ],
  },
  {
    num: "24",
    category: ["Deep Learning"],
    title: "PCB Defect Detection",
    description:
      "A deep learning model for detecting defects in printed circuit boards (PCBs) using advanced image processing techniques.",
    stack: [{ name: "Python" }, { name: "Pytorch" }, { name: "Cuda" }],
    image: "/webp/pcb-detection-1.webp",
    github: "https://github.com/Overproness/PCB-Defect-Detection",
    date: "Dec 2025",
    gallery: [
      {
        src: "/webp/pcb-detection-1.webp",
        description: "PCB Defect Detection Overview",
      },
      {
        src: "/webp/pcb-detection-2.webp",
        description: "Model Architecture Diagram",
      },
    ],
  },

  {
    num: "26",
    category: ["Web Development", "Deep Learning"],
    title: "DL Model Builder",
    description:
      "A web application that allows users to build deep learning models using drag-and-drop interface.",
    stack: [{ name: "MERN Stack" }, { name: "TensorFlow" }, { name: "Python" }],
    live: "https://web-eng-project-lac.vercel.app",
    github: "https://github.com/Overproness/web_eng_project",
    date: "Dec 2025",
  },
  {
    num: "20",
    category: ["Web Development"],
    title: "Task List Management",
    description:
      "A web application to manage and organize tasks efficiently. It provides task management in a gamified manner to keep users motivated to complete tasks.",
    stack: [{ name: "Next.js" }, { name: "MongoDB" }],
    live: "https://task-list-management-mern.vercel.app",
    github: "https://github.com/Overproness/Task-List-Management-MERN",
    date: "Nov 2025",
  },
  {
    num: "17",
    category: ["Web Development"],
    title: "Medical Bot Website",
    description:
      "A website that displays patients vital data, that is collected and sent by a medical bot.",
    stack: [{ name: "MERN Stack" }],
    live: "https://med-bot-site.vercel.app",
    github: "https://github.com/Overproness/Med_Bot_Site",
    date: "Mar 2025",
  },

  {
    num: "04",
    category: ["Automation"],
    title: "Typing Speed Bot",
    description:
      "A bot that automates typing tests to achieve high WPM scores on MonkeyType.",
    stack: [{ name: "Selenium" }],
    image: "/webp/typing-speed-bot-1.webp",
    github: "https://github.com/Overproness/Typing-Speed-Bot",
    date: "Feb 2024",
    gallery: [
      {
        src: "/webp/typing-speed-bot-1.webp",
        description: "Bot achieving high WPM score",
      },
      {
        src: "/webp/typing-speed-bot-2.webm",
        description: "Bot in action typing a test",
      },
    ],
  },
  {
    num: "05",
    category: ["Web Development"],
    title: "Phone App",
    description:
      "A website that stores phone numbers and allows users to search for them. (this was built when I was learning web development)",
    stack: [{ name: "MERN Stack" }],
    github: "https://github.com/Overproness/Phone_App/tree/main",
    live: "https://phone-app-t1p9.onrender.com",
    date: "Oct 2023",
  },
  {
    num: "06",
    category: ["Web Development"],
    title: "Physics Notes Website",
    description:
      "A website that provides comprehensive physics notes for students.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }],
    github: "https://github.com/Overproness/PhysicsNotes-Website",
    live: "https://physicsnotes.netlify.app/",
    date: "Jan 2022",
  },
  {
    num: "07",
    category: ["Web Development"],
    title: "FB Login Page Clone",
    description:
      "A simple clone of Facebook's login page built using HTML and CSS.",
    stack: [{ name: "HTML" }, { name: "CSS" }],
    live: "https://courageous-panda-b1ea41.netlify.app",
    date: "Aug 2022",
  },

  {
    num: "09",
    category: ["Management System"],
    title: "Library Management System",
    description:
      "A desktop application to manage library operations like book lending, returns, and inventory.",
    stack: [{ name: "Java" }, { name: "Java Swing" }],
    image: "/webp/library-management-system-1.webp",
    github: "https://github.com/Overproness/Library-Management-System",
    date: "Mar 2024",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = projects.flatMap((p) => p.category);
    return ["All", ...new Set(cats)];
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category.includes(selectedCategory));
  }, [selectedCategory]);

  // Update project when filtered projects change
  useEffect(() => {
    if (filteredProjects.length > 0) {
      setProject(filteredProjects[0]);
    }
  }, [filteredProjects]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(filteredProjects[currentIndex]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const isVideo = (src) => {
    return (
      src.endsWith(".webm") || src.endsWith(".mp4") || src.endsWith(".mov")
    );
  };

  const openGallery = (index = 0) => {
    if (project.gallery && project.gallery.length > 0) {
      setCurrentGalleryIndex(index);
      setIsGalleryOpen(true);
    }
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextGalleryImage = () => {
    if (project.gallery) {
      setCurrentGalleryIndex((prev) => (prev + 1) % project.gallery.length);
    }
  };

  const prevGalleryImage = () => {
    if (project.gallery) {
      setCurrentGalleryIndex((prev) =>
        prev === 0 ? project.gallery.length - 1 : prev - 1,
      );
    }
  };

  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);

  const openPreview = () => {
    if (project.live) {
      setIsGalleryOpen(false);
      setIsPreviewExpanded(true);
    }
  };

  const closePreview = () => {
    setIsPreviewExpanded(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {/* Category Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-white">
              Projects{" "}
              <span className="text-accent">
                (Total Projects: {filteredProjects.length})
              </span>
            </h2>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-primary"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 ">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github &&
                  (project.github === "private" ? (
                    <div className="cursor-not-allowed">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-50 cursor-not-allowed">
                            <BsGithub className="text-white text-3xl" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Private Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <Link href={project.github} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github Repo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              key={selectedCategory}
            >
              {filteredProjects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className={`h-[460px] relative group flex justify-center items-center ${
                        project.live ? "bg-white" : "bg-pink-50/20"
                      } overflow-hidden cursor-pointer`}
                      onClick={(e) => {
                        // Open gallery if clicking on gallery badge
                        if (e.target.closest(".gallery-badge")) {
                          openGallery(0);
                        } else if (project.live) {
                          // Open preview modal for live projects
                          openPreview();
                        } else if (
                          project.gallery &&
                          project.gallery.length > 0
                        ) {
                          // Open gallery for non-live projects with gallery
                          openGallery(0);
                        }
                      }}
                    >
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 group-hover:bg-black/30 transition-all pointer-events-none"></div>

                      {project.gallery && project.gallery.length > 0 && (
                        <div className="absolute top-4 right-4 z-20 bg-accent px-3 py-1 rounded-full text-primary text-sm font-semibold cursor-pointer gallery-badge">
                          +{project.gallery.length} photos
                        </div>
                      )}

                      {project.live ? (
                        <div className="relative w-full h-full overflow-hidden pointer-events-none">
                          <iframe
                            src={project.live}
                            className="absolute top-0 left-0 border-0"
                            style={{
                              width: "1500px",
                              height: "1500px",
                              transform: "scale(0.4)",
                              transformOrigin: "top left",
                              pointerEvents: "none",
                            }}
                            title={project.title}
                            loading="lazy"
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                          />
                          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                            <div className="bg-black/50 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                              Click to interact
                            </div>
                          </div>
                        </div>
                      ) : project.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-contain"
                            alt={project.title}
                          />
                        </div>
                      ) : (
                        <div className="relative w-full h-full flex items-center justify-center text-white/60">
                          <p>No preview available</p>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && project.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeGallery}
          >
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-50"
            >
              <BsX className="text-5xl" />
            </button>

            <div
              className="relative w-full max-w-5xl mx-auto px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={currentGalleryIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="relative h-[70vh] w-full bg-white/5 rounded-lg overflow-hidden flex items-center justify-center">
                  {isVideo(project.gallery[currentGalleryIndex].src) ? (
                    <video
                      src={project.gallery[currentGalleryIndex].src}
                      // controls
                      autoPlay
                      loop
                      muted
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <Image
                      src={project.gallery[currentGalleryIndex].src}
                      fill
                      className="object-contain"
                      alt={project.gallery[currentGalleryIndex].description}
                    />
                  )}
                </div>

                <div className="mt-4 text-center">
                  <p className="text-white text-lg">
                    {project.gallery[currentGalleryIndex].description}
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    {currentGalleryIndex + 1} / {project.gallery.length}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevGalleryImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-accent hover:bg-accent-hover text-primary rounded-full flex items-center justify-center transition-all"
                  >
                    <BsChevronLeft className="text-2xl" />
                  </button>
                  <button
                    onClick={nextGalleryImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-accent hover:bg-accent-hover text-primary rounded-full flex items-center justify-center transition-all"
                  >
                    <BsChevronRight className="text-2xl" />
                  </button>
                </>
              )}

              {/* Thumbnail Navigation */}
              <div className="flex gap-2 justify-center mt-6 overflow-x-auto pb-2">
                {project.gallery.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGalleryIndex(index)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentGalleryIndex
                        ? "border-accent scale-110"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    {isVideo(item.src) ? (
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        muted
                      />
                    ) : (
                      <Image
                        src={item.src}
                        fill
                        className="object-cover"
                        alt={`Thumbnail ${index + 1}`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Website Preview Modal */}
      <AnimatePresence>
        {isPreviewExpanded && project.live && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closePreview}
          >
            <button
              onClick={closePreview}
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-50"
            >
              <BsX className="text-5xl" />
            </button>

            <div
              className="relative w-full h-full max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={project.live}
                  className="w-full h-full border-0"
                  title={project.title}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox"
                />
              </div>
              <div className="absolute -bottom-10 left-0 right-0 text-center">
                <p className="text-white/80 text-sm">
                  {project.title} - Interactive Preview
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Work;
