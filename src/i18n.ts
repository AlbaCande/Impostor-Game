import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
	en: {
		translation: {
			'Welcome to React': 'Welcome to React and react-i18next',
			'Change language': 'Click to change language',
		},
	},
	es: {
		translation: {
			'Welcome to React': 'Bienvenido a React y react-i18next',
			'Change language': 'Haz clic para cambiar el idioma',
		},
	},
};

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		debug: true,

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
