import Conference from "../assets/images/conference.png";
import Examly from "../assets/images/Examly.png";

const Projects = () => {
    return ( 
        <div id="project">
            <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
                <div className="py-20 px-10">
                    <div className="flex flex-col items-center gap-4 mb-10 text-center" data-aos="fade-down-right">
                        <p className="Geist md:text-md text-sm font-medium tracking-wider text-center text-gray-400">PORTFOLIO</p>
                        <h1 className="Geist text-gray-200  md:text-5xl text-3xl font-bold">Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Projects</span></h1>
                        <div className="w-40 h-px mx-auto bg-gradient-to-r from-green-900 via-green-500 to-green-900"></div>
                        <p className="Geist md:text-md text-lg font-medium tracking-wider text-gray-300">Commercial and passion projects built with modern technologies</p>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                            <div data-aos="zoom-in-up">
                                <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-green-700 overflow-hidden transition-all duration-500">
                                    <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
                                        <div className="relative w-full h-full flex justify-center items-center">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                                <a href="https://examlyy.netlify.app" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-green-800 hover:border-gray-500 transition-colors duration-500">
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                    <p className="Geist text-sm font-medium">Visit Live Site</p>
                                                </a>
                                            </div>
                                            <img src={Examly} alt="Examly" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div>
                                            <div className="flex flex-row justify-between items-center">
                                                <p className="Geist text-2xl font-semibold text-gray-200 mb-4">Examly</p>
                                                <span className="Geist text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">Live</span>
                                            </div>
                                            <p className="text-lg text-gray-400 mb-4">The official certification Examination platform for Human-Computer interface.</p>
                                            <div className="flex flex-row flex-wrap gap-2 mb-5">
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">Exams</span>
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">React</span>
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">Express.js</span>
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">Tailwind</span>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <a href="https://examlyy.netlify.app" target="_blank" className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-500">
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
                            <div data-aos="zoom-in-up">
                                <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-green-700 overflow-hidden transition-all duration-500">
                                    <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
                                        <div className="relative w-full h-full flex justify-center items-center">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                                <a href="https://techmaverick.freesite.online" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-green-800 hover:border-gray-500 transition-colors duration-500">
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                    <p className="Geist text-sm font-medium">Visit Live Site</p>
                                                </a>
                                            </div>
                                            <img src={Conference} className="w-full h-full object-cover" alt="Tech Maverick" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div>
                                            <div className="flex flex-row justify-between items-center">
                                                <p className="Geist text-2xl font-semibold text-gray-200 mb-4">Tech Maverick</p>
                                                <span className="Geist text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">Live</span>
                                            </div>
                                            <p className="text-lg text-gray-400 mb-4">A conference platform for hosting of conferences, events, seminars e.t.c</p>
                                            <div className="flex flex-row flex-wrap gap-2 mb-5">
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">Conference</span>
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">HTML</span>
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">Boostrap</span>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <a href="https://techmaverick.freesite.online" target="_blank" className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-500">
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
                            <div data-aos="zoom-in-up">
                                <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-green-700 overflow-hidden transition-all duration-500">
                                    <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
                                        <div className="relative w-full h-full flex justify-center items-center">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                                <a href="" onClick={(e) => e.preventDefault()} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-green-800 hover:border-gray-500 transition-colors duration-500">
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                    <p className="Geist text-sm font-medium">Visit Live Site</p>
                                                </a>
                                            </div>
                                            <p className="Geist text-4xl font-bold text-gray-700">TM</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div>
                                            <div className="flex flex-row justify-between items-center">
                                                <p className="Geist text-2xl font-semibold text-gray-200 mb-4">Tech Maverick</p>
                                                <span className="Geist text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">Live</span>
                                            </div>
                                            <p className="text-lg text-gray-400 mb-4">A conference platform for hosting of conferences, events, seminars e.t.c</p>
                                            <div className="flex flex-row flex-wrap gap-2 mb-5">
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">Conference</span>
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">HTML</span>
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">Boostrap</span>
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
                            <div data-aos="zoom-in-up">
                                <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-green-700 overflow-hidden transition-all duration-500">
                                    <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
                                        <div className="relative w-full h-full flex justify-center items-center">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                                <a href="" onClick={(e) => e.preventDefault()} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-green-800 hover:border-gray-500 transition-colors duration-500">
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                    <p className="Geist text-sm font-medium">Visit Live Site</p>
                                                </a>
                                            </div>
                                            <p className="Geist text-4xl font-bold text-gray-700">TM</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div>
                                        <div className="flex flex-row justify-between items-center">
                                                <p className="Geist text-2xl font-semibold text-gray-200 mb-4">Examly</p>
                                                <span className="Geist text-sm font-medium px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 mb-4">In Development</span>
                                            </div>
                                            <p className="text-lg text-gray-400 mb-4">A conference platform for hosting of conferences, events, seminars e.t.c</p>
                                            <div className="flex flex-row flex-wrap gap-2 mb-5">
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">Conference</span>
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">HTML</span>
                                                <span className="Geist text-xs rounded px-2.5 py-1 text-gray-400 bg-gray-800/50 border border-gray-800 font-medium">Boostrap</span>
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
                        </div>
                    </div>
                </div>
            </div>        
        </div>
     );
}
 
export default Projects;