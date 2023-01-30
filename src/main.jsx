import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import Loading from '@/components/Loading';
import MainRouter from '@/router/MainRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback={<Loading />}>
			<Provider store={store}>
				<BrowserRouter>
					<MainRouter />
				</BrowserRouter>
			</Provider>
		</Suspense>
	</React.StrictMode>
);
