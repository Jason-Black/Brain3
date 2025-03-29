export const FAQ = () => {
    return (
        <section className="py-8 lg:py-16" id="faq">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold lg:text-4xl">App Inquiries?</h2>
                    <p className="text-base-content/80 mt-2">Your Guide to AI Mobile App Questions</p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="space-y-6">
                        <div className="collapse-plus border-base-300 collapse border">
                            <input defaultChecked name="faq" type="radio" aria-label="open/close" />
                            <div className="collapse-title text-lg font-medium">What is an AI mobile app?</div>
                            <div className="collapse-content">
                                <p className="text-base">
                                    An application that uses AI technologies to enhance user experiences on mobile
                                    devices.
                                </p>
                            </div>
                        </div>
                        <div className="collapse-plus border-base-300 collapse border">
                            <input name="faq" type="radio" aria-label="open/close" />
                            <div className="collapse-title text-lg font-medium">How does AI work in mobile apps?</div>
                            <div className="collapse-content">
                                AI processes data, trains models, and makes predictions for personalized user
                                interactions.
                            </div>
                        </div>
                        <div className="collapse-plus border-base-300 collapse border">
                            <input name="faq" type="radio" aria-label="open/close" />
                            <div className="collapse-title text-lg font-medium">
                                What tasks can AI mobile apps perform?
                            </div>
                            <div className="collapse-content">
                                They can automate tasks, offer personalized recommendations, understand natural
                                language, and enhance security.
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="collapse-plus border-base-300 collapse border">
                            <input name="faq" type="radio" aria-label="open/close" />
                            <div className="collapse-title text-lg font-medium">
                                Is my data secure with AI mobile apps?
                            </div>
                            <div className="collapse-content">
                                Yes, many AI apps prioritize data security through encryption and other protective
                                measures.
                            </div>
                        </div>
                        <div className="collapse-plus border-base-300 collapse border">
                            <input name="faq" type="radio" aria-label="open/close" />
                            <div className="collapse-title text-lg font-medium">
                                Can AI mobile apps learn from user interactions?
                            </div>
                            <div className="collapse-content">
                                Yes, AI mobile apps often have the capability to learn and adapt based on user feedback
                                and usage patterns, providing a more tailored experience over time.
                            </div>
                        </div>
                        <div className="collapse-plus border-base-300 collapse border">
                            <input name="faq" type="radio" aria-label="open/close" />
                            <div className="collapse-title text-lg font-medium">
                                Do AI mobile apps require an internet?
                            </div>
                            <div className="collapse-content">
                                It depends on the app. Some AI functionalities may require internet access for data
                                processing or cloud-based services, while others can operate offline with pre-trained
                                models.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
