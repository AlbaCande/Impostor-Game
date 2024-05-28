import type { FC, PropsWithChildren } from 'react';
import Topbar from '../Topbar';
import Navbar from '../Navbar';

const LayoutRoot: FC<PropsWithChildren> = (props) => {
	const {
		children,
	} = props;

	return (
		<div className="flex flex-col w-screen h-screen bg-background">
			<Topbar />
			<main className="overflow-y-auto mb-16 p-3">
				{children}
			</main>
			<Navbar />
		</div>
	);
};

export default LayoutRoot;
