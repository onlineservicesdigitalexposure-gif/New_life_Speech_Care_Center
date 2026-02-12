import { useState, useMemo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from '../common/Button';

import MainLogo from '../../assets/MainLOGO.svg';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'bn' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navLinks = useMemo(() => [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.contact'), path: '/contact' },
    ], [t]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    {/* Logo */}
                    <Link to="/" className="flex flex-col items-center space-y-1">
                        <img src={MainLogo} alt="New Life Speech Care Center" className="h-14 w-auto object-contain" />
                        <div className="text-xs font-bold tracking-wide uppercase">
                            <span className="text-primary">New Life</span> <span className="text-gray-800">Speech Care</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    cn(
                                        'text-gray-600 hover:text-primary transition-colors font-medium text-sm lg:text-base',
                                        isActive && 'text-primary font-semibold'
                                    )
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors font-medium border border-gray-200 rounded-lg px-3 py-1.5"
                                aria-label="Toggle Language"
                            >
                                <span className={cn("transition-colors", i18n.language === 'en' ? "text-primary font-bold" : "text-gray-400")}>EN</span>
                                <span className="text-gray-300">|</span>
                                <span className={cn("transition-colors", i18n.language === 'bn' ? "text-primary font-bold" : "text-gray-400")}>বাংলা</span>
                            </button>

                            <Link to="/appointment">
                                <Button variant="primary" className="py-2 px-4 text-sm">
                                    {t('nav.appointment')}
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors font-medium border border-gray-200 rounded-lg px-3 py-1.5"
                        >
                            <span className={cn("text-sm transition-colors", i18n.language === 'en' ? "text-primary font-bold" : "text-gray-400")}>EN</span>
                            <span className="text-gray-300 text-sm">|</span>
                            <span className={cn("text-sm transition-colors", i18n.language === 'bn' ? "text-primary font-bold" : "text-gray-400")}>বাংলা</span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    cn(
                                        'block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50',
                                        isActive && 'bg-secondary/30 text-primary'
                                    )
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="pt-4 mt-2 border-t border-gray-100">
                            <Link to="/appointment" onClick={() => setIsOpen(false)} className="block">
                                <Button variant="primary" className="w-full justify-center">
                                    {t('nav.appointment')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
