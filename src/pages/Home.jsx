import { useTranslation } from 'react-i18next';
import { ArrowRight, Phone, MessageSquare, MessageCircle, ClipboardList, Activity, User, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero1 from '../assets/HeroPhotos/Hero-1.webp';
import Hero2 from '../assets/HeroPhotos/Hero-2.webp';
import Hero3 from '../assets/HeroPhotos/Hero-3.webp';
import Hero1Mobile from '../assets/HeroPhotos/Hero-1-mobile.webp';
import Hero2Mobile from '../assets/HeroPhotos/Hero-2-mobile.webp';
import Hero3Mobile from '../assets/HeroPhotos/Hero-3-mobile.webp';
import AppointmentBg from '../assets/Therapist/FromBackImage.webp';
import SnakeBorder from '../components/common/SnakeBorder';

const heroImages = [
    { desktop: Hero1, mobile: Hero1Mobile },
    { desktop: Hero2, mobile: Hero2Mobile },
    { desktop: Hero3, mobile: Hero3Mobile }
];

const WhatsAppIcon = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

export default function Home() {
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleScrollToAppointment = () => {
        const element = document.getElementById('appointment-form')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col w-full">
            {/* 1. Hero Section */}
            <section className="relative section-padding pt-32 lg:pt-40 overflow-hidden min-h-[80vh] flex items-center">
                {/* Background Image Carousel */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <picture className="absolute inset-0 w-full h-full">
                                <source media="(max-width: 640px)" srcSet={heroImages[currentImageIndex].mobile} />
                                <img
                                    src={heroImages[currentImageIndex].desktop}
                                    alt="Hero Background"
                                    className="w-full h-full object-cover"
                                    fetchPriority={currentImageIndex === 0 ? "high" : "auto"}
                                    loading={currentImageIndex === 0 ? "eager" : "lazy"}
                                />
                            </picture>
                            <div className="absolute inset-0 bg-linear-to-b from-white/30 via-transparent to-white/60"></div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="container-custom text-center max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2, // Faster stagger for smoother feel
                                    delayChildren: 0.3
                                }
                            }
                        }}
                    >
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="heading-xl mb-6 text-gray-900 drop-shadow-sm flex flex-wrap justify-center gap-x-3"
                        >
                            {/* Static part of the title */}
                            <span>{t('hero.title').split(' Find Their Voice')[0]}</span>

                            {/* Animated Highlighted Part */}
                            <span className="relative inline-block">
                                <span className="relative z-10">Find Their Voice</span>
                                <motion.span
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }} // Delays matches text reveal
                                    className="absolute bottom-1 left-0 h-3 bg-primary/20 z-0 rounded-sm"
                                ></motion.span>
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="body-text text-xl mb-12 max-w-2xl mx-auto font-semibold text-gray-800"
                        >
                            {t('hero.subtitle')}
                        </motion.p>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button onClick={handleScrollToAppointment} size="lg" className="rounded-full px-8 py-4 text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">
                                {t('hero.cta')}
                            </Button>
                            <a href="tel:+919330222020">
                                <Button variant="secondary" size="lg" className="rounded-full px-8 py-4 text-lg w-full sm:w-auto flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 bg-white/80 backdrop-blur-sm">
                                    <Phone size={20} />
                                    {t('hero.call')}
                                </Button>
                            </a>

                        </motion.div>
                    </motion.div>
                </div>
            </section >

            {/* 2. Therapist Credibility Section */}
            < section className="section-padding bg-white overflow-hidden" >
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="md:w-1/3 relative"
                        >
                            {/* Decorative Background Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-50/50 rounded-full blur-3xl -z-10"></div>

                            <div className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-xl shadow-primary/5 border border-gray-100 flex items-center justify-center relative group">
                                {/* Demo Photo */}
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Mrs. Rita Chatterjee"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback Placeholder (Hidden by default, shown on error) */}
                                <div className="absolute inset-0 bg-gray-50 flex-col items-center justify-center text-gray-300 hidden">
                                    <User size={80} strokeWidth={1} className="mb-4 text-gray-200" />
                                    <div className="px-6 py-2 bg-white rounded-full text-xs font-semibold tracking-widest uppercase text-gray-400 shadow-sm border border-gray-100">
                                        Photo Coming Soon
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="md:w-2/3 text-center md:text-left"
                        >
                            <span className="inline-block py-1 px-3 rounded-md bg-primary-50 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-primary/10">
                                {t('home.therapistCert')}
                            </span>
                            <h3 className="heading-lg mb-4 text-gray-900 leading-tight">
                                {t('home.therapistName')}
                            </h3>
                            <p className="text-xl text-primary font-medium mb-8 flex items-center justify-center md:justify-start gap-2">
                                <Activity size={20} className="text-primary/60" />
                                {t('home.therapistRole')}
                            </p>
                            <p className="body-text text-lg leading-relaxed max-w-xl text-gray-600">
                                {t('home.therapistDesc')}
                            </p>

                            {/* Signature / Additional Trust Element (Optional but nice) */}
                            <div className="mt-10 pt-8 border-t border-gray-100">
                                <p className="text-sm text-gray-400 italic">"Empowering lives through better communication."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* 3. Services Preview Section */}
            < section className="section-padding bg-gray-50/50" >
                <div className="container-custom">
                    <h2 className="heading-lg text-center mb-16">{t('home.servicesTitle')}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Children Card */}
                        <div className="relative group h-full">
                            <SnakeBorder className="rounded-xl" rx="12" />
                            <Card className="card-premium h-full group-hover:border-transparent transition-colors duration-300 relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                    <span className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary mr-4 font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors">C</span>
                                    {t('home.servicesChildren')}
                                </h3>
                                <ul className="space-y-4">
                                    {(t('home.childServices', { returnObjects: true }) || []).map((service, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-4"></div>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>

                        {/* Adults Card */}
                        <div className="relative group h-full">
                            <SnakeBorder className="rounded-xl" rx="12" />
                            <Card className="card-premium h-full group-hover:border-transparent transition-colors duration-300 relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                    <span className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary mr-4 font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors">A</span>
                                    {t('home.servicesAdults')}
                                </h3>
                                <ul className="space-y-4">
                                    {(t('home.adultServices', { returnObjects: true }) || []).map((service, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-4"></div>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
            </section >

            {/* 4. How Therapy Works */}
            < section className="section-padding bg-white" >
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="heading-lg text-center mb-20">{t('home.processTitle')}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gray-200 -z-10 bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>

                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center group relative p-4">
                                <SnakeBorder className="rounded-3xl" rx="24" />
                                <div className="relative z-10 bg-white rounded-3xl p-4">
                                    <div className="w-24 h-24 bg-primary-50 rounded-3xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                                        <ClipboardList size={40} />
                                    </div>
                                    <h3 className="text-xl font-bold bg-white px-4 relative z-10">{t('home.processStep1')}</h3>
                                    <p className="body-text mt-4">{t('home.processStep1Desc')}</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center group relative p-4">
                                <SnakeBorder className="rounded-3xl" rx="24" />
                                <div className="relative z-10 bg-white rounded-3xl p-4">
                                    <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                                        <MessageCircle size={40} />
                                    </div>
                                    <h3 className="text-xl font-bold bg-white px-4 relative z-10">{t('home.processStep2')}</h3>
                                    <p className="body-text mt-4">{t('home.processStep2Desc')}</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center group relative p-4">
                                <SnakeBorder className="rounded-3xl" rx="24" />
                                <div className="relative z-10 bg-white rounded-3xl p-4">
                                    <div className="w-24 h-24 bg-white border-2 border-primary-50 rounded-3xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <Activity size={40} />
                                    </div>
                                    <h3 className="text-xl font-bold bg-white px-4 relative z-10">{t('home.processStep3')}</h3>
                                    <p className="body-text mt-4">{t('home.processStep3Desc')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* 5. Appointment Call-to-Action Section */}
            < section
                id="appointment-form"
                className="section-padding relative bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${AppointmentBg})` }
                }
            >
                <div className="absolute inset-0 bg-primary-50/60"></div>
                <div className="container-custom relative z-10">
                    <div className="relative group max-w-2xl mx-auto">
                        <SnakeBorder className="rounded-3xl" rx="24" />
                        <div className="relative z-10 max-w-2xl mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-10 md:p-12 border border-white transition-colors duration-300 group-hover:border-transparent">
                            <h2 className="heading-lg text-center mb-10">{t('home.aptTitle')}</h2>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('home.aptName')}</label>
                                    <input type="text" className="w-full px-5 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('home.aptPhone')}</label>
                                    <input type="tel" className="w-full px-5 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('home.aptConcern')}</label>
                                    <textarea rows="3" className="w-full px-5 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"></textarea>
                                </div>
                                <Button size="lg" className="w-full text-lg py-4 mt-6 rounded-full">
                                    {t('home.aptSubmit')}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section >

            {/* 6. Contact & Location */}
            < section className="section-padding bg-white" >
                <div className="container-custom text-center">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="relative group h-full">
                            <SnakeBorder className="rounded-xl" rx="12" />
                            <div className="card-premium h-full w-full flex flex-col items-center justify-center hover:-translate-y-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative z-10 transition-colors duration-300 group-hover:border-transparent">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary mb-6">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-3">{t('contact.address')}</h3>
                                <p className="text-gray-600 font-medium text-sm leading-relaxed">
                                    38, Garia Station Road, Behind Bank of Maharastra,<br />Garia, Kolkata - 700 084
                                </p>
                            </div>
                        </div>

                        <div className="relative group h-full">
                            <SnakeBorder className="rounded-xl" rx="12" />
                            <div className="card-premium h-full w-full flex flex-col items-center justify-center hover:-translate-y-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative z-10 transition-colors duration-300 group-hover:border-transparent">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-3">{t('contact.phone')}</h3>
                                <div className="text-gray-600 font-medium text-sm flex flex-col gap-1.5">
                                    <a href="tel:+919330222020" className="hover:text-primary transition-colors">+91 9330222020</a>
                                    <a href="tel:+918777877372" className="hover:text-primary transition-colors">+91 8777877372</a>
                                </div>
                            </div>
                        </div>

                        <div className="relative group h-full">
                            <SnakeBorder className="rounded-xl" rx="12" />
                            <div className="card-premium h-full w-full flex flex-col items-center justify-center hover:-translate-y-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative z-10 transition-colors duration-300 group-hover:border-transparent">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-3">{t('contact.email')}</h3>
                                <a href="mailto:newlifespeechcarecentre@gmail.com" className="text-gray-600 font-medium text-sm hover:text-primary transition-colors break-all">
                                    newlifespeechcarecentre@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-96 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-inner">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7262060370004!2d88.39345207593256!3d22.47693527956041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02717906969519%3A0x7d6560965d1026af!2s38%2C%20Garia%20Station%20Rd%2C%20Barhans%2C%20Garia%2C%20Kolkata%2C%20West%20Bengal%20700084!5e0!3m2!1sen!2sin!4v1707835845123!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Speech Care Center Location"
                        ></iframe>
                    </div>
                </div>
            </section>
            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/918777877372"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none transition-transform hover:scale-110"
                aria-label="Chat on WhatsApp"
            >
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 text-white">
                    <WhatsAppIcon className="w-10 h-10" />
                </div>
            </a>
        </div>
    );
}
