import { useNavigate } from "react-router-dom";
import freddie from "../assets/image.png";
import { FaTwitter, FaWhatsapp, FaGithub } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Portfolio = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);


    return ( 
        <div id="home">
            <div className="min-h-screen bg-gradient-to-b from-gray-950 via-green-900 to-black flex flex-col">
                <div className="flex flex-col px-10 md:px-20 flex-1">
                    <div className="fixed inset-x-0 z-[1] flex justify-center items-center mt-10" data-aos="fade-down">
                        <div className="flex bg-gray-800 backdrop-blur-sm rounded-lg border border-green-800 shadow-lg px-10 py-5 gap-5 mx-auto">
                        <a href="#home" className="Geist text-neutral-300 text-md hover:text-white">Home</a>
                        <a href="#about" className="Geist text-neutral-300 text-md hover:text-white">About</a>
                        <a href="#project" className="Geist text-neutral-300 text-md hover:text-white">Projects</a>
                        <a href="#contact" className="Geist text-neutral-300 text-md hover:text-white">Contact</a>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-8 md:gap-40">
                        <div className="mt-10 md:mt-0">
                            <motion.img
                            src={freddie}
                            alt="Freddie"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", visualDuration: 1.5, bounce: 0.5 },
                            }}
                            className="w-60 md:w-[22rem] max-w-[22rem] rounded-full border-8 border-gray-500 hover:border-green-700 transition-colors duration-1000 ease-in-out"/>
                        </div>
                        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start">
                            <div>
                                <div className="mb-5">
                                    <h1 className="Geist md:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 font-bold mt-10" data-aos="fade-down-right" data-aos-delay="100">
                                        Hello, I'm Freddie
                                    </h1>
                                </div>
                                <div>
                                    <p className="Geist text-neutral-300 md:text-3xl text-xl font-semibold" data-aos="fade-down-right" data-aos-delay="600">
                                        I'm a{' '}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500">
                                        <Typewriter
                                            words={['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Tech Enthusiast']}
                                            loop={true}
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:flex justify-center items-center md:gap-5">
                                <div className="Geist text-green-500 md:text-lg text-md font-bold mt-5 tracking-wide" data-aos="fade-down-left" data-aos-delay="1000">
                                    <p>Get in touch</p>
                                </div>
                                <div className="flex flex-row gap-2 mt-5" data-aos="fade-down-left" data-aos-delay="1200">
                                    <motion.div
                                        whileHover={{ scale: 1.3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 rounded-full bg-transparent hover:bg-green-900/30 transition-colors duration-300 cursor-pointer"
                                        onClick={() => window.open('https://api.whatsapp.com/send?phone=+2347085062472', '_blank')}
                                    >
                                        <FaWhatsapp size={30} className="text-gray-200 hover:text-green-500" />
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 rounded-full bg-transparent hover:bg-green-900/30 transition-colors duration-300 cursor-pointer"
                                        onClick={() => window.open('https://github.com/Fortexfreddie', '_blank')}
                                    >
                                        <FaGithub size={30} className="text-gray-200 hover:text-green-500" />
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 rounded-full bg-transparent hover:bg-green-900/30 transition-colors duration-300 cursor-pointer"
                                        onClick={() => window.open('https://x.com/Fortexfreddie', '_blank')}
                                    >
                                        <FaTwitter size={30} className="text-gray-200 hover:text-green-500" />
                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;