import React, { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, title: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", year: "2023" },
    { id: 2, title: "Financial Dashboard", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", year: "2023" },
    { id: 3, title: "Travel App", category: "Mobile Application", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", year: "2024" },
    { id: 4, title: "AI Assistant", category: "Machine Learning", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", year: "2024" },
    { id: 5, title: "Digital Magazine", category: "Publishing", image: "https://images.unsplash.com/photo-1522071820081-009f0129c7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", year: "2024" },
    { id: 6, title: "Food Delivery App", category: "Mobile Application", image: "https://images.unsplash.com/photo-1590846406792-ac034da3783a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", year: "2023" },
];

// --- Smooth Scroll (Lenis) Hook ---
const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      smooth: true,
      lerp: 0.1,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    
    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);
};

// --- Project Card Component ---
const ProjectCard = forwardRef(({ project, className = '' }, ref) => {
    return (
        <div ref={ref} className={`project-card ${className} group relative w-full h-[60vh] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer opacity-0`}>
            {/* Image */}
            <img 
                src={project.image} 
                alt={project.title} 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end transform translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
                <div className="flex justify-between items-end overflow-hidden">
                    <div>
                        <p className="text-white/80 font-[Font1] text-sm md:text-base mb-2 uppercase tracking-wider opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                            {project.category} — {project.year}
                        </p>
                        <h3 className="text-white font-[Font2] text-3xl md:text-4xl lg:text-5xl leading-tight">
                            {project.title}
                        </h3>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 transform translate-x-4 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-x-0 bg-white/10 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
});

// --- Main Project List Component ---
const Project = () => {
    useSmoothScroll();
    
    const mainWrapperRef = useRef(null);
    const headerRef = useRef(null);
    const gridRef = useRef(null);
    
    // Array of refs for each card
    const cardRefs = useRef([]);
    cardRefs.current = [];
    const addToCardRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            // 1. PINNING THE HEADER
            ScrollTrigger.create({
                trigger: headerRef.current,
                start: "top top", 
                endTrigger: gridRef.current,
                end: "bottom top", 
                pin: true,
                pinSpacing: false,
                onPin: () => gsap.set(headerRef.current, { zIndex: 10 }), 
                onUnpin: () => gsap.set(headerRef.current, { zIndex: 'auto' }) 
            });

            // 2. STAGGERED PARALLAX REVEAL
            cardRefs.current.forEach((item) => {
                gsap.fromTo(item, 
                    { y: 50, opacity: 0 },
                    {
                        y: 0, 
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top bottom-=100", 
                            end: "bottom center",
                            toggleActions: "play none none reverse", 
                        }
                    }
                );
            });

        }, mainWrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainWrapperRef} className="w-full min-h-screen bg-[#f1f1f1] text-black pb-20">
            <div className="w-full px-4 md:px-8 lg:px-12">
                
                <div ref={headerRef} className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-black/10 bg-[#f1f1f1]">
                    <h1 className="font-[Font2] text-[12vw] leading-[0.8] uppercase tracking-tighter">
                        Projects <br />
                        <span className="ml-[10vw] text-[9vw] text-gray-400">My Work</span>
                    </h1>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`${index % 2 !== 0 ? 'md:mt-20' : ''}`}>
                            <ProjectCard 
                                project={project} 
                                ref={addToCardRefs} 
                            />
                        </div>
                    ))}
                </div>
                
                {/* Footer / More */}
                <div className="mt-20 flex justify-center">
                    <button className="z-30 px-8 py-3 rounded-full border border-black/20 font-[Font1] uppercase text-sm hover:bg-black hover:text-white transition-colors duration-300">
                        View All Projects
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;