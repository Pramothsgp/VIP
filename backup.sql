-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: vip
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `vip`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `vip` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `vip`;

--
-- Table structure for table `applications`
--

DROP TABLE IF EXISTS `applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applications` (
  `application_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `job_id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `applicant_name` varchar(255) NOT NULL,
  `applicant_email` varchar(255) NOT NULL,
  `application_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(255) DEFAULT 'Pending',
  PRIMARY KEY (`application_id`),
  KEY `job_id` (`job_id`),
  CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applications`
--

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
INSERT INTO `applications` VALUES (3,5,18,'user','user','test@user.com','2024-10-12 10:53:12','Accepted'),(5,5,30,'user','user','test@user.com','2024-10-12 10:58:21','Accepted'),(6,5,16,'user','user','test@user.com','2024-10-14 05:32:03','Pending'),(7,5,6,'user','user','test@user.com','2024-11-05 09:20:17','Pending');
/*!40000 ALTER TABLE `applications` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`bus@admin`@`localhost`*/ /*!50003 TRIGGER `before_application_delete` BEFORE DELETE ON `applications` FOR EACH ROW BEGIN
    INSERT INTO canceled_applications 
    (application_id, user_id, job_id, username, applicant_name, applicant_email, application_date)
    VALUES 
    (OLD.application_id, OLD.user_id, OLD.job_id, OLD.username, OLD.applicant_name, OLD.applicant_email, OLD.application_date);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `canceled_applications`
--

DROP TABLE IF EXISTS `canceled_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `canceled_applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `application_id` int NOT NULL,
  `user_id` int NOT NULL,
  `job_id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `applicant_name` varchar(255) NOT NULL,
  `applicant_email` varchar(255) NOT NULL,
  `application_date` timestamp NOT NULL,
  `cancellation_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `canceled_applications`
--

LOCK TABLES `canceled_applications` WRITE;
/*!40000 ALTER TABLE `canceled_applications` DISABLE KEYS */;
INSERT INTO `canceled_applications` VALUES (1,2,5,6,'user','user','test@user.com','2024-10-12 10:51:08','2024-10-12 11:03:10'),(2,4,5,27,'user','user','test@user.com','2024-10-12 10:57:25','2024-10-14 05:32:15');
/*!40000 ALTER TABLE `canceled_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `setup` varchar(255) NOT NULL,
  `salary` int NOT NULL,
  `description` text NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `qualification` varchar(255) NOT NULL,
  `responsibilities` text NOT NULL,
  `projects` text NOT NULL,
  `jobType` varchar(255) NOT NULL,
  `imagedata` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (6,'Front-end Developer','Coimbatore, Tamil Nadu','Remote',500000,'At Infosys, we are looking for a talented Front-end Developer to join our team. You will be responsible for building and optimizing user-facing web applications that provide an exceptional user experience. You will collaborate closely with designers and back-end developers to implement responsive and visually appealing web interfaces. A key part of your role will involve optimizing applications for maximum speed and scalability, as well as ensuring cross-browser compatibility. The ideal candidate will have experience with HTML, CSS, JavaScript, and frameworks such as React or Angular. You should be familiar with version control tools like Git and have a strong understanding of web performance best practices.','Infosys','B.Sc. in Computer Science','[\"Collaborate with designers.\", \"Optimize web applications.\"]','[\"E-commerce website redesign.\", \"Single-page app development.\"]','Full-Time',NULL),(7,'Backend Developer','Madurai, Tamil Nadu','Hybrid',750000,'Join TCS as a Backend Developer and help maintain the server-side logic that powers our large-scale applications. You will design and implement RESTful APIs, integrate third-party services, and manage databases. You should have a solid understanding of programming languages such as Java, Node.js, or Python, as well as experience with databases like MySQL, PostgreSQL, or MongoDB. Knowledge of cloud services such as AWS or Azure is a plus. This is an excellent opportunity for a backend developer looking to work on challenging projects in a hybrid setup. If you have a passion for building efficient, reliable, and scalable systems, we would love to have you on board.','TCS','B.Tech in Information Technology','[\"Develop RESTful APIs.\", \"Integrate third-party APIs.\"]','[\"Microservices architecture for e-commerce.\", \"Payment gateway integration.\"]','Full-Time',NULL),(8,'Data Scientist','Chennai, Tamil Nadu','Remote',950000,'Wipro is looking for a Data Scientist to join our growing team. You will analyze and interpret large datasets to help solve complex business challenges. You will use machine learning algorithms and statistical techniques to extract actionable insights from raw data. The ideal candidate should have strong analytical skills and be proficient in data analysis tools such as Python, R, or SQL. A background in mathematics or statistics is a plus. You should be comfortable working with large datasets and have experience with data visualization tools like Tableau or Power BI. If you are passionate about data and want to contribute to innovative solutions, this role is for you.','Wipro','M.Sc. in Data Science','[\"Analyze large datasets.\", \"Build predictive models.\"]','[\"Customer churn prediction.\", \"Recommendation engine.\"]','Full-Time',NULL),(9,'UX Designer','Tiruchirappalli, Tamil Nadu','On-site',600000,'Mindtree is seeking a talented UX Designer to join our team. You will conduct user research, create wireframes, and develop prototypes that enhance the overall usability and visual appeal of our products. You will collaborate with product managers, developers, and other stakeholders to ensure that our designs are not only visually appealing but also highly functional and aligned with business goals. The ideal candidate will have a strong portfolio showcasing previous UX design work, experience with design tools such as Sketch, Figma, or Adobe XD, and a solid understanding of user-centered design principles.','Mindtree','B.Des in Interaction Design','[\"Conduct user research.\", \"Create wireframes and prototypes.\"]','[\"Banking app interface redesign.\", \"Healthcare portal UX design.\"]','Full-Time',NULL),(10,'DevOps Engineer','Bangalore, Karnataka','On-site',800000,'At HCL Technologies, we are looking for a skilled DevOps Engineer to help optimize our software development processes. As a DevOps Engineer, you will automate, configure, and optimize the infrastructure that supports our applications. You will work with development teams to implement CI/CD pipelines, manage cloud infrastructure, and ensure system scalability and security. The candidate should have a strong understanding of Linux systems, scripting languages like Bash or Python, and containerization tools like Docker or Kubernetes. This role is perfect for someone passionate about improving development workflows.','HCL Technologies','B.Tech in Information Technology','[\"Implement CI/CD pipelines.\", \"Monitor system performance.\"]','[\"Infrastructure automation project.\", \"Cloud migration project.\"]','Full-Time',NULL),(11,'Cybersecurity Analyst','Hyderabad, Telangana','On-site',950000,'As a Cybersecurity Analyst at Cognizant, you will monitor network traffic, identify vulnerabilities, and ensure the overall security of company systems. You will conduct penetration testing and security audits to prevent data breaches. Additionally, you will collaborate with IT teams to implement security best practices and respond to security incidents. Strong knowledge of network protocols, firewalls, and encryption methods is required. Experience with security tools such as Wireshark or Metasploit is a plus. If you are passionate about protecting digital assets and want to work in a dynamic and fast-paced environment, this role is for you.','Cognizant','B.Tech in Cybersecurity','[\"Monitor network traffic.\", \"Conduct security audits.\"]','[\"Threat detection systems.\", \"Security awareness programs.\"]','Full-Time',NULL),(12,'Cloud Architect','Pune, Maharashtra','Hybrid',1300000,'At Capgemini, the Cloud Architect will be responsible for designing and implementing scalable, cost-effective cloud solutions. You will work closely with development and operations teams to build secure and efficient cloud infrastructures using platforms like AWS, Azure, or Google Cloud. You will need to understand various cloud services, including networking, storage, and security components. As a Cloud Architect, you will also need to ensure that cloud solutions meet the business goals of the organization and provide guidance on cloud best practices to internal teams. The ideal candidate should have extensive experience in cloud computing and architecture.','Capgemini','M.Tech in Cloud Computing','[\"Design cloud solutions.\", \"Optimize cloud resources.\"]','[\"Cloud migration.\", \"Infrastructure as Code (IaC) solutions.\"]','Full-Time',NULL),(13,'Mobile App Developer','Delhi, India','Remote',600000,'As a Mobile App Developer at Accenture, you will design, develop, and maintain mobile applications for both iOS and Android platforms. You will work closely with designers and backend developers to ensure seamless functionality and user experience. Proficiency in Swift for iOS or Kotlin for Android is required, along with experience in cross-platform development using frameworks such as React Native or Flutter. You will also be responsible for testing and debugging mobile applications to ensure smooth operation. If you are passionate about mobile development and want to work on cutting-edge projects, this role is ideal for you.','Accenture','B.Tech in Mobile Computing','[\"Develop mobile applications.\", \"Debug and optimize apps.\"]','[\"E-learning app.\", \"Mobile payment gateway integration.\"]','Full-Time',NULL),(14,'AI Engineer','Bangalore, Karnataka','On-site',1200000,'IBM is seeking an AI Engineer to help develop innovative artificial intelligence solutions. You will work on building machine learning models, designing AI algorithms, and integrating AI technologies into business applications. You will need experience with Python, TensorFlow, and natural language processing (NLP) frameworks. Additionally, you should have strong problem-solving skills and experience with cloud-based AI platforms like AWS SageMaker or Google AI. The ideal candidate should have a solid background in AI and machine learning, along with a passion for developing cutting-edge AI solutions that can transform industries.','IBM','M.Tech in Artificial Intelligence','[\"Build machine learning models.\", \"Design AI algorithms.\"]','[\"AI-powered chatbot.\", \"Automated recommendation engine.\"]','Full-Time',NULL),(15,'Full Stack Developer','Mumbai, Maharashtra','Hybrid',850000,'At L&T Infotech, we are seeking a Full Stack Developer to build and maintain web applications using a range of technologies across both front-end and back-end. You will be responsible for designing user interactions, developing servers, and ensuring database functionality. Experience with JavaScript, HTML, CSS, Node.js, and databases such as MySQL or MongoDB is essential. You will work closely with design and product teams to ensure a seamless user experience. Additionally, knowledge of frameworks like React or Angular for front-end and Express for back-end is desirable. If you are a versatile developer with a passion for building robust web applications, this role is perfect for you.','L&T Infotech','B.Tech in Computer Science','[\"Develop front-end web architecture.\", \"Build APIs and server-side logic.\"]','[\"E-commerce platform.\", \"Inventory management system.\"]','Full-Time',NULL),(16,'Blockchain Developer','Pune, Maharashtra','Remote',1300000,'At Techwave, we are seeking a Blockchain Developer to help us build and deploy decentralized applications (dApps) and smart contracts on blockchain platforms. You will design, implement, and support distributed blockchain-based networks. You will need to have strong expertise in blockchain technologies like Ethereum, Hyperledger, and Solidity programming. Knowledge of cryptography and secure key management is essential. As a Blockchain Developer, you will collaborate with teams to integrate blockchain solutions into existing infrastructure, working on projects ranging from digital identity to decentralized finance (DeFi). If you have experience in this cutting-edge field and want to work on transformative projects, this role is ideal for you.','Techwave','B.Tech in Information Technology','[\"Develop smart contracts.\", \"Deploy blockchain networks.\"]','[\"Decentralized finance (DeFi) apps.\", \"Blockchain-based supply chain solution.\"]','Full-Time',NULL),(17,'Machine Learning Engineer','Chennai, Tamil Nadu','Hybrid',1100000,'As a Machine Learning Engineer at Zoho Corporation, you will develop, train, and optimize machine learning models for various business applications. You will be responsible for data preprocessing, feature engineering, and model selection. Experience with Python, scikit-learn, and TensorFlow is essential. You will work closely with data scientists and software engineers to implement machine learning algorithms into production environments. The ideal candidate will have a strong foundation in machine learning principles, statistical analysis, and experience with large-scale data processing frameworks such as Hadoop or Spark. If you are passionate about machine learning and artificial intelligence, this role offers exciting opportunities.','Zoho Corporation','M.Tech in Artificial Intelligence','[\"Train and optimize ML models.\", \"Perform feature engineering.\"]','[\"Customer segmentation model.\", \"Predictive maintenance system.\"]','Full-Time',NULL),(18,'IT Support Specialist','Delhi, India','On-site',400000,'At HDFC Bank, we are looking for an IT Support Specialist to provide technical support for hardware, software, and network issues. You will troubleshoot system problems, resolve network issues, and support users across multiple locations. The ideal candidate should have experience in IT support, including diagnosing and fixing hardware and software problems, managing network infrastructure, and supporting end-users. Familiarity with Windows and Linux operating systems, as well as basic networking concepts, is essential. This role requires excellent communication skills as you will interact with employees across various departments to resolve technical issues.','HDFC Bank','Diploma in Information Technology','[\"Provide technical support.\", \"Troubleshoot hardware and software issues.\"]','[\"System upgrades.\", \"Network troubleshooting.\"]','Full-Time',NULL),(19,'Business Analyst','Bangalore, Karnataka','On-site',900000,'At Flipkart, we are seeking a Business Analyst to help drive data-driven decision-making across the organization. You will analyze data sets, identify trends, and provide actionable insights to improve business processes. The ideal candidate will have a strong background in business analytics, proficiency in data analysis tools such as Excel, SQL, and Power BI, and an understanding of statistical techniques. You will collaborate with stakeholders from different teams to develop business models and present findings. If you have a passion for data and a desire to drive business performance, this role is for you.','Flipkart','MBA in Business Analytics','[\"Analyze business data.\", \"Create business models.\"]','[\"Customer behavior analysis.\", \"Sales forecasting.\"]','Full-Time',NULL),(20,'Product Manager','Hyderabad, Telangana','Hybrid',1200000,'As a Product Manager at Google, you will be responsible for the development and management of new products from concept to launch. You will work closely with engineering, design, marketing, and sales teams to ensure that products meet market needs and align with business objectives. You should have a strong understanding of product lifecycle management, market research, and user experience design. The ideal candidate will have experience in product management within the tech industry, strong leadership skills, and the ability to work with cross-functional teams. If you have a passion for driving product innovation and delivering user-centric solutions, this role is a perfect fit.','Google','MBA in Product Management','[\"Develop product roadmaps.\", \"Lead cross-functional teams.\"]','[\"New app launch.\", \"Market research for product improvement.\"]','Full-Time',NULL),(21,'Technical Writer','Mumbai, Maharashtra','Remote',500000,'At TCS, we are seeking a Technical Writer to create clear and concise documentation for technical products and services. You will work with engineers and developers to produce user manuals, installation guides, and product documentation. The ideal candidate should have experience in technical writing, with strong writing skills and the ability to explain complex concepts in simple terms. Familiarity with tools like Microsoft Word, Google Docs, and content management systems is required. You should have a basic understanding of programming and technology concepts to accurately document technical processes. If you are passionate about writing and technology, this role offers a rewarding opportunity.','TCS','B.A. in English or Technical Communication','[\"Write user manuals.\", \"Document product features.\"]','[\"API documentation.\", \"Product installation guides.\"]','Full-Time',NULL),(22,'QA Engineer','Pune, Maharashtra','On-site',600000,'As a QA Engineer at Infosys, you will be responsible for ensuring the quality and reliability of software products. You will design and implement test plans, execute test cases, and identify and report defects. The ideal candidate should have experience in manual and automated testing, familiarity with tools like Selenium, and a strong understanding of software development methodologies. You will work closely with developers to ensure that defects are resolved before release. If you have a passion for software quality and a keen eye for detail, this role will allow you to contribute to high-quality product development.','Infosys','B.Tech in Computer Science','[\"Develop test cases.\", \"Perform automated testing.\"]','[\"Regression testing for mobile app.\", \"API testing for web services.\"]','Full-Time',NULL),(23,'Network Engineer','Chennai, Tamil Nadu','Hybrid',700000,'At Cisco, we are looking for a Network Engineer to maintain and optimize our network infrastructure. You will be responsible for configuring routers, switches, and firewalls, as well as monitoring network performance and ensuring the security of the network. The ideal candidate should have experience with networking protocols, hands-on experience with Cisco devices, and familiarity with firewall management. Certifications such as CCNA or CCNP are highly preferred. You will also troubleshoot network issues and collaborate with other IT teams to resolve connectivity problems. If you are passionate about networking and want to work on large-scale network infrastructure, this is the role for you.','Cisco','B.Tech in Network Engineering','[\"Configure routers and switches.\", \"Monitor network performance.\"]','[\"Network optimization project.\", \"Firewall configuration.\"]','Full-Time',NULL),(24,'UI Designer','Noida, Uttar Pradesh','Remote',600000,'At Adobe, we are looking for a UI Designer to design intuitive and visually appealing interfaces for our software products. You will work with UX designers and developers to create interactive prototypes, design layouts, and ensure a seamless user experience. The ideal candidate will have experience with design tools such as Adobe XD, Figma, or Sketch, and a strong understanding of design principles such as typography, color theory, and layout design. You will also be responsible for conducting user testing and iterating on designs based on feedback. If you are passionate about UI design and want to create user-friendly software, this role offers exciting challenges.','Adobe','B.Des in Graphic Design','[\"Design user interfaces.\", \"Create interactive prototypes.\"]','[\"UI design for design software.\", \"Prototyping for new app.\"]','Full-Time',NULL),(25,'UI Designer','Coimbatore','Remote',400000,'Ui Designer','High Tech','Under graduate Degree','aSKJHFKH\'FKHWE','wjughuigjbdfg,nfgjkghfjkh','Full-Time',NULL),(26,'Junior Web Developer','Remote','Remote',150000,'Join our team as a Junior Web Developer, working part-time. You will assist with website development and maintenance, ensuring smooth functionality and optimal user experience. Knowledge of HTML, CSS, and JavaScript is required.','Tech Innovators','Bachelor\'s degree in Computer Science or related field','Develop web applications, troubleshoot issues, and collaborate with senior developers.','Worked on a responsive website for an e-commerce platform.','Part-Time',NULL),(27,'Content Writer','Bangalore, India','Hybrid',200000,'We are hiring a content writer on a contractual basis to create well-researched, engaging content for blogs, articles, and social media posts. Strong writing skills and familiarity with SEO best practices are required.','Creative Studios','Bachelor\'s degree in Journalism or Communications','Write and edit content for various platforms, manage social media content, and optimize SEO strategies.','Authored multiple high-traffic blog posts for a leading tech blog.','Contractual',NULL),(28,'Graphic Design Intern','Mumbai, India','On-Site',50000,'We are looking for a Graphic Design Intern to assist in creating visual content. This role requires proficiency in Adobe Photoshop and Illustrator. It is a 3-month internship with potential for full-time placement.','Design Hub','Enrolled in a Bachelor\'s program in Graphic Design or related field','Assist with design projects, create social media visuals, and collaborate on branding initiatives.','Created social media posters for various marketing campaigns.','Internship',NULL),(29,'Data Entry Specialist','Chennai, India','On-Site',120000,'We are seeking a part-time Data Entry Specialist who can input data into spreadsheets and maintain accurate records. The ideal candidate should have excellent typing skills and attention to detail.','Alpha Solutions','High School Diploma','Input data accurately into company systems, maintain data integrity, and verify information.','Managed the data entry process for a large-scale client database project.','Part-Time',NULL),(30,'Social Media Manager','Delhi, India','Hybrid',300000,'We are looking for a Social Media Manager on a contractual basis to develop and execute social media strategies. Experience in digital marketing and managing multiple platforms is required.','Digital Edge','Bachelor\'s degree in Marketing or related field','Manage social media accounts, create content strategies, and analyze social media performance.','Increased social media engagement by 30% for a tech startup.','Contractual',NULL),(32,'UI Designer','Coimbatore','',19998,'','High Tech','Under graduate Degree','aSKJHFKH\'FKHWE','wjughuigjbdfg,nfgjkghfjkh','',NULL),(37,'UI Designer hj','Coimbatore','',19998,'','High Tech','Under graduate Degree','aSKJHFKH\'FKHWE','wjughuigjbdfg,nfgjkghfjkh','',NULL);
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdata`
--

DROP TABLE IF EXISTS `userdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userdata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdata`
--

LOCK TABLES `userdata` WRITE;
/*!40000 ALTER TABLE `userdata` DISABLE KEYS */;
INSERT INTO `userdata` VALUES (1,'test@admin.com','test','test'),(4,'727723euit162@skcet.ac.in','pramoth_sgp','a'),(5,'test@user.com','user','user'),(6,'rogithsp8@gmail.com','rogith','1234');
/*!40000 ALTER TABLE `userdata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-16 21:06:24
