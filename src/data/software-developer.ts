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
    { name: 'home-software-developer.ipynb', active: true, icon: '📝' },
    { name: 'projects.json', active: false, icon: '📦' },
    { name: 'skills.config.js', active: false, icon: '⚙️' },
    { name: 'contact.ts', active: false, icon: '📧' },
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

export const projects = [
    {
        title: "StyleHub E-Commerce",
        type: "Web",
        desc: "Full-stack fashion e-commerce platform with product catalog, shopping cart, and payment integration.",
        image: "gradient", // Special case for the gradient placeholder
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
    }
];
