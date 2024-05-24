import type { FC } from 'react';

const Topbar: FC = () => {
	return (
		<div className="flex justify-center items-center gap-4 w-full h-12 bg-surface p-4">
			<h1 className="caps-letter text-xl">IMPOSTOR</h1>
		</div>
	);
};

export default Topbar;
