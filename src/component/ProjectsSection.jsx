import {assets} from "../assets/assets.js";
import {ExternalLink} from "lucide-react";
import {Github} from "lucide-react";
import {ArrowRight} from "lucide-react";

const projects = [
    {
        id:1,
        title:"RetailEase",
        description:"A billing software that made retail easy with a modern user interface and intuitive features.",
        tags:["React","SpringBoot","MySQL","Docker","Tailwind CSS"],
        image:assets.RetailEase,
        demoUrl:"https://retailease-8.onrender.com",
        githubUrl:"https://github.com/ShreyanshOjha007/RetailEase",
    },

    {
        id:2,
        title:"InboxGenie",
        description:" Your smart email assistant for auto-replies, prioritization, and effortless inbox management.",
        tags:["React","Tailwind CSS","Spring AI","MySQL","Docker","Spring Boot"],
        image:assets.InboxGenie,
        demoUrl:"",
        githubUrl:"https://github.com/ShreyanshOjha007/InboxGenie",
    },

    {
        id:3,
        title:"Vidyut",
        description:"",
        tags:["React","Tailwind CSS","Next JS","MongoDB","Express JS"],
        image:assets.Vidyut,
        demoUrl:"",
        githubUrl:"https://github.com/ShreyanshOjha007/vidyut",
    },

    {
        id:4,
        title:"Personal Portfolio",
        description:"Created a responsive and creative design to showcase my work and skills.",
        tags:["React","Tailwind CSS","JavaScript"],
        image:assets.Portfolio,
        demoUrl:"",
        githubUrl:"https://github.com/ShreyanshOjha007/Portfolio",
    }
]
export const ProjectsSection = () => {
    return(
        <section id="projects" className="">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="relative">
                                <img src={project.image}
                                     alt={project.title}
                                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/ShreyanshOjha007"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    )
}