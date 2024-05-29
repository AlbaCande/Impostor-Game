import HomeInfoModeGame from '@/components/HomeInfoModeGame';
import HomeInfoSection from '@/components/HomeInfoSection';
import LayoutRoot from '@/components/layouts/LayoutRoot';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

const RootPage: FC = () => {
	const { t } = useTranslation();

	return (
		<LayoutRoot>
			<div className="flex flex-col gap-4">
				<HomeInfoSection titleSection={t('home-description-title')} bodySection={t('home-description-body')} />
				<HomeInfoSection titleSection={t('home-how-works-title')} bodySection={t('home-how-works-body')} />
				<HomeInfoModeGame gameMode={t('home-classic-title')} gameModeBody={t('home-classic-body')} rules={t('home-rules')} rulesBody={t('home-classic-rules')} />
				<HomeInfoModeGame gameMode={t('home-adventure-title')} gameModeBody={t('home-adventure-body')} rules={t('home-rules')} rulesBody={t('home-adventure-rules')} />
			</div>
		</LayoutRoot>
	);
};

export default RootPage;
