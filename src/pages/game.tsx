import GameView from '@/components/GameView';
import { GameContextProvider } from '@/components/context/GameContext';
import LayoutGame from '@/components/layouts/LayoutGame';
import { getRandomInts } from '@/lib/random';
import { parseSettingsFromJSON } from '@/lib/settings';
import { useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';

export type InGamePlayer = {
	name: string;
	isImpostor: boolean;
	isEliminated: boolean;
};

const GamePage: FC = () => {
	const [players, setPlayers] = useState<InGamePlayer[]>([]);

	const setupInitialPlayerInfo = useCallback(() => {
		const settingsJSON = localStorage.getItem('settings');

		if (!settingsJSON) {
			return;
		}

		const parsedSettings = parseSettingsFromJSON(settingsJSON);
		const selectedImpostors = Number(parsedSettings.numberOfImpostors);
		const totalPlayers = parsedSettings.players.length;

		const impostorsIndexes = getRandomInts(totalPlayers, selectedImpostors);

		setPlayers(parsedSettings.players.map((player, i) => {
			return {
				name: player,
				isImpostor: impostorsIndexes.includes(i),
				isEliminated: false,
			};
		}));
	}, []);

	useEffect(() => {
		setupInitialPlayerInfo();
	}, [setupInitialPlayerInfo]);

	if (!players.length) {
		return null;
	}

	return (
		<LayoutGame>
			<GameContextProvider players={players} wordPair={['Innocent', 'Impostor']}>
				<GameView />
			</GameContextProvider>
		</LayoutGame>
	);
};

export default GamePage;
