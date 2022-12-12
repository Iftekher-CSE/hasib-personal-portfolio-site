import React from "react";
import { content } from "../Content";

const Aboutme = () => {
    const { Aboutme } = content;

    return (
        <section className="bg-bg_light_primary pb-20">
            <div className="md:container px-5 pt-14">
                <h2 className="title" data-aos="fade-down">
                    {Aboutme.title}
                </h2>
                <h4 className="subtitle" data-aos="fade-down">
                    {Aboutme.subtitle}
                </h4>
                <br />
                <div className="flex items-center justify-around md:flex-row flex-col ">
                    <div
                        data-aos="fade-right"
                        className="border-2 border-dark_primary max-w-sm
                        p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] mb-6"
                    >
                        <p className="leading-7 text-justify">{Aboutme.para1}</p>
                        <br />
                    </div>
                    <div
                        data-aos="fade-left"
                        className="border-2 border-dark_primary max-w-sm
                        p-5 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
                    >
                        <p className="leading-7 text-justify">{Aboutme.para2}</p>
                        <br />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;
