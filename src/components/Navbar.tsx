import type { FC } from 'react';
import { getNavbarRoutes } from '@/constants/navbarRoutes';
import NavbarButton from './NavbarButton';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: FC = () => {
	const location = useLocation();
	const { i18n } = useTranslation();

	return (
		<nav className="fixed bottom-0 flex justify-between items-center w-full h-16 bg-surface">
			{getNavbarRoutes(i18n).map((route) => {
				const isSelected = location.pathname === route.path;

				return (
					<NavbarButton key={route.path} {...route} isSelected={isSelected} />
				);
			})}
		</nav>
	);
};

export default Navbar;
