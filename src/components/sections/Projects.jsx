import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "AI Chat Assistant",
        description: "A context-aware chatbot built with OpenAI API and Next.js.",
        tags: ["Next.js", "OpenAI", "Tailwind"],
        github: "#",
        demo: "#"
    },
    {
        title: "Image Generator",
        description: "Stable Diffusion integration for generating custom artwork.",
        tags: ["Python", "FastAPI", "React"],
        github: "#",
        demo: "#"
    },
    {
        title: "Data Analysis Dashboard",
        description: "Real-time visualization of large datasets using AI-driven insights.",
        tags: ["TypeScript", "D3.js", "Flask"],
        github: "#",
        demo: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Showcasing practical applications of AI and software engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1"
                        >
                            <div className="h-48 bg-gray-800 flex items-center justify-center text-gray-600">
                                {/* Placeholder for project image */}
                                <span>Project Image</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                    <a href={project.demo} className="flex items-center gap-2 text-sm text-primary hover:text-blue-400 transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
