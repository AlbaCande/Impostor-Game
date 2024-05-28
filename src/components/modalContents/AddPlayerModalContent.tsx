import type { FC } from 'react';
import { useState } from 'react';
import { Input } from '../ui/input';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';

type Props = {
	onButtonClick: (playerName: string) => void
	defaultInputValue?: string
}

const PlayerActionsModalContent: FC<Props> = (props) => {
	const {
		onButtonClick,
		defaultInputValue,
	} = props;

	const [playerName, setPlayerName] = useState(defaultInputValue ?? '');
	const { t } = useTranslation();

	return (
		<div className="flex flex-col w-full gap-3">
			<div className="flex px-4 py-2 w-full">
				<Input
					name="playerName"
					placeholder={t('settings-player-name')}
					onChange={(ev) => setPlayerName(ev.target.value)}
					value={playerName}
				/>
			</div>
			<div className="flex w-full justify-end">
				<Button onClick={() => onButtonClick(playerName)} className="w-32">{t('submit')}</Button>
			</div>
		</div>
	);
};

export default PlayerActionsModalContent;
