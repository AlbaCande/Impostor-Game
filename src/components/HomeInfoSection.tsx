import type { FC } from 'react';

type Props = {
	titleSection: string;
	bodySection: string;
}

const HomeInfoSection: FC<Props> = (props) => {
	const {
		titleSection,
		bodySection,
	} = props;

	return (
		<div className="flex flex-col gap-1">
			<h2 className="text-2xl font-bold">{titleSection}</h2>
			<p className="text-lg">{bodySection}</p>
		</div>
	);
};

export default HomeInfoSection;
