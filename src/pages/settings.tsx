import LayoutRoot from '@/components/layouts/LayoutRoot';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

const SettingsPage: FC = () => {
	const { t, i18n } = useTranslation();
	const [language, setLanguage] = useState('es');

	useEffect(() => {
		i18n.changeLanguage(language);
	}, [language, i18n]);

	const handleClick = (): void => {
		setLanguage(language === 'es' ? 'en' : 'es');
	};

	return (
		<LayoutRoot>
			<div><h1>{t('Welcome to React')}</h1></div>
			<button onClick={handleClick}>{t('Change language')}</button>
		</LayoutRoot>
	);
};

export default SettingsPage;
