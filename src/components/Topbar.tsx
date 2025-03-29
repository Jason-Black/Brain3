import { useEffect, useState } from "react";

export const Topbar = () => {
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        const onWindowScroll = () => {
            setAtTop(window.scrollY < 30);
        };
        window.addEventListener("scroll", onWindowScroll);
        onWindowScroll();
        return () => window.removeEventListener("scroll", onWindowScroll);
    }, []);

    return (
        <div
            id="layout-topbar"
            data-at-top={atTop}
            className="data-[at-top=false]:bg-base-100/95 border-base-300 fixed inset-x-0 top-0 z-50 container bg-transparent backdrop-blur-sm transition-all data-[at-top=false]:max-sm:border-b sm:rounded-full data-[at-top=false]:sm:top-4 data-[at-top=false]:sm:px-8 data-[at-top=false]:sm:shadow">
            <div>
                <nav className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                        <label
                            htmlFor="menu-drawer"
                            id="menu-drawer-trigger"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost btn-sm lg:hidden">
                            <span className="iconify lucide--menu size-5"></span>
                        </label>

                        <a href="#" className="text-brand-gradient text-2xl font-semibold tracking-tighter">
                            BrainBlooms
                        </a>
                    </div>

                    <div className="max-lg:hidden">
                        <ul className="menu menu-horizontal gap-2 px-1">
                            <li className="font-medium">
                                <a href="#home">Home</a>
                            </li>
                            <li className="font-medium">
                                <a href="#features">Features</a>
                            </li>
                            <li className="font-medium">
                                <a href="#organize">Organize</a>
                            </li>
                            <li className="font-medium">
                                <a href="#testimonial">Testimonial</a>
                            </li>
                            <li className="font-medium">
                                <a href="#faq">FAQ</a>
                            </li>
                            <li className="font-medium">
                                <a
                                    href="https://daisyui.com/store/checkout?product=71f032e3-1a23-4b79-b74e-130ada4899f2&aff=K0XmL"
                                    target="_blank"
                                    className="btn btn-primary btn-sm">
                                    Buy Now
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="drawer">
                    <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-side">
                        <label htmlFor="menu-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="bg-base-100 min-h-full w-60 p-5">
                            <a href="#" className="text-brand-gradient text-2xl font-bold tracking-tighter">
                                BrainBloom
                            </a>
                            <ul className="menu w-full gap-2 p-0 pt-4">
                                <li className="font-medium">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="font-medium">
                                    <a href="#features">Features</a>
                                </li>
                                <li className="font-medium">
                                    <a href="#organize">Organize</a>
                                </li>
                                <li className="font-medium">
                                    <a href="#testimonial">Testimonial</a>
                                </li>
                                <li className="font-medium">
                                    <a href="#faq">FAQ</a>
                                </li>
                                <li className="font-medium">
                                    <a
                                        href="https://daisyui.com/store/checkout?product=71f032e3-1a23-4b79-b74e-130ada4899f2&aff=K0XmL"
                                        target="_blank"
                                        className="btn btn-primary btn-sm">
                                        Buy Now
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
