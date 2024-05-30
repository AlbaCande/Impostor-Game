import type { InGamePlayer } from '@/pages/game';
import type { FC, PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

type GameContextValue = {
	players: InGamePlayer[]
	wordPair: [string, string]
	eliminatePlayer: (playerName: string) => void
}

const GameContext = createContext<GameContextValue>({
	players: [],
	wordPair: ['', ''],
	eliminatePlayer: () => {},
});

export const GameContextProvider: FC<PropsWithChildren & Pick<GameContextValue, 'players' | 'wordPair'>> = (props) => {
	const {
		players: initialPlayers,
		wordPair,
		children,
	} = props;

	const [players, setPlayers] = useState(initialPlayers);

	const eliminatePlayer: GameContextValue['eliminatePlayer'] = (playerName) => {
		const playerIndex = players.findIndex((player) => player.name === playerName);

		if (playerIndex < 0) {
			return;
		}

		setPlayers((prev) => {
			prev[playerIndex].isEliminated = true;

			return prev;
		});
	};

	return (
		<GameContext.Provider value={{ players, wordPair, eliminatePlayer }}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContext;
