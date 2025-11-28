import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-surface">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400 mb-12">
                        Interested in learning AI or building a project together?
                        Send me a message and let's discuss.
                    </p>

                    <form className="space-y-6 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
