import RootPage from '@/pages';
import GamePage from '@/pages/game';
import SettingsPage from '@/pages/settings';
import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
	{
		path: '/',
		Component: RootPage,
	},
	{
		path: '/game',
		Component: GamePage,
	},
	{
		path: '/settings',
		Component: SettingsPage,
	},
];
