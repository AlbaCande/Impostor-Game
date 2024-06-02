import type { FC } from 'react';
import { Children, useCallback, useContext, useEffect, useState } from 'react';
import GameContext from './context/GameContext';
import SectionHeading from './SectionHeading';
import { useTranslation } from 'react-i18next';
import ListContainer from './List/ListContainer';
import ListedIngamePlayer from './ListedIngamePlayer';
import Modal from './Modal';
import EliminatePlayerModalContent from './modalContents/EliminatePlayerModalContent';
import { showToast } from '@/lib/toasts';

type Props = {
	onFinish?: () => void
}

const IngameScreen: FC<Props> = (props) => {
	const { t } = useTranslation();
	const [showModal, setShowModal] = useState(false);
	const [playerToEliminate, setPlayerToEliminate] = useState('');

	const {
		onFinish,
	} = props;

	const {
		players,
		eliminatePlayer,
	} = useContext(GameContext);

	const remainingPlayers = players.filter((player) => !player.isEliminated);

	const numberOfRemainingPlayers = remainingPlayers.length;
	const numberOfRemainingImpostors = remainingPlayers.filter((player) => player.isImpostor).length;
	const numberOfRemainingInnocents = numberOfRemainingPlayers - numberOfRemainingImpostors;

	const handleEliminate = useCallback((playerName: string): void => {
		setPlayerToEliminate(playerName);
		setShowModal(true);
	}, []);

	const handleModalClose = useCallback(() => setShowModal(false), []);

	useEffect(() => {
		if (numberOfRemainingImpostors <= 0 || numberOfRemainingImpostors >= numberOfRemainingInnocents) {
			onFinish && onFinish();
		}
	}, [numberOfRemainingImpostors, onFinish, numberOfRemainingInnocents]);

	return (
		<div className="flex flex-col gap-3">
			<SectionHeading>{t('play-players-remaining', { num: numberOfRemainingPlayers })}</SectionHeading>
			<SectionHeading>{t('play-impostors-remaining', { num: numberOfRemainingImpostors })}</SectionHeading>
			<ListContainer>
				{Children.toArray(players.map((player) => (
					<ListedIngamePlayer
						playerName={player.name}
						onClick={player.isEliminated ? undefined : handleEliminate}
					/>
				)))}
			</ListContainer>
			<Modal
				isOpen={showModal}
				title={t('play-eliminate-modal-title')}
				description={t('play-eliminate-modal-description', { playerName: playerToEliminate })}
				onBackdropClick={handleModalClose}
				onClickClose={handleModalClose}
			>
				<EliminatePlayerModalContent onButtonClick={() => {
					const player = remainingPlayers.find(p => p.name === playerToEliminate);

					if (!player) {
						return;
					}

					showToast(t(
						player.isImpostor ? 'play-was-impostor' : 'play-was-not-impostor',
						{ playerName: player.name },
					));

					eliminatePlayer(playerToEliminate);
					setPlayerToEliminate('');
					setShowModal(false);
				}} />
			</Modal>
		</div>
	);
};

export default IngameScreen;
