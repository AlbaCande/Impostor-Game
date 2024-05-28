import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getNavbarRoutes } from '@/constants/navbarRoutes';

const Topbar: FC = () => {
	const location = useLocation();
	const { t, i18n } = useTranslation();

	const mappedRoutes = getNavbarRoutes(i18n).reduce<Record<string, string | undefined>>((prev, curr) => {
		return {
			...prev,
			[curr.path]: curr.name,
		};
	}, {});

	const title = mappedRoutes[location.pathname];
	const translatedTitle = t(`${title}-title`).toUpperCase();

	return (
		<div className="flex justify-center items-center gap-4 w-full h-12 bg-surface p-4">
			<h1 className="font-bold text-2xl">{translatedTitle}</h1>
		</div>
	);
};

export default Topbar;
