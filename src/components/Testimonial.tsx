import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Testimonial = () => {
    return (
        <section id="testimonial" className="relative container py-8 lg:py-16">
            <div className="absolute inset-0 bg-[url(/images/landing/world-map.png)] bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-50"></div>
            <div className="relative z-10">
                <h2 className="text-center text-3xl font-semibold lg:text-4xl">What People Say</h2>
                <Swiper
                    className="mt-8 lg:mt-16"
                    spaceBetween={50}
                    loop
                    autoplay={{
                        delay: 5000,
                    }}
                    navigation={{
                        prevEl: ".testimonials-button-prev",
                        nextEl: ".testimonials-button-next",
                    }}
                    modules={[Navigation, Autoplay, Thumbs]}
                    slidesPerView={1}>
                    <SwiperSlide>
                        <div className="text-center">
                            <div className="avatar">
                                <div className="mask mask-squircle bg-base-200 size-20">
                                    <img src="/images/avatar/1.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-center gap-1">
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                            </div>
                            <p className="mt-8 inline-block max-w-[600px] text-center">
                                daisyAI is a game-changer! James, the virtual assistant, has transformed my productivity
                                with voice commands and personalized insights. It's like having my own custom AI
                                assistant!
                            </p>
                            <p className="mt-8 text-lg font-medium">Mark Thompson</p>
                            <p className="text-base-content/80 text-sm">(Marketing Manager at Layerway)</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center">
                            <div className="avatar">
                                <div className="mask mask-squircle bg-base-200 size-20">
                                    <img src="/images/avatar/2.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-center gap-1">
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                            </div>
                            <p className="mt-8 inline-block max-w-[600px] text-center">
                                As a UX designer, I value the app's user-friendly interface. It integrates seamlessly
                                with our design processes, and its natural language processing ensures smooth and
                                intuitive interactions.
                            </p>
                            <p className="mt-8 text-lg font-medium">Sarah Johnson</p>
                            <p className="text-base-content/80 text-sm">(UX Designer at MyComp)</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center">
                            <div className="avatar">
                                <div className="mask mask-squircle bg-base-200 size-20">
                                    <img src="/images/avatar/3.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-center gap-1">
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                                <span className="iconify lucide--star size-5 text-orange-400"></span>
                            </div>
                            <p className="mt-8 inline-block max-w-[600px] text-center">
                                Integrating daisyAI into our mobile app was seamless. Its cross-platform support and
                                powerful machine learning tools make it perfect for developers. Highly recommended!
                            </p>
                            <p className="mt-8 text-lg font-medium">Alex Chen</p>
                            <p className="text-base-content/80 text-sm">(Mobile Developer at Android)</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="relative mt-8 flex items-center justify-center gap-4">
                    <button className="testimonials-button-prev btn btn-circle">
                        <span className="iconify lucide--chevron-left size-5"></span>
                    </button>
                    <button className="testimonials-button-next btn btn-circle">
                        <span className="iconify lucide--chevron-right size-5"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};
