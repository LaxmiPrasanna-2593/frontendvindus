import React from 'react'
import Business from '../assets/business.png'
import clientImage1 from '../assets/teja.png'
import clientImage2 from '../assets/mlc.png'
import clientImage3 from '../assets/fooden.webp'
import clientImage4 from '../assets/qtip.jpeg'
import clientImage5 from '../assets/seoclient.png'
import Content from '../assets/content.png'
import Video from '../assets/videomar.png'
import Card from '../Components/Card'
import Carousel from '../Components/Homebanner';
import Chatbox from '../Components/Chatbox'; 
import { FaSearchengin, FaUsers, FaChartLine, FaShieldAlt, FaCode, FaSeedling, FaRocket, FaReact, FaAngular, FaPhp, FaPython, FaAws, FaAndroid, FaApple } from "react-icons/fa"  
import { FaDesktop, FaBullhorn, FaMobileAlt, FaGlobe, FaShoppingCart } from "react-icons/fa"
import '../styles/home.css'


const Home = () => {

    const technologies = [
        { name: 'React', icon: <FaReact />, color: '#61DBFB' },
        { name: 'Angular', icon: <FaAngular />, color: '#DD0031' },
        { name: 'PHP', icon: <FaPhp />, color: '#8993be' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Android', icon: <FaAndroid />, color: '#3DDC84' },
        { name: 'iOS', icon: <FaApple />, color: '#999999' },
    ]

    const services = [
        { name: 'Website Development', icon: <FaDesktop />, color: '#fff' },
        { name: 'Digital Marketing', icon: <FaBullhorn />, color: '#fff' },
        { name: 'Mobile App Developer', icon: <FaMobileAlt />, color: '#fff' },
        { name: 'Web Application', icon: <FaGlobe />, color: '#fff' },
        { name: 'E-commerce Designing', icon: <FaShoppingCart />, color: '#fff' },
      ]

  return (
    <div className='home-container'>

<Carousel />
        <h2 className='heading' id='space'>Achieve More with Better Workflows</h2>
        <div className='home-workflow'>
            <Card 
                image={Business} 
                title="Business Analytics" 
                description="Business analytics refers to the practice of analyzing data to gain insights into business operations and make informed decisions. It involves the use of statistical analysis, data mining, and predictive modeling to optimize processes, identify opportunities, and mitigate risks."
            />
            <Card 
                image={Content} 
                title="Content Marketing" 
                description="Content marketing involves creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. It helps businesses build brand awareness, establish credibility, and drive customer engagement."
            />
            <Card 
                image={Video} 
                title="Video Marketing" 
                description="Video marketing utilizes videos to promote and market products or services, increase brand awareness, and engage with audiences online. It offers businesses a dynamic and visually appealing way to communicate their messages and connect with customers across various digital platforms."
            />
        </div>
        <div className='home-services'>
            <h2 className='heading'>Our Services</h2>
            <div className='service-grid'>
            {services.map((service, index) => (
                <div key={index} className='service-card'>
                <div className='icon-circle'>
                    {service.icon}
                </div>
                <h3>{service.name}</h3>
                </div>
            ))}
            </div>
        </div>
        <div className='home-full-width'>
            <div className='seo-card-container'>
                <FaSearchengin />
                <h4>Search Engine Optimization</h4>
                <p>VIndus specializes in SEO to help you get recognized on major search engines</p>
            </div>
            <div className='seo-card-container'>
                <FaUsers />
                <h4>Competitor Analysis</h4>
                <p>We'll analyze your competitors to strategize and enhance your market position.</p>
            </div>
            <div className='seo-card-container'>
                <FaChartLine />
                <h4>Data Analytics</h4>
                <p>Analyze data from various sources to strengthen strategies and identify opportunities.</p>
            </div>
            <div className='seo-card-container'>
                <FaShieldAlt />
                <h4>Online Reputation Management</h4>
                <p>Manage and enhance your online reputation to ensure positive reviews and public perception.</p>
            </div>
        </div>
        <div className='home-services grid'>
            <div className='services-card'>
                <FaCode className='service-icon' />
                <h3>Develop</h3>
                <p>Design and develop unique software solutions with our comprehensive tools and resources. Access a wide range of development tools and documentation to build innovative applications.</p>
            </div>
            <div className='services-card'>
                <FaSeedling className='service-icon' />
                <h3>Grow</h3>
                <p>Establish a strong user base as your software gains traction and attracts attention. Network with other developers and professionals in the field.</p>
            </div>
            <div className='services-card'>
                <FaRocket className='service-icon' />
                <h3>Elevate</h3>
                <p>Achieve recognition as a top software provider and explore opportunities for partnerships or integrations. Work with us to bring your software to the next level, including potential market expansions and collaborations</p>
            </div>
        </div>
        <div className='home-small-banner'>
            <h2 className='white-color'>Transform Your Ideas with Us</h2>
            <p className='white-color'>Empowering software development through innovation and community.</p>
        </div>
        <div className='home-technology'>
            <h2 className='heading'>Our Technology Stack</h2>
            <div className='technology-grid'>
            {technologies.map((tech, index) => (
                <div key={index} className='technology-card' style={{ backgroundColor: tech.color }}>
                    {tech.icon}
                    <h3>{tech.name}</h3>
                </div>
            ))}
            </div>
        </div>
        <div className='home-clients'>
    <h2 className='heading'>Our Clients</h2>
    <div className='clients-grid'>
        <img src={clientImage1} alt="Client 1" className='client-image' />
        <img src={clientImage2} alt="Client 2" className='client-image' />
        <img src={clientImage3} alt="Client 3" className='client-image' />
        <img src={clientImage4} alt="Client 3" className='client-image' />
        <img src={clientImage5} alt="Client 3" className='client-image' />

    </div>
</div>
<Chatbox />
    </div>
  )
}

export default Home