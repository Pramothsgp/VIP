const jobList = [
    {
      companyName: "Tech Mahindra",
      place: "Chennai",
      role: "Software Engineer",
      salaryRange: "₹5,00,000 - ₹8,00,000 per annum",
      qualification: "B.Tech in Computer Science",
      description: "Develop and maintain software applications, debug and test code, and collaborate with cross-functional teams to deliver high-quality software solutions.",
      responsibilities: [
        "Write clean, scalable code using .NET programming languages.",
        "Test and deploy applications and systems.",
        "Revise, update, and refactor code as needed.",
        "Collaborate with product managers and designers to understand user requirements."
      ],
      projects: [
        "Development of a new internal CRM system.",
        "Optimization of existing software applications for better performance."
      ]
    },
    {
      companyName: "TCS",
      place: "Coimbatore",
      role: "Data Analyst",
      salaryRange: "₹4,00,000 - ₹7,00,000 per annum",
      qualification: "B.Sc in Data Science",
      description: "Analyze and interpret complex data to help companies make informed decisions. Create reports and visualizations to present data insights to stakeholders.",
      responsibilities: [
        "Collect and interpret data from various sources.",
        "Create detailed reports and dashboards.",
        "Identify trends and patterns in data sets.",
        "Provide actionable insights to business units."
      ],
      projects: [
        "Development of a sales performance dashboard.",
        "Analysis of customer feedback data to improve services."
      ]
    },
    {
      companyName: "Zoho Corporation",
      place: "Chennai",
      role: "Product Manager",
      salaryRange: "₹8,00,000 - ₹12,00,000 per annum",
      qualification: "MBA or relevant experience",
      description: "Oversee the development and lifecycle of products. Coordinate with engineering, marketing, and sales teams to ensure product success.",
      responsibilities: [
        "Define product vision and roadmap.",
        "Manage product development from concept to launch.",
        "Coordinate with cross-functional teams.",
        "Analyze market trends and customer needs."
      ],
      projects: [
        "Launch of a new CRM product for small businesses.",
        "Enhancement of existing project management tools."
      ]
    },
    {
      companyName: "Cognizant",
      place: "Chennai",
      role: "Business Analyst",
      salaryRange: "₹6,00,000 - ₹10,00,000 per annum",
      qualification: "BBA or MBA",
      description: "Analyze business processes and requirements to improve efficiency and effectiveness. Serve as a liaison between stakeholders and development teams.",
      responsibilities: [
        "Gather and document business requirements.",
        "Analyze business processes and workflows.",
        "Develop recommendations for process improvements.",
        "Facilitate communication between stakeholders and project teams."
      ],
      projects: [
        "Implementation of a new business process management system.",
        "Optimization of supply chain operations."
      ]
    },
    {
      companyName: "HCL Technologies",
      place: "Madurai",
      role: "System Administrator",
      salaryRange: "₹3,50,000 - ₹6,50,000 per annum",
      qualification: "Diploma in IT or relevant experience",
      description: "Maintain and manage IT systems and infrastructure. Ensure system security, performance, and reliability.",
      responsibilities: [
        "Install, configure, and maintain servers and networks.",
        "Monitor system performance and troubleshoot issues.",
        "Implement security measures and backups.",
        "Provide technical support and training to users."
      ],
      projects: [
        "Migration of on-premise systems to cloud infrastructure.",
        "Implementation of a new backup and recovery solution."
      ]
    },
    {
      companyName: "Wipro",
      place: "Chennai",
      role: "Network Engineer",
      salaryRange: "₹4,50,000 - ₹7,50,000 per annum",
      qualification: "B.Tech in Electronics & Communication",
      description: "Design, implement, and manage network systems to ensure reliable connectivity and performance.",
      responsibilities: [
        "Configure and maintain network hardware and software.",
        "Monitor network performance and security.",
        "Troubleshoot network issues and provide solutions.",
        "Ensure network scalability and reliability."
      ],
      projects: [
        "Design and deployment of a new corporate network infrastructure.",
        "Optimization of existing network systems for better performance."
      ]
    },
    {
      companyName: "Infosys",
      place: "Trichy",
      role: "Software Tester",
      salaryRange: "₹3,00,000 - ₹6,00,000 per annum",
      qualification: "B.Sc in Computer Science",
      description: "Test software applications to identify bugs and ensure quality before release.",
      responsibilities: [
        "Develop and execute test plans and cases.",
        "Identify and document defects.",
        "Work with developers to resolve issues.",
        "Verify that software meets quality standards and requirements."
      ],
      projects: [
        "Testing of a new enterprise application.",
        "Automation of regression testing processes."
      ]
    },
    {
      companyName: "TVS Motors",
      place: "Hosur",
      role: "Mechanical Engineer",
      salaryRange: "₹5,00,000 - ₹9,00,000 per annum",
      qualification: "B.E. in Mechanical Engineering",
      description: "Design, develop, and test mechanical systems and components for automotive products.",
      responsibilities: [
        "Design and analyze mechanical systems and components.",
        "Conduct tests to ensure performance and reliability.",
        "Collaborate with manufacturing teams to address design issues.",
        "Improve existing designs for better performance and cost-efficiency."
      ],
      projects: [
        "Development of a new engine component.",
        "Optimization of manufacturing processes for efficiency."
      ]
    },
    {
      companyName: "Ashok Leyland",
      place: "Chennai",
      role: "Production Manager",
      salaryRange: "₹7,00,000 - ₹11,00,000 per annum",
      qualification: "B.E. in Production Engineering",
      description: "Manage production processes to ensure efficiency, quality, and timely delivery of products.",
      responsibilities: [
        "Plan and oversee production schedules.",
        "Manage production staff and resources.",
        "Implement quality control measures.",
        "Optimize production processes and reduce costs."
      ],
      projects: [
        "Implementation of a new production line.",
        "Improvement of production efficiency through lean manufacturing techniques."
      ]
    },
    {
      companyName: "Apollo Hospitals",
      place: "Chennai",
      role: "Healthcare Consultant",
      salaryRange: "₹6,00,000 - ₹9,00,000 per annum",
      qualification: "Master’s in Healthcare Management",
      description: "Provide expertise and guidance on healthcare management and practices to improve patient care and hospital operations.",
      responsibilities: [
        "Analyze and improve healthcare management practices.",
        "Develop and implement healthcare policies and procedures.",
        "Advise on patient care strategies and hospital operations.",
        "Conduct training sessions for healthcare staff."
      ],
      projects: [
        "Development of a new patient management system.",
        "Optimization of hospital resource allocation."
      ]
    },
    {
      companyName: "L&T",
      place: "Coimbatore",
      role: "Civil Engineer",
      salaryRange: "₹5,50,000 - ₹9,50,000 per annum",
      qualification: "B.E. in Civil Engineering",
      description: "Design, plan, and oversee construction and infrastructure projects to ensure they are completed on time and within budget.",
      responsibilities: [
        "Prepare and review engineering designs and plans.",
        "Manage construction projects and supervise staff.",
        "Ensure compliance with safety and building regulations.",
        "Collaborate with architects and other engineers."
      ],
      projects: [
        "Design and construction of a new office building.",
        "Renovation of existing infrastructure for improved efficiency."
      ]
    },
    {
      companyName: "Saint-Gobain",
      place: "Chennai",
      role: "Quality Control Engineer",
      salaryRange: "₹4,00,000 - ₹7,00,000 per annum",
      qualification: "B.E. in Mechanical Engineering",
      description: "Ensure that products meet quality standards and specifications. Implement and monitor quality control processes and procedures.",
      responsibilities: [
        "Conduct inspections and tests on products.",
        "Develop and implement quality control procedures.",
        "Analyze and resolve quality issues.",
        "Work with production teams to ensure quality standards are met."
      ],
      projects: [
        "Implementation of a new quality management system.",
        "Improvement of product testing processes."
      ]
    },
    {
      companyName: "Bosch",
      place: "Coimbatore",
      role: "Embedded Systems Engineer",
      salaryRange: "₹6,00,000 - ₹10,00,000 per annum",
      qualification: "B.E. in Electronics",
      description: "Design and develop embedded systems for various applications, ensuring they meet performance and reliability standards.",
      responsibilities: [
        "Develop and test embedded software and hardware.",
        "Integrate embedded systems with other components.",
        "Debug and troubleshoot embedded systems.",
        "Collaborate with other engineers on system design and implementation."
      ],
      projects: [
        "Development of a new automotive control system.",
        "Optimization of existing embedded systems for better performance."
      ]
  }]
    
export { jobList };
