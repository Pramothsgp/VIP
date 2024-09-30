const jobList = [
    {
        title: "Software Engineer",
        location: "Chennai",
        setup: "On-site",
        salary: 50000,
        date: "1d ago",
        description: "Join our dynamic team as a Software Engineer, where you will develop and maintain high-quality software solutions. Collaborate with cross-functional teams to define, design, and ship new features.",
        jobType: "Full-Time"
    },
    {
        title: "Data Analyst",
        location: "Coimbatore",
        setup: "Remote",
        salary: 40000,
        date: "2d ago",
        description: "Seeking a skilled Data Analyst to analyze complex data sets, generate insights, and support business decisions. Proficiency in data visualization tools and statistical analysis is essential.",
        jobType: "Full-Time"
    },
    {
        title: "Graphic Designer",
        location: "Madurai",
        setup: "Remote",
        salary: 30000,
        date: "3d ago",
        description: "Looking for a creative Graphic Designer to create visually appealing designs for digital and print media. Must have a strong portfolio and proficiency in design software.",
        jobType: "Contractual"
    },
    {
        title: "Project Manager",
        location: "Chennai",
        setup: "On-site",
        salary: 60000,
        date: "1w ago",
        description: "We are in search of an experienced Project Manager to oversee project timelines, budgets, and team coordination. Strong leadership and communication skills are required.",
        jobType: "Full-Time"
    },
    {
        title: "Sales Executive",
        location: "Tiruchirappalli",
        setup: "On-site",
        salary: 25000,
        date: "2w ago",
        description: "Join our sales team as a Sales Executive to promote our products and achieve sales targets. Excellent communication and interpersonal skills are essential for success.",
        jobType: "Full-Time"
    },
    {
        title: "HR Manager",
        location: "Chennai",
        setup: "Hybrid",
        salary: 55000,
        date: "1w ago",
        description: "Seeking an HR Manager to oversee recruitment, employee relations, and performance management. Must have strong organizational skills and experience in HR practices.",
        jobType: "Full-Time"
    },
    {
        title: "Content Writer",
        location: "Coimbatore",
        setup: "Remote",
        salary: 35000,
        date: "5d ago",
        description: "Looking for a talented Content Writer to create engaging content for our website and marketing materials. Strong writing skills and creativity are essential.",
        jobType: "Part-Time"
    },
    {
        title: "Web Developer",
        location: "Chennai",
        setup: "On-site",
        salary: 45000,
        date: "2w ago",
        description: "Join our tech team as a Web Developer, responsible for building responsive and user-friendly websites. Proficiency in HTML, CSS, and JavaScript is required.",
        jobType: "Full-Time"
    },
    {
        title: "Digital Marketing Specialist",
        location: "Madurai",
        setup: "Remote",
        salary: 40000,
        date: "3d ago",
        description: "We are looking for a Digital Marketing Specialist to manage online campaigns and analyze performance metrics. Experience in SEO and PPC is a plus.",
        jobType: "Contractual"
    },
    {
        title: "Customer Support Executive",
        location: "Chennai",
        setup: "On-site",
        salary: 20000,
        date: "1d ago",
        description: "Join our Customer Support team to assist customers with inquiries and provide solutions. Excellent communication and problem-solving skills are essential.",
        jobType: "Part-Time"
    },
    {
        title: "Business Analyst",
        location: "Tirunelveli",
        setup: "Remote",
        salary: 50000,
        date: "2w ago",
        description: "Seeking a Business Analyst to evaluate business processes and identify improvement opportunities. Strong analytical skills and experience in business modeling are required.",
        jobType: "Full-Time"
    },
    {
        title: "Mechanical Engineer",
        location: "Salem",
        setup: "On-site",
        salary: 40000,
        date: "1w ago",
        description: "Looking for a Mechanical Engineer to design and analyze mechanical systems. Must have strong technical skills and experience in CAD software.",
        jobType: "Contractual"
    },
    {
        title: "Software Tester",
        location: "Chennai",
        setup: "Remote",
        salary: 35000,
        date: "3d ago",
        description: "Join our QA team as a Software Tester to ensure software quality through rigorous testing. Strong attention to detail and problem-solving skills are essential.",
        jobType: "Full-Time"
    },
    {
        title: "Accountant",
        location: "Coimbatore",
        setup: "On-site",
        salary: 30000,
        date: "1d ago",
        description: "Seeking an Accountant to manage financial records, prepare reports, and ensure compliance with regulations. Experience in accounting software is a plus.",
        jobType: "Part-Time"
    },
    {
        title: "Network Engineer",
        location: "Chennai",
        setup: "Hybrid",
        salary: 45000,
        date: "2w ago",
        description: "We are looking for a Network Engineer to manage and optimize our network infrastructure. Strong troubleshooting skills and experience with network protocols are required.",
        jobType: "Full-Time"
    },
    {
        title: "UI/UX Designer",
        location: "Madurai",
        setup: "Remote",
        salary: 40000,
        date: "3d ago",
        description: "Join our team as a UI/UX Designer to create user-friendly interfaces and improve user experience. A strong portfolio and knowledge of design principles are required.",
        jobType: "Contractual"
    },
    {
        title: "Research Scientist",
        location: "Chennai",
        setup: "On-site",
        salary: 60000,
        date: "1w ago",
        description: "Seeking a Research Scientist to conduct experiments and analyze data. Strong analytical skills and experience in research methodologies are essential.",
        jobType: "Full-Time"
    },
    {
        title: "Financial Analyst",
        location: "Tiruchirappalli",
        setup: "Remote",
        salary: 45000,
        date: "2d ago",
        description: "Looking for a Financial Analyst to analyze financial data and provide insights for decision-making. Strong analytical and quantitative skills are required.",
        jobType: "Full-Time"
    },
    {
        title: "Operations Manager",
        location: "Coimbatore",
        setup: "On-site",
        salary: 50000,
        date: "1w ago",
        description: "Join our team as an Operations Manager to oversee daily operations and improve efficiency. Strong leadership and organizational skills are essential.",
        jobType: "Full-Time"
    },
    {
        title: "Content Manager",
        location: "Chennai",
        setup: "Remote",
        salary: 40000,
        date: "5d ago",
        description: "Seeking a Content Manager to oversee content strategy and development. Strong writing and editing skills, along with management experience, are required.",
        jobType: "Full-Time"
    },
    {
        title: "Java Developer",
        location: "Chennai",
        setup: "On-site",
        salary: 50000,
        date: "2w ago",
        description: "We are looking for a Java Developer to design and implement Java-based applications. Strong programming skills and experience with Java frameworks are required.",
        jobType: "Full-Time"
    },
    {
        title: "Cloud Engineer",
        location: "Tirunelveli",
        setup: "Remote",
        salary: 60000,
        date: "3d ago",
        description: "Join our tech team as a Cloud Engineer to manage cloud infrastructure and services. Experience with cloud platforms and strong technical skills are essential.",
        jobType: "Contractual"
    },
    {
        title: "Event Coordinator",
        location: "Madurai",
        setup: "On-site",
        salary: 30000,
        date: "1d ago",
        description: "Looking for an Event Coordinator to plan and execute events. Strong organizational and communication skills are required to manage logistics effectively.",
        jobType: "Part-Time"
    },
    {
        title: "Product Manager",
        location: "Chennai",
        setup: "Hybrid",
        salary: 70000,
        date: "2w ago",
        description: "Seeking a Product Manager to drive product strategy and execution. Strong leadership skills and experience in product development are essential.",
        jobType: "Full-Time"
    },
    {
        title: "SEO Specialist",
        location: "Coimbatore",
        setup: "Remote",
        salary: 40000,
        date: "5d ago",
        description: "Join our marketing team as an SEO Specialist to improve website rankings and drive organic traffic. Experience with SEO tools and analytics is a plus.",
        jobType: "Contractual"
    },
    {
        title: "Electrical Engineer",
        location: "Chennai",
        setup: "On-site",
        salary: 50000,
        date: "1w ago",
        description: "Looking for an Electrical Engineer to design and test electrical systems. Strong technical skills and experience in relevant software are required.",
        jobType: "Full-Time"
    },
    {
        title: "Web Designer",
        location: "Madurai",
        setup: "Remote",
        salary: 35000,
        date: "2d ago",
        description: "Seeking a Web Designer to create visually appealing and user-friendly websites. Proficiency in HTML, CSS, and design software is essential.",
        jobType: "Part-Time"
    },
    {
        title: "Security Analyst",
        location: "Chennai",
        setup: "Hybrid",
        salary: 60000,
        date: "3d ago",
        description: "Join our cybersecurity team as a Security Analyst to monitor and protect systems. Strong analytical skills and experience with security protocols are essential.",
        jobType: "Full-Time"
    },
    {
        title: "Video Editor",
        location: "Coimbatore",
        setup: "Remote",
        salary: 30000,
        date: "1d ago",
        description: "We are looking for a Video Editor to create and edit video content for various platforms. Strong editing skills and experience with editing software are required.",
        jobType: "Part-Time"
    },
    {
        title: "Data Scientist",
        location: "Tiruchirappalli",
        setup: "On-site",
        salary: 65000,
        date: "2w ago",
        description: "Seeking a Data Scientist to analyze large data sets and develop predictive models. Strong programming skills and experience with machine learning are essential.",
        jobType: "Full-Time"
    },
    {
        title: "Frontend Developer",
        location: "Chennai",
        setup: "Hybrid",
        salary: 50000,
        date: "1w ago",
        description: "Join our development team as a Frontend Developer to build responsive web applications. Strong skills in JavaScript, HTML, and CSS are required.",
        jobType: "Full-Time"
    }
];

const jobTypes = [
    "All",
    "Full-Time",
    "Part-Time",
    "Contractual",
    "Internship",
];

export { jobList, jobTypes };
