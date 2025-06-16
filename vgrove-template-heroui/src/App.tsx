import { resources, supportedLocales } from '@gulibs/i18n-locales';
import { routes } from '@gulibs/react-autopages';
import { createI18nClient, I18nProvider } from '@gulibs/react-autoroutes-client';
import { HeroUIProvider } from '@heroui/react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter(routes);

const client = createI18nClient({
  resources,
  supportedLocales,
  defaultLocale: 'en'
});

function App() {

  return (
    <HelmetProvider>
      <HeroUIProvider>
        <I18nProvider client={client}>
          <RouterProvider router={router} />
        </I18nProvider>
      </HeroUIProvider>
    </HelmetProvider>
  )
}

export default App
