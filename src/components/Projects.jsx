import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
    const { Projects } = content;
    return (
        <section className="bg-bg_light_primary" id="projects">
            <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-center">
                <div>
                    <h2 className="title" data-aos="fade-down">
                        {Projects.title}
                    </h2>
                    <h4 className="subtitle" data-aos="fade-down">
                        {Projects.subtitle}
                    </h4>
                    <br />
                </div>
                <div className="flex items-center flex-row gap-5">
                    {/* <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          /> */}
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        data-aos="fade-left"
                        spaceBetween={20}
                        // slidesPerView={3}
                        breakpoints={{
                            576: {
                                // width: 576,
                                slidesPerView: 1,
                            },
                            768: {
                                // width: 768,
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Pagination]}
                        className="rounded-3xl pb-16 drop-shadow-primary self-start mb-20"
                    >
                        {Projects.project_content.map((content, i) => (
                            <SwiperSlide key={i} className="bg-white rounded-3xl p-5 border-[#FAF9FD] h-fit">
                                <img className="w-full" src={content.image} alt="..." />
                                <div className="flex flex-col gap-1 mt-2">
                                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                                    <p className="text-sm font-Poppins text-justify">{content.text}</p>
                                    <Link to={`project/${content.title}`} className="self-end">
                                        <button className="font-bold text-gray hover:text-dark_primary">
                                            Show Details
                                        </button>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Projects;
