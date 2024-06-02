import { GiDeathSkull } from 'react-icons/gi';
import { HiEmojiHappy } from 'react-icons/hi';
import type { FC } from 'react';
import ListItem from './List/ListItem';

type Props = {
	playerName: string
	onClick?: (playerName: string) => void
}

const ListedIngamePlayer: FC<Props> = (props) => {
	const {
		playerName,
		onClick,
	} = props;

	const Icon = onClick ? HiEmojiHappy : GiDeathSkull;

	return (
		<ListItem className={onClick ? undefined : 'opacity-60'} title={playerName} onClick={() => onClick && onClick(playerName)}>
			<Icon className="h-5 w-5 cursor-pointer" />
		</ListItem>
	);
};

export default ListedIngamePlayer;
