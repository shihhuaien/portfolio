import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-2" id="contact">

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    one click to get
                    <span className="text-purple"> my resume</span>
                </h1>
                <p className="text-white-200 md:mt-10 my-4 text-center">
                    Thank you for taking the time to read through my webpage.
                    <br />
                    Below is the link to my resume, where you'll find more detailed information about me.
                </p>
                <a href="https://app.enhancv.com/share/36578dc6/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" target="_blank" >
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-center items-center">


                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a
                            key={info.id}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img src={info.img} alt="icons" width={20} height={20} />
                        </a>
                    ))}
                </div>
            </div>
            <p className="md:text-base text-sm md:font-normal font-light">
                Copyright © 2024 Huai-En Shih（Tim）
            </p>
        </footer>
    );
};

export default Footer;