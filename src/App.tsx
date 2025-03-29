import { Hero } from "./components/Hero.tsx";
import { Feature } from "./components/Feature.tsx";
import { Organize } from "./components/Organize.tsx";
import { Topbar } from "./components/Topbar.tsx";
import { FAQ } from "./components/FAQ.tsx";
import { Footer } from "./components/Footer.tsx";
import { ThemeToggle } from "./components/ThemeToggle.tsx";
import { Works } from "./components/Works.tsx";
import { Testimonial } from "./components/Testimonial.tsx";
import { Download } from "./components/Download.tsx";

function App() {
    return (
        <>
            <Topbar />
            <Hero />
            <Feature />
            <Works />
            <Organize />
            <Testimonial />
            <FAQ />
            <Download />
            <Footer />
            <ThemeToggle />
        </>
    );
}

export default App;
