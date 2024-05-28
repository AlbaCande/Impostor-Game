import settings from './settings';
import home from './home';
import play from './play';

const translations = {
	submit: 'Soumettre',
	...settings,
	...home,
	...play,
};

export default translations;
