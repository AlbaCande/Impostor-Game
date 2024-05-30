import type { FC } from 'react';
import { useCallback, useContext, useState } from 'react';
import GameContext from './context/GameContext';
import PregameCard from './PregameCard';
import SectionHeading from './SectionHeading';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

type Props = {
	onStart?: () => void
}

const PregameScreen: FC<Props> = (props) => {
	const {
		onStart,
	} = props;

	const { t } = useTranslation();
	const gameContext = useContext(GameContext);
	const { players } = gameContext;
	const numberOfPlayers = players.length;
	const [viewingPlayerIndex, setViewingPlayerIndex] = useState(0);

	const moveToNextPlayer = useCallback(() => {
		setViewingPlayerIndex((prev) => prev + 1);
	}, []);

	if (!players.length) {
		return <></>;
	}

	if (viewingPlayerIndex >= numberOfPlayers) {
		return (
			<div className="flex flex-col gap-3">
				<SectionHeading>{t('play-game-ready')}</SectionHeading>
				<Button className="w-full" onClick={onStart}>{t('play-start')}</Button>
			</div>
		);
	}

	const viewingPlayer = players[viewingPlayerIndex];

	return (
		<PregameCard
			key={viewingPlayer.name}
			playerName={viewingPlayer.name}
			isImpostor={viewingPlayer.isImpostor}
			onPass={moveToNextPlayer}
		/>
	);
};

export default PregameScreen;
