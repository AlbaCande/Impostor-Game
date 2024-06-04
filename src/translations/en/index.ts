import settings from './settings';
import home from './home';
import play from './play';

const translations = {
	submit: 'Submit',
	loading: 'Loading...',
	...settings,
	...home,
	...play,
};

export default translations;
