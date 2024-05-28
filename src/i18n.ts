import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
	englishTranslations,
	frenchTranslations,
	spanishTranslations,
} from './translations';

const resources = {
	en: {
		translation: {
			...englishTranslations,
		},
	},
	es: {
		translation: {
			...spanishTranslations,
		},
	},
	fr: {
		translation: {
			...frenchTranslations,
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
