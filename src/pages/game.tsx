import GameView from '@/components/GameView';
import SectionHeading from '@/components/SectionHeading';
import type { WordPair } from '@/components/context/GameContext';
import { GameContextProvider } from '@/components/context/GameContext';
import LayoutGame from '@/components/layouts/LayoutGame';
import useFetch from '@/hooks/useFetch';
import { getRandomInts } from '@/lib/random';
import { parseSettingsFromJSON } from '@/lib/settings';
import { useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

export type InGamePlayer = {
	name: string
	isImpostor: boolean
	isEliminated: boolean
};

type WordsResponse = {
	status: number
	message: string
	data: WordPair
}

const GamePage: FC = () => {
	const { i18n, t } = useTranslation();
	const BASE_API_URL = import.meta.env.VITE_API_URL;
	const [players, setPlayers] = useState<InGamePlayer[]>([]);
	const [gameMode, setGameMode] = useState<string | undefined>(undefined);
	const {
		status,
		data,
		fetchData,
	} = useFetch<WordsResponse>(`${BASE_API_URL}/api/v1/words/random?locale=${i18n.language.split('-')[0]}`);

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

		setGameMode(parsedSettings.gameMode);
	}, []);

	useEffect(() => {
		setupInitialPlayerInfo();
		fetchData();
	}, [setupInitialPlayerInfo, fetchData]);

	if (!players.length) {
		return null;
	}

	return (
		<LayoutGame>
			{((): JSX.Element => {
				if (status === 'hasData') {
					const [innocentWord, impostorWord] = data.data;

					return (
						<GameContextProvider players={players} wordPair={[innocentWord, gameMode === 'adventure' ? impostorWord : t('play-impostor')]}>
							<GameView />
						</GameContextProvider>
					);
				}

				if (status === 'loading') {
					return (
						<SectionHeading>{t('loading')}</SectionHeading>
					);
				}

				return <></>;
			})()}
		</LayoutGame>
	);
};

export default GamePage;
