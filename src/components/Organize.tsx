export const Organize = () => {
    return (
        <section className="py-8 lg:py-16" id="organize">
            <div className="container">
                <div className="grid gap-8 lg:grid-cols-2 xl:gap-16">
                    <div className="order-2 lg:order-1">
                        <p className="text-2xl font-semibold lg:text-3xl">Organize your tasks?</p>
                        <p className="text-base-content/80 mt-4">
                            This organized feature list provides a clear overview of the AI landing page's capabilities,
                            making it easier for users to understand the key functionalities of the app.
                        </p>
                        <div className="mt-8 space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="bg-primary/10 text-primary rounded-box inline-flex items-center p-2">
                                    <span className="iconify lucide--trending-up size-6"></span>
                                </div>
                                <div>
                                    <p className="text-lg font-medium">Real-time Data Processing</p>
                                    <p className="text-base-content/80 mt-1">
                                        Swift processing of data for instant insights and responses. Ensure up-to-date
                                        information and analysis in real-time.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="bg-primary/10 text-primary rounded-box inline-flex items-center p-2">
                                    <span className="iconify lucide--smartphone size-6"></span>
                                </div>
                                <div>
                                    <p className="text-lg font-medium">Cross-platform Compatibility</p>
                                    <p className="text-base-content/80 mt-1">
                                        Access the app seamlessly across various devices and platforms. Consistent
                                        performance on mobile, desktop, and other platforms.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="bg-primary/10 text-primary rounded-box inline-flex items-center p-2">
                                    <span className="iconify lucide--list-restart size-6"></span>
                                </div>
                                <div>
                                    <p className="text-lg font-medium">Continuous Updates and Support</p>
                                    <p className="text-base-content/80 mt-1">
                                        Regular updates to introduce new features and improvements. Responsive customer
                                        support for any queries or issues.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2">
                        <div className="flex justify-center">
                            <img alt="Mobile 3" className="h-[500px]" src="/images/landing/mobile-3.png" />
                        </div>
                        <div className="bg-base-100 rounded-box absolute end-0 top-[30%] flex items-center gap-3 px-3 py-2 shadow transition-all hover:shadow-lg max-sm:hidden">
                            <div className="bg-primary text-primary-content flex items-center rounded-full p-2">
                                <span className="iconify lucide--blocks size-6"></span>
                            </div>
                            <div>
                                <p className="text-xl font-semibold">50+</p>
                                <p>Third Party Integrations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
