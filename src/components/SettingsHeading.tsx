import type { FC, PropsWithChildren } from 'react';

const SettingsHeading: FC<PropsWithChildren> = (props) => {
	const {
		children,
	} = props;

	return (
		<h2 className="text-xl self-start">{children}</h2>
	);
};

export default SettingsHeading;
