import { useState } from 'react';
import type { FC } from 'react';
import PregameScreen from './PregameScreen';

type GamePhase = 'pregame' | 'ingame' | 'postgame'

const GameView: FC = () => {
	const [gamePhase, setGamePhase] = useState<GamePhase>('pregame');

	if (gamePhase === 'pregame') {
		return (
			<PregameScreen onStart={() => setGamePhase('ingame')} />
		);
	}

	return (
		<></>
	);
};

export default GameView;
