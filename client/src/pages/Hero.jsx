import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Book, Users, Award, Zap, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-transparent">
      <Navbar />
      
      <main className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4">
          <HeroSection />
          <FeaturesSection />
          <AboutSection />
          <TestimonialsSection />
          <CtaSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

const HeroSection = () => (
  <motion.section 
    className="py-32 text-center relative"
    initial="initial"
    animate="animate"
    variants={staggerChildren}
  >
    <motion.span 
      className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
      variants={fadeInUp}
    >
      Transforming Education
    </motion.span>
    <motion.h1 
      className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
      variants={fadeInUp}
    >
      Empowering Student Achievements Beyond Academics
    </motion.h1>
    <motion.p 
      className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed"
      variants={fadeInUp}
    >
      Unlock your potential with BeyondEDU `&apos` s comprehensive extracurricular management system.
      Track achievements, connect with peers, and discover opportunities for growth.
    </motion.p>
    <motion.div variants={fadeInUp} className="space-x-4">
      <Button 
        size="lg" 
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
      >
        Get Started <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <Button 
        size="lg" 
        variant="outline"
        className="px-8 py-6 text-lg border-2 hover:bg-gray-50"
      >
        Learn More <ArrowUpRight className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
  </motion.section>
);

const FeaturesSection = () => (
  <motion.section 
    className="py-24"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={staggerChildren}
  >
    <motion.div className="text-center mb-16" variants={fadeInUp}>
      <span className="text-blue-600 font-semibold mb-2 block">Features</span>
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Everything you need to succeed</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Comprehensive tools and features designed to enhance your educational journey
      </p>
    </motion.div>

    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={staggerChildren}
    >
      {[
        {
          icon: Book,
          title: "Achievement Tracking",
          description: "Record and showcase your accomplishments with our intuitive system",
          color: "text-blue-500",
          gradient: "from-blue-500/20 to-blue-500/5"
        },
        {
          icon: Users,
          title: "Community Engagement",
          description: "Connect with peers and mentors in a collaborative environment",
          color: "text-green-500",
          gradient: "from-green-500/20 to-green-500/5"
        },
        {
          icon: Award,
          title: "Skill Development",
          description: "Enhance your abilities through structured learning paths",
          color: "text-purple-500",
          gradient: "from-purple-500/20 to-purple-500/5"
        },
        {
          icon: Zap,
          title: "Opportunity Discovery",
          description: "Find personalized events and activities that match your interests",
          color: "text-orange-500",
          gradient: "from-orange-500/20 to-orange-500/5"
        }
      ].map((feature, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br hover:-translate-y-1">
            <CardHeader>
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

const AboutSection = () => (
  <motion.section 
    className="py-24 bg-gradient-to-b from-gray-50 to-white"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={staggerChildren}
  >
    <div className="container mx-auto px-4">
      <motion.div className="max-w-3xl mx-auto text-center" variants={fadeInUp}>
        <span className="text-blue-600 font-semibold mb-2 block">About Us</span>
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Transforming Education Through Innovation
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          BeyondEDU is a cutting-edge platform designed to empower students in managing and
          maximizing the impact of their extracurricular activities. Our system provides comprehensive
          tools for achievement tracking, community engagement, and skill development, fostering
          holistic student growth and future success.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

const TestimonialsSection = () => (
  <motion.section 
    className="py-24"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={staggerChildren}
  >
    <motion.div className="text-center mb-16" variants={fadeInUp}>
      <span className="text-blue-600 font-semibold mb-2 block">Testimonials</span>
      <h2 className="text-4xl font-bold mb-4 text-gray-900">What Students Say</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Hear from students who have transformed their educational journey with BeyondEDU
      </p>
    </motion.div>

    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerChildren}
    >
      {[
        {
          quote: "BeyondEDU has transformed how I approach my extracurricular activities. It's been invaluable for my personal growth.",
          author: "Sarah J.",
          role: "Computer Science Student"
        },
        {
          quote: "The platform made it easy to discover opportunities I never knew existed. It's opened so many doors for me!",
          author: "Michael L.",
          role: "Engineering Freshman"
        },
        {
          quote: "Tracking my achievements and skills has given me a huge advantage in internship applications. Highly recommended!",
          author: "Emily R.",
          role: "Business Senior"
        }
      ].map((testimonial, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <Card className="hover:shadow-lg transition-all duration-300 group">
            <CardContent className="pt-6">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

const CtaSection = () => (
  <motion.section 
    className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={staggerChildren}
  >
    <div className="container mx-auto px-4 text-center">
      <motion.div className="max-w-3xl mx-auto" variants={fadeInUp}>
        <h2 className="text-4xl font-bold mb-6">
          Ready to transform your educational journey?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Join thousands of students who are already achieving more with BeyondEDU
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          Get Started Now <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  </motion.section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">BeyondEDU</h3>
          <p className="text-gray-400">Empowering student achievements beyond academics</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            {['facebook', 'twitter', 'instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <span className="sr-only">{social}</span>
                <i className={`fab fa-${social}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© 2024 BeyondEDU. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Hero;