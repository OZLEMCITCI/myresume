import Linkedin from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlined from '@material-ui/icons/WebOutlined';
import YouTube from "@material-ui/icons/YouTube"
import Language from "@material-ui/icons/Language"
import Img from "../assets/images/bg.jpg"
//import profileImg from "../assets/images/displayImg.JPG"

export default {
    Name: "Jasmine O. Citci",
    Title: "Software Engineer",
    birthday: "28th December, 1988",
    Email: "ozlmctc@gmail.com",
    //image:"../assets/images/displayImg.JPG",

    address: "San Antoni,texas",
    phone:"456 585 7622",
    socials: {
        Linkedin: {
            link: "https://www.linkedin.com/in/ozlem-citci-548061203/",
            text: "O. Citci Linkedin",
            Icon: <Linkedin />
        },

        Githup: {
            link: "https://github.com/OZLEMCITCI",
            text: "OZLEMCITCI",
            Icon: <GitHubIcon />
        },
        
        
    },
    
    about: "I am a hands-on full stack developer with experience in designing and developing websites and applications using a varied range of technologies and programming languages. I have proven ability to build interactive and user friendly websites and applications. I am personally known to be a very hard working, passionate, adaptable and skilled individual, always striving to get better and achieve.",
    
    experiences: [
        {
            title: "Entry Level Software Developer Engineer at GMIBank",
            date: "January,2021 ~ Present",
            description: "Full-stack developer utilizing technologies such as ReactJS, Python and Firebase for web applications on a daily basis.  • Building stable, maintainable and testable codebases using ReactJS • Creating new features and functionalities on the web applications • Writing tests, performing bug fixes and code reviews."
        },

        {
            title: "Software Engineer Intern at GMIBank ",
            date: "September, 2020 - January,2021 ",
            description: " As a Software intern I mainly worked back-end of the project with an assigned mentor. We used Java as a main language  along with Spring Framework. During my internship I  improved myself on Java,SQL,Hibernate and SpringBoot. Thank’s my mentors for guiding me during this time. "

        },
        {
            title: "High School Mathematics Teacher",
            date: "2016-2020",
            description: "I am so grateful to have chance to be a teacher especially a math teacher in some part of my life. While teaching advance math to my students I learn a lot from them, also. Being a teacher give me a growth mindset and teach me to look the life other peoples perspective."
        }
    ],

    educations: [
        {
            title: "Education 1",
            date: "2021",
            description: "Full-stack developer utilizing technologies such as ReactJS, Python and Firebase for web applications on a daily basis.  • Building stable, maintainable and testable codebases using ReactJS • Creating new features and functionalities on the web applications • Writing tests, performing bug fixes and code reviews."
        },

        {
            title: "Education  3",
            date: "2021",
            description: "Full-stack developer utilizing technologies such as ReactJS, Python and Firebase for web applications on a daily basis.  • Building stable, maintainable and testable codebases using ReactJS • Creating new features and functionalities on the web applications • Writing tests, performing bug fixes and code reviews."
        },
        {
            title: "Education  4",
            date: "2021",
            description: "Full-stack developer utilizing technologies such as ReactJS, Python and Firebase for web applications on a daily basis.  • Building stable, maintainable and testable codebases using ReactJS • Creating new features and functionalities on the web applications • Writing tests, performing bug fixes and code reviews."
        }
    ],
    services: [{
        title: "web dev",
        description: "I have been a web dev. fro ten years",
        icon:<WebOutlined/>
    },
    {
        title: "Brandig identidy",
        description: "I have been a web dev. fro ten years",
        icon:<WebOutlined/>
        },
    {
        title: "Ilistrator",
        description: "I have been a web dev. fro ten years",
        icon:<WebOutlined/>
        }
    ],

    skills: [
        {
            title: "FRONT-END",
            description: [
                "ReactJS",
                "JavaScript",
                "HTML",
                "CSS",
                "Metarial ui",
            ]
        },
        {
            title: "FRONT-END",
            description: [
                "ReactJS",
                "JavaScript",
                "HTML",
                "CSS",
                "Metarial ui",
            ]
        },
        {
            title: "FRONT-END",
            description: [
                "ReactJS",
                "JavaScript",
                "HTML",
                "CSS",
                "Metarial ui",
            ]
        },
        {
            title: "FRONT-END",
            description: [
                "ReactJS",
                "JavaScript",
                "HTML",
                "CSS",
                "Metarial ui",
            ]
        }

    ],

    projects: [
        {
            tag: "React",
            image: Img,
            title: "react Project 1",
            caption:"a short description",
            description: "This is my project description", 
            links: [
                { link: "https://www.google.com", icon: <YouTube /> },
                { link: "https://www.google.com", icon: <GitHubIcon/> },
                { link: "https://www.google.com", icon: <Language /> },
            ]
        },
{
            tag: "React",
            image: Img,
            title: "React Project 2",
            caption:"a short description",
            description: "This is my project description", 
            links: [
                { link: "https://www.google.com", icon: <YouTube /> },
                { link: "https://www.google.com", icon: <GitHubIcon/> },
                { link: "https://www.google.com", icon: <Language /> },
            ]
        },
        {
            tag: "React",
            image: Img,
            title: " React Project 3",
            caption:"a short description",
            description: "This is my project description", 
            links: [
                { link: "https://www.google.com", icon: <YouTube /> },
                { link: "https://www.google.com", icon: <GitHubIcon/> },
                { link: "https://www.google.com", icon: <Language /> },
            ]
        },

        {
            tag: "Pyton",
            image: Img,
            title: " Pyton Project 1",
            caption:"a short description",
            description: "This is my project description", 
            links: [
                { link: "https://www.google.com", icon: <YouTube /> },
                { link: "https://www.google.com", icon: <GitHubIcon/> },
                { link: "https://www.google.com", icon: <Language /> },
            ]
        },
        {
            tag: "Java Project1",
            image: Img,
            title: "Project 1",
            caption:"a short description",
            description: "This is my project description", 
            links: [
                { link: "https://www.google.com", icon: <YouTube /> },
                { link: "https://www.google.com", icon: <GitHubIcon/> },
                { link: "https://www.google.com", icon: <Language /> },
            ]
        }
    ]
    
    
    
    
    
}
