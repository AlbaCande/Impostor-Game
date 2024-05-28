import { Children } from 'react';
import type { FC, PropsWithChildren } from 'react';

const ListContainer: FC<PropsWithChildren> = (props) => {
	const {
		children,
	} = props;

	if (!Children.count(children)) {
		return <></>;
	}

	return (
		<div className="flex flex-col w-full bg-surface rounded p-3 gap-2">
			{children}
		</div>
	);
};

export default ListContainer;
