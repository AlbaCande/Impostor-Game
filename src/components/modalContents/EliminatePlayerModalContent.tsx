import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';

type Props = {
	onButtonClick?: () => void
}

const EliminatePlayerModalContent: FC<Props> = (props) => {
	const {
		onButtonClick,
	} = props;

	const { t } = useTranslation();

	return (
		<div className="flex flex-col w-full gap-3">
			<div className="flex w-full justify-end">
				<Button onClick={onButtonClick} className="w-32">{t('play-eliminate-modal-button')}</Button>
			</div>
		</div>
	);
};

export default EliminatePlayerModalContent;
