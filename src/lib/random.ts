const getRandomInt = (max: number): number => {
	return Math.floor(Math.random() * max);
};

export const getRandomInts = (max: number, count: number): number[] => {
	const randomInts: number[] = [];

	while (randomInts.length < count) {
		const randomInt = getRandomInt(max);

		if (!randomInts.includes(randomInt)) {
			randomInts.push(randomInt);
		}
	}

	return randomInts;
};
