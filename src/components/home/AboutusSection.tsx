import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Shield, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const features = [
        {
            icon: <Target className="h-8 w-8 text-orange-600" />,
            title: "Student-First Approach",
            description: "Empowering students to take control of their educational journey with innovative tools and resources."
        },
        {
            icon: <Shield className="h-8 w-8 text-orange-600" />,
            title: "Safe Learning Environment",
            description: "Creating a secure platform where students can focus on growth without any barriers or distractions."
        },
        {
            icon: <Users className="h-8 w-8 text-orange-600" />,
            title: "Collaborative Platform",
            description: "Bridging the gap between NGOs, universities, and students to foster meaningful educational partnerships."
        },
        {
            icon: <BookOpen className="h-8 w-8 text-orange-600" />,
            title: "Quality Education",
            description: "Ensuring every student has access to high-quality educational resources and opportunities."
        }
    ];

    return (
        <div className="relative bg-gradient-to-b from-white to-orange-50 py-24">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full opacity-20" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full opacity-20" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-base font-semibold text-orange-600 tracking-wide uppercase">
                        Our Mission
                    </h2>
                    <h3 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                        Transforming Education in India
                    </h3>
                    <p className="mt-4 text-xl text-gray-600">
                        We're building a future where every Indian student can pursue their dreams 
                        without barriers, supported by a network of dedicated institutions and organizations.
                    </p>
                </div>

                {/* Features Grid */}
                <motion.div 
                    className="grid md:grid-cols-2 gap-8 mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow 
                                                border border-orange-100 hover:border-orange-200"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full opacity-50" />
                            <div className="relative">
                                <div className="mb-4 inline-block p-3 bg-orange-50 rounded-xl">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    className="text-center bg-gradient-to-r from-orange-500 to-amber-500 p-12 rounded-3xl shadow-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Want to Know More About Our Journey?
                    </h3>
                    <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                        Discover how we're working to revolutionize the Indian education system 
                        and create opportunities for students across the country.
                    </p>
                    <Button 
                        size="lg" 
                        className="bg-white text-orange-600 hover:bg-orange-50"
                        onClick={() => window.location.href = '/about'}
                    >
                        Learn Our Story
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutSection;