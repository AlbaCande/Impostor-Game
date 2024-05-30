import ListContainer from '@/components/List/ListContainer';
import ListItem from '@/components/List/ListItem';
import SectionHeading from '@/components/SectionHeading';
import LayoutRoot from '@/components/layouts/LayoutRoot';
import { Button } from '@/components/ui/button';
import { parseSettingsFromJSON } from '@/lib/settings';
import { Children, useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PlayPage: FC = () => {
	const { t } = useTranslation();
	const [players, setPlayers] = useState<string[]>([]);
	const [selectedImpostors, setSelectedImpostors] = useState('');

	const restoreSettings = useCallback(() => {
		const settingsJSON = localStorage.getItem('settings');

		if (!settingsJSON) {
			return;
		}

		const parsedSettings = parseSettingsFromJSON(settingsJSON);

		setPlayers(parsedSettings.players);
		setSelectedImpostors(parsedSettings.numberOfImpostors);
	}, []);

	useEffect(() => {
		restoreSettings();
	}, [restoreSettings]);

	return (
		<LayoutRoot>
			{((): JSX.Element => {
				if (!players.length || !Number(selectedImpostors)) {
					return (
						<span>{t('play-no-players-error')}</span>
					);
				}

				return (
					<div className="flex flex-col justify-center w-full gap-3">
						<SectionHeading>{t('play-confirm-players')}</SectionHeading>
						<ListContainer>
							{Children.toArray(players.map((player) => <ListItem title={player} />))}
						</ListContainer>
						<Link to="/game">
							<Button className="w-full">{t('play-start')}</Button>
						</Link>
					</div>
				);
			})()}
		</LayoutRoot>
	);
};

export default PlayPage;
