import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Calendar, Facebook, Instagram, Youtube, Linkedin, GraduationCap, Users, BookOpen, Award, CheckCircle2, ArrowRight, Menu, X, Globe, Share2, Image as ImageIcon, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO, BRANCHES, COURSES } from './constants';
import { cn } from './lib/utils';

// --- Components ---

const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
        <div className="flex gap-6">
          <a href={`tel:${BRANCHES[0].phone}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone className="w-3 h-3 text-secondary" /> {BRANCHES[0].phone} (GANGAPUR)
          </a>
          <a href={`tel:${BRANCHES[1].phone}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone className="w-3 h-3 text-secondary" /> {BRANCHES[1].phone} (INDIRA NAGAR)
          </a>
          <span className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-secondary" /> {BUSINESS_INFO.workingHours}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-blue-200">Follow us:</span>
          <div className="flex gap-3">
            <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
            <a href={BUSINESS_INFO.social.youtube} target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
            <a href={BUSINESS_INFO.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Branches', path: '/branches' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary">
                SUYASH <span className="text-secondary">EDU HUB</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary">
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center btn btn-primary mt-4"
          >
            Enroll Now
          </Link>
        </motion.div>
      )}
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-secondary" />
              <span className="text-xl font-bold text-white">SUYASH EDU HUB</span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering students from 1st to 10th standard across SSC, CBSE, and ICSE boards with quality education and personalized attention.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Facebook, href: BUSINESS_INFO.social.facebook, label: "Facebook" },
                { icon: Instagram, href: BUSINESS_INFO.social.instagram, label: "Instagram" },
                { icon: Youtube, href: BUSINESS_INFO.social.youtube, label: "YouTube" },
                { icon: Linkedin, href: BUSINESS_INFO.social.linkedin, label: "LinkedIn" },
                { icon: Share2, href: BUSINESS_INFO.social.pinterest, label: "Pinterest" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-secondary">Home</Link></li>
              <li><Link to="/courses" className="hover:text-secondary">Our Courses</Link></li>
              <li><Link to="/branches" className="hover:text-secondary">Our Branches</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              {BRANCHES.map(branch => (
                <li key={branch.name} className="flex gap-3">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase font-bold">{branch.name.replace(' Branch', '')}</span>
                    <a href={`tel:${branch.phone}`} className="hover:text-secondary transition-colors">{branch.phone}</a>
                  </div>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-secondary transition-colors">{BUSINESS_INFO.email}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </li>
              <li className="flex gap-3">
                <Calendar className="w-5 h-5 text-secondary shrink-0" />
                <span>{BUSINESS_INFO.workingDays}</span>
              </li>
            </ul>
          </div>

          {/* Legal & Branches */}
          <div>
            <h3 className="text-white font-bold mb-6">Business Details</h3>
            <ul className="space-y-3 text-sm">
              <li><span className="text-slate-500">GST:</span> {BUSINESS_INFO.gstNo}</li>
              <li><span className="text-slate-500">Udyam:</span> {BUSINESS_INFO.udhyamAdhar}</li>
              <li className="pt-4 font-semibold text-white">Branches:</li>
              {BRANCHES.map(b => (
                <li key={b.name} className="space-y-2">
                  <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-xs">{b.address}</span>
                  </div>
                  <a 
                    href={b.reviewsUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-secondary hover:underline uppercase tracking-wider"
                  >
                    <Award className="w-3 h-3" /> Write a Review
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Suyash Edu Hub. All rights reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  const [showOptions, setShowOptions] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Main WhatsApp Button (Now on top) */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-white text-slate-900 text-xs font-bold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Instant WhatsApp Chat
        </span>
      </a>

      {/* Branch Options / Call Button */}
      <div className="flex flex-col gap-4 items-end">
        {showOptions && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3 mb-2"
          >
            {BRANCHES.map(branch => (
              <div key={branch.name} className="flex items-center gap-3">
                <span className="bg-white px-3 py-1 rounded-lg shadow-md text-xs font-bold text-slate-700 whitespace-nowrap">
                  {branch.name.split(' ')[0]} WhatsApp
                </span>
                <a
                  href={`https://wa.me/${branch.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                </a>
              </div>
            ))}
            {BRANCHES.map(branch => (
              <div key={branch.name + 'call'} className="flex items-center gap-3">
                <span className="bg-white px-3 py-1 rounded-lg shadow-md text-xs font-bold text-slate-700 whitespace-nowrap">
                  {branch.name.split(' ')[0]} Call
                </span>
                <a
                  href={`tel:${branch.phone}`}
                  className="bg-primary text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 fill-current" />
                </a>
              </div>
            ))}
          </motion.div>
        )}
        <button
          onClick={() => setShowOptions(!showOptions)}
          className={cn(
            "text-white p-4 rounded-full shadow-2xl transition-all flex items-center justify-center",
            showOptions ? "bg-slate-800 rotate-45" : "bg-primary hover:scale-110"
          )}
          aria-label="Contact Options"
        >
          {showOptions ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};

// --- Pages ---

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Shape Your Future with <span className="text-secondary">Suyash Edu Hub</span>
              </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg">
                Elevate your child's academic journey at Suyash Edu Hub, the premier coaching destination in Nashik. We specialize in comprehensive tutoring for 1st to 10th Standard students across SSC, ICSE, CBSE, and IGCSE boards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-secondary text-lg px-8">
                  Book a Free Demo
                </Link>
                <Link to="/courses" className="btn bg-white/10 text-white hover:bg-white/20 border border-white/30 text-lg px-8">
                  Explore Courses
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                  alt="Students studying" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">100%</p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Result Record</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Students Taught', value: '5000+', icon: Users },
              { label: 'Expert Teachers', value: '25+', icon: GraduationCap },
              { label: 'Years Experience', value: '12+', icon: BookOpen },
              { label: 'Success Rate', value: '100%', icon: Award },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Where Excellence Meets Education</h2>
            <p className="text-slate-600 leading-relaxed">
              Whether your child is in English or Semi-English medium, our expert faculty provides personalized attention to ensure conceptual clarity and exam success. We offer a supportive learning environment, regular assessments, and dedicated doubt-solving sessions. Join the top-rated academy in Nashik for holistic development and proven results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Personalized Attention', desc: 'Small batch sizes to ensure every student gets the guidance they need.', icon: Users },
              { title: 'Expert Faculty', desc: 'Highly qualified teachers with years of experience in board exam preparation.', icon: GraduationCap },
              { title: 'Regular Testing', desc: 'Weekly tests and monthly progress reports to track student performance.', icon: CheckCircle2 },
              { title: 'Modern Facilities', desc: 'Well-equipped classrooms with digital learning tools for better understanding.', icon: BookOpen },
              { title: 'Doubt Solving', desc: 'Dedicated doubt-clearing sessions after every chapter.', icon: MessageCircle },
              { title: 'Career Guidance', desc: 'Mentorship programs to help students choose the right path after 10th.', icon: Award },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Prof. Leena Thakare" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full -z-0 blur-3xl" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full -z-0 blur-2xl" />
              
              {/* Experience Badge */}
              <div className="absolute top-10 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">22+ Years</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Teaching Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
                Founder's Message
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Meet Prof. Leena Thakare – <span className="text-primary">Founder, Suyash Edu Hub</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold">Qualifications: M.Sc. Microbiology, M.A. English</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold">Experience: 22+ Years in Academic Leadership</span>
                </div>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  As the guiding force behind Suyash Edu Hub, Prof. Leena Thakare brings over two decades of extensive teaching experience and a unique, interdisciplinary approach to education. Holding dual degrees in Microbiology and English, she understands that true learning requires a balance of analytical skill and precise communication.
                </p>
                <p>
                  Throughout her 22-year career, Prof. Thakare has dedicated herself to understanding the needs of students during their most formative academic years (8th–10th Std). Observing the limitations of a "one-size-fits-all" approach, she founded Suyash Edu Hub to create a space where every student receives personalized attention across all major boards (CBSE, ICSE, IGCSE, SSC).
                </p>
                <p className="font-medium italic text-slate-900 border-l-4 border-primary pl-6 py-2 bg-slate-50 rounded-r-xl">
                  "Her philosophy—that every student is special—is at the core of Suyash Edu Hub. She is committed to fostering an environment that is both nurturing and challenging, ensuring that every student who enters the hub leaves with the knowledge and confidence to succeed."
                </p>
              </div>

              <div className="mt-10">
                <Link to="/contact" className="btn btn-primary px-8 py-4 text-lg">
                  Get in Touch with Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Academic Programs</h2>
              <p className="text-slate-600">Comprehensive coaching for all major boards from primary to secondary levels.</p>
            </div>
            <Link to="/courses" className="text-primary font-bold flex items-center gap-2 hover:underline">
              View All Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {COURSES.map((course, i) => (
              <div key={i} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-primary transition-colors">
                <div className="p-8">
                  <div className="text-sm font-bold text-primary uppercase tracking-widest mb-2">{course.grades}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{course.title}</h3>
                  <p className="text-slate-600 mb-6">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {course.boards.map(board => (
                      <span key={board} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600">
                        {board}
                      </span>
                    ))}
                  </div>
                  <Link to="/contact" className="w-full btn btn-primary group-hover:bg-primary/90">
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Students & Parents Say</h2>
            <p className="text-slate-600">Real feedback from our community about their experience at Suyash Edu Hub.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Deshmukh", role: "Parent", text: "Excellent teaching methodology. My son's performance in Mathematics has improved significantly since joining Suyash Edu Hub.", rating: 5 },
              { name: "Sneha Patil", role: "10th Std Student", text: "The teachers are very supportive and clear all our doubts patiently. The regular tests helped me gain confidence for my board exams.", rating: 5 },
              { name: "Amit Kulkarni", role: "Parent", text: "Best coaching classes in Nashik. Personalized attention and disciplined environment make it the perfect place for academic growth.", rating: 5 }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6">"{review.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-6">
              {BRANCHES.map(branch => (
                <a 
                  key={branch.name}
                  href={branch.reviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  View {branch.name.split(' ')[0]} Reviews
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Institution's Promotional Videos</h2>
            <p className="text-slate-600">Glimpses of our teaching methods, student achievements, and academic excellence.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "https://www.youtube.com/embed/ai_zn_NIPII",
              "https://www.youtube.com/embed/7XujUgmksvc"
            ].map((video, i) => (
              <div key={i} className="aspect-[9/16] bg-slate-100 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <iframe
                  src={video}
                  title={`Suyash Edu Hub Video ${i + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
              Join Nashik's most trusted educational hub and give your child the academic edge they deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link to="/contact" className="btn btn-secondary text-lg px-10">
                Contact Us Today
              </Link>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn bg-white text-primary hover:bg-slate-100 text-lg px-10">
                Call: {BUSINESS_INFO.phone} / {BUSINESS_INFO.phone2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Courses</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">We provide specialized coaching for SSC, CBSE, and ICSE boards with a curriculum designed for success.</p>
        </div>

        <div className="grid gap-12">
          {COURSES.map((course, i) => (
            <div key={i} className={cn(
              "flex flex-col md:flex-row gap-12 items-center",
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            )}>
              <div className="flex-1 space-y-6">
                <span className="text-primary font-bold tracking-widest uppercase">{course.grades}</span>
                <h2 className="text-3xl font-bold text-slate-900">{course.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{course.description}</p>
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900">What we cover:</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 'Marathi'].map(sub => (
                      <li key={sub} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <Link to="/contact" className="btn btn-primary">Enroll for {course.title}</Link>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={`https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Branches = () => {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Branches in Nashik</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Conveniently located branches to serve students across the city with the same quality of education.</p>
        </div>

        <div className="space-y-24">
          {BRANCHES.map((branch, i) => (
            <div key={i} className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                {/* Map Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col">
                  <div className="h-full min-h-[300px] bg-slate-200">
                    <iframe
                      src={branch.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${branch.name} Map`}
                    ></iframe>
                  </div>
                </div>

                {/* Info Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 w-fit">
                    {branch.name.includes('Gangapur') ? 'Main Branch' : 'Secondary Branch'}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{branch.name}</h2>
                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4 text-slate-600">
                      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg leading-relaxed">{branch.address}</span>
                    </div>
                    <div className="flex gap-4 text-slate-600">
                      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg">{branch.phone}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a href={`tel:${branch.phone}`} className="flex-1 btn btn-primary py-4">Call Now</a>
                    <a 
                      href={branch.directionsUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 btn btn-secondary py-4"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* 360 View & Gallery Section */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* 360 View Card */}
                {branch.photos360 && (
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                    <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-secondary" />
                        <span className="font-bold uppercase tracking-wider text-sm">360° Virtual Tour</span>
                      </div>
                      <div className="px-2 py-1 bg-secondary/20 text-secondary text-[10px] font-bold rounded border border-secondary/30">INTERACTIVE</div>
                    </div>
                    <div className="aspect-video">
                      <iframe
                        src={branch.photos360}
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        title={`${branch.name} 360 View`}
                      ></iframe>
                    </div>
                  </div>
                )}

                {/* Gallery Card */}
                {branch.gallery && branch.gallery.length > 0 && (
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col">
                    <div className="bg-slate-900 px-6 py-4 flex items-center gap-3 text-white">
                      <ImageIcon className="w-5 h-5 text-secondary" />
                      <span className="font-bold uppercase tracking-wider text-sm">Branch Gallery</span>
                    </div>
                    <div className="p-6 grid grid-cols-2 gap-4 flex-1">
                      {branch.gallery.map((img, idx) => (
                        <div key={idx} className="rounded-2xl overflow-hidden shadow-sm group relative h-40">
                          <img 
                            src={img} 
                            alt={`${branch.name} ${idx + 1}`} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ImageIcon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // LOG DATA FOR DEBUGGING
    console.log("Form Data Collected:", data);

    /**
     * GOOGLE SHEET INTEGRATION INSTRUCTIONS:
     * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1_pb5g6OyLJa258V0iIleXtdaGOMU9IuEzF6fkOTyiig/edit
     * 2. Go to Extensions > Apps Script
     * 3. Paste the following script:
     * 
     * function doPost(e) {
     *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     *   var data = JSON.parse(e.postData.contents);
     *   sheet.appendRow([new Date(), data.studentName, data.parentName, data.phone, data.grade, data.branch, data.message]);
     *   return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
     * }
     * 
     * 4. Click 'Deploy' > 'New Deployment' > 'Web App'
     * 5. Set 'Who has access' to 'Anyone'
     * 6. Copy the Web App URL and replace the fetch URL below.
     */

    try {
      // 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1_pb5g6OyLJa258V0iIleXtdaGOMU9IuEzF6fkOTyiig/edit
      // 2. Go to Extensions > Apps Script
      // 3. Paste the script provided in the instructions
      // 4. Deploy as Web App (Anyone has access)
      // 5. Replace 'YOUR_WEB_APP_URL' with your actual deployment URL
      
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbzOlLLTkHjiDlkQx8ihKpcFwGzjToh75Ad_L2igVwU_S83utySgfG24-T4-EIl0tO4X/exec';
      
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-12">
              Have questions about our courses or admission process? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, label: 'Call Us', value: `${BUSINESS_INFO.phone} / ${BUSINESS_INFO.phone2}` },
                { icon: Mail, label: 'Email Us', value: BUSINESS_INFO.email },
                { icon: Clock, label: 'Working Hours', value: `${BUSINESS_INFO.workingDays}, ${BUSINESS_INFO.workingHours}` },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-xl font-bold text-slate-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h2>
                <p className="text-slate-600 mb-8">Your enquiry has been received. We'll contact you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-primary">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Student Name</label>
                    <input name="studentName" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Enter name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Parent Name</label>
                    <input name="parentName" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Enter name" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input name="phone" required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Enter mobile" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Enter email" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Standard / Grade</label>
                    <select name="grade" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                      <option>1st to 4th Std</option>
                      <option>5th to 8th Std</option>
                      <option>9th Std</option>
                      <option>10th Std</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Preferred Branch</label>
                    <select name="branch" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                      <option>Gangapur Road</option>
                      <option>Indira Nagar</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message (Optional)</label>
                  <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tell us more..."></textarea>
                </div>
                <button disabled={loading} type="submit" className="w-full btn btn-primary py-4 text-lg">
                  {loading ? "Submitting..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar, Footer, FloatingButtons, Home, Courses, Branches, Contact };
