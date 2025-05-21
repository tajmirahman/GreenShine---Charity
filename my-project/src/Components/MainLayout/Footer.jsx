import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* ABOUT US */}
                <div>
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-teal-400 w-fit">ABOUT US</h2>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tincidunt risus.
                    </p>
                </div>

                {/* CONTACT US */}
                <div>
                    <h2 className="text-lg font-bold mb-2">CONTACT US</h2>
                    <p className="text-sm mb-1"><strong>Phone:</strong> 0123456789</p>
                    <p className="text-sm mb-1"><strong>Email:</strong> demo@example.com</p>
                    <p className="text-sm"><strong>Address:</strong> Your address goes here.</p>
                </div>

                {/* OUR PROJECT */}
                <div>
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-teal-400 w-fit">OUR PROJECT</h2>
                    <ul className="space-y-1 text-sm">
                        <li>› Water Survey</li>
                        <li>› Education for All</li>
                        <li>› Treatment</li>
                        <li>› Food Serving</li>
                        <li>› Cloth</li>
                        <li>› Shelter Project</li>
                    </ul>
                </div>

                {/* QUICK LINKS + NEWSLETTER */}
                <div>
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-teal-400 w-fit">QUICK LINKS</h2>
                    <ul className="space-y-1 text-sm mb-4">
                        <li>› Causes</li>
                        <li>› Projects</li>
                        <li>› Gallery</li>
                        <li>› Terms of Use</li>
                        <li>› Legal Disclaimer</li>
                        <li>› Privacy Policy</li>
                    </ul>
                    <div>
                        <h3 className="font-semibold mb-2">NEWSLETTER</h3>
                        <div className="join">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered join-item w-full"
                            />
                            <button className="btn join-item bg-teal-500 text-white hover:bg-teal-600">
                                ✉
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
                <p>
                    © 2025 <span className="font-semibold">Grant Mede</span> with <span className="text-pink-500">♥</span> by <span className="font-semibold">HasThemes</span>
                </p>
                <div className="flex gap-3 mt-2 md:mt-0 text-xl">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#"><i className="fab fa-dribbble"></i></a>
                    <a href="#"><i className="fas fa-rss"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;