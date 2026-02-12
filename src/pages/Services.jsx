import { useTranslation } from 'react-i18next';
import { Baby, Brain, Ear, MessageCircle, Mic, Smile, Activity, UserCheck, Volume2 } from 'lucide-react';
import Card from '../components/common/Card';
import SnakeBorder from '../components/common/SnakeBorder';
import ServiceBg from '../assets/Therapist/service.webp';

export default function Services() {
    const { t } = useTranslation();

    const childServices = [
        { key: 'delay', icon: <MessageCircle size={28} /> },
        { key: 'autism', icon: <Brain size={28} /> },
        { key: 'adhd', icon: <Activity size={28} /> },
        { key: 'articulation', icon: <Ear size={28} /> },
        { key: 'stammering', icon: <Mic size={28} /> },
        { key: 'hearing', icon: <Volume2 size={28} /> },
    ];

    const adultServices = [
        { key: 'aphasia', icon: <Brain size={28} /> },
        { key: 'dysarthria', icon: <MessageCircle size={28} /> },
        { key: 'voice', icon: <Mic size={28} /> },
        { key: 'swallowing', icon: <UserCheck size={28} /> },
    ];

    return (
        <div className="flex flex-col w-full">
            {/* Header */}
            <section className="relative shadow-sm section-padding py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ServiceBg})` }}>
                <div className="absolute inset-0 bg-white/40"></div>
                <div className="container-custom text-center relative z-10">
                    <h1 className="heading-xl mb-6">{t('services.title')}</h1>
                    <p className="body-text text-xl max-w-3xl mx-auto">{t('services.intro')}</p>
                </div>
            </section>

            {/* Services for Children */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-primary-50 rounded-xl text-primary">
                            <Baby size={32} strokeWidth={1.5} />
                        </div>
                        <h2 className="heading-lg">{t('services.childrenTitle')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {childServices.map((service, index) => (
                            <div key={index} className="relative group h-full">
                                <SnakeBorder className="rounded-xl" rx="12" />
                                <Card className="card-premium h-full group-hover:border-transparent transition-colors duration-300 relative z-10 hover:bg-primary-50/30">
                                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{t(`services.child.${service.key}.title`)}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {t(`services.child.${service.key}.desc`)}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services for Adults */}
            <section className="section-padding bg-gray-50/50 border-t border-gray-100">
                <div className="container-custom">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-primary-50 rounded-xl text-primary">
                            <UserCheck size={32} strokeWidth={1.5} />
                        </div>
                        <h2 className="heading-lg">{t('services.adultTitle')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {adultServices.map((service, index) => (
                            <div key={index} className="relative group h-full">
                                <SnakeBorder className="rounded-xl" rx="12" />
                                <Card className="card-premium h-full group-hover:border-transparent transition-colors duration-300 relative z-10 bg-white">
                                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{t(`services.adult.${service.key}.title`)}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {t(`services.adult.${service.key}.desc`)}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
