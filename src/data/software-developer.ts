export const profile = {
    name: "Noor Azami",
    role: "Full-Stack Developer",
    status: "IT Support Intern @ DayOne",
    location: ["Remote", "Hybrid", "Relocation"],
    bio: "A passionate full-stack developer crafting high-impact digital solutions through code and AI-assisted workflows, seeking to build scalable products with an innovative engineering team.",
    avatar: "assets/profile.webp",
    resume: "assets/Fullstack_Developer_Intern.pdf",
    aiTools: ["Gemini AI", "GitHub Copilot", "Claude 3.5"]
};

export const files = [
    { name: 'projects.json', active: false, icon: '📦', href: 'role-software-developer/projects' },
    { name: 'home-software-developer.ipynb', active: true, icon: '📓', href: 'role-software-developer/' },
];

export const expertise = [
    {
        id: "frontend",
        title: "Full-Stack Dev",
        icon: "code", // We'll handle icons in the component or use a string identifier
        desc: "React, Vue.js, Node.js, and database design for complete web solutions.",
        color: "blue"
    },
    {
        id: "uiux",
        title: "UI/UX Implementation",
        icon: "design",
        desc: "Responsive design, accessibility, and pixel-perfect implementations.",
        color: "purple"
    },
    {
        id: "performance",
        title: "Performance",
        icon: "lightning",
        desc: "Fast loading times, efficient algorithms, and scalable architecture.",
        color: "green"
    }
];

export const projectsData = [
    {
        title: "DayOne Deploy",
        type: "C# Automation Suite",
        desc: "Enterprise-grade C# (.NET 10) suite for zero-touch laptop provisioning. Features offline network staging, resilient state orchestration via RunOnce, and real-time observability with Spectre.Console.",
        image: "gradient",
        link: "projects/dayone-deploy",
        color: "blue",
        icon: "cpu",
        aiEmpowered: true
    },
    {
        title: "Go-Lumina",
        type: "Backend / SRE",
        desc: "High-performance caching reverse proxy in Go capable of 7,500 RPS. Implements thread-safe LRU cache, Singleflight for request coalescing, and SWR for extreme reliability.",
        image: "gradient",
        link: "projects/go-lumina",
        color: "cyan",
        icon: "zap"
    },
    {
        title: "Gopher-Ops",
        type: "AI SRE Bot",
        desc: "Secure AI ChatOps bot (Go + Gemini 2.5) managing Docker & Cloud metrics via Telegram. Features live telemetry and HITL execution via interactive buttons.",
        image: "gradient",
        link: "projects/gopher-ops",
        color: "blue",
        icon: "bot",
        github: "https://github.com/AmiQT/Gopher-Ops",
        aiEmpowered: true
    },
    {
        title: "Web-Pulse",
        type: "Monitoring Tool",
        desc: "Fast monitoring system in Python/FastAPI checking services every 60s. Simulates browser traffic to bypass security shields and provides real-time Telegram alerts.",
        image: "gradient",
        link: "projects/web-pulse",
        color: "emerald",
        icon: "activity",
        github: "https://github.com/AmiQT/web-pulse",
        aiEmpowered: false
    },
    {
        title: "Student Talent Profiling",
        type: "Full-Stack",
        desc: "Architected an AI-powered ecosystem for UTHM students featuring Gemini-integrated Agentic AI Assistant, Flutter mobile app, and automated DevOps pipelines.",
        image: "assets/fyp-hero.png",
        link: "projects/student-talent-profiling",
        color: "cyan",
        icon: "graduation",
        aiEmpowered: true,
        infraStatus: { frontend: "Active", backend: "On-Demand (FinOps Optimized)" }
    },
    {
        title: "Resume AI",
        type: "Full-Stack SaaS",
        desc: "Full-stack SaaS for automated resume generation using React, Supabase, and FastAPI. Features Toyyibpay integration and ATS-optimized templates.",
        image: "assets/resume_ai.png",
        link: "projects/resume-ai",
        color: "orange",
        icon: "document",
        aiEmpowered: true,
        infraStatus: { frontend: "Active", backend: "On-Demand (FinOps Optimized)" }
    },
    {
        title: "Enterprise IT Asset Automation",
        type: "Backend Tooling",
        desc: "Engineered a robust Python automation suite for tracking 200+ hardware assets. Uses rate-limited Python orchestration to prevent system bottlenecks during audits.",
        image: "gradient",
        link: "role-software-developer/projects/it-asset-automation",
        color: "green",
        icon: "server",
        aiEmpowered: true
    },
    {
        title: "Healthy Food App",
        type: "Mobile App",
        desc: "Built a nutrition tracking app with Flutter & Firebase. Features real-time ordering, favorites, and secure admin control panel.",
        image: "assets/healthy-food.webp",
        placeholder: true,
        link: "projects/healthy-food-app",
        color: "green",
        icon: "apple"
    }
];
