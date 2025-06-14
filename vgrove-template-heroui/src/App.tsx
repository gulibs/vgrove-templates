import { createI18nClient, I18nProvider } from '@gulibs/react-autoroutes-client';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { resources, supportedLocales } from '@gulibs/i18n-locales';
import { routes } from '@gulibs/react-autopages';
console.log("routes", routes)
const router = createBrowserRouter(routes);

const client = createI18nClient({
  resources,
  supportedLocales,
  defaultLocale: 'en'
});

function App() {

  return (
    <I18nProvider client={client}>
      <RouterProvider router={router} />
    </I18nProvider>
  )
}

export default App
