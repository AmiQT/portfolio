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
    { name: 'home-software-developer.ipynb', active: true, icon: '📝', href: '/portfolio/home-software-developer/' },
    { name: 'projects.json', active: false, icon: '📦', href: '/portfolio/role-software-developer/projects' },
    { name: 'about.md', active: false, icon: '📄', href: '/portfolio/about' },
    { name: 'experience.json', active: false, icon: '💼', href: '/portfolio/experience' },
    { name: 'contact.ts', active: false, icon: '📧', href: '/portfolio/contact' },
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
        title: "Enterprise IT Asset Automation",
        type: "Backend Script",
        desc: "Engineered a robust enterprise automation suite using Python/Pandas that eliminated 90% of manual hardware tracking toil for 200+ employees via smart rate-limited notifications.",
        image: "gradient",
        link: "projects/it-asset-automation",
        color: "green",
        icon: "server",
        aiEmpowered: true
    },
    {
        title: "Student Talent Profiling",
        type: "Full-Stack",
        desc: "Architected an AI-powered ecosystem for UTHM students featuring Gemini-integrated RAG systems and automated DevOps pipelines, reducing report generation time by 70%.",
        image: "assets/fyp-hero.png",
        link: "projects/student-talent-profiling",
        color: "cyan",
        icon: "graduation",
        aiEmpowered: true,
        infraStatus: { frontend: "Active", backend: "On-Demand (FinOps Optimized)" }
    },
    {
        title: "StyleHub E-Commerce",
        type: "Web",
        desc: "Developed a scalable full-stack fashion platform using React/PostgreSQL, achieving a 40% faster checkout flow through an optimized state management and AI-assisted UX tuning.",
        image: "assets/stylehub.png",
        link: "projects/stylehub",
        color: "pink",
        icon: "shopping-bag",
        infraStatus: { frontend: "Active", backend: "On-Demand (FinOps Optimized)" }
    },
    {
        title: "Rumah Tenang",
        type: "Web",
        desc: "Spearheaded a mental wellness community platform with real-time support integration, fostering a safe environment for 500+ active Malaysian community members.",
        image: "assets/rumah_tenang.webp",
        link: "projects/rumah-tenang",
        color: "blue",
        icon: "heart"
    },
    {
        title: "Nasi Lemak Burger",
        type: "App",
        desc: "Crafted a restaurant ordering system with real-time delivery tracking, improving order processing efficiency by 30% for local food vendors.",
        image: "assets/burger.webp",
        link: "projects/nasi-lemak-burger",
        color: "purple",
        icon: "burger"
    },
    {
        title: "Healthy Food App",
        type: "App",
        desc: "Built a vision-capable nutrition tracking app utilizing ML models to automate calorie counting and meal planning for health-conscious users.",
        image: "assets/healthy-food.webp",
        placeholder: true,
        link: "projects/healthy-food-app",
        color: "green",
        icon: "apple"
    },
    {
        title: "KME Pest Control",
        type: "Web",
        desc: "Modernized a legacy pest control platform using a dual-architecture React approach, resulting in 50% better SEO rankings and improved lead generation.",
        image: "gradient",
        link: "projects/kme-pest-control",
        color: "teal",
        icon: "shield"
    },
    {
        title: "AI Resume Builder",
        type: "Web",
        desc: "Powered a SaaS platform with GPT-4 to generate ATS-optimized resumes, helping students achieve a 25% higher candidate response rate in job applications.",
        image: "assets/resume_ai.png",
        link: "projects/ai-resume-builder",
        color: "orange",
        icon: "document",
        aiEmpowered: true,
        infraStatus: { frontend: "Active", backend: "On-Demand (FinOps Optimized)" }
    }
];
