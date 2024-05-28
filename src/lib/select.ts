export type SelectOption = {
	label: string
	value: string
}

export const getNumberOptions = (limit: number): SelectOption[] => {
	return Array.from({ length: limit }, (_, k) => k + 1).map(i => ({
		label: `${i}`,
		value: `${i}`,
	}));
};
