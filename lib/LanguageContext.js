import { createContext, useContext, useState, useEffect } from 'react';
import { en } from './translations/en';
import { hi } from './translations/hi';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState(en);

    useEffect(() => {
        // Load saved language from localStorage
        const savedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(savedLanguage);
        setTranslations(savedLanguage === 'hi' ? hi : en);
    }, []);

    const switchLanguage = (lang) => {
        setLanguage(lang);
        setTranslations(lang === 'hi' ? hi : en);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, translations, switchLanguage, t: translations }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
