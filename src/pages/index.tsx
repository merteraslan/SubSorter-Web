import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { useState, useRef, useEffect, useMemo } from "react"
import { withPrefix } from "gatsby"

// Add this type definition before the IndexPage component
type FAQItem = {
    question: string;
    answer: string;
    category?: string;
}

type Testimonial = {
    name: string;
    role: string;
    content: string;
    avatar: string;
}

// Define the main index page component
const IndexPage = () => {
    // Enhanced FAQ items with more questions and categorization
    const faqItems: FAQItem[] = [
        {
            question: "Is SubSorter free to use?",
            answer: "Yes, SubSorter is completely free. There are no premium features, subscriptions, or hidden fees. We believe in keeping useful tools accessible to everyone.",
            category: "General"
        },
        {
            question: "Does SubSorter collect any data?",
            answer: "No, SubSorter runs entirely in your browser and doesn't collect or transmit any data about your viewing habits or preferences. Your privacy is our priority.",
            category: "Privacy"
        },
        {
            question: "Which browsers are supported?",
            answer: "SubSorter works with Chrome, Brave, Edge, Opera, and other Chromium-based browsers that support Chrome extensions. We're exploring Firefox support for future releases.",
            category: "Compatibility"
        },
        {
            question: "Will this slow down YouTube?",
            answer: "SubSorter is designed to be lightweight and efficient. It uses debouncing, lazy loading, and performance optimizations to minimize any impact on your browsing experience. Most users report no noticeable performance difference.",
            category: "Performance"
        },
        {
            question: "Can I customize which content is filtered?",
            answer: "Yes, you can independently toggle filters for shorts, streams, live videos, and premieres based on your preferences. You can also set up custom filtering rules for specific channels.",
            category: "Features"
        },
        {
            question: "How do I report a bug or suggest a feature?",
            answer: "You can report bugs or suggest features through our GitHub repository or by reaching out on Twitter. We actively monitor both channels and appreciate community feedback.",
            category: "Support"
        },
        {
            question: "Can I use SubSorter with other YouTube enhancing extensions?",
            answer: "Yes, SubSorter is designed to be compatible with most other YouTube enhancing extensions. If you encounter any conflicts, please report them to us so we can improve compatibility.",
            category: "Compatibility"
        },
        {
            question: "Will my settings sync across devices?",
            answer: "Yes, if you're signed into Chrome and have sync enabled, your SubSorter settings will automatically sync across all your devices where the extension is installed.",
            category: "Features"
        }
    ];

    // Placeholder for future testimonials - currently commented out since the extension is new
    /*
    const testimonials: Testimonial[] = [
        {
            name: "Sarah Chen",
            role: "Content Creator",
            content: "SubSorter has completely changed how I use YouTube. I can finally browse my subscriptions without scrolling through dozens of shorts and livestreams.",
            avatar: "/images/testimonial-1.jpg"
        },
        {
            name: "Marcus Johnson",
            role: "Tech Enthusiast",
            content: "The bundling feature is genius! Now I can catch up with all my favorite creators' videos in one place instead of hunting through my feed.",
            avatar: "/images/testimonial-2.jpg"
        },
        {
            name: "Alex Rivera",
            role: "Software Developer",
            content: "As someone who follows a lot of technical channels, SubSorter's organization makes it so much easier to find the content I actually want to watch.",
            avatar: "/images/testimonial-3.jpg"
        }
    ];
    */

    // Future statistics placeholders - commented out until we have actual usage data
    /*
    const stats = [
        { label: "Active Users", value: "10,000+" },
        { label: "YouTube Videos Organized", value: "5M+" },
        { label: "Average Time Saved", value: "1.5 hrs/week" },
        { label: "User Rating", value: "4.8/5" }
    ];
    */

    // Pre-launch benefits instead of statistics
    const benefits = [
        { label: "Cleaner Feed", value: "No Shorts" },
        { label: "Better Organization", value: "Bundled Videos" },
        { label: "Total Privacy", value: "No Data Collection" },
        { label: "Free Forever", value: "No Subscription" }
    ];

    // Update FAQ accordion functionality to use refs for ARIA attributes
    const [openFAQs, setOpenFAQs] = useState<number[]>([]);
    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Set ARIA attributes imperatively to avoid React JSX ARIA validation issues
        faqRefs.current.forEach((faqRef, index) => {
            if (faqRef) {
                const button = faqRef.querySelector('button');
                const content = faqRef.querySelector(`#faq-answer-${index}`);

                if (button && content) {
                    const isOpen = openFAQs.includes(index);
                    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                    content.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
                }
            }
        });
    }, [openFAQs]);
    const [activeFAQCategory, setActiveFAQCategory] = useState<string>("All");
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    // Enhanced image collection with better descriptions
    const images = [
        {
            src: withPrefix("/images/image-1.png"),
            alt: "SubSorter settings panel with content filter options",
            description: "Easily customize content filters with our intuitive settings panel"
        },
        {
            src: withPrefix("/images/image-2.png"),
            alt: "Bundled videos from the same creator in YouTube subscription feed",
            description: "Group videos from your favorite creators to keep your feed organized"
        },
        {
            src: withPrefix("/images/image-3.png"),
            alt: "Quick view feature showing multiple videos in a dropdown",
            description: "Use the quick view feature to preview content without leaving your feed"
        },
        {
            src: withPrefix("/images/image-4.png"),
            alt: "Clean YouTube subscription feed with filtered content",
            description: "Enjoy a cleaner feed focused on the content you actually want to watch"
        },
        {
            src: withPrefix("/images/image-5.png"),
            alt: "Microsoft Research channel with bundled videos",
            description: "Technical channels like Microsoft Research become much easier to navigate"
        }
    ];

    // Filtered FAQ items based on selected category
    const filteredFAQs = useMemo(() => {
        if (activeFAQCategory === "All") {
            return faqItems;
        }
        return faqItems.filter(item => item.category === activeFAQCategory);
    }, [activeFAQCategory, faqItems]);

    // Get unique FAQ categories for the filter
    const faqCategories = useMemo(() => {
        const categories = new Set(faqItems.map(item => item.category || ""));
        // Filter out any undefined values and ensure all values are strings
        return ["All", ...Array.from(categories).filter(c => c !== undefined && c !== "")] as string[];
    }, [faqItems]);

    useEffect(() => {
        const video = videoRef.current;

        const handleLoadStart = () => setIsLoading(true);
        const handleLoadedData = () => setIsLoading(false);
        const handleError = (e: Event) => {
            console.error('Video loading error:', e);
            setIsLoading(false);
        };

        if (video) {
            video.addEventListener('loadstart', handleLoadStart);
            video.addEventListener('loadeddata', handleLoadedData);
            video.addEventListener('error', handleError);
        }

        return () => {
            if (video) {
                video.removeEventListener('loadstart', handleLoadStart);
                video.removeEventListener('loadeddata', handleLoadedData);
                video.removeEventListener('error', handleError);
            }
        };
    }, []);

    // Added intersection observer for animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    // Back to top button visibility
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleFAQ = (index: number) => {
        setOpenFAQs(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <Layout>
            <main className="font-sans bg-gray-50 text-gray-900">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>SubSorter - Organize Your YouTube Subscription Feed</title>
                    <meta name="description" content="Filter out shorts, bundle videos from the same creator, and customize your YouTube subscription feed with SubSorter - the free browser extension." />
                    <meta name="keywords" content="YouTube extension, subscription organizer, YouTube filter, hide shorts, bundle videos" />
                    <meta property="og:title" content="SubSorter - Organize Your YouTube Subscription Feed" />
                    <meta property="og:description" content="Filter out shorts, bundle videos from the same creator, and customize your YouTube subscription feed with SubSorter." />
                    <meta property="og:image" content="/images/og-image.jpg" />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:creator" content="@mertxnt" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                    <link rel="canonical" href="https://subsorter.com" />
                    {/* Structured data for rich results */}
                    <script type="application/ld+json">
                        {`
                            {
                                "@context": "https://schema.org",
                                "@type": "SoftwareApplication",
                                "name": "SubSorter",
                                "applicationCategory": "BrowserExtension",
                                "operatingSystem": "Chrome, Edge, Brave, Opera",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "USD"
                                }
                            }
                        `}
                    </script>
                </Helmet>

                {/* Note: Adding styling note for the Layout component navbar */}
                {/* 
                Suggested navbar improvements for the Layout component:
                1. Add a glass-morphism effect with backdrop-filter
                2. Add subtle border instead of shadow
                3. Improve button styling and hover effects
                4. Add logo animation on hover
                5. Improve mobile menu transitions
                */}

                {/* Hero Section */}
                <section
                    ref={heroRef}
                    className="bg-gradient-to-r from-red-700 to-red-500 text-white pt-16 pb-24 md:pt-20 md:pb-32 relative overflow-hidden"
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between md:gap-12">
                            <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
                                <div className="inline-block mb-4 bg-red-800 bg-opacity-30 rounded-full px-4 py-1 text-sm font-medium">
                                    Simplify Your YouTube Experience
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                                    Your YouTube Feed,<br />
                                    <span className="text-yellow-300">Organized</span>
                                </h1>
                                <p className="text-xl mb-8 text-white text-opacity-90 max-w-md">
                                    Filter out unwanted content, group videos from the same creator, and enjoy a cleaner, more personalized YouTube experience.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="#download"
                                        className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-50 hover:scale-105 transform transition-all flex items-center justify-center min-w-[160px]"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        Install Free
                                    </a>
                                    <a
                                        href="#features"
                                        className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-red-600 transition flex items-center justify-center min-w-[160px]"
                                    >
                                        Learn More
                                    </a>
                                </div>

                                {/* Coming Soon Badge */}
                                <div className="mt-8 inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium">
                                    <span className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        Just Launched!
                                    </span>
                                </div>
                            </div>
                            <div className="md:w-1/2 animate-on-scroll">
                                <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-r from-gray-900 to-black p-2">
                                    <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-gray-800 to-gray-700 flex items-center px-3 rounded-t-lg">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                        </div>
                                    </div>
                                    <div className="pt-6">
                                        <video
                                            ref={videoRef}
                                            className="w-full rounded-lg"
                                            poster={withPrefix("/images/hero-screenshot.png")}
                                            preload="metadata"
                                            controls
                                            playsInline
                                            muted
                                            autoPlay
                                            loop
                                        >
                                            <source
                                                src={withPrefix("/videos/Subsort.mp4")}
                                                type="video/mp4"
                                            />
                                            Your browser does not support the video tag.
                                        </video>
                                        {isLoading && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                                                <div className="w-20 h-20 rounded-full bg-red-600 bg-opacity-90 flex items-center justify-center">
                                                    <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </section>

                {/* Benefits Section - Improved Horizontal Alignment */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-1/2 md:w-1/4 p-3 text-center">
                                <p className="text-xl md:text-2xl font-bold text-red-600">No Shorts</p>
                                <p className="text-gray-600 text-sm md:text-base">Cleaner Feed</p>
                            </div>
                            <div className="w-1/2 md:w-1/4 p-3 text-center">
                                <p className="text-xl md:text-2xl font-bold text-red-600">Bundled Videos</p>
                                <p className="text-gray-600 text-sm md:text-base">Better Organization</p>
                            </div>
                            <div className="w-1/2 md:w-1/4 p-3 text-center">
                                <p className="text-xl md:text-2xl font-bold text-red-600">No Data Collection</p>
                                <p className="text-gray-600 text-sm md:text-base">Total Privacy</p>
                            </div>
                            <div className="w-1/2 md:w-1/4 p-3 text-center">
                                <p className="text-xl md:text-2xl font-bold text-red-600">Free Forever</p>
                                <p className="text-gray-600 text-sm md:text-base">No Subscription</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16 animate-on-scroll">
                            <div className="inline-block mb-4 bg-red-100 text-red-600 rounded-full px-4 py-1 text-sm font-medium">
                                Powerful Capabilities
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your YouTube Experience</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                SubSorter gives you the tools to customize your subscription feed exactly how you want it.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-on-scroll">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Hide Unwanted Content</h3>
                                <p className="text-gray-600">
                                    Filter out shorts, live videos, streamed videos, and premieres with one click to focus on the content you actually want to watch.
                                </p>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Hide all shorts with one click
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Filter out livestreams
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Skip video premieres
                                    </li>
                                </ul>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-on-scroll">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Bundle Creator Videos</h3>
                                <p className="text-gray-600">
                                    Group multiple uploads from the same creator to reduce clutter and organize your feed by channel.
                                </p>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Group uploads by creator
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Expand to see all videos
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Customizable time periods
                                    </li>
                                </ul>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-on-scroll">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Flexible Configuration</h3>
                                <p className="text-gray-600">
                                    Easily customize settings to match your viewing preferences with intuitive controls.
                                </p>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Simple toggle controls
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Channel-specific settings
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Syncs across devices
                                    </li>
                                </ul>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-on-scroll">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Time-Based Bundling</h3>
                                <p className="text-gray-600">
                                    Choose between 24-hour, 7-day, or 30-day timeframes for bundling creator content.
                                </p>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Daily bundling (24 hours)
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Weekly bundling (7 days)
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Monthly bundling (30 days)
                                    </li>
                                </ul>
                            </div>

                            {/* Feature 5 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-on-scroll">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Privacy Focused</h3>
                                <p className="text-gray-600">
                                    Runs entirely in your browser with no data collection or tracking. Your viewing habits stay private.
                                </p>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        No data collection
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        No account required
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Local processing only
                                    </li>
                                </ul>
                            </div>

                            {/* Feature 6 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-on-scroll">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
                                <p className="text-gray-600">
                                    Works right within YouTube's interface for a native experience, with no need to switch between apps.
                                </p>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Native YouTube interface
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        No separate app needed
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Lightweight performance
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases Section Removed */}

                {/* How It Works Section */}
                <section id="how-it-works" className="py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16 animate-on-scroll">
                            <div className="inline-block mb-4 bg-red-100 text-red-600 rounded-full px-4 py-1 text-sm font-medium">
                                Simple Setup
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Get started with SubSorter in just a few simple steps and transform your YouTube experience instantly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {/* Step 1 */}
                            <div className="relative animate-on-scroll">
                                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative z-10">
                                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                        1
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-center">Install the Extension</h3>
                                    <p className="text-gray-600 text-center">
                                        Add SubSorter to your browser with just a few clicks from the Chrome Web Store or Microsoft Edge Add-ons.
                                    </p>
                                    <a
                                        href="#download"
                                        className="mt-6 block text-center text-red-600 font-medium hover:text-red-700"
                                    >
                                        Get the extension →
                                    </a>
                                </div>

                                {/* Connector line (hidden on mobile) */}
                                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-red-200 z-0 connector-line"></div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative animate-on-scroll">
                                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative z-10">
                                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                        2
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-center">Configure Settings</h3>
                                    <p className="text-gray-600 text-center">
                                        Customize your filtering preferences using the SubSorter button that appears on your YouTube subscription feed.
                                    </p>
                                </div>

                                {/* Connector line (hidden on mobile) */}
                                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-red-200 z-0 connector-line"></div>
                            </div>

                            {/* Step 3 */}
                            <div className="animate-on-scroll">
                                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative z-10">
                                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                        3
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-center">Enjoy a Cleaner Feed</h3>
                                    <p className="text-gray-600 text-center">
                                        Browse your subscriptions with less clutter, better organization, and a more personalized viewing experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Screenshots Section */}
                <section id="screenshots" className="bg-gradient-to-r from-red-700 to-red-500 py-16 md:py-24 relative overflow-hidden">
                    {/* Wavy pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="waves" width="100" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" fill="none" stroke="white" strokeWidth="2" />
                                    <path d="M0 20 Q 12.5 10, 25 20 T 50 20 T 75 20 T 100 20" fill="none" stroke="white" strokeWidth="2" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#waves)" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="text-center mb-16 animate-on-scroll">
                            <div className="inline-block mb-4 bg-red-800 bg-opacity-30 rounded-full px-4 py-1 text-sm font-medium text-white">
                                Visual Tour
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">See SubSorter in Action</h2>
                            <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto">
                                Experience how SubSorter transforms YouTube's subscription feed.
                            </p>
                        </div>

                        <div className="relative max-w-4xl mx-auto animate-on-scroll">
                            {/* Main Image */}
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src={images[currentImageIndex].src}
                                    alt={images[currentImageIndex].alt}
                                    className="w-full h-full object-cover"
                                />

                                {/* Image Description */}
                                <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-70 text-white p-4 md:p-6">
                                    <p className="text-center font-medium text-lg">
                                        {images[currentImageIndex].description}
                                    </p>
                                </div>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={previousImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                                    aria-label="Previous image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                                    aria-label="Next image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Dots Navigation */}
                            <div className="flex justify-center gap-3 mt-6">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-4 h-4 rounded-full transition-all focus:outline-none ${index === currentImageIndex
                                            ? 'bg-white scale-110'
                                            : 'bg-white/50 hover:bg-white/70'
                                            }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Download Section */}
                <section id="download" className="py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="text-center mb-16 animate-on-scroll">
                            <div className="inline-block mb-4 bg-red-100 text-red-600 rounded-full px-4 py-1 text-sm font-medium">
                                Get Started
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Download SubSorter</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Install now for free and start enjoying a cleaner, more organized YouTube experience.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 animate-on-scroll">
                            {/* Chrome Web Store */}
                            <a
                                href="https://chrome.google.com/webstore/detail/your-extension-id"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-lg"
                            >
                                <img
                                    src={withPrefix("/images/chrome-web-store.png")}
                                    alt="Available in the Chrome Web Store"
                                    className="h-16 md:h-20"
                                />
                            </a>

                            {/* Microsoft Edge Add-ons */}
                            <a
                                href="https://microsoftedge.microsoft.com/addons/detail/your-extension-id"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-lg"
                            >
                                <img
                                    src={withPrefix("/images/edge-web-store.svg")}
                                    alt="Get it from Microsoft Edge Add-ons"
                                    className="h-16 md:h-20"
                                />
                            </a>
                        </div>

                        {/* Features Highlight */}
                        <div className="bg-gray-100 rounded-xl p-8 max-w-3xl mx-auto mb-12 animate-on-scroll">
                            <h3 className="text-xl font-semibold mb-4 text-center">Why Choose SubSorter?</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="flex items-center gap-2">
                                    <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Completely Free</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">No Ads</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">No Tracking</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Regular Updates</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Lightweight</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Regular Updates</span>
                                </div>
                            </div>
                        </div>

                        {/* Social and Support Links */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-on-scroll">
                            {/* Buy Me Coffee */}
                            <a
                                href="https://www.buymeacoffee.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-lg"
                            >
                                <img
                                    src={withPrefix("/images/bmc-full-logo.svg")}
                                    alt="Buy me a coffee"
                                    className="h-12"
                                />
                            </a>

                            {/* X (Twitter) Follow Button */}
                            <a
                                href="https://twitter.com/intent/follow?screen_name=mertxnt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                <span>Follow</span>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/merteraslan/subsorter-web"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-full hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                <span>Star on GitHub</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ Section with subtle pattern */}
                <section id="faq" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
                    {/* Subtle dot pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#dot-grid)" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <div className="text-center mb-16 animate-on-scroll">
                            <div className="inline-block mb-4 bg-red-100 text-red-600 rounded-full px-4 py-1 text-sm font-medium">
                                Questions & Answers
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Get answers to common questions about SubSorter.
                            </p>
                        </div>

                        {/* FAQ Category Filters */}
                        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-on-scroll">
                            {faqCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFAQCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFAQCategory === category
                                        ? 'bg-red-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-4 animate-on-scroll">
                            {filteredFAQs.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                                    ref={el => faqRefs.current[index] = el}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-inset"
                                        data-expanded={openFAQs.includes(index)}
                                        aria-controls={`faq-answer-${index}`}
                                    >
                                        <h3 className="text-xl font-semibold">{item.question}</h3>
                                        <svg
                                            className={`w-6 h-6 transform transition-transform ${openFAQs.includes(index) ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id={`faq-answer-${index}`}
                                        className={`transition-all duration-300 ease-in-out ${openFAQs.includes(index)
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                            } overflow-hidden`}
                                        data-hidden={!openFAQs.includes(index)}
                                    >
                                        <p className="p-6 pt-4 mt-2 text-gray-600">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Support */}
                        <div className="mt-12 text-center animate-on-scroll">
                            <p className="text-gray-600 mb-4">Still have questions?</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://github.com/merteraslan/subsorter-web/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                    <span>Provide Feedback</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section with matching background to FAQ */}
                <section className="py-16 bg-gray-50 relative overflow-hidden">
                    {/* Same subtle dot pattern as FAQ */}
                    <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="dot-grid-2" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#dot-grid-2)" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 max-w-3xl relative z-10">
                        <div className="bg-gradient-to-r from-red-700 to-red-500 rounded-2xl p-8 md:p-12 shadow-xl animate-on-scroll">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated</h2>
                                <p className="text-white text-opacity-90 md:text-lg">
                                    Subscribe to get notified about new features and updates.
                                </p>
                            </div>
                            <form className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-white text-opacity-70 text-sm mt-4 text-center">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    {/* Update the logo image source */}
                                    <img src={withPrefix("/images/subsorter-icon.png")} alt="SubSorter Logo" className="h-8 w-8" />
                                    <h2 className="text-2xl font-bold">SubSorter</h2>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Organize your YouTube subscription feed and enjoy a cleaner viewing experience.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/merteraslan/subsorter-web"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition"
                                        aria-label="GitHub Repository"
                                        title="Visit our GitHub Repository"
                                    >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://twitter.com/mertxnt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition"
                                        aria-label="Twitter Profile"
                                        title="Follow us on Twitter"
                                    >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Features</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#features" className="text-gray-400 hover:text-white transition">Hide Unwanted Content</a>
                                    </li>
                                    <li>
                                        <a href="#features" className="text-gray-400 hover:text-white transition">Bundle Creator Videos</a>
                                    </li>
                                    <li>
                                        <a href="#features" className="text-gray-400 hover:text-white transition">Flexible Configuration</a>
                                    </li>
                                    <li>
                                        <a href="#features" className="text-gray-400 hover:text-white transition">Time-Based Bundling</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/merteraslan/subsorter-web/wiki" className="text-gray-400 hover:text-white transition">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/merteraslan/subsorter-web/issues" className="text-gray-400 hover:text-white transition">Report Bugs</a>
                                    </li>
                                    <li>
                                        <a href="#download" className="text-gray-400 hover:text-white transition">Download</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Support</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="https://www.buymeacoffee.com/merteraslan" className="text-gray-400 hover:text-white transition">Sponsor</a>
                                    </li>
                                    <li>
                                        <a href="mailto:mertegithub@gmail.com" className="text-gray-400 hover:text-white transition">Contact</a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/mertxnt" className="text-gray-400 hover:text-white transition">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/merteraslan" className="text-gray-400 hover:text-white transition">GitHub</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
                            <p className="text-gray-400">
                                © {new Date().getFullYear()} SubSorter. All rights reserved.
                            </p>
                            <p className="mt-4 md:mt-0 text-sm text-gray-500">
                                SubSorter is not affiliated with YouTube or Google. YouTube is a trademark of Google LLC.
                            </p>
                        </div>
                    </div>
                </footer>
            </main>

            {/* Back to top button - only shown when scrolled down */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 ${showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                aria-label="Back to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>

            {/* CSS animations */}
            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fadeDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fade-in {
                    animation: fadeIn 0.6s ease-out forwards;
                }
                
                .animate-fade-down {
                    animation: fadeDown 0.3s ease-out forwards;
                }
                
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }
                
                .connector-line {
                    width: calc(100% - 3rem);
                }
                `}
            </style>
        </Layout>
    )
}

export default IndexPage

export const Head = () => (
    <>
        <title>SubSorter - Organize Your YouTube Subscription Feed</title>
        <meta name="description" content="Filter out shorts, bundle videos from the same creator, and customize your YouTube subscription feed with SubSorter - the free browser extension." />
        <meta name="keywords" content="YouTube extension, subscription organizer, YouTube filter, hide shorts, bundle videos" />
    </>
)