import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import Card from '../components/common/Card';
import SnakeBorder from '../components/common/SnakeBorder';
import ContactBg from '../assets/Therapist/contact.webp';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col w-full">
            {/* Header */}
            <section className="relative shadow-sm py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ContactBg})` }}>
                <div className="absolute inset-0 bg-white/40"></div>
                <div className="container-custom text-center relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t('contact.title')}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left Column: Contact Details */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.infoTitle')}</h2>

                            {/* Address Card */}
                            <div className="relative group">
                                <SnakeBorder className="rounded-xl" rx="12" />
                                <Card className="flex items-start p-6 bg-white shadow-md border-l-4 border-l-primary hover:shadow-lg transition-shadow relative z-10">
                                    <div className="p-3 bg-secondary rounded-full text-primary shrink-0 mr-4">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                                        <p className="text-gray-700 font-medium">{t('contact.addressLine1')}</p>
                                        <p className="text-gray-600">{t('contact.addressLine2')}</p>
                                        <p className="text-gray-600">{t('contact.addressLine3')}</p>
                                    </div>
                                </Card>
                            </div>

                            {/* Phone Card */}
                            <div className="relative group">
                                <SnakeBorder className="rounded-xl" rx="12" />
                                <Card className="flex items-start p-6 bg-white shadow-md border-l-4 border-l-primary hover:shadow-lg transition-shadow relative z-10">
                                    <div className="p-3 bg-secondary rounded-full text-primary shrink-0 mr-4">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Numbers</h3>
                                        <div className="space-y-1">
                                            <p className="text-gray-700 font-medium tracking-wide">{t('contact.phoneMain')}</p>
                                            <p className="text-gray-700 font-medium tracking-wide">{t('contact.phoneAlt')}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Email Card */}
                            <div className="relative group">
                                <SnakeBorder className="rounded-xl" rx="12" />
                                <Card className="flex items-start p-6 bg-white shadow-md border-l-4 border-l-primary hover:shadow-lg transition-shadow relative z-10">
                                    <div className="p-3 bg-secondary rounded-full text-primary shrink-0 mr-4">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                                        <p className="text-gray-700 font-medium break-all">{t('contact.email')}</p>
                                    </div>
                                </Card>
                            </div>

                            {/* Timing Card */}
                            <div className="relative group">
                                <SnakeBorder className="rounded-xl" rx="12" />
                                <Card className="flex items-start p-6 bg-white shadow-md border-l-4 border-l-primary hover:shadow-lg transition-shadow relative z-10">
                                    <div className="p-3 bg-secondary rounded-full text-primary shrink-0 mr-4">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.hours')}</h3>
                                        <p className="text-gray-700">{t('contact.hoursDesc')}</p>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Right Column: Map Integration */}
                        <div className="h-full min-h-100 bg-white rounded-2xl shadow-lg overflow-hidden relative border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7262060370004!2d88.39345207593256!3d22.47693527956041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02717906969519%3A0x7d6560965d1026af!2s38%2C%20Garia%20Station%20Rd%2C%20Barhans%2C%20Garia%2C%20Kolkata%2C%20West%20Bengal%20700084!5e0!3m2!1sen!2sin!4v1707835845123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Speech Care Center Location"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
