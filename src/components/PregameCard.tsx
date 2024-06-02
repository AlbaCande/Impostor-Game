import { useContext, useState } from 'react';
import type { FC } from 'react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { useTranslation } from 'react-i18next';
import GameContext from './context/GameContext';

type Props = {
	playerName: string
	isImpostor: boolean
	onPass?: () => void,
}

const PregameCard: FC<Props> = (props) => {
	const {
		playerName,
		isImpostor,
		onPass,
	} = props;

	const { t } = useTranslation();
	const [isWordRevealed, setIsWordRevealed] = useState(false);

	const { wordPair } = useContext(GameContext);
	const [innocentWord, impostorWord] = wordPair;

	return (
		<Card className="h-full flex flex-col justify-between bg-surface" onClick={() => isWordRevealed ? onPass && onPass() : setIsWordRevealed(true)}>
			<CardHeader className="gap-6">
				<CardTitle className="text-center text-6xl font-bold text-primary-foreground">{playerName}</CardTitle>
				<CardDescription className="text-center text-4xl text-primary-foreground">{t('play-your-word-is')}</CardDescription>
				{((): JSX.Element => {
					if (!isWordRevealed) {
						return <></>;
					}

					return (
						<span className="text-center text-2xl font-bold text-primary-foreground">{isImpostor ? impostorWord : innocentWord}</span>
					);
				})()}
			</CardHeader>
			{((): JSX.Element => {
				if (!isWordRevealed) {
					return <></>;
				}

				return (
					<CardFooter className="self-center">
						<span className="text-center text-xl text-primary-foreground">{t('play-pass-next-player')}</span>
					</CardFooter>
				);
			})()}
			<CardFooter>
			</CardFooter>
		</Card>
	);
};

export default PregameCard;
