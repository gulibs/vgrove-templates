import { createI18nClient, I18nProvider } from '@gulibs/react-autoroutes-client';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { resources, supportedLocales } from '@gulibs/i18n-locales';
import { routes } from '@gulibs/react-autopages';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter(routes);

const client = createI18nClient({
    resources,
    supportedLocales,
    defaultLocale: 'zh'
});

function App() {
    return (
        <HelmetProvider>
            <I18nProvider client={client}>
                <RouterProvider router={router} />
            </I18nProvider>
        </HelmetProvider>
    )
}

export default App 