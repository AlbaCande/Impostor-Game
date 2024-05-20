import type { FC } from 'react';
import './App.css';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const App: FC = () => {
	return (
		<>
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
			<Avatar>
				<AvatarFallback>AC</AvatarFallback>
			</Avatar>
		</>
	);
};

export default App;
