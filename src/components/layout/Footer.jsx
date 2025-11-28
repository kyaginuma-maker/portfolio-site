import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">AI.Dev</h3>
                        <p className="text-gray-400 text-sm">
                            Empowering the next generation of AI engineers.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} AI.Dev. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
