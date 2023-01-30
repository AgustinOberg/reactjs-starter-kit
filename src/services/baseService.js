import axios from 'axios';
import i18next from 'i18next';

const CREDENTIALS = {
	URL:
		import.meta.env.VITE_BACKEND_URL ||
		'CHANGE .ENV FILE -> CREATE VITE_BACKEND_URL',
};

export const baseService = axios.create({
	baseURL: CREDENTIALS.URL,
	timeout: 10000,
	headers: { 'content-type': 'application/json' },
});
export const publicBaseService = axios.create({
	baseURL: CREDENTIALS.URL,
	timeout: 10000,
	headers: { 'content-type': 'application/json' },
});

baseService.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		config.headers.lang = i18next.language;
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

publicBaseService.interceptors.request.use(config => {
	config.headers.lang = i18next.language;
	return config;
});
