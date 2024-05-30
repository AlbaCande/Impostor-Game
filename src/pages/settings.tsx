import ListContainer from '@/components/List/ListContainer';
import ListedPlayer from '@/components/ListedPlayer';
import Modal from '@/components/Modal';
import SectionHeading from '@/components/SectionHeading';
import LayoutRoot from '@/components/layouts/LayoutRoot';
import PlayerActionsModalContent from '@/components/modalContents/AddPlayerModalContent';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getNumberOptions } from '@/lib/select';
import { getObjectFromSettings, parseSettingsFromJSON } from '@/lib/settings';
import { showToast } from '@/lib/toasts';
import { Children, useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

const SettingsPage: FC = () => {
	const PLAYERS_PER_IMPOSTOR = 3;
	const { t, i18n } = useTranslation();

	const [gameMode, setGameMode] = useState('classic');
	const [language, setLanguage] = useState(i18n.language);
	const [players, setPlayers] = useState<string[]>([]);
	const [openDialog, setOpenDialog] = useState<'add' | 'edit' | undefined>(undefined);
	const [playerBeingEdited, setPlayerBeingEdited] = useState<string>('');
	const [maxImpostors, setMaxImpostors] = useState(0);
	const [selectedImpostors, setSelectedImpostors] = useState('');

	const TIME_FOR_SELECTED_IMPOSTORS = 50;

	const restoreSettings = useCallback(() => {
		const settingsJSON = localStorage.getItem('settings');

		if (!settingsJSON) {
			return;
		}

		const parsedSettings = parseSettingsFromJSON(settingsJSON);

		setGameMode(parsedSettings.gameMode);
		setLanguage(parsedSettings.language);
		setPlayers(parsedSettings.players);

		setTimeout(() => {
			setSelectedImpostors(parsedSettings.numberOfImpostors);
		}, TIME_FOR_SELECTED_IMPOSTORS);
	}, []);

	useEffect(() => {
		restoreSettings();
	}, [restoreSettings]);

	useEffect(() => {
		setMaxImpostors(() => {
			const newMaxImpostors = Math.floor(players.length / PLAYERS_PER_IMPOSTOR);
			const parsedSelectedImpostors = Number(selectedImpostors);

			if (!newMaxImpostors) {
				setSelectedImpostors('');
			}

			if (parsedSelectedImpostors > newMaxImpostors) {
				setSelectedImpostors('' + newMaxImpostors);
			}

			return newMaxImpostors;
		});
	}, [players, selectedImpostors]);

	const languageSelectedHandler = (selectedLanguage: 'en' | 'es' | 'fr'): void => {
		i18n.changeLanguage(selectedLanguage);
		setLanguage(selectedLanguage);
	};

	const closeDialog = useCallback(() => {
		setOpenDialog(undefined);
	}, []);

	const addNewPlayer = useCallback((newPlayer: string) => {
		if (!newPlayer) {
			showToast(t('settings-empty-error'));

			return;
		}

		setPlayers((prev) => [...prev, newPlayer]);

		showToast(t('settings-player-added'));

		setOpenDialog(undefined);
	}, [t]);

	const editPlayer = useCallback((defaultValue: string) => (newPlayerName: string): void => {
		if (!newPlayerName) {
			showToast(t('settings-empty-error'));

			return;
		}

		const playerIndexToEdit = players.indexOf(defaultValue);

		setPlayers((prev) => {
			prev[playerIndexToEdit] = newPlayerName;

			return prev;
		});

		showToast(t('settings-player-edited'));
		setOpenDialog(undefined);
	}, [t, players]);

	const handlePlayerEdit = useCallback((playerName: string) => {
		setPlayerBeingEdited(playerName);
		setOpenDialog('edit');
	}, []);

	const handlePlayerDelete = useCallback((playerToDelete: string) => {
		setPlayers(players.filter((p) => p !== playerToDelete));

		showToast(t('settings-player-deleted'));
	}, [players, t]);

	const impostorsOptions = getNumberOptions(maxImpostors);

	const handleSave = useCallback(() => {
		const settingsObject = getObjectFromSettings({
			gameMode,
			language,
			players,
			numberOfImpostors: selectedImpostors,
		});

		localStorage.setItem('settings', settingsObject);

		showToast(t('settings-saved'));
	}, [gameMode, language, players, selectedImpostors, t]);

	return (
		<LayoutRoot>
			<div className="flex flex-col justify-center w-full gap-2">
				<SectionHeading>{t('settings-game-mode')}</SectionHeading>
				<Tabs className="w-full" value={gameMode}>
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="classic" onClick={() => setGameMode('classic')}>{t('mode-classic')}</TabsTrigger>
						<TabsTrigger value="adventure" onClick={() => setGameMode('adventure')}>{t('mode-adventure')}</TabsTrigger>
					</TabsList>
				</Tabs>
				<SectionHeading>{t('settings-language')}</SectionHeading>
				<Tabs className="w-full" value={language}>
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger onClick={() => languageSelectedHandler('en')} value="en">{t('language-english')}</TabsTrigger>
						<TabsTrigger onClick={() => languageSelectedHandler('es')} value="es">{t('language-spanish')}</TabsTrigger>
						<TabsTrigger onClick={() => languageSelectedHandler('fr')} value="fr">{t('language-french')}</TabsTrigger>
					</TabsList>
				</Tabs>
				<SectionHeading>{t('settings-players')}</SectionHeading>
				<ListContainer>
					{Children.toArray(players.map((player) => (
						<ListedPlayer
							playerName={player}
							onEdit={handlePlayerEdit}
							onDelete={handlePlayerDelete}
						/>
					)))}
				</ListContainer>
				<Button className="w-32" onClick={() => setOpenDialog('add')}>{t('settings-add-player')}</Button>
				<Modal
					isOpen={openDialog === 'add'}
					onClickClose={closeDialog}
					onBackdropClick={closeDialog}
					title={t('settings-add-player')}
					description={t('settings-add-player-description')}
				>
					<PlayerActionsModalContent
						onButtonClick={addNewPlayer}
					/>
				</Modal>

				<Modal
					isOpen={openDialog === 'edit'}
					onClickClose={closeDialog}
					onBackdropClick={closeDialog}
					title={t('settings-edit-player')}
					description={t('settings-edit-player-description')}
				>
					<PlayerActionsModalContent
						onButtonClick={editPlayer(playerBeingEdited)}
						defaultInputValue={playerBeingEdited}
					/>
				</Modal>
				<div className="flex flex-col gap-2 mb-4">
					<SectionHeading>{t('settings-impostors')}</SectionHeading>
					{((): JSX.Element => {
						if (!maxImpostors && !impostorsOptions.length) {
							return (
								<span>{t('settings-impostors-error')}</span>
							);
						}

						return (
							<Select value={selectedImpostors} onValueChange={(value) => setSelectedImpostors(value)}>
								<SelectTrigger>
									<SelectValue placeholder={t('settings-impostors-placeholder')} />
								</SelectTrigger>
								<SelectContent>
									{Children.toArray(impostorsOptions.map(({ label, value }) => (
										<SelectItem value={value}>{label}</SelectItem>
									)))}
								</SelectContent>
							</Select>
						);
					})()}
				</div>
				<Separator />
				<div className="flex justify-between p-4">
					<Button variant="outline" onClick={restoreSettings}>{t('settings-restore')}</Button>
					<Button variant="default" disabled={!selectedImpostors} onClick={handleSave}>{t('settings-save')}</Button>
				</div>
			</div>
		</LayoutRoot>
	);
};

export default SettingsPage;
