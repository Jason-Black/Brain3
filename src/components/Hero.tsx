export const Hero = () => {
    return (
        <section className="relative py-12 lg:py-24" id="home">
            <div className="absolute inset-0 w-full bg-[url(/images/landing/bg-gradient.png)] bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-15"></div>
            <div className="relative z-10 container py-8 lg:py-16">
                <div className="grid items-center gap-0 lg:grid-cols-2 xl:gap-36">
                    <div className="order-2 lg:order-1">
                        <h1 className="text-center text-3xl/tight leading-10 font-semibold tracking-tight sm:text-start lg:text-4xl/tight">
                            <span className="text-brand-gradient">BrainBlooms</span>- Empowering parents of special needs children to track progress, gain insights, and find hope
                        </h1>
                        <h5 className="text-base-content/80 mt-8 text-center sm:text-start lg:text-lg">
                            Evidence-based insights for parents of special needs children, personalized therapeutic, peace of mind that your child is on the right path
                        </h5>
                        <div className="mt-8 flex gap-4 max-sm:justify-center sm:mt-16 sm:gap-6">
                            <a href="#">
                                <img src="/images/logo/appstore.png" alt="Appstore" />
                            </a>
                            <a href="#">
                                <img src="/images/logo/playstore.png" alt="Play store" />
                            </a>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="flex justify-center">
                            <img
                                alt="Mobile-1"
                                className="animate-bounce-slow h-[550px]"
                                src="/images/landing/mobile-1_v2.png"
                            />
                        </div>
                       
                        <div className="bg-base-100 rounded-box absolute end-0 bottom-[20%] w-64 p-3 shadow transition-all hover:shadow-lg max-sm:hidden">
                            <div className="flex items-center gap-3">
                                <div className="mask mask-squircle bg-base-content/10 w-8">
                                    <img src="/images/avatar/1.png" alt="Avatar" />
                                </div>
                                <div className="flex items-center justify-center gap-0.5">
                                    <span className="iconify lucide--star size-4.5 text-orange-400"></span>
                                    <span className="iconify lucide--star size-4.5 text-orange-400"></span>
                                    <span className="iconify lucide--star size-4.5 text-orange-400"></span>
                                    <span className="iconify lucide--star size-4.5 text-orange-400"></span>
                                    <span className="iconify lucide--star size-4.5 text-orange-400"></span>
                                </div>
                            </div>
                            <p className="mt-2 line-clamp-2 text-sm">
                                daisyAI is a game-changer! The virtual assistant boosted my productivity.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-8 text-center md:grid-cols-4 lg:mt-16">
                    <div>
                        <div className="bg-primary/10 hover:bg-primary/15 text-primary rounded-box inline-flex items-center p-3 transition-all">
                            <span className="iconify lucide--arrow-down-to-line size-8"></span>
                        </div>
                        <p className="mt-5 text-2xl font-semibold lg:text-4xl">14M+</p>
                        <p className="text-base-content/80 mt-1">Downloads</p>
                    </div>
                    <div>
                        <div className="bg-primary/10 hover:bg-primary/15 rounded-box text-primary inline-flex items-center p-3 transition-all">
                            <span className="iconify lucide--trending-up size-8"></span>
                        </div>
                        <p className="mt-5 text-2xl font-semibold lg:text-4xl">128.5%</p>
                        <p className="text-base-content/80 mt-1">YoY Growth</p>
                    </div>
                    <div>
                        <div className="bg-primary/10 hover:bg-primary/15 rounded-box text-primary inline-flex items-center p-3 transition-all">
                            <span className="iconify lucide--users size-8"></span>
                        </div>

                        <p className="mt-5 text-2xl font-semibold lg:text-4xl">2.8M+</p>
                        <p className="text-base-content/80 mt-1">Active User Base</p>
                    </div>
                    <div>
                        <div className="bg-primary/10 hover:bg-primary/15 rounded-box text-primary inline-flex items-center p-3 transition-all">
                            <span className="iconify lucide--sparkles size-8"></span>
                        </div>
                        <p className="mt-5 text-2xl font-semibold lg:text-4xl">2,800+</p>
                        <p className="text-base-content/80 mt-1">5-Star Reviews</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
