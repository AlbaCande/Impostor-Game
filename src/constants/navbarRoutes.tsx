import { GearIcon, HomeIcon, PlayIcon } from '@radix-ui/react-icons';

export type NavbarRoute = {
	displayName: string
	path: string
	Icon: typeof GearIcon
	isAction?: boolean
}

export const navbarRoutes: NavbarRoute[] = [
	{
		displayName: 'Home',
		path: '/',
		Icon: HomeIcon,
	},
	{
		displayName: 'Play',
		path: '/game',
		Icon: PlayIcon,
	},
	{
		displayName: 'Settings',
		path: '/settings',
		Icon: GearIcon,
	},
];
