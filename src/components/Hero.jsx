// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
    const { hero } = content;

    return (
        <section id="home" className="overflow-hidden">
            <div className="min-h-screen relative flex lg:flex-row flex-col-reverse md:items-center justify-end items-center">
                <div
                    data-aos="slide-left"
                    data-aos-delay="1200"
                    className="absolute h-32 w-full top-0 bg-primaryLinear bottom-0 -z-10"
                >
                    <h1 className="absolute left-32 top-10 text-[#EAF2FA]">
                        {hero.firstName} <span className="text-dark_primary">{hero.LastName}</span>
                    </h1>
                </div>

                {/* first col */}
                <div className="w-96 md:w-full mt-40 pb-16 px-6 pt-5" data-aos="fade-down">
                    <h2>{hero.title}</h2>
                    <br />
                    <div className="flex justify-center">
                        <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1etOj2ZvSS2UaQohzOa_qIcG-tDFC7UCO/view?usp=sharing"
                        >
                            <button className="btn">{hero.btnText}</button>
                        </a>
                    </div>
                    <div className="flex flex-col gap-10 mt-10">
                        {hero.hero_content.map((content, i) => (
                            <div
                                key={i}
                                data-aos="fade-down"
                                data-aos-delay={i * 300}
                                className={`flex items-center md:w-[40rem] gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
                            >
                                <h3>{content.count}</h3>
                                <p>{content.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* sec col */}
                <div className="md:h-[32rem] h-96 bottom-0 right-0 absolute">
                    <img src={hero.image} data-aos="slide-up" alt="..." className="h-full object-cover" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
