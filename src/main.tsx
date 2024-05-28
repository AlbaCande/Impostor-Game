import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './constants/routes';
import './i18n';
import { Toaster } from './components/ui/sonner';

const root = document.getElementById('root');

const router = createBrowserRouter(routes);

if (root) {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<RouterProvider router={router} />
			<Toaster />
		</React.StrictMode>,
	);
}
