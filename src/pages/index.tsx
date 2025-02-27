import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

// Define the main index page component
const IndexPage = () => {
    return (
        <Layout>
            <main className="font-sans bg-gray-50 text-gray-900">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>SubSorter - YouTube Subscription Feed Organizer</title>
                    <meta name="description" content="Enhance your YouTube subscription feed by hiding shorts, filtering streams, and bundling multiple videos from the same creator." />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
                </Helmet>

                {/* Hero Section */}
                <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    SubSorter
                                </h1>
                                <p className="text-xl md:text-2xl mb-6">
                                    Take control of your YouTube subscription feed
                                </p>
                                <p className="text-lg mb-8">
                                    Filter out unwanted content and group videos from the same creator for a cleaner, more organized viewing experience.
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="#download"
                                        className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                                    >
                                        Install Now
                                    </a>
                                    <a
                                        href="#features"
                                        className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-red-600 transition"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <div className="relative rounded-lg shadow-xl overflow-hidden">
                                    <img
                                        src="/images/hero-screenshot.png"
                                        alt="SubSorter interface showing a clean YouTube subscription feed"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Hide Unwanted Content</h3>
                                <p className="text-gray-600">
                                    Filter out shorts, live videos, streamed videos, and premieres with one click to focus on the content you actually want to watch.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Bundle Creator Videos</h3>
                                <p className="text-gray-600">
                                    Group multiple uploads from the same creator to reduce clutter and organize your feed by channel.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Flexible Configuration</h3>
                                <p className="text-gray-600">
                                    Easily customize settings to match your viewing preferences with intuitive controls.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Time-Based Bundling</h3>
                                <p className="text-gray-600">
                                    Choose between 24-hour, 7-day, or 30-day timeframes for bundling creator content.
                                </p>
                            </div>

                            {/* Feature 5 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Privacy Focused</h3>
                                <p className="text-gray-600">
                                    Runs entirely in your browser with no data collection or tracking. Your viewing habits stay private.
                                </p>
                            </div>

                            {/* Feature 6 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                                <p className="text-gray-600">
                                    Works right within YouTube's interface for a native experience, with no need to switch between apps.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="bg-gray-100 py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Step 1 */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                    1
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Install the Extension</h3>
                                <p className="text-gray-600">
                                    Add SubSorter to Chrome with just a few clicks from the Chrome Web Store.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                    2
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Configure Settings</h3>
                                <p className="text-gray-600">
                                    Customize your filtering preferences using the settings button on your subscription feed.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                    3
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Enjoy a Cleaner Feed</h3>
                                <p className="text-gray-600">
                                    Browse your subscriptions with less clutter and better organization.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Screenshots Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See SubSorter in Action</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <img
                                    src="/images/screenshot-1.png"
                                    alt="SubSorter showing bundled videos from the same creator"
                                    className="w-full rounded-lg"
                                />
                                <p className="text-center mt-4 text-gray-600">Bundle videos from the same creator</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <img
                                    src="/images/screenshot-2.png"
                                    alt="SubSorter settings panel showing filter options"
                                    className="w-full rounded-lg"
                                />
                                <p className="text-center mt-4 text-gray-600">Easy-to-use settings panel</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="bg-gray-100 py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Users Are Saying</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="text-yellow-400 flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "Finally, I can browse my subscriptions without being overwhelmed by shorts and multiple uploads. This extension is a game changer!"
                                </p>
                                <div className="font-semibold">- Alex T.</div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="text-yellow-400 flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "The bundling feature is brilliant. Now I can keep up with channels that post multiple videos per day without them dominating my feed."
                                </p>
                                <div className="font-semibold">- Jamie K.</div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="text-yellow-400 flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "Simple, effective, and exactly what YouTube should have built in. The settings are intuitive and it just works."
                                </p>
                                <div className="font-semibold">- Taylor M.</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Download Section */}
                <section id="download" className="py-16 md:py-24 bg-gradient-to-r from-red-700 to-red-500 text-white">
                    <div className="container mx-auto px-4 max-w-6xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get SubSorter Today</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Transform your YouTube subscription experience with just one click. Free and privacy-focused.
                        </p>
                        <a
                            href="https://chrome.google.com/webstore/category/extensions"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-red-600 font-semibold px-8 py-4 rounded-lg inline-block hover:bg-gray-100 transition text-lg"
                        >
                            Add to Chrome
                        </a>
                        <p className="mt-4 text-sm opacity-80">Available for Chrome, Brave, Edge, and other Chromium-based browsers</p>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Is SubSorter free to use?</h3>
                                <p className="text-gray-600">
                                    Yes, SubSorter is completely free. There are no premium features or subscriptions.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Does SubSorter collect any data?</h3>
                                <p className="text-gray-600">
                                    No, SubSorter runs entirely in your browser and doesn't collect or transmit any data about your viewing habits or preferences.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Which browsers are supported?</h3>
                                <p className="text-gray-600">
                                    SubSorter works with Chrome, Brave, Edge, Opera, and other Chromium-based browsers that support Chrome extensions.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Will this slow down YouTube?</h3>
                                <p className="text-gray-600">
                                    SubSorter is designed to be lightweight and efficient. It uses debouncing and performance optimizations to minimize any impact on your browsing experience.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Can I customize which content is filtered?</h3>
                                <p className="text-gray-600">
                                    Yes, you can independently toggle filters for shorts, streams, live videos, and premieres based on your preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <h2 className="text-2xl font-bold">SubSorter</h2>
                                <p className="text-gray-400">YouTube Subscription Feed Organizer</p>
                            </div>

                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/yourusername/subsorter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-400 transition"
                                    aria-label="GitHub Repository"
                                    title="Visit our GitHub Repository"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-400 transition"
                                    aria-label="Twitter Profile"
                                    title="Follow us on Twitter"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-800 text-center md:text-left text-sm text-gray-400">
                            <p>© {new Date().getFullYear()} SubSorter. All rights reserved.</p>
                            <p className="mt-2">
                                SubSorter is not affiliated with YouTube or Google. YouTube is a trademark of Google LLC.
                            </p>
                        </div>
                    </div>
                </footer>
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head = () => (
    <>
        <title>SubSorter - YouTube Subscription Feed Organizer</title>
        <meta name="description" content="Enhance your YouTube subscription feed by hiding shorts, filtering streams, and bundling multiple videos from the same creator." />
    </>
)