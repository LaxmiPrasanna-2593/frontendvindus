import React from 'react';
import '../styles/services.css';
import SEO from '../assets/Seo.png';
import DigitalMarketing from '../assets/digital.png';
import Software from '../assets/software.png';
import AWS from '../assets/cloud.png';
import Testing from '../assets/Testing.png';
import VideoMarketing from '../assets/videomarketing.png';
import Blockchain from '../assets/block.webp';
import IoT from '../assets/iot.png';
import Consulting from '../assets/domain.webp';
import AI from '../assets/ai.jpg';

const servicesData = [
  {
    title: "SEO Tool",
    description: "Our advanced SEO tools help you analyze and improve your website's ranking on search engines. From comprehensive keyword research to backlink analysis, we provide actionable insights to drive more traffic to your website and improve overall visibility. Whether you're a startup or an established business, our SEO tools are tailored to boost your online presence.",
    imgSrc: SEO,
    list: [
      "Keyword Analysis",
      "Backlink Checker",
      "SEO Audits",
      "Competitor Analysis",
      "On-Page Optimization Tools",
      "Rank Tracking",
    ],
  },
  {
    title: "Software Development",
    description: "We build custom software solutions tailored to your specific business requirements, ensuring scalability, performance, and security. Whether you're looking for enterprise software, web applications, or cloud-based systems, we design and develop solutions that evolve with your business. Our Agile-driven approach ensures that your software is developed efficiently and to the highest standards.",
    imgSrc: Software,
    list: [
      "Business Software Development",
      "Enterprise Solutions",
      "Cloud-Based Software",
      "Microservices Architecture",
      "Custom API Development",
      "SaaS Application Development",
    ],
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with our comprehensive digital marketing services. From targeted ads to content strategy, we ensure your brand reaches the right audience across multiple platforms. Our data-driven approach enhances user engagement and conversions, helping you maximize your ROI while building a strong brand identity in the digital world.",
    imgSrc: DigitalMarketing,
    list: [
      "Search Engine Marketing (SEM)",
      "Social Media Marketing (SMM)",
      "Email Campaigns",
      "Content Marketing",
      "Pay-Per-Click Advertising (PPC)",
      "Influencer Marketing",
    ],
  },
  {
    title: "AWS Cloud",
    description: "Leverage the power of Amazon Web Services (AWS) for secure, scalable, and cost-effective cloud solutions. From cloud migration to infrastructure management, we ensure your applications are optimized for performance and security. We offer end-to-end AWS solutions, including serverless architectures, DevOps automation, and big data processing.",
    imgSrc: AWS,
    list: [
      "Cloud Computing",
      "Storage Solutions",
      "Database Services",
      "Networking",
      "AWS Lambda and Serverless",
      "DevOps and Automation",
    ],
  },
  {
    title: "Software Testing",
    description: "Ensure the quality and reliability of your software with our comprehensive testing services. Our testing solutions cover everything from functionality to performance, security, and usability. We use the latest automation tools to streamline the testing process, ensuring rapid delivery and top-tier software quality.",
    imgSrc: Testing,
    list: [
      "Functional Testing",
      "Performance Testing",
      "Security Testing",
      "Automation Testing",
      "Usability Testing",
      "Regression Testing",
    ],
  },
  {
    title: "Video Marketing",
    description: "Engage your audience with compelling video content that tells your brand story. From animated explainer videos to live streaming, our video marketing services help boost engagement, drive traffic, and increase conversions. Whether you need short-form videos for social media or in-depth product videos, we create custom content that resonates with your target audience.",
    imgSrc: VideoMarketing,
    list: [
      "Video Production",
      "Animation Services",
      "Live Streaming",
      "Video SEO",
      "YouTube Video Marketing",
      "Interactive Video Experiences",
    ],
  },
  {
    title: "Blockchain Services", 
    description: "Harness the transformative power of blockchain technology with our comprehensive blockchain services. We develop decentralized applications, smart contracts, and secure blockchain solutions tailored to your business needs. Whether you're exploring cryptocurrency integration, supply chain transparency, or secure data sharing, our expertise ensures your blockchain initiatives are robust and scalable.",
    imgSrc: Blockchain,
    list: [
      "Decentralized Application (DApp) Development",
      "Smart Contract Development",
      "Blockchain Consulting",
      "Cryptocurrency Integration",
      "Supply Chain Transparency",
      "Secure Data Sharing",
    ],
  },
  {
    title: "IoT Solutions", 
    description: "Transform your business with our cutting-edge Internet of Things (IoT) solutions. We design and implement IoT systems that connect devices, collect data, and provide actionable insights to enhance operational efficiency and innovation. From smart devices and sensors to comprehensive IoT platforms, we help you leverage IoT technology to drive your business forward.",
    imgSrc: IoT,
    list: [
      "Smart Device Integration",
      "Sensor Deployment",
      "IoT Platform Development",
      "Data Analytics",
      "Remote Monitoring",
      "IoT Security Solutions",
    ],
  },
 
  {
    title: "AI and Machine Learning Solutions", 
    description: "Transform your business processes with our AI and machine learning solutions. We develop intelligent systems that analyze data, automate tasks, and enhance decision-making capabilities. From predictive analytics to natural language processing, our tailored solutions enable businesses to harness the power of AI, driving efficiency and innovation in every aspect of operations.",
    imgSrc: AI, 
    list: [
      "Predictive Analytics",
      "Natural Language Processing (NLP)",
      "Machine Learning Model Development",
      "AI-Powered Automation",
      "Image and Video Recognition",
      "Custom AI Solutions",
    ],
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1 className="heading">Our Services</h1>
        <p className="header-text">
          We offer a wide range of services to help you achieve your business goals. Explore below to see what we can do for you!
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.imgSrc} alt={service.title} />
            </div>
            <div className="service-text">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
