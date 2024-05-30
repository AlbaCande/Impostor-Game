import type { FC, PropsWithChildren } from 'react';
import Topbar from '../Topbar';
import { useNavigate } from 'react-router-dom';

const LayoutGame: FC<PropsWithChildren> = (props) => {
	const {
		children,
	} = props;

	const navigate = useNavigate();

	return (
		<div className="flex flex-col w-screen h-screen bg-background">
			<Topbar onBack={() => navigate('/play')} />
			<main className="overflow-y-auto p-3 h-full">
				{children}
			</main>
		</div>
	);
};

export default LayoutGame;
