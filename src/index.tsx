import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductContextProvider } from './appState/productsContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ProductContextProvider>
			<App />
		</ProductContextProvider>
	</React.StrictMode>,
);
