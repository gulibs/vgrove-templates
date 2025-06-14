/// <reference types="vite/client" /> 
/// <reference types="@gulibs/plugin-react-autoroutes/react-routes" />
/// <reference types="@gulibs/vite-plugin-i18n/i18n-locales" />

// Fallback declarations for virtual modules
declare module '@gulibs/react-autopages' {
    import type { RouteObject } from 'react-router';
    export const routes: RouteObject[];
}

declare module '@gulibs/i18n-locales' {
    export const resources: Record<string, Record<string, any>>;
    export const supportedLocales: string[];
    export default resources;
}