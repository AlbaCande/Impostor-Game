import type { NavbarRoute } from '@/constants/navbarRoutes';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = NavbarRoute & {
	isSelected?: boolean
}

const NavbarButton: FC<Props> = (props) => {
	const {
		displayName,
		path,
		Icon,
		isSelected,
	} = props;

	return (
		<Link to={path} className={`flex flex-col items-center p-2 w-full${isSelected ? ' bg-accent' : ''}`}>
			<Icon className="h-6 w-6" />
			<span>{displayName}</span>
		</Link>
	);
};

export default NavbarButton;
