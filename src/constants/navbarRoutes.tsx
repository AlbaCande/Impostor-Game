import { GearIcon, HomeIcon, PlayIcon } from '@radix-ui/react-icons';
import type { i18n } from 'i18next';

export type NavbarRoute = {
	name: string
	displayName: string
	path: string
	Icon: typeof GearIcon
	isAction?: boolean
}

export const getNavbarRoutes = (i18nInstance: i18n): NavbarRoute[] => [
	{
		name: 'home',
		displayName: i18nInstance.t('home-title'),
		path: '/',
		Icon: HomeIcon,
	},
	{
		name: 'play',
		displayName: i18nInstance.t('play-title'),
		path: '/game',
		Icon: PlayIcon,
	},
	{
		name: 'settings',
		displayName: i18nInstance.t('settings-title'),
		path: '/settings',
		Icon: GearIcon,
	},
];
