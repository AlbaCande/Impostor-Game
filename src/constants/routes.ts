import RootPage from '@/pages';
import GamePage from '@/pages/game';
import PlayPage from '@/pages/play';
import SettingsPage from '@/pages/settings';
import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
	{
		path: '/',
		Component: RootPage,
	},
	{
		path: '/play',
		Component: PlayPage,
	},
	{
		path: '/settings',
		Component: SettingsPage,
	},
	{
		path: '/game',
		Component: GamePage,
	},
];
