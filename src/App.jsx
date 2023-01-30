import { useTranslation } from 'react-i18next';

const App = () => {
	const { t, i18n } = useTranslation();
	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
	};
	return (
		<>
			<p className='text-center mt-12'>{t('title')}</p>
			<button onClick={changeLanguage}>{t('change')}</button>
		</>
	);
};

export default App;
