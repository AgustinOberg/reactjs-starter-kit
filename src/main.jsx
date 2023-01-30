import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './i18n';
import Loading from '@/components/Loading';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback={<Loading />}>
			<App />
		</Suspense>
	</React.StrictMode>
);
