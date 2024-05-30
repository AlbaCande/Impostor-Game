import type { FC, PropsWithChildren } from 'react';

const SectionHeading: FC<PropsWithChildren> = (props) => {
	const {
		children,
	} = props;

	return (
		<h2 className="text-xl self-start">{children}</h2>
	);
};

export default SectionHeading;
