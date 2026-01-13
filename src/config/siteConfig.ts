// Site configuration - easy to modify
export const siteConfig = {
  name: "Ziad Elshihy",
  title: "QA Tester / Software Tester",
  location: "Cairo, Egypt",
  email: "ziad.elshihy@example.com", // Update with real email
  linkedin: "https://linkedin.com/in/ziadelshihy", // Update with real LinkedIn
  github: "https://github.com/ziadelshihy", // Update with real GitHub
  
  // Feature flags
  showProfileImage: false, // Set to true when you have a profile image
  profileImageSrc: "/profile.jpg", // Add your image to public folder
  
  // Hero stats
  stats: {
    testCases: "800+",
    bugsReported: "120+",
    platforms: "Web, Mobile & API",
  },
  
  // Value proposition
  tagline: "Junior QA Engineer with Real-World Project Experience",
  description: "Ensuring software quality through meticulous testing, detailed bug reporting, and a passion for delivering flawless user experiences.",
  
  // CTA
  cvDownloadUrl: "/cv/Ziad Elshihy - QC.pdf", // Add your CV to public/cv folder
};

export const skills = {
  manualTesting: [
    "Functional Testing",
    "Regression Testing",
    "Smoke Testing",
    "Sanity Testing",
    "Usability Testing",
    "Design Testing",
  ],
  apiTesting: [
    "Postman",
    "REST APIs",
    "Authentication Testing",
    "Pagination Testing",
    "Validation Testing",
  ],
  automationBasics: [
    "Selenium WebDriver",
    "TestNG",
    "Basic Test Automation",
  ],
  tools: [
    "Jira",
    "Trello",
    "GitHub",
    "Postman",
  ],
  programming: [
    "Java",
    "OOP Principles",
    "SQL",
  ],
  platforms: [
    "Web Applications",
    "Android",
    "iOS",
  ],
};

export const certifications = [
  {
    id: "1",
    title: "ISTQB Certified Tester - Foundation Level (CTFL)",
    issuer: "ISTQB",
    date: "2024",
    description: "International Software Testing Qualifications Board certification covering fundamental testing concepts.",
  },
  {
    id: "2",
    title: "API Testing Professional",
    issuer: "QACart",
    date: "2024",
    description: "Comprehensive API testing course covering REST APIs, Postman, and best practices.",
  },
  {
    id: "3",
    title: "SQL for Testers",
    issuer: "QACart",
    date: "2024",
    description: "Database testing and SQL query skills for effective backend validation.",
  },
];

export const experience = [
  {
    id: "1",
    title: "QA Tester",
    company: "Freelance / Project-Based",
    period: "2024 - Present",
    description: "Working on real client projects, performing manual and API testing for web and mobile applications.",
    highlights: [
      "Created and executed 800+ test cases",
      "Identified and documented 120+ bugs",
      "Collaborated with development teams on defect resolution",
    ],
  },
  {
    id: "2",
    title: "QA Training & Certification",
    company: "Self-Development",
    period: "2023 - 2024",
    description: "Intensive training in software testing methodologies, tools, and best practices.",
    highlights: [
      "Obtained ISTQB CTFL certification",
      "Completed API Testing certification",
      "Built practical testing projects",
    ],
  },
];
