import { motion } from 'framer-motion';

const skills = [
    { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
    { category: "AI / ML", items: ["PyTorch", "TensorFlow", "OpenAI API", "Hugging Face", "LangChain"] },
    { category: "Web Dev", items: ["React", "Next.js", "Tailwind CSS", "Node.js", "FastAPI"] },
    { category: "Tools & Ops", items: ["Docker", "Git", "AWS", "Linux", "VS Code"] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern AI-powered applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors group"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-white transition-colors">{skillGroup.category}</h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:bg-primary transition-colors" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
