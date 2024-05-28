export type GameSettings = {
	gameMode: string
	language: string
	players: string[]
	numberOfImpostors: string
}

export const getObjectFromSettings = (settings: GameSettings): string => {
	const {
		gameMode,
		language,
		players,
		numberOfImpostors,
	} = settings;

	return JSON.stringify({
		gameMode,
		language,
		players,
		numberOfImpostors,
	});
};

export const parseSettingsFromJSON = (json: string): GameSettings => {
	return JSON.parse(json);
};
