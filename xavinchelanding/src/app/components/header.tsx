'use client'
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <section className="relative">
                <div className="max-w-5xl mx-auto flex justify-between items-center lg:py-10 py-5 px-4">
                    <div className="flex items-center">
                        {/* Hamburger/Close Icon */}
                        <button 
                            className="lg:hidden p-2 focus:outline-none" 
                            onClick={toggleMenu}
                        >
                            {!isMenuOpen ? (
                                // Menu Icon
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-10 w-10" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth="2"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M4 6h16M4 12h16m-7 6h7" 
                                    />
                                </svg>
                            ) : (
                                // Close Icon
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-10 w-10" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth="2"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M6 18L18 6M6 6l12 12" 
                                    />
                                </svg>
                            )}
                        </button>
                        <nav className="hidden lg:flex lg:gap-4 text-sm">
                            <ul className="flex lg:flex-row flex-col gap-4 lg:gap-4">
                                <li><a href="#" className="hover:text-purple-500 font-raleway transition-colors delay-200 font-medium">About</a></li>
                                <li><a href="#" className="hover:text-purple-500 font-raleway font-medium">Tokenomics</a></li>
                                <li><a href="#" className="hover:text-purple-500 font-raleway font-medium">Docs</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex justify-center gap-2">
                        <h3 className="text-xl font-bold font-raleway tracking-widest">Xavinche</h3>
                    </div>
                </div>
            </section>

            {/* Mobile Menu with Smooth Animation */}
            <div 
                className={`lg:hidden bg-[#000] shadow-md w-full left-0 fixed top-0 z-50 overflow-hidden transition-all duration-700 ease-in-out transform ${isMenuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-10'}`}
                style={{ transitionProperty: 'max-height, opacity, transform' }}
            >
                <div className="flex justify-between items-center p-4">
                    <h3 className="text-white text-xl font-bold">Xavinche</h3>
                    <button 
                        className="p-2 focus:outline-none text-white" 
                        onClick={toggleMenu}
                    >
                        {/* Close (X) Icon inside the menu */}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-10 w-10" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth="2"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>
                    </button>
                </div>
                <nav>
                    <ul className="flex flex-col gap-4 p-4">
                        <li><a href="#" className="hover:text-purple-500 font-raleway transition-colors delay-200 font-semibold text-white">About</a></li>
                        <li><a href="#" className="hover:text-purple-500 font-raleway font-semibold text-white">Tokenomics</a></li>
                        <li><a href="#" className="hover:text-purple-500 font-raleway font-semibold text-white">Docs</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
