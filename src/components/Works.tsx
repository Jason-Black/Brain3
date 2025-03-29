export const Works = () => {
    return (
        <section className="py-8 lg:py-16" id="how-it-works">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-16">
                    <div className="relative">
                        <div className="flex justify-center">
                            <img alt="Mobile 2" className="h-[500px]" src="/images/landing/mobile-2.png" />
                        </div>
                        <div className="bg-base-100 rounded-box absolute top-[30%] left-8 flex items-center gap-3 px-3 py-2 shadow transition-all hover:shadow-lg max-sm:hidden">
                            <div className="bg-primary text-primary-content flex items-center justify-center rounded-full p-2">
                                <span className="iconify lucide--component size-6"></span>
                            </div>
                            <div>
                                <p className="text-xl/none font-semibold">10+</p>
                                <p className="">Generative Modals</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold lg:text-3xl">How does it work?</p>
                        <p className="text-base-content/80 mt-4">
                            The AI app sets goals, processes data, trains models, predicts outcomes, incorporates user
                            feedback for enhancement, and interacts with external systems for full functionality
                        </p>
                        <div className="mt-8 grid gap-8 sm:grid-cols-2">
                            <div className="flex items-center gap-5">
                                <div className="bg-primary/10 text-primary rounded-box inline-flex items-center p-2">
                                    <span className="iconify lucide--arrow-down-to-line size-5"></span>
                                </div>
                                Download the latest app
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="bg-primary/10 text-primary rounded-box inline-flex items-center p-2">
                                    <span className="iconify lucide--scan-face size-5"></span>
                                </div>
                                Login with your account
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="bg-primary/10 text-primary rounded-box inline-flex items-center p-2">
                                    <span className="iconify lucide--refresh-ccw-dot size-5"></span>
                                </div>
                                Syncing all your data
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="bg-primary/10 text-primary rounded-box inline-flex items-center p-2">
                                    <span className="iconify lucide--package-plus size-5"></span>
                                </div>
                                Ready to generate AI content
                            </div>
                        </div>
                        <button className="btn btn-ghost btn-soft btn-sm mt-8">
                            Read More
                            <span className="iconify lucide--arrow-right size-4"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
