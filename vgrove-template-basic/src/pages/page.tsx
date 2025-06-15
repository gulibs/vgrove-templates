import { useI18n } from '@gulibs/react-autoroutes-client';
import type { I18nKeys } from '../i18n-keys';
import './page.css';

export default function HomePage() {
    const { t, locale, setLocale, isReady, availableLocales } = useI18n<I18nKeys>();

    // 语言切换
    const handleLanguageChange = async (newLocale: string) => {
        await setLocale(newLocale);
    };

    if (!isReady) {
        return (
            <div className="loading">
                <div>{t('common.common.loading')}</div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="welcome-section">
                <h1>{t('common.common.welcome')}</h1>
                <p>{t('app.description')}</p>
            </div>

            <div className="language-section">
                <h3>{t('common.common.language')}</h3>
                <div className="language-switcher">
                    {availableLocales.map((lang) => (
                        <button
                            key={lang}
                            className={`lang-btn ${locale === lang ? 'active' : ''}`}
                            onClick={() => handleLanguageChange(lang)}
                        >
                            {lang === 'en' ? '🇺🇸 English' : '🇨🇳 中文'}
                        </button>
                    ))}
                </div>
            </div>

            <div className="info-section">
                <p><strong>{t('common.common.language')}:</strong> {locale}</p>
                <p><strong>Available:</strong> {availableLocales.join(', ')}</p>
            </div>
        </div>
    );
} 