import React from "react";
import { useLoaderData } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "../../Layouts/Navbar";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ProjectDetails = () => {
    const project = useLoaderData();
    console.log(project);
    return (
        <>
            <Navbar></Navbar>
            <section className="bg-bg_light_primary" id="projects">
                <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-center">
                    <div>
                        <h2 className="title" data-aos="fade-down">
                            {project.name}
                        </h2>
                        <h4 className="subtitle" data-aos="fade-down">
                            {project.ProjectIdea}
                        </h4>
                        <br />
                    </div>

                    {/* <img className="w-full" src={project.image1} alt="..." /> */}
                    <h5>Some of the project Screenshots</h5>
                    <div className="flex items-center flex-row gap-5">
                        <Swiper
                            pagination={{
                                clickable: true,
                            }}
                            data-aos="fade-left"
                            spaceBetween={20}
                            slidesPerView={1}
                            modules={[Pagination]}
                            className="rounded-3xl pb-16 drop-shadow-primary self-start mb-20"
                        >
                            {project.images.map((content, i) => (
                                <SwiperSlide key={i} className="bg-white rounded-3xl p-2 border-[#FAF9FD] h-fit">
                                    <img className="w-full" src={content} alt="..." />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <h4>Key Feature of This project</h4>
                    <p>{project.ProjectBrief}</p>
                    <h4>Technology Used in This project</h4>
                    <p>{project.ProjectBrief}</p>
                    <h4>Project Code Link</h4>
                    <p>Live Website Link: {project.liveSite}</p>
                    <p>Client Side Link: {project.clientSideLink}</p>
                    <p>Server Side Link: {project.serverSideLink}</p>
                </div>
            </section>
        </>
    );
};

export default ProjectDetails;
