import {Code} from "lucide-react";
import {Brain} from "lucide-react";
import {Group} from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary">{""}Me</span>
                </h2>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer & Problem solving enthusiast
                        </h3>

                        <p className="text-muted-foreground">
                            I’m a dedicated web developer with a strong passion for building responsive, user-friendly applications and solving real-world problems through clean and efficient code.
                            Whether it’s crafting seamless front-end interfaces or building robust back-end systems,
                            I love turning ideas into functional, impactful digital experiences.
                        </p>

                        <p className="text-muted-foreground">
                            With a solid foundation in web technologies and a mindset driven by curiosity and continuous learning,
                            I enjoy tackling complex challenges, optimizing performance, and writing scalable solutions.
                            Beyond development, I take pride in clean code, logical problem solving, and contributing to collaborative team environments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {""}
                                Get In Touch
                            </a>

                            <a
                            href=""
                            className="rounded-full text-primary px-6 py-2 border border-primary transition-colors duration-300 hover:bg-primary/10"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Efficient Problem Solving</h4>
                                    <p className="text-muted-foreground">
                                        I love solving complex problems with clean, optimized DSA-based solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Group className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Team Management</h4>
                                    <p className="text-muted-foreground">
                                        I lead with clarity, fostering teamwork and driving results efficiently.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}