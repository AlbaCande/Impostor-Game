import { toast } from 'sonner';

export const showToast = (text: string): void => {
	toast(text, {
		position: 'top-center',
	});
};
