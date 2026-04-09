export interface Experience {
  title: string;
  organization: string;
  duration: string;
  icon: string;
  color: string;
  responsibilities: string[];
}

export type RoleAngle = 'developer' | 'devops' | 'itSupport' | 'general';

export const experiencesData: Record<RoleAngle, Experience[]> = {
  general: [
    {
      title: "IT Support Intern",
      organization: "DayOne",
      duration: "February 2026 - Present",
      icon: "💻",
      color: "orange",
      responsibilities: [
        "Automated enterprise IT asset compliance for 200+ endpoints by developing a rate-limited Python orchestration engine, reducing manual audit toil by 90% and ensuring 100% data integrity.",
        "Optimized L1 technical support workflows by engineering a unified PowerShell diagnostic suite that automates the resolution of 10+ recurring system issues, boosting team response efficiency.",
        "Integrated AI-assisted dev workflows (Gemini/Copilot) to refactor and harden internal automation scripts, ensuring error resilience and better maintainability for IT operations.",
        "Managed the complete IT onboarding & access management for new hires, leveraging M365 and Active Directory to achieve immediate operational readiness."
      ]
    },
    {
      title: "Vice President, Information Technology Club",
      organization: "Universiti Tun Hussein Onn Malaysia",
      duration: "December 2023 - January 2025",
      icon: "🎯",
      color: "blue",
      responsibilities: [
        "Successfully managed and executed 17 club events, including meetings, annual grand dinners, and team-building activities.",
        "Provided critical support to the club president, including assisting with urgent matters and representing the club in official settings.",
        "Actively participated in and led various club departments, demonstrating strong leadership and teamwork skills."
      ]
    }
  ],
  developer: [
    {
      title: "IT Support Intern",
      organization: "DayOne",
      duration: "February 2026 - Present",
      icon: "💻",
      color: "green",
      responsibilities: [
        "Engineered an enterprise-grade Python automation suite with rate-limiting logic, eliminating 90% of manual audit toil for scale-ready operations.",
        "Developed unified diagnostic suites using PowerShell to automate recurring tasks, exhibiting strong Infrastructure-as-Code (IaC) principles.",
        "Leveraged Generative AI (Gemini/Copilot) to refactor and harden internal automation scripts, significantly improving error handling and code maintainability.",
        "Architected data-driven reporting systems for IT assets, bridging the gap between infrastructure status and executive visibility."
      ]
    },
    {
      title: "Vice President, Information Technology Club",
      organization: "UTHM",
      duration: "December 2023 - January 2025",
      icon: "🎯",
      color: "blue",
      responsibilities: [
        "Orchestrated 17 large-scale technical and social events, managing stakeholder communication and project timelines.",
        "Collaborated on technical department initiatives, fostering a culture of peer-to-peer technical learning within the university.",
        "Represented the club in official settings, honeing high-stakes presentation and leadership skills."
      ]
    }
  ],
  devops: [
    {
      title: "IT Support Intern",
      organization: "DayOne",
      duration: "February 2026 - Present",
      icon: "☁️",
      color: "emerald",
      responsibilities: [
        "Architected a Compliance-as-Code engine using Python to audit 200+ endpoints, minimizing security risks through automated tracking.",
        "Implemented Standardized Configuration Management for L1 support systems via PowerShell, ensuring systemic consistency across the office network.",
        "Administered Identity & Access Management (IAM) flows via Active Directory and M365, adhering to strict enterprise security and onboarding protocols.",
        "Optimized internal deployment workflows for IT support tools, utilizing health-check logic and standardized logging."
      ]
    },
    {
      title: "Vice President, Information Technology Club",
      organization: "UTHM",
      duration: "2023 - 2025",
      icon: "🎯",
      color: "blue",
      responsibilities: [
        "Streamlined operational workflows for 17 major events, implementing project management best practices across a large student team.",
        "Spearheaded leadership training modules, focusing on reliable task execution and accountability frameworks.",
        "Ensured zero-failure rate in event logistics through rigorous pre-flight planning and cross-departmental orchestration."
      ]
    }
  ],
  itSupport: [
    {
      title: "IT Support Intern",
      organization: "DayOne",
      duration: "February 2026 - Present",
      icon: "🛠️",
      color: "orange",
      responsibilities: [
        "Automated IT asset compliance for 200+ employee laptops via Python, ensuring 100% inventory accuracy and ensuring zero untracked hardware.",
        "Resolved 10+ recurring L1 system issues through unified PowerShell diagnostics, maintaining critical uptime for office operations.",
        "Managed end-to-end IT onboarding, provisioning hardware and M365/Active Directory profiles to ensure day-one operational readiness.",
        "Performed hands-on hardware troubleshooting and maintenance, resulting in high levels of employee satisfaction and hardware longevity."
      ]
    },
    {
      title: "Vice President, Information Technology Club",
      organization: "UTHM",
      duration: "2023 - 2025",
      icon: "🎯",
      color: "blue",
      responsibilities: [
        "Successfully managed and executed 17 club events, including meetings, annual grand dinners, and team-building activities.",
        "Provided critical support to the club president, including assisting with urgent matters and representing the club in official settings.",
        "Actively led various club departments, demonstrating strong leadership and technical team management."
      ]
    }
  ]
};
