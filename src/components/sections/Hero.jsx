import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm text-gray-300">Empowering the Future with AI</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Master the Art of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                            AI Engineering
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Learn to build intelligent applications, master LLMs, and shape the future of technology.
                        Join the next generation of developers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#services"
                            className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 group"
                        >
                            Start Learning
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Code className="w-5 h-5" />
                            View Projects
                        </a>
                    </div>
                </motion.div>

                {/* Floating Code Snippet Animation could go here */}
            </div>
        </section>
    );
};

export default Hero;
