const jobTypes = ["All", "Full-Time", "Part-Time", "Contractual", "Internship"];

const jobList = [
  {
    title: "Software Engineer",
    location: "Chennai, Tamil Nadu",
    setup: "On-site",
    salary: 600000, // Fixed salary in ₹
    date: "1d ago",
    description: "Develop and maintain high-quality software solutions.",
    companyName: "Tech Mahindra",
    qualification: "B.Tech in Computer Science",
    responsibilities: [
      "Write clean, scalable code.",
      "Test and deploy software.",
    ],
    projects: [
      "Development of a CRM system.",
      "Software optimization projects.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Front-end Developer",
    location: "Coimbatore, Tamil Nadu",
    setup: "Remote",
    salary: 500000, // Fixed salary in ₹
    date: "2d ago",
    description: "Build and optimize user-facing web applications.",
    companyName: "Infosys",
    qualification: "B.Sc. in Computer Science",
    responsibilities: [
      "Collaborate with designers.",
      "Optimize web applications.",
    ],
    projects: ["E-commerce website redesign.", "Single-page app development."],
    jobType: "Full-Time",
  },
  {
    title: "Backend Developer",
    location: "Madurai, Tamil Nadu",
    setup: "Hybrid",
    salary: 750000, // Fixed salary in ₹
    date: "3d ago",
    description: "Maintain server-side logic and databases.",
    companyName: "TCS",
    qualification: "B.Tech in Information Technology",
    responsibilities: ["Develop RESTful APIs.", "Integrate third-party APIs."],
    projects: [
      "Microservices architecture for e-commerce.",
      "Payment gateway integration.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Data Scientist",
    location: "Chennai, Tamil Nadu",
    setup: "Remote",
    salary: 950000, // Fixed salary in ₹
    date: "5d ago",
    description: "Analyze and interpret complex datasets.",
    companyName: "Wipro",
    qualification: "M.Sc. in Data Science",
    responsibilities: ["Analyze large datasets.", "Build predictive models."],
    projects: ["Customer churn prediction.", "Recommendation engine."],
    jobType: "Full-Time",
  },
  {
    title: "UX Designer",
    location: "Tiruchirappalli, Tamil Nadu",
    setup: "On-site",
    salary: 600000, // Fixed salary in ₹
    date: "4d ago",
    description: "Design and improve user experiences for web applications.",
    companyName: "Mindtree",
    qualification: "B.Des in Interaction Design",
    responsibilities: [
      "Conduct user research.",
      "Create wireframes and prototypes.",
    ],
    projects: [
      "Banking app interface redesign.",
      "Healthcare portal UX design.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Mobile App Developer",
    location: "Salem, Tamil Nadu",
    setup: "Remote",
    salary: 650000, // Fixed salary in ₹
    date: "2d ago",
    description: "Develop mobile apps for iOS and Android.",
    companyName: "Zoho",
    qualification: "B.E. in Computer Science",
    responsibilities: [
      "Design and build mobile apps.",
      "Collaborate with cross-functional teams.",
    ],
    projects: [
      "Mobile e-commerce app development.",
      "Mobile game app creation.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Full Stack Developer",
    location: "Chennai, Tamil Nadu",
    setup: "Hybrid",
    salary: 800000, // Fixed salary in ₹
    date: "3d ago",
    description: "Develop full stack applications using modern technologies.",
    companyName: "Cognizant",
    qualification: "B.Tech in Computer Science",
    responsibilities: [
      "Develop both front-end and back-end code.",
      "Ensure performance and scalability of applications.",
    ],
    projects: ["CRM system development.", "E-commerce platform optimization."],
    jobType: "Full-Time",
  },
  {
    title: "QA Engineer",
    location: "Vellore, Tamil Nadu",
    setup: "On-site",
    salary: 500000, // Fixed salary in ₹
    date: "6d ago",
    description: "Test and ensure the quality of software products.",
    companyName: "HCL Technologies",
    qualification: "B.Sc. in Computer Science",
    responsibilities: [
      "Perform manual and automated testing.",
      "Ensure high-quality code standards.",
    ],
    projects: [
      "Testing for banking applications.",
      "API testing for internal systems.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Project Manager",
    location: "Chennai, Tamil Nadu",
    setup: "On-site",
    salary: 1200000, // Fixed salary in ₹
    date: "4d ago",
    description: "Oversee projects and manage project delivery timelines.",
    companyName: "Tata Communications",
    qualification: "MBA in Project Management",
    responsibilities: [
      "Manage project budgets and timelines.",
      "Coordinate with cross-functional teams.",
    ],
    projects: [
      "Large-scale IT system integration.",
      "Telecom network expansion.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "DevOps Engineer",
    location: "Coimbatore, Tamil Nadu",
    setup: "Remote",
    salary: 750000, // Fixed salary in ₹
    date: "3d ago",
    description: "Maintain and optimize CI/CD pipelines.",
    companyName: "Capgemini",
    qualification: "B.E. in Computer Science",
    responsibilities: [
      "Manage cloud infrastructure.",
      "Implement automation tools.",
    ],
    projects: [
      "Cloud infrastructure optimization.",
      "CI/CD pipeline automation.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Network Engineer",
    location: "Chennai, Tamil Nadu",
    setup: "On-site",
    salary: 550000, // Fixed salary in ₹
    date: "4d ago",
    description: "Design, implement, and maintain company networks.",
    companyName: "Cisco Systems",
    qualification: "B.E. in Network Engineering",
    responsibilities: [
      "Monitor and manage network performance.",
      "Troubleshoot network issues.",
    ],
    projects: ["Enterprise network setup.", "Network security implementation."],
    jobType: "Full-Time",
  },
  {
    title: "Machine Learning Engineer",
    location: "Chennai, Tamil Nadu",
    setup: "Hybrid",
    salary: 850000, // Fixed salary in ₹
    date: "5d ago",
    description: "Build machine learning models to solve complex problems.",
    companyName: "IBM",
    qualification: "M.Sc. in Artificial Intelligence",
    responsibilities: [
      "Develop ML algorithms.",
      "Collaborate with data scientists.",
    ],
    projects: [
      "Predictive analytics for healthcare.",
      "Recommendation system for e-commerce.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Cloud Solutions Architect",
    location: "Chennai, Tamil Nadu",
    setup: "Remote",
    salary: 1500000, // Fixed salary in ₹
    date: "6d ago",
    description: "Design and implement cloud-based solutions for enterprises.",
    companyName: "Amazon Web Services",
    qualification: "B.E. in Computer Science",
    responsibilities: [
      "Develop cloud strategies.",
      "Optimize cloud environments.",
    ],
    projects: [
      "Cloud migration for an IT company.",
      "Infrastructure setup for a fintech startup.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Cybersecurity Analyst",
    location: "Coimbatore, Tamil Nadu",
    setup: "Hybrid",
    salary: 750000, // Fixed salary in ₹
    date: "2d ago",
    description: "Protect company assets from cyber threats.",
    companyName: "Sophos",
    qualification: "B.E. in Cybersecurity",
    responsibilities: [
      "Monitor networks for vulnerabilities.",
      "Respond to security incidents.",
    ],
    projects: [
      "Intrusion detection system development.",
      "Security audit for an e-commerce platform.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Technical Support Engineer",
    location: "Chennai, Tamil Nadu",
    setup: "On-site",
    salary: 450000, // Fixed salary in ₹
    date: "3d ago",
    description: "Provide technical support for software products.",
    companyName: "Zoho",
    qualification: "B.Sc. in Information Technology",
    responsibilities: [
      "Handle customer queries.",
      "Troubleshoot software issues.",
    ],
    projects: ["Customer support for CRM systems.", "Helpdesk optimization."],
    jobType: "Full-Time",
  },
  {
    title: "Database Administrator",
    location: "Madurai, Tamil Nadu",
    setup: "Hybrid",
    salary: 700000, // Fixed salary in ₹
    date: "5d ago",
    description: "Manage and maintain enterprise databases.",
    companyName: "Oracle",
    qualification: "B.E. in Information Technology",
    responsibilities: [
      "Monitor database performance.",
      "Ensure data integrity and security.",
    ],
    projects: [
      "Database migration for a banking system.",
      "Optimization of existing database systems.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Game Developer",
    location: "Chennai, Tamil Nadu",
    setup: "Remote",
    salary: 600000, // Fixed salary in ₹
    date: "6d ago",
    description: "Develop engaging games for mobile and PC platforms.",
    companyName: "Gameloft",
    qualification: "B.E. in Computer Science",
    responsibilities: [
      "Design and implement game mechanics.",
      "Collaborate with artists and designers.",
    ],
    projects: [
      "Mobile racing game development.",
      "Multiplayer online game optimization.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Junior Web Developer",
    location: "Chennai, Tamil Nadu",
    setup: "On-site",
    salary: 350000, // Fixed salary in ₹
    date: "2d ago",
    description: "Assist in the development of websites and web applications.",
    companyName: "Hexaware",
    qualification: "B.Sc. in Computer Science",
    responsibilities: [
      "Write and maintain code for websites.",
      "Collaborate with senior developers.",
    ],
    projects: [
      "Website development for small businesses.",
      "Internal company portal development.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "IT Support Specialist",
    location: "Coimbatore, Tamil Nadu",
    setup: "On-site",
    salary: 400000, // Fixed salary in ₹
    date: "3d ago",
    description:
      "Provide technical assistance and support for hardware and software issues.",
    companyName: "Tech Mahindra",
    qualification: "Diploma in Information Technology",
    responsibilities: [
      "Resolve IT support tickets.",
      "Install and configure software.",
    ],
    projects: [
      "Hardware setup for new employees.",
      "Helpdesk management and troubleshooting.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Content Writer",
    location: "Madurai, Tamil Nadu",
    setup: "Remote",
    salary: 300000, // Fixed salary in ₹
    date: "5d ago",
    description:
      "Write and edit content for blogs, websites, and social media.",
    companyName: "Zoho",
    qualification: "Bachelor's degree in English or Journalism",
    responsibilities: [
      "Create SEO-friendly content.",
      "Collaborate with marketing teams.",
    ],
    projects: [
      "Content development for product launches.",
      "Writing blog posts and social media updates.",
    ],
    jobType: "Part-Time",
  },
  {
    title: "Digital Marketing Executive",
    location: "Salem, Tamil Nadu",
    setup: "Hybrid",
    salary: 450000, // Fixed salary in ₹
    date: "4d ago",
    description: "Manage digital marketing campaigns and social media.",
    companyName: "Freshworks",
    qualification: "BBA in Marketing",
    responsibilities: [
      "Create and manage online marketing strategies.",
      "Analyze and report campaign performance.",
    ],
    projects: [
      "Social media campaigns for e-commerce.",
      "Email marketing for product promotions.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Junior Data Analyst",
    location: "Chennai, Tamil Nadu",
    setup: "On-site",
    salary: 380000, // Fixed salary in ₹
    date: "1d ago",
    description:
      "Analyze data and generate reports to support business decisions.",
    companyName: "Cognizant",
    qualification: "B.Sc. in Mathematics or Statistics",
    responsibilities: [
      "Analyze business data for trends.",
      "Prepare detailed reports for management.",
    ],
    projects: [
      "Data analysis for customer feedback.",
      "Sales data reporting and visualization.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Graphic Designer",
    location: "Chennai, Tamil Nadu",
    setup: "On-site",
    salary: 350000, // Fixed salary in ₹
    date: "2d ago",
    description: "Design graphics and layouts for digital and print media.",
    companyName: "Mindtree",
    qualification: "Diploma in Graphic Design",
    responsibilities: [
      "Create marketing collateral.",
      "Design user interfaces and branding materials.",
    ],
    projects: [
      "Corporate rebranding for a tech firm.",
      "Graphic design for promotional events.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "SEO Specialist",
    location: "Tiruchirappalli, Tamil Nadu",
    setup: "Remote",
    salary: 400000, // Fixed salary in ₹
    date: "3d ago",
    description: "Optimize websites for search engines and improve rankings.",
    companyName: "Infosys",
    qualification: "BBA in Marketing or related field",
    responsibilities: [
      "Conduct keyword research.",
      "Optimize on-page and off-page SEO.",
    ],
    projects: [
      "SEO optimization for a local business website.",
      "Link building campaigns for an e-commerce platform.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "HR Assistant",
    location: "Chennai, Tamil Nadu",
    setup: "Hybrid",
    salary: 320000, // Fixed salary in ₹
    date: "6d ago",
    description:
      "Assist the HR department in recruitment and employee management tasks.",
    companyName: "HCL Technologies",
    qualification: "BBA in Human Resources",
    responsibilities: [
      "Assist with recruitment processes.",
      "Maintain employee records and documents.",
    ],
    projects: [
      "Employee onboarding for new hires.",
      "Handling administrative tasks in the HR department.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Junior Accountant",
    location: "Coimbatore, Tamil Nadu",
    setup: "On-site",
    salary: 330000, // Fixed salary in ₹
    date: "4d ago",
    description: "Assist in managing financial records and transactions.",
    companyName: "Wipro",
    qualification: "B.Com in Accounting",
    responsibilities: [
      "Manage invoices and payments.",
      "Assist with financial reporting.",
    ],
    projects: [
      "Monthly financial report generation.",
      "Inventory management accounting.",
    ],
    jobType: "Full-Time",
  },
  {
    title: "Office Administrator",
    location: "Chennai, Tamil Nadu",
    setup: "On-site",
    salary: 300000, // Fixed salary in ₹
    date: "5d ago",
    description: "Oversee and manage daily office operations.",
    companyName: "Tata Consultancy Services",
    qualification: "Bachelor's degree in Business Administration",
    responsibilities: [
      "Manage office supplies and resources.",
      "Coordinate meetings and events.",
    ],
    projects: [
      "Office space organization and management.",
      "Administrative support for company events.",
    ],
    jobType: "Full-Time",
  },
];

export { jobTypes, jobList };
