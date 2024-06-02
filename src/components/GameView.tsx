import { useState } from 'react';
import type { FC } from 'react';
import PregameScreen from './PregameScreen';
import IngameScreen from './IngameScreen';
import PostgameScreen from './PostgameScreen';

type GamePhase = 'pregame' | 'ingame' | 'postgame'

const GameView: FC = () => {
	const [gamePhase, setGamePhase] = useState<GamePhase>('pregame');

	if (gamePhase === 'pregame') {
		return (
			<PregameScreen onStart={() => setGamePhase('ingame')} />
		);
	}

	if (gamePhase === 'ingame') {
		return (
			<IngameScreen onFinish={() => setGamePhase('postgame')} />
		);
	}

	if (gamePhase === 'postgame') {
		return (
			<PostgameScreen />
		);
	}

	return (
		<></>
	);
};

export default GameView;
