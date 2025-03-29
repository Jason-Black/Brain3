export const Download = () => {
    return (
        <section className="py-8 lg:py-16" id="download">
            <div className="container text-center">
                <p className="text-3xl font-semibold lg:text-4xl">Download the app today!</p>
                <p className="text-base-content/80 mt-8 inline-block max-w-[600px]">
                    Start using daisyAI, a complete solution designed to help you build awareness, increase traffic, and
                    strengthen connections.
                </p>
                <div className="mt-8 flex justify-center gap-4 sm:gap-6">
                    <a href="#">
                        <img src="/images/logo/appstore.png" alt="Appstore" />
                    </a>
                    <a href="#">
                        <img src="/images/logo/playstore.png" alt="Playstore" />
                    </a>
                </div>
            </div>
        </section>
    );
};
