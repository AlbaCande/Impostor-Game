import type { FC } from 'react';

const Topbar: FC = () => {
	return (
		<div className="flex justify-center items-center gap-4 w-full h-12 bg-surface p-4">
			<img src="imgs/logo.png" alt="logo" className="w-32" />
		</div>
	);
};

export default Topbar;
