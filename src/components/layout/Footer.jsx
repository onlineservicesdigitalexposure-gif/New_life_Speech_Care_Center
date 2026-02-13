import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

import MainLogo from '../../assets/MainLOGO.svg';

export default function Footer() {
    return (
        <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand */}
                    <div className="space-y-4 col-span-2 md:col-span-1 lg:col-span-1">
                        <Link to="/" className="inline-flex flex-col items-start gap-1">
                            <img src={MainLogo} alt="New Life Speech Care Center" className="h-20 w-auto object-contain" />
                            <div className="text-sm font-bold tracking-wide uppercase">
                                <span className="text-primary">New Life</span> <span className="text-gray-800">Speech Care</span>
                            </div>
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            New Life Speech Care Center offers professional speech therapy services for children and adults. We help you find your voice.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/appointment" className="text-gray-600 hover:text-primary transition-colors">Book Appointment</Link></li>
                            <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Our Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Child Speech Therapy</Link></li>
                            <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Adult Voice Therapy</Link></li>
                            <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Stuttering Treatment</Link></li>
                            <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Autism Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4 col-span-2 md:col-span-1 lg:col-span-1">
                        <h4 className="font-semibold text-gray-900">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3 text-gray-600">
                                <MapPin size={18} className="mt-0.5 text-primary shrink-0" />
                                <span>38, Garia Station Road, Behind Bank of Maharastra, Garia, Kolkata - 700 084</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-600">
                                <Phone size={18} className="text-primary shrink-0" />
                                <div className="flex flex-col sm:flex-row sm:gap-1">
                                    <a href="tel:+919330222020" className="hover:text-primary transition-colors">+91 9330222020</a>
                                    <span className="hidden sm:inline">/</span>
                                    <a href="tel:+918777877372" className="hover:text-primary transition-colors">+91 8777877372</a>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-600">
                                <Mail size={18} className="text-primary shrink-0" />
                                <a href="mailto:newlifespeechcarecentre@gmail.com" className="hover:text-primary transition-colors break-all">
                                    newlifespeechcarecentre@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-200 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} New Life Speech Care Center. All rights reserved @ DEOS.
                    </p>
                </div>
            </div>
        </footer>
    );
}
