import type { FC } from 'react';
import { navbarRoutes } from '@/constants/navbarRoutes';
import NavbarButton from './NavbarButton';
import { useLocation } from 'react-router-dom';

const Navbar: FC = () => {
	const location = useLocation();

	return (
		<nav className="fixed bottom-0 flex justify-between items-center w-full h-16 bg-surface">
			{navbarRoutes.map((route) => {
				const isSelected = location.pathname === route.path;

				return (
					<NavbarButton key={route.path} {...route} isSelected={isSelected} />
				);
			})}
		</nav>
	);
};

export default Navbar;
