export const Footer = () => {
    return (
        <>
            <footer className="bg-base-200/30 border-base-200 m-5 rounded-xl border">
                <div className="p-6 sm:container sm:py-12">
                    <p className="text-2xl font-medium">daisyAI</p>
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
                        <div className="inline-flex gap-3">
                            <div className="border-base-300 hover:bg-primary hover:text-primary-content hover:border-primary flex cursor-pointer items-center rounded border p-2 transition-all">
                                <span className="iconify lucide--facebook size-5"></span>
                            </div>
                            <div className="border-base-300 hover:bg-primary hover:text-primary-content hover:border-primary flex cursor-pointer items-center rounded border p-2 transition-all">
                                <span className="iconify lucide--instagram size-5"></span>
                            </div>
                            <div className="border-base-300 hover:bg-primary hover:text-primary-content hover:border-primary flex cursor-pointer items-center rounded border p-2 transition-all">
                                <span className="iconify lucide--dribbble size-5"></span>
                            </div>
                            <div className="border-base-300 hover:bg-primary hover:text-primary-content hover:border-primary flex cursor-pointer items-center rounded border p-2 transition-all">
                                <span className="iconify lucide--linkedin size-5"></span>
                            </div>
                            <div className="border-base-300 hover:bg-primary hover:text-primary-content hover:border-primary flex cursor-pointer items-center rounded border p-2 transition-all">
                                <span className="iconify lucide--mail size-5"></span>
                            </div>
                        </div>
                        <div className="join inline-flex">
                            <input
                                aria-label="Send us a message"
                                id="email"
                                className="input join-item input-bordered w-full lg:max-w-xs"
                                placeholder="email@ai.com"
                                type="email"
                                required
                            />
                            <button className="btn join-item btn-neutral">Download</button>
                        </div>
                    </div>
                    <div className="mt-8 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        <div>
                            <h2 className="text-lg font-medium">Features</h2>
                            <div className="**:hover:text-primary mt-5 space-y-2 **:block **:text-base **:transition-all **:duration-500">
                                <a href="#">Overview</a>
                                <a href="#">Automation</a>
                                <a href="#">Intelligent Personalization</a>
                                <a href="#">Predictive Analytics</a>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">Solutions</h2>
                            <div className="**:hover:text-primary mt-5 space-y-2 **:block **:text-base **:transition-all **:duration-500">
                                <a href="#">Use Cases</a>
                                <a href="#">Case Studies</a>
                                <a href="#">Integrations</a>
                                <a href="#">Forum</a>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">Resources</h2>
                            <div className="**:hover:text-primary mt-5 space-y-2 **:block **:text-base **:transition-all **:duration-500">
                                <a href="#">Blog</a>
                                <a href="#">White papers</a>
                                <a href="#">Webinars</a>
                                <a href="#">Newsroom</a>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">Company</h2>
                            <div className="**:hover:text-primary mt-5 space-y-2 **:block **:text-base **:transition-all **:duration-500">
                                <a href="#">Landing</a>
                                <a href="#">Our Team</a>
                                <a href="#">Blogs</a>
                                <a href="#">FAQs</a>
                                <a href="#">Contact</a>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">Quick Links</h2>
                            <div className="**:hover:text-primary mt-5 space-y-2 **:block **:text-base **:transition-all **:duration-500">
                                <a href="#">Features</a>
                                <a href="#">Pricing</a>
                                <a href="#">Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            
        </>
    );
};
