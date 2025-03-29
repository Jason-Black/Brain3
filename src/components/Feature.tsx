export const Feature = () => {
    return (
        <section className="container py-8 lg:py-16" id="features">
            <div className="grid gap-8 lg:grid-cols-5 xl:gap-16">
                <div className="lg:col-span-2">
                    <p className="text-2xl font-semibold lg:text-3xl">Why choose the daisyAI?</p>
                    <p className="text-base-content/80 mt-4">
                        Your AI companion delivers natural language understanding, personalized experiences, and
                        predictive analytics, seamlessly integrating voice commands, image recognition, and
                        context-aware interactions for a smarter, more efficient digital life.
                    </p>
                    <div className="mt-8 space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="iconify lucide--check text-primary size-4.5"></span>
                            <p>Efficient Task Automation & Syncing</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="iconify lucide--check text-primary size-4.5"></span>
                            <p>Security and vulnerability Detection</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="iconify lucide--check text-primary size-4.5"></span>
                            <p>Real-time Assistance & Learning</p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
                    <div className="card card-border">
                        <div className="card-body">
                            <span className="iconify lucide--brain-circuit text-primary size-8"></span>
                            <p className="mt-2 text-xl font-medium">Language Understanding</p>
                            <p className="text-base-content/80 mt-2 line-clamp-3">
                                SmartAssist harnesses the power of advanced Natural Language Processing (NLP) to
                                understand and interpret human language seamlessly.
                            </p>
                        </div>
                    </div>
                    <div className="card card-border">
                        <div className="card-body">
                            <span className="iconify lucide--bot text-primary size-8"></span>
                            <p className="mt-2 text-xl font-medium">Intelligent Virtual Assistant</p>
                            <p className="text-base-content/80 mt-2 line-clamp-3">
                                Meet IntelliConnect, your AI-driven personal assistant. It organizes your schedule,
                                answers questions, and adapts to your preferences.
                            </p>
                        </div>
                    </div>
                    <div className="card card-border">
                        <div className="card-body">
                            <span className="iconify lucide--user-round-cog text-primary size-8"></span>
                            <p className="mt-2 text-xl font-medium">Personalized User Experience</p>
                            <p className="text-base-content/80 mt-2 line-clamp-3">
                                Discover IntelliConnect: personalized tech that learns from you, tailoring content and
                                streamlining tasks for a unique user experience.
                            </p>
                        </div>
                    </div>
                    <div className="card card-border">
                        <div className="card-body">
                            <span className="iconify lucide--audio-lines text-primary size-8"></span>
                            <p className="mt-2 text-xl font-medium">Voice Command Capabilities</p>
                            <p className="text-base-content/80 mt-2 line-clamp-3">
                                Effortlessly command your digital world with IntelliConnects speech recognition. Speak
                                for messaging, calls, and tasks – your voice is the key.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
