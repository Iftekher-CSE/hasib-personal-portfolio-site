import React from "react";
import { Link, useLoaderData } from "react-router-dom";
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
                    <h5 className="my-5">Some of the project Screenshots</h5>
                    <div className="flex items-center flex-row gap-5">
                        <Swiper
                            pagination={{
                                clickable: true,
                            }}
                            data-aos="fade-left"
                            spaceBetween={20}
                            slidesPerView={1}
                            modules={[Pagination]}
                            className="rounded-3xl pb-12 drop-shadow-primary self-start mb-12"
                        >
                            {project.images.map((content, i) => (
                                <SwiperSlide key={i} className="bg-white rounded-3xl p-2 border-[#FAF9FD] h-fit">
                                    <img className="w-full" src={content} alt="..." />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-8">
                            <div className="py-3">
                                <h5>Project Brief</h5>
                                <p>{project.ProjectBrief}</p>
                            </div>
                            <div className="py-3">
                                <h5>Key Feature of This project</h5>
                                {project.KeyFeature.map((item, i) => (
                                    <li>{item}</li>
                                ))}
                            </div>
                            <div className="py-3">
                                <h5>Technology Used in This project</h5>
                                {project.TechnologyUsed.map((item, i) => (
                                    <li>{item}</li>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-4">
                            <div className="overflow-x-auto border rounded-lg px-5">
                                <h5 className="p-5">Project Info</h5>
                                <table className="table w-full text-xl">
                                    {/* <!-- head --> */}
                                    <thead>
                                        <tr></tr>
                                    </thead>
                                    <tbody>
                                        {/* <!-- row 1 --> */}
                                        <tr>
                                            <td>Name</td>
                                            <td>:</td>
                                            <td>{project?.name}</td>
                                        </tr>
                                        {/* <!-- row 2 --> */}
                                        <tr>
                                            <td>Duration</td>
                                            <td>:</td>
                                            <td>{project?.duration}</td>
                                        </tr>
                                        {/* <!-- row 3 --> */}
                                        <tr>
                                            <td>Status</td>
                                            <td>:</td>
                                            <td>{project?.status}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex flex-col border rounded-lg my-10 p-5">
                                <h5 className="mb-5">Project Links</h5>
                                <a href={project?.liveSite} target="_blank">
                                    <button className="btn btn-primary btn-block mb-5">Live Website Link</button>
                                </a>
                                <a href={project?.clientSideLink} target="_blank">
                                    <button className="btn btn-primary btn-block mb-5">Client Side Link</button>
                                </a>
                                <a href={project?.serverSideLink} target="_blank">
                                    <button className="btn btn-primary btn-block mb-5">Server Side Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectDetails;
