import {ThemeToggle} from "../component/ThemeToggle.jsx";
import {StarBackground} from "../component/StarBackground.jsx";
import {NavBar} from "../component/NavBar.jsx";
import {HomeSection} from "../component/HomeSection.jsx";
import {AboutSection} from "../component/AboutSection.jsx";
import {SkillsSection} from "../component/SkillsSection.jsx";
import {ProjectsSection} from "../component/ProjectsSection.jsx";
import {ContactSection} from "../component/ContactSection.jsx";
import {FooterSection} from "../component/FooterSection.jsx";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflowx-hidden ">
            {/* Theme toggle */}
            <ThemeToggle />
            {/* Background effect*/}
            <StarBackground />
            { /* Navbar */}
            <NavBar />
            {/* Main Content */}
            <main>
                <HomeSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            {/* Footer */}
            <FooterSection />
        </div>
    )
}