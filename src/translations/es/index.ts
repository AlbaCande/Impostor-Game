import settings from './settings';
import home from './home';
import play from './play';

const translations = {
	submit: 'Enviar',
	loading: 'Cargando...',
	...settings,
	...home,
	...play,
};

export default translations;
