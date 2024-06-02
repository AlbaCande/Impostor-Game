import { useContext } from 'react';
import type { FC } from 'react';
import GameContext from './context/GameContext';
import SectionHeading from './SectionHeading';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const PostgameScreen: FC = () => {
	const {
		players,
	} = useContext(GameContext);

	const { t } = useTranslation();

	const impostors = players.filter(player => player.isImpostor);
	const impostorsNames = impostors.map(impostor => impostor.name);
	const remainingImpostors = impostors.filter(player => !player.isEliminated);

	return (
		<div className="flex flex-col gap-3">
			<SectionHeading>
				{t(
					remainingImpostors.length ? 'play-impostors-win' : 'play-innocents-win',
					{ impostors: impostorsNames.join(', ') },
				)}
			</SectionHeading>
			<Link to="/play">
				<Button className="w-full">{t('play-back-lobby')}</Button>
			</Link>
		</div>
	);
};

export default PostgameScreen;
