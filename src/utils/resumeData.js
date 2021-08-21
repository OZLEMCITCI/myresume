import Linkedin from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlined from '@material-ui/icons/WebOutlined';
import Language from "@material-ui/icons/Language";
import BANK from "../assets/images/bank.png";
import Websitesi from "../assets/images/websitesi.jpg";
import CRUD from "../assets/images/CRUD.jpg";
import FlagImg from "../assets/images/flags.jpg";
import WeatherAppImg from "../assets/images/Weather.jpg";
import ComputerIcon from '@material-ui/icons/Computer';
import AccountTreeIcon from '@material-ui/icons/AccountTree';


export default {
    Name: "Jasmine O. Citci",
    Title: "Software Engineer",
    birthday: "28th December, 1988",
    Email: "ozlmctc@gmail.com",
    

    address: "San Antonio,TX",
    phone:"456 585 7622",
    socials: {
        Linkedin: {
            id:"1",
            link: "https://www.linkedin.com/in/ozlem-citci-548061203/",
            text: "Click for LinkedIn",
            Icon: <Linkedin />
        },

        Githup: {
            id:"2",
            link: "https://github.com/OZLEMCITCI",
            text: "Click for GitHub",
            Icon: <GitHubIcon />
        },
        
        
    },
    
    about: "I have been a math lover since I was a middle school student. I could not even think anything that I would enjoy more than a challenging math problem. Thanks the cutting edge technology that brings software in our life. I've become more passionate about software development than anything else.Nothing feels better than fixing a bug after reading tons of forums and watching many videos about it .\nLet me to explain what is my experiences in Software Development .\n-I have experience building user interface with ReactJS along with React-router and Material-UI \n-Hands on experience in using ReactJS with ES6 features to develop reusable components,\n-Experience in responsive web design using CSS3 media queries and libraries such as Bootstrap.\n-Experience in Swift platform where make secure system with national and international transactions.\n-Experience in MVC design pattern by using SpringBoot and Spring MVC.\n-Experience in using Java to create RestFull Api in Spring Environment Experience in version control tools Git GitHub, and package manager NPM .\n-Experience in using JIRA and following agile development process, and deep understanding in Software Solid understanding of Object-Oriented Programming (OOP) and Functional Programming (FP) \n-.Development Life Cycle (SDLC) including requirements analysis, design, testing implementation, and maintenance.\n-Excellent interpersonal abilities, communication skills, time management and team skills.",
    
    experiences: [
        {
            id:"1",
            title: "Entry Level Software Developer Engineer at GMIBank",
            date: "January,2021 ~ Present",
            description: "Currently working as a Software Engineer utilizing technologies such us JavaScript ReactJS, Java, Spring framework,Restful Api for swift platform web application on a daily basis. Creating new features and functionalities on the web application.Building stable, main-table and testable codebases.Writing tests, performing bug fixes and code reviews."
        },

        {   id:"2",
            title: "Software Engineer Intern at GMIBank ",
            date: "September, 2020 - January,2021 ",
            description: " As a Software intern I mainly worked back-end part of the project with an assigned mentor. We used Java as a main language  along with Spring Framework. During my internship I  improved myself on Java,SQL,Hibernate and SpringBoot. Thank’s my mentors for guiding me during this time. "

        },
        {   id:"3",
            title: "High School Mathematics Teacher",
            date: "2016-2020",
            description: "I am so grateful to have chance to be a teacher especially a math teacher in some part of my life. While teaching advance math to my students I learn a lot from them, also. Being a teacher give me a growth mindset and teach me to look the life other peoples perspective."
        }
    ],

    educations: [
        {   id:"1",
            title: "M.S. in Software Engineering",
            date: "2021",
            description: "I am so excided to start my Master at Texas Tech. After taking the leveling courses, I am going to start taking courses and continue to improving my skills with Texas Tech family. "
        },

        {   id:"2",
            title: "Non-degree admission for Leveling to Computer Science",
            date: "North American Univeristy,2021",
            description: "I am currently taking Data Structure, Software Engineering and Algorithms classes to leveling my current B.S. degree to Computer Science"
        },
        {   id:"3",
            title: "B.S. in Mathematics Education",
            date: "Firat University, 2010",
            description: "Some of the courses I took are General Mathematics, Computer I and II, Geometry,Analysis I, II and III , Linear Algebra I and II, Statistics and Probability I and II,Analytic Geometry I and II, Introduction to Algebra and Elementary Number Theory"
        }
    ],
    services: [{
        id:"1",
        title: "Custom Software Dev.",
        description: "Translate unique client requirements into custom solutions with advance technologies",
        icon:<ComputerIcon/>
    },
    {   id:"2",
        title: "Web Development",
        description: "Revolutionize your business ideas using web development services for innovative applications",
        icon:<WebOutlined/>
        },
    {   id:"3",
        title: "Product Development",
        description: "Intellectually comprehend client's businees ideas to develop a robust and scalable product architecture",
        icon:<AccountTreeIcon/>
        }
    ],

    skills: [
        {   id:"1",
            title: "FRONT-END",
            description: [
                "ReactJS",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Bootstrap",
            ]
        },
        {   id:"2",
            title: "BACK-END",
            description: [
                "Java",
                "JavaEE",
                "Spring Framework",
                "Hibernate",
                "Restful Api",
                "Micro-Services With Spring Boot",
            ]
        },
        {   id:"3",
            title: "DATABASES",
            description: [
                "Oracle SQL",
                "MySQL",
                "MongoDB"
                
            ]
        },
        {   id:"4",
            title: "SOURCE CONTROL",
            description: [
                "Git",
                "GitHub",
                "SCRUM/Agile",
                "Jira"
                
            ]
        }

    ],

    projects: [
        
{           id:"2",
            tag: "React/JS",
            image: WeatherAppImg,
            title: "Weather App With React",
            caption:"Check the Weather ",
            description: "I used bootstrap and formik and yup libraries for this project. It was so nice to practice UseState and UseEffect hooks and use external Api to fetch data. It still has some bugs but I will fix them soon", 
            links: [
                { link: "https://github.com/OZLEMCITCI/Weather_App/tree/master/src", icon: <GitHubIcon/> },
                { link: "https://ozlemsweatherapp.netlify.app", icon: <Language /> },
            ]
        },
        {   id:"3",
            tag: "React/JS",
            image: Websitesi,
            title: " BootStrap Practice",
            caption:"My first attempt to use bootstapt with react-router-dom",
            description: "I am proud of to put my first website project to here. I was practicing bootstrap and react-router-dom libraries. I spend hours to do this basic website espescialy form part was so hard. With hardworking I am now able to make my own blog.  ", 
            links: [
                
                { link: "https://github.com/OZLEMCITCI/First-Website-with-BootStrap", icon: <GitHubIcon/> },
                { link: "https://ozlemsfirtstwebsite.netlify.app/", icon: <Language /> },
            ]
        },

        {   id:"4",
            tag: "Java/SpringBoot",
            image: CRUD,
            title: " CRUD OPERATIONS",
            caption:"Basid CRUD operations for with Spring-boot",
            description:"This project have back-end and frond-end development and it is a good practice for CRUD operations FRONT-END:It created by react. I use Formik library for create for and yup library to validate form informations.For styling I use bootstrap library.BACK-END Spring-boot framework is used for creation and Oracle SQL is the database. With @crossorigin Annotation on the controller class we connect it with front-end.", 
            links: [
                
                { link: "https://github.com/OZLEMCITCI/CRUD-Operations", icon: <GitHubIcon/> }
                
            ]
        },
        {   id:"5",
            tag: "Java/SpringBoot",
            image: BANK,
            title: "Bank Project",
            caption:"Comprehensive Bank Project",
            description: "This bank project is my personel project  currently.ReactJs and JS is being used for front-end and SpringBoot is the framework of the back-end development.Main purpose of this project is practicing role based authentication and authorization with Rest API.  I am currently developing it on my free time to improve my coding skills", 
            links: [
                
                { link: "https://github.com/OZLEMCITCI/Mybank", icon: <GitHubIcon/> }
                
            ]
        }
    ]
    
    
    
    
    
}
