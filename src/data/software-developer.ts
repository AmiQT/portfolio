export const profile = {
    name: "Noor Azami",
    role: "Full-Stack Developer",
    status: "Open to Work",
    location: ["Remote", "Hybrid", "Relocation"],
    bio: "A passionate full-stack developer crafting elegant solutions through code, seeking to build innovative software with a forward-thinking development team.",
    avatar: "assets/profile.webp",
    resume: "assets/Fullstack_Developer_Intern.pdf"
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
        title: "Student Talent Profiling",
        type: "Full-Stack",
        desc: "AI-Powered ecosystem platform for UTHM students featuring Agentic AI Assistant (BM/Gen Z style), Flutter mobile app, Astro web dashboard, and auto-generated achievement reports.",
        image: "assets/fyp-hero.png",
        link: "projects/student-talent-profiling",
        color: "cyan",
        icon: "graduation"
    },
    {
        title: "StyleHub E-Commerce",
        type: "Web",
        desc: "Full-stack fashion e-commerce platform with product catalog, shopping cart, and payment integration.",
        image: "assets/stylehub.png",
        link: "projects/stylehub",
        color: "pink",
        icon: "shopping-bag"
    },
    {
        title: "Rumah Tenang",
        type: "Web",
        desc: "Mental wellness community platform with resources, support groups, and professional counselor connections.",
        image: "assets/rumah_tenang.webp",
        link: "projects/rumah-tenang",
        color: "blue",
        icon: "heart"
    },
    {
        title: "Nasi Lemak Burger",
        type: "App",
        desc: "Restaurant website with online ordering system, menu management, and delivery tracking integration.",
        image: "assets/burger.webp",
        link: "projects/nasi-lemak-burger",
        color: "purple",
        icon: "burger"
    },
    {
        title: "Healthy Food App",
        type: "App",
        desc: "Nutrition tracking application with meal planning, calorie counting, and health analytics dashboard.",
        image: "assets/healthy-food.webp", // Assuming this exists or using placeholder logic
        placeholder: true, // To trigger the placeholder view if image is missing or specific design needed
        link: "projects/healthy-food-app",
        color: "green",
        icon: "apple"
    },
    {
        title: "KME Pest Control",
        type: "Web",
        desc: "Professional pest control service platform featuring a dual-architecture approach with a legacy static site and a modern React application.",
        image: "gradient",
        link: "projects/kme-pest-control",
        color: "teal",
        icon: "shield"
    },
    {
        title: "AI Resume Builder",
        type: "Web",
        desc: "AI-powered resume builder using GPT-4 to optimize resumes based on job descriptions. Features multiple templates, PDF/Word export, and ATS optimization.",
        image: "assets/resume_ai.png",
        link: "projects/ai-resume-builder",
        color: "orange",
        icon: "document"
    }
];
