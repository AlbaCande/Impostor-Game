import settings from './settings';
import home from './home';
import play from './play';

const translations = {
	submit: 'Soumettre',
	loading: 'Chargement...',
	...settings,
	...home,
	...play,
};

export default translations;
