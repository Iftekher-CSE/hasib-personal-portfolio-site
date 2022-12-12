import React from "react";
import Navbar from "../../Layouts/Navbar";
import Aboutme from "../Aboutme";
import Contact from "../Contact";
import Footer from "../Footer";
import Hero from "../Hero";
import Hireme from "../Hireme";
import Projects from "../Projects";
import Services from "../Services";
import Skills from "../Skills";
import Testimonials from "../Testimonials";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <Services />
            <Projects />
            {/* <Testimonials /> */}
            {/* <Hireme /> */}
            <Aboutme />
            <Contact />
            <Footer></Footer>
        </div>
    );
};

export default Home;
