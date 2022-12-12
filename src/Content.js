// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png";
import project5 from "./assets/images/projects/img5.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
    nav: [
        {
            link: "#home",
            icon: TbSmartHome,
        },
        {
            link: "#skills",
            icon: BiUser,
        },
        {
            link: "#services",
            icon: RiServiceLine,
        },
        {
            link: "#projects",
            icon: RiProjectorLine,
        },
        {
            link: "#contact",
            icon: MdOutlinePermContactCalendar,
        },
    ],
    hero: {
        title: "A Passionate Web Developer",
        firstName: "Iftekher Mahmud",
        LastName: "Hasib",
        btnText: "Download Resume",
        image: Hero_person,
        hero_content: [
            {
                text: "I like to introduce myself as a passionate web developer. as I have sacrificed my 6+ years of successful Marketing career to become a programmer.",
            },
            // {
            //     count: "20+",
            //     text: "Projects Worked in my career",
            // },
        ],
    },
    skills: {
        title: "Skills",
        subtitle: "MY TOP SKILLS",
        skills_content: [
            {
                name: "Figma",
                para: "Lorem ipsum text  dummy",
                logo: figma,
            },
            {
                name: "Node js",
                para: "Lorem ipsum text  dummy",
                logo: nodejs,
            },
            {
                name: "Adobe Photoshop",
                para: "Lorem ipsum text  dummy",
                logo: ps,
            },
            {
                name: "React js",
                para: "Lorem ipsum text  dummy",
                logo: reactjs,
            },
            {
                name: "Sketch",
                para: "Lorem ipsum text  dummy",
                logo: sketch,
            },
            {
                name: "Python",
                para: "Lorem ipsum text  dummy",
                logo: python,
            },
        ],
        icon: MdArrowForward,
    },
    services: {
        title: "Services",
        subtitle: "WHAT I OFFER",
        service_content: [
            {
                title: "Web Development",
                para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
                logo: services_logo1,
            },
            {
                title: "ui / ux DESIGNING",
                para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
                logo: services_logo2,
            },
            {
                title: "PhotoShop Editing",
                para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
                logo: services_logo3,
            },
        ],
    },
    Projects: {
        title: "Projects",
        subtitle: "MY CREATION",
        image: person_project,
        project_content: [
            {
                title: "Truck Zone",
                text: "This is a truck buy sell site is for both customers and seller. customer can pay for his booked truck. Admin has much authority here.",
                image: project1,
            },
            {
                title: "Travel Go",
                image: project2,
                text: "This site is build for a individual VISA service provider. He can showcase his services and manage them. His customers can post review on service.",
            },
            {
                title: "Corporate Learning",
                image: project3,
                text: "This site was build for a trainer, who is focused with corporate training. Customers can show course details and download pdf copy of course details.",
            },
            {
                title: "Doctor Portal",
                image: project4,
                text: "This project was jointly build for a dentist. Patients can book treatment for selected date and time. Doctor can manage patients and other doctors.",
            },
            {
                title: "Auto Service",
                image: project5,
                text: "This is a auto service workshop site. Customers can ger details of different services, as well as they can purchase services and products from the shop.",
            },
        ],
    },
    Testimonials: {
        title: "Testimonials",
        subtitle: "MY CLIENT REVIEWS",
        testimonials_content: [
            {
                review: "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
                img: avatar1,
                name: "JOHN DOE",
            },
            {
                review: "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
                img: avatar2,
                name: "Tom Alex",
            },
            {
                review: "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
                img: avatar3,
                name: "Johnny",
            },
            {
                review: "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
                img: avatar4,
                name: "ROBBIN",
            },
        ],
    },
    Hireme: {
        title: "Hire Me",
        subtitle: "FOR YOUR PROJECTS",
        image1: Hireme_person,
        image2: Hireme_person2,
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        btnText: "Hire Me",
    },
    Aboutme: {
        title: "About Me",
        subtitle: "A Passionate Web Developer",
        para1: "You may be curious about my career transaction! I have taken this serious decision as I get bored with almost similar kinds of tasks in marketing job and those are not exciting to me, rather increasing my stretch level. On the other hand, I found logic and excitement in programming. Finally, from July 2022 I have devoted myself to learning programming and web development.",

        para2: "I have undertaken 2 professional courses. In 'Complete Web Development' course I have learned complete web development by using HTML, CSS (bootstrap & tailwind CSS), JavaScript (React), Express JS, MongoDB, etc. with all necessary tools. 'CSE Fundamental' is ongoing. In this course, I learned the fundamentals of Computer Science, Scratch, C programming, problem-solving, etc.",
    },
    Contact: {
        title: "Contect Me",
        subtitle: "GET IN TOUCH",
        social_media: [
            {
                text: "iftekher.cse@gmail.com",
                icon: GrMail,
                link: "mailto:iftekher.cse@gmail.com",
            },
            {
                text: "+88 019111 05491",
                icon: BsWhatsapp,
                link: "https://wa.me/+8801911105491",
            },
            {
                text: "/iftekher-mahmud-hasib-cse",
                icon: BsLinkedin,
                link: "https://www.linkedin.com/in/iftekher-mahmud-hasib-cse/",
            },
            {
                text: "/iftekhermahmudhasib",
                icon: BsFacebook,
                link: "https://www.facebook.com/iftekhermahmudhasib/",
            },
        ],
    },
    Footer: {
        text: "All © Copy Right Reserved 2022",
    },
};
