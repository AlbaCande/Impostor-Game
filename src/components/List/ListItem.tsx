import { cn } from '@/lib/utils';
import type { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
	title: string
	onClick?: () => void
	className?: string
}

const ListItem: FC<Props> = (props) => {
	const {
		title,
		onClick,
		className,
		children,
	} = props;

	return (
		<div onClick={onClick} className={cn('flex flex-1 h-10 bg-background p-3 align-middle justify-between rounded', className)}>
			<div>{title}</div>
			<div className="flex align-middle h-full gap-2">{children}</div>
		</div>
	);
};

export default ListItem;
