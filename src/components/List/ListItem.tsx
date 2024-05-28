import type { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
	title: string
}

const ListItem: FC<Props> = (props) => {
	const {
		title,
		children,
	} = props;

	return (
		<div className="flex flex-1 h-10 bg-background p-3 align-middle justify-between rounded">
			<div>{title}</div>
			<div className="flex align-middle h-full gap-2">{children}</div>
		</div>
	);
};

export default ListItem;
