import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Mail, MessageSquare, Phone, User, CheckCircle, Smartphone, ClipboardList, MessageCircle } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import SnakeBorder from '../components/common/SnakeBorder';

export default function Appointment() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);

    // Hardcoded contact number for WhatsApp and Phone
    const contactNumber = "+918777877372";
    const displayPhone = "+91 9330222020";

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'consultation',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `*New Appointment Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n*Date:* ${formData.date}\n*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/918777877372?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-white py-12 shadow-sm">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t('appointment.title')}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-4">{t('appointment.subtitle')}</p>
                    <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium">
                        <CheckCircle size={16} />
                        {t('appointment.reassurance')}
                    </div>
                </div>
            </section>

            <div className="container-custom py-12">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Booking Form */}
                    <div className="lg:col-span-2">
                        <div className="relative group">
                            <SnakeBorder className="rounded-xl" rx="12" />
                            <Card className="p-8 bg-white shadow-lg border-t-4 border-t-primary relative z-10">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                                            <CheckCircle size={48} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                                        <p className="text-gray-600">{t('appointment.form.success')}</p>
                                        <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8">
                                            Book Another
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('appointment.formTitle')}</h2>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('appointment.name')}</label>
                                                    <div className="relative">
                                                        <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                                            placeholder="Suman Bar"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('appointment.phone')}</label>
                                                    <div className="relative">
                                                        <Phone className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                                            placeholder="+91 1234567890"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('appointment.email')}</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                                        placeholder="onlineservicesdigitalexposure@gmail.com"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('appointment.serviceType')}</label>
                                                <div className="relative">
                                                    <ClipboardList className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                                    <select
                                                        name="service"
                                                        value={formData.service}
                                                        onChange={handleChange}
                                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none"
                                                    >
                                                        <option value="consultation">{t('appointment.serviceOptions.consultation')}</option>
                                                        <option value="assessment">{t('appointment.serviceOptions.assessment')}</option>
                                                        <option value="therapy">{t('appointment.serviceOptions.therapy')}</option>
                                                        <option value="online">{t('appointment.serviceOptions.online')}</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('appointment.date')}</label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('appointment.message')}</label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        rows="4"
                                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                                        placeholder={t('appointment.messagePlaceholder')}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <Button size="lg" className="w-full py-4 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl transition-shadow">
                                                {t('appointment.submit')}
                                            </Button>
                                        </form>
                                    </>
                                )}
                            </Card>
                        </div>
                    </div>

                    {/* Sidebar: Contact Info */}
                    <div className="space-y-8">
                        {/* Call Card */}
                        <div className="relative group">
                            <SnakeBorder className="rounded-2xl" rx="16" />
                            <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow relative z-10">
                                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                                    <Phone size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('appointment.callUs')}</h3>
                                <p className="text-gray-600 mb-4">{t('appointment.callDesc')}</p>
                                <a href={`tel:${displayPhone.replace(/\s/g, '')}`} className="inline-block px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary-600 transition-colors">
                                    {displayPhone}
                                </a>
                            </div>
                        </div>

                        {/* WhatsApp Card */}
                        <div className="relative group">
                            <SnakeBorder className="rounded-2xl" rx="16" />
                            <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow relative z-10">
                                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                                    <MessageCircle size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
                                <p className="text-gray-600 mb-4">{t('appointment.whatsappDesc')}</p>
                                <a href={`https://wa.me/${contactNumber.replace('+', '')}`} target="_blank" rel="noreferrer" className="inline-block px-6 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors">
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-sm text-gray-500">
                            <p>
                                Please note that appointment times are subject to availability. Our team will confirm your slot via phone or email.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
