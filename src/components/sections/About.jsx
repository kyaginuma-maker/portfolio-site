
import { motion } from 'framer-motion';
import { User, GraduationCap, Brain } from 'lucide-react';
import profileImage from '../../assets/profile.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-surface">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-6 opacity-20 blur-lg"></div>
                            <div className="relative h-full bg-gray-800 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden group">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                {/* Replace with actual image later */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium">AI Engineer & Educator</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Bridging the Gap Between <br />
                            <span className="text-primary">AI Theory</span> and <span className="text-secondary">Real-world Application</span>
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            As an AI Engineer and Educator, I specialize in simplifying complex concepts.
                            My mission is to empower developers to harness the power of Artificial Intelligence
                            through practical, hands-on learning and robust software engineering practices.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Brain className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">AI Engineering</h3>
                                    <p className="text-sm text-gray-400">Building scalable AI solutions using state-of-the-art models.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Mentorship</h3>
                                    <p className="text-sm text-gray-400">Guiding students from basics to advanced AI implementation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
