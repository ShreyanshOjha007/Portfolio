import {assets} from "../assets/assets.js";
import {ArrowDown} from "lucide-react";
export const HomeSection = () => {
    return (
        <section
            id="hero"
            className="relative  min-h-screen flex items-center justify-center px-4"
        >
            <div className="max-w-4xl mx-auto text-center z-10 flex justify-between items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        {" "}
                            Shreyansh
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "}Ojha</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        A passionate and goal-driven full-stack developer.
                        I specialize in building clean, efficient web applications using web technologies and Spring Boot.
                        Always eager to learn, I thrive on solving real-world problems and continuously improving my skills to deliver better and smarter solutions.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
                <div className="flex items-center ml-4">
                    <img src={assets.shreyansh} alt="hero" className=" rounded-full opacity-0 animate-fade-in-delay-4" />
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center mr-4">
                <span className="text-md text-muted mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>

        </section>
    )
}