import Conference from "../assets/images/conference.png";
import Examly from "../assets/images/Examly.png";
import skydrone from "../assets/images/skydrone.png";
import lodgeFinder from "../assets/images/lodgeFinder.png";
import lifestyle from "../assets/images/lifstyle.png";

const Projects = () => {
    const projects = [
        {
            title: "Lifestyle Blog",
            url: "http://lifestyleblogs.netlify.app/",
            description: "Lifestyle is your go-to blog for fresh trends, and inspiring stories in fashion, wellness, tech, and culture to stay informed every day.",
            image: lifestyle,
            alt: "Lifestyle Blog",
            tags: ["Blog", "React", "CSS", "Tailwind", "PHP", "MySQL"]
        },
        {
            title: "Lodge Finder",
            url: "https://lodgefinders.netlify.app",
            description: "A platform for finding and booking lodges, hotels, and guest houses.",
            image: lodgeFinder,
            alt: "Lodge Finder",
            tags: ["Lodging", "React", "CSS", "Tailwind", "PHP", "MySQL"]
        },
        {
            title: "Skydrone",
            url: "https://skydrones.netlify.app",
            description: "Skydrone's innovative drone technology is bringing the latest farming innovations to farms around the world.",
            image: skydrone,
            alt: "skydrone",
            tags: ["Farms", "React", "CSS", "Tailwind"]
        },
        {
            title: "Examly",
            url: "https://examlyy.netlify.app",
            description: "The official certification Examination platform for Human-Computer interface.",
            image: Examly,
            alt: "Examly",
            tags: ["Exams", "React", "Express.js", "Tailwind"]
        },
        {
            title: "Tech Maverick",
            url: "https://techmaverick.freesite.online",
            description: "A conference platform for hosting of conferences, events, seminars e.t.c",
            image: Conference,
            alt: "Tech Maverick",
            tags: ["Conference", "HTML", "Bootstrap"]
        }
    ];

    const inDevelopmentProject = [ 
        {
            title: "progress",
            url: "#",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, laudantium",
            imgText: "P",
            alt: "In Progress",
            tags: ["In Progress", "HTML", "CSS", "JavaScript"],
        }
    ];
    return ( 
        <div id="project">
            <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
                <div className="pt-20 pb-10 px-10">
                    <div className="flex flex-col items-center gap-4 mb-10 text-center" data-aos="fade-down-right">
                        <p className="Geist md:text-md text-sm font-medium tracking-wider text-center text-gray-400">PORTFOLIO</p>
                        <h1 className="Geist text-gray-200  md:text-5xl text-3xl font-bold">Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Projects</span></h1>
                        <div className="w-40 h-px mx-auto bg-gradient-to-r from-green-900 via-green-500 to-green-900"></div>
                        <p className="Geist md:text-md text-lg font-medium tracking-wider text-gray-300">Commercial and passion projects built with modern technologies</p>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                            {
                                projects.map((project, index) => (
                                    <div key={index} data-aos="zoom-in-up">
                                        <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-green-700 overflow-hidden transition-all duration-500">
                                            <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
                                                <div className="relative w-full h-full flex justify-center items-center">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                                        <a href={project.url} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-green-800 hover:border-gray-500 transition-colors duration-500">
                                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                            <p className="Geist text-sm font-medium">Visit Live Site</p>
                                                        </a>
                                                    </div>
                                                    <img src={project.image} alt={project.alt} className="w-full h-full object-cover" />
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div>
                                                    <div className="flex flex-row justify-between items-center">
                                                        <p className="Geist text-2xl font-semibold text-gray-200 mb-4">{project.title}</p>
                                                        <span className="Geist text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">Live</span>
                                                    </div>
                                                    <p className="text-lg text-gray-400 mb-4">{project.description}</p>
                                                    <div className="flex flex-row flex-wrap gap-2 mb-5">
                                                        {project.tags.map((tag, tagIndex) => (
                                                            <span key={tagIndex} className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">{tag}</span>
                                                        ))}
                                                    </div>
                                                    <div className="flex flex-row gap-3">
                                                        <a href={project.url} target="_blank" className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-500">
                                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                            <p className="Geist text-sm font-medium">Demo</p>
                                                        </a>
                                                        <button className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-500">
                                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                                            <p className="Geist text-sm font-medium">Details</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                inDevelopmentProject.map((project, index) => (
                                    <div key={index} data-aos="zoom-in-up">
                                        <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-green-700 overflow-hidden transition-all duration-500">
                                            <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
                                                <div className="relative w-full h-full flex justify-center items-center">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                                        <a href="" onClick={(e) => e.preventDefault()} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-green-800 hover:border-gray-500 transition-colors duration-500">
                                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                            <p className="Geist text-sm font-medium">Visit Live Site</p>
                                                        </a>
                                                    </div>
                                                    <p className="Geist text-4xl font-bold text-gray-700">{project.imgText}</p>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div>
                                                <div className="flex flex-row justify-between items-center">
                                                        <p className="Geist text-2xl font-semibold text-gray-200 mb-4">{project.title}</p>
                                                        <span className="Geist text-sm font-medium px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 mb-4">In Development</span>
                                                    </div>
                                                    <p className="text-lg text-gray-400 mb-4">{project.description}</p>
                                                    <div className="flex flex-row flex-wrap gap-2 mb-5">
                                                        {project.tags.map((tag, tagIndex) => (
                                                            <span key={tagIndex} className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">{tag}</span>
                                                        ))}
                                                    </div>
                                                    <div className="flex flex-row gap-3">
                                                        <a href="" onClick={(e) => e.preventDefault()} target="_blank" className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-500">
                                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                            <p className="Geist text-sm font-medium">Demo</p>
                                                        </a>
                                                        <button className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-500">
                                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                                            <p className="Geist text-sm font-medium">Details</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-10" data-aos="zoom-in-up">
                        <div className="text-center mb-5">
                            <p className="Geist font-medium tracking-wider text-green-600">Want to see more of my work?</p>
                        </div>
                        <div>
                            <a href="https://github.com/Fortexfreddie" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-lg border border-gray-800 hover:border-green-700 text-gray-300 hover:text-green-600 transition-all duration-300">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                View Github Portfolio
                            </a>
                        </div>
                    </div>
                    <div className="mt-20 text-center">
                        <p className="text-sm text-gray-400">© 2025 Freddie's Works. All rights reserved.</p>
                        <p className="text-sm text-gray-500">Made with ❤️</p>
                    </div>
                </div>
            </div>        
        </div>
     );
}
 
export default Projects;