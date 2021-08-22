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
    Name: "Ozlem Citci",
    Title: "FullStack Software Developer",
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
    
    about: "I have been a math lover since I was a middle school student. I could not even think anything that I would enjoy more than a challenging math problem. Thanks the cutting edge technology that brings software in our life. I've become more passionate about software development than anything else.Nothing feels better than fixing a bug after trying really hard .\n Here are some of my skills; \n-I have experience building user interface with ReactJS along with React-router and Material-UI \n-Hands on experience in using ReactJS with ES6 features to develop reusable components,\n-Experience in responsive web design using CSS3 media queries and libraries such as Bootstrap.\n-Experience in Swift platform where make secure system with national and international transactions.\n-Experience in MVC design pattern by using SpringBoot and Spring MVC.\n-Experience in using Java to create RestFull Api in Spring Environment Experience in version control tools Git GitHub, and package manager NPM .\n-Experience in using JIRA and following agile development process, and deep understanding in Software Solid understanding of Object-Oriented Programming (OOP) and Functional Programming (FP) \n-.Development Life Cycle (SDLC) including requirements analysis, design, testing implementation, and maintenance.\n-Excellent interpersonal abilities, communication skills, time management and team skills.",
    
    experiences: [
        

        {   id:"1",
            title: "FullStack Software Developer ",
            date: "September,2020 - Present ",
            description: "Currently working as a FullStack Software Developer  utilizing technologies in Swift platform where we worked on national and international transactions to make payments on a secure system. I developed the user interface with ReactJS along with React-router, Material-UI and  reusable components with ES6 features. I used CSS3 and BootStrap for responsiveness of the web application in different platforms. Many external libraries such as Formik ,Yup ,ReactStrap, react-toastify help me to complete the UI part of the project.I mainly used SpringBoot and Spring MVC to create secure,authenticated and authorized Restful APIs. While using many Maven Dependencies to write clean codes, I also use advanced algorithms to solve complex problems with Java. I build stable, maintainable and testable codebases as well as writing tests, performing bug fixes and code reviews."

        },
        {   id:"3",
            title: "High School Mathematics Teacher",
            date: "2016-2020",
            description: "I am so grateful to have chance to be a teacher especially a math teacher in some part of my life. While teaching advance math to my students, I also learned a lot from them.  Being a teacher gave me the oppurtunity to understand growth mindset and empathy."
        }
    ],

    educations: [
        {   id:"1",
            title: "M.S. in Software Engineering",
            date: "2021",
            description: "I am so excited to start my Masters with Texas Tech. After taking the leveling courses, I will be able improve my skills with Texas Tech family. "
        },

        {   id:"2",
            title: "Non-degree admission for Leveling to Computer Science",
            date: "North American Univeristy,2021",
            description: "I am currently taking Data Structure, Software Engineering and Algorithms to level my current B.S. degree to Computer Science"
        },
        {   id:"3",
            title: "B.S. in Mathematics Education",
            date: "Firat University, 2010",
            description: "Some of the courses I took are General Mathematics, Computer I and II, Geometry,Analysis/Calculus I, II and III , Linear Algebra I and II, Statistics and Probability I and II,Analytic Geometry I and II, Introduction to Algebra and Elementary Number Theory"
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
                ,"JDBC",
                "Restful Api",
                "Micro-Services With Spring Boot",
            ]
        },
        {   id:"3",
            title: "DATABASES",
            description: [
                "Oracle SQL",
                "MySQL",
                "MongoDB",
                "PostgreSQL"
                
            ]
        },
        {   id:"4",
            title: "SOURCE CONTROL",
            description: [
                "Git",
                "GitHub",
                "SCRUM/Agile",
                "Jira/Jira Xray"
                
            ]
        }

    ],

    projects: [
        
{           id:"2",
            tag: "React/JS",
            image: WeatherAppImg,
            title: "Weather App With React",
            caption:"Check the Weather ",
            description: "This is my one of the projects to practice fetching data from an external API and using BootStrap and some other external libraries to build the UI part with ReactJs. ", 
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
            description: "I am proud of to display my first website project in here. I was practicing Bootstrap and react-router-dom libraries. I completed this basic website from scratch and now I am able to create my own blog and work in a company as a FullStack Software Developer", 
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
            description:"This project has back-end and front-end development. It has been so useful to practice CRUD operations. Front-End is created with ReactJS. I used Formik and Yup library to create and validate form informations.For styling, I mainly used Bootstrap and Metarial-UI. Spring-boot framework is used for backend and Oracle SQL is the database. With @CrossOrigin annotation on the controller class, I connected Back-End with Front-End of the project.", 
            links: [
                
                { link: "https://github.com/OZLEMCITCI/CRUD-Operations", icon: <GitHubIcon/> }
                
            ]
        },
        {   id:"5",
            tag: "Java/SpringBoot",
            image: BANK,
            title: "Bank Project",
            caption:"Comprehensive Bank Project",
            description: "I am currently developing a bank project from scratch. I created the UI part with ReactJS along with external libraries such as Material-UI, BootStrap,react-router-dom etc. The BackEnd is being created by SpringBoot with help of external dependencies. Method-Based Auth. and JWT is being used for security and MySQL is for DataBase.  Please refer to the GitHub repo for more updating information about it. ", 
            links: [
                
                { link: "https://github.com/OZLEMCITCI/Mybank", icon: <GitHubIcon/> }
                
            ]
        }
    ]
    
    
    
    
    
}
