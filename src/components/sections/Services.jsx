import { motion } from 'framer-motion';
import { BookOpen, Users, Lightbulb } from 'lucide-react';

const services = [
    {
        icon: <BookOpen className="w-8 h-8" />,
        title: "AI Development Courses",
        description: "Comprehensive curriculum covering Python, Machine Learning basics, and LLM application development."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "1-on-1 Mentorship",
        description: "Personalized guidance to help you navigate your AI engineering career path and overcome technical challenges."
    },
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Technical Consulting",
        description: "Expert advice on integrating AI solutions into your existing business or startup ideas."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-surface">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Helping you master AI technology through structured learning and expert guidance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-background p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
