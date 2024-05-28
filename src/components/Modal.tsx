import type { FC, PropsWithChildren } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from './ui/dialog';

type Props = PropsWithChildren & {
	title: string
	description: string
	isOpen?: boolean
	onBackdropClick?: () => void
	onClickClose?: () => void
}

const Modal: FC<Props> = (props) => {
	const {
		title,
		description,
		isOpen,
		onBackdropClick,
		onClickClose,
		children,
	} = props;

	return (
		<Dialog open={isOpen} onOpenChange={onClickClose}>
			<DialogContent onInteractOutside={onBackdropClick}>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
