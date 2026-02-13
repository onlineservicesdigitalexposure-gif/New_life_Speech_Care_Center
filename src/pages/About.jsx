import { useTranslation } from 'react-i18next';
import { Award, GraduationCap, Quote, ShieldCheck, User } from 'lucide-react';
import Card from '../components/common/Card';
import SnakeBorder from '../components/common/SnakeBorder';
import AboutBg from '../assets/Therapist/about.webp';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col w-full">
            {/* Header */}
            <section className="relative shadow-sm py-16 lg:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${AboutBg})` }}>
                <div className="absolute inset-0 bg-white/40"></div>
                <div className="container-custom text-center relative z-10">
                    <h1 className="heading-xl mb-4">{t('about.title')}</h1>
                    <p className="body-text text-lg lg:text-xl max-w-2xl mx-auto">{t('about.subtitle')}</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">

                        {/* Left Column: Photo & Credentials */}
                        <div className="lg:w-1/3 w-full lg:sticky lg:top-24">
                            <div className="relative mb-12 lg:mb-8 group">
                                <SnakeBorder className="rounded-2xl" rx="16" />
                                <div className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-xl shadow-primary/5 border border-gray-100 flex items-center justify-center relative z-10">
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
                                        <User size={120} strokeWidth={1} className="text-gray-200" />
                                    </div>
                                </div>
                                {/* RCI Badge */}
                                <div className="absolute -bottom-6 right-0 lg:-right-6 bg-white p-3 lg:p-5 rounded-2xl shadow-xl shadow-gray-200 border border-gray-50 flex items-center gap-3 lg:gap-4 z-10 transition-transform duration-300 group-hover:scale-105 max-w-[90%] lg:max-w-none mx-auto lg:mx-0 left-0 lg:left-auto justify-center lg:justify-start">
                                    <ShieldCheck className="text-primary shrink-0" size={24} strokeWidth={1.5} />
                                    <div className="text-left">
                                        <p className="text-[10px] lg:text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Certified</p>
                                        <p className="text-xs lg:text-base text-gray-900 font-bold whitespace-nowrap">{t('about.therapistCert')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 space-y-4">
                                <h3 className="heading-md text-lg mb-4">Qualifications</h3>
                                {(t('about.qualifications', { returnObjects: true }) || []).map((qual, idx) => (
                                    <div key={idx} className="relative group">
                                        <SnakeBorder className="rounded-xl" rx="12" />
                                        <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-transparent transition-colors relative z-10">
                                            <GraduationCap className="text-primary shrink-0" size={20} />
                                            <span className="font-medium">{qual}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Bio, Philosophy, Mission */}
                        <div className="lg:w-2/3 w-full space-y-10 lg:space-y-16">

                            {/* Profile Header */}
                            <div>
                                <h2 className="heading-lg mb-2">{t('about.therapistName')}</h2>
                                <p className="text-xl lg:text-2xl text-primary font-medium mb-6 lg:mb-8">{t('about.therapistRole')}</p>
                                <p className="body-text">
                                    {t('about.therapistExp')}
                                </p>
                            </div>

                            {/* Philosophy */}
                            <div className="relative group">
                                <SnakeBorder className="rounded-3xl" rx="24" />
                                <div className="bg-primary-50/50 p-6 lg:p-10 rounded-3xl border border-primary-50 relative overflow-hidden z-10 transition-colors duration-300 group-hover:border-transparent">
                                    <Quote className="text-primary/10 absolute top-4 right-6 rotate-180 w-16 h-16 lg:w-32 lg:h-32" />
                                    <div className="relative z-10">
                                        <h3 className="heading-md mb-4">{t('about.philosophyTitle')}</h3>
                                        <p className="text-gray-700 italic text-lg lg:text-xl leading-relaxed font-serif">
                                            "{t('about.philosophyDesc')}"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Mission */}
                            <div>
                                <h3 className="heading-md mb-6 flex items-center gap-3">
                                    <div className="p-2 bg-primary-50 rounded-lg text-primary">
                                        <Award size={24} />
                                    </div>
                                    {t('about.missionTitle')}
                                </h3>
                                <p className="body-text pl-4 border-l-4 border-primary-50 text-lg">
                                    {t('about.missionDesc')}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
