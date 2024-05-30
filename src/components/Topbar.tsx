import { ArrowLeftIcon } from '@radix-ui/react-icons';
import type { FC } from 'react';

type Props = {
	onBack?: () => void
}

const Topbar: FC<Props> = (props) => {
	const {
		onBack,
	} = props;

	return (
		<div className="flex justify-between items-center gap-4 w-full h-12 bg-surface p-4">
			<div className="w-16">
				{
					onBack && (
						<ArrowLeftIcon onClick={onBack} className="w-7 h-7" />
					)
				}
			</div>
			<div>
				<img className="w-32" src="imgs/logo.png" alt="logo" />
			</div>
			<div className="w-16"></div>
		</div>
	);
};

export default Topbar;
