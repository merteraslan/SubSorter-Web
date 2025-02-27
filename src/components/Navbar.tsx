import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // Account for navbar height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent border-b border-transparent'
            }`}>
            <div className="container mx-auto px-4 py-3 max-w-6xl">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                            <StaticImage
                                src="../images/subsorter-icon.png"
                                alt="SubSorter"
                                placeholder="blurred"
                                layout="fixed"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className={`text-xl font-bold ${scrolled ? 'text-red-600' : 'text-white'} group-hover:text-black transition-colors`}>SubSorter</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        <button
                            onClick={() => scrollToSection('features')}
                            className={`px-4 py-2 rounded-lg ${scrolled
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-white/20'
                                } transition-colors`}
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('how-it-works')}
                            className={`px-4 py-2 rounded-lg ${scrolled
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-white/20'
                                } transition-colors`}
                        >
                            How It Works
                        </button>
                        <button
                            onClick={() => scrollToSection('screenshots')}
                            className={`px-4 py-2 rounded-lg ${scrolled
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-white/20'
                                } transition-colors`}
                        >
                            Screenshots
                        </button>
                        <button
                            onClick={() => scrollToSection('faq')}
                            className={`px-4 py-2 rounded-lg ${scrolled
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-white/20'
                                } transition-colors`}
                        >
                            FAQ
                        </button>
                        <button
                            onClick={() => scrollToSection('download')}
                            className="ml-2 bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 rounded-lg transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Install Now
                        </button>
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <button
                        className={`md:hidden p-2 rounded-lg ${scrolled
                            ? 'text-gray-700 hover:bg-gray-100'
                            : 'text-white hover:bg-white/20'
                            } transition-colors focus:outline-none`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className={`p-2 rounded-lg ${scrolled ? 'bg-gray-50' : 'bg-white/10 backdrop-blur-md'}`}>
                        <button
                            onClick={() => scrollToSection('features')}
                            className={`block w-full text-left px-4 py-3 rounded-lg mb-1 ${scrolled
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-white/20'
                                } transition-colors`}
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('how-it-works')}
                            className={`block w-full text-left px-4 py-3 rounded-lg mb-1 ${scrolled
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-white/20'
                                } transition-colors`}
                        >
                            How It Works
                        </button>
                        <button
                            onClick={() => scrollToSection('screenshots')}
                            className={`block w-full text-left px-4 py-3 rounded-lg mb-1 ${scrolled
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-white/20'
                                } transition-colors`}
                        >
                            Screenshots
                        </button>
                        <button
                            onClick={() => scrollToSection('faq')}
                            className={`block w-full text-left px-4 py-3 rounded-lg mb-1 ${scrolled
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-white/20'
                                } transition-colors`}
                        >
                            FAQ
                        </button>
                        <button
                            onClick={() => scrollToSection('download')}
                            className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-3 rounded-lg transition-colors mt-2"
                        >
                            Install Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;