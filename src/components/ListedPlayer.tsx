import type { FC } from 'react';
import ListItem from './List/ListItem';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';

type Props = {
	playerName: string
	onEdit?: (playerName: string) => void
	onDelete?: (playerName: string) => void
}

const ListedPlayer: FC<Props> = (props) => {
	const {
		playerName,
		onEdit,
		onDelete,
	} = props;

	return (
		<ListItem title={playerName}>
			<Pencil1Icon className="h-5 w-5 cursor-pointer" onClick={() => onEdit && onEdit(playerName)} />
			<TrashIcon className="h-5 w-5 cursor-pointer" onClick={() => onDelete && onDelete(playerName)} />
		</ListItem>
	);
};

export default ListedPlayer;
