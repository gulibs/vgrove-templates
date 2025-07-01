import type { SidebarMenuGroupItems } from '@gulibs/vgrove-ui';
import { VGroveLayout, Brand } from '@gulibs/vgrove-ui';
import { useI18n } from '@gulibs/vgrove-client';
import { Outlet } from 'react-router';

const RootLayout = () => {
    const { t } = useI18n();

    const menuItems: SidebarMenuGroupItems = [
        {
            key: 'main-group',
            title: t('common.nav.groups.main'),
            items: [
                {
                    key: 'dashboard',
                    title: t('common.nav.home'),
                    description: t('common.common.home.subtitle'),
                    icon: 'solar:home-2-line-duotone',
                    to: '/',
                    shortcut: '⌘D',
                }
            ]
        },
        {
            key: 'components-group',
            title: t('common.nav.groups.components'),
            description: t('common.nav.groups.componentsDesc'),
            items: [
                {
                    key: 'navbar-demo',
                    title: t('common.nav.navbar-demo'),
                    description: t('common.demo.navbar.subtitle'),
                    icon: 'solar:widget-line-duotone',
                    to: '/navbar-demo',
                    badge: 'New',
                    shortcut: '⌘N',
                },
                {
                    key: 'forms-demo',
                    title: t('common.nav.forms-demo'),
                    description: t('common.demo.forms.subtitle'),
                    icon: 'solar:document-text-line-duotone',
                    to: '/forms-demo',
                    badge: '8',
                },
                {
                    key: 'charts-demo',
                    title: t('common.nav.charts-demo'),
                    description: t('common.demo.charts.subtitle'),
                    icon: 'solar:chart-line-duotone',
                    to: '/charts-demo',
                },
                {
                    key: 'tables-demo',
                    title: t('common.nav.tables-demo'),
                    description: t('common.demo.tables.subtitle'),
                    icon: 'solar:tablet-line-duotone',
                    to: '/tables-demo',
                }
            ]
        },
        {
            key: 'features-group',
            title: t('common.nav.groups.features'),
            description: t('common.nav.groups.featuresDesc'),
            items: [
                {
                    key: 'i18n-demo',
                    title: t('common.nav.i18n-demo'),
                    description: t('common.demo.i18n.subtitle'),
                    icon: 'solar:global-line-duotone',
                    to: '/i18n-demo',
                    shortcut: '⌘I',
                },
                {
                    key: 'routing-demo',
                    title: t('common.nav.routing-demo'),
                    description: t('common.demo.routing.subtitle'),
                    icon: 'solar:route-line-duotone',
                    to: '/routing-demo',
                },
                {
                    key: 'themes-demo',
                    title: t('common.nav.themes-demo'),
                    description: t('common.demo.themes.subtitle'),
                    icon: 'solar:palette-line-duotone',
                    to: '/themes-demo',
                }
            ]
        },
        {
            key: 'auth-group',
            title: t('common.nav.groups.auth'),
            description: t('common.nav.groups.authDesc'),
            items: [
                {
                    key: 'login',
                    title: t('common.nav.login'),
                    description: t('common.auth.login.subtitle'),
                    icon: 'solar:login-line-duotone',
                    to: '/auth/login',
                },
                {
                    key: 'guard-demo',
                    title: t('common.nav.guard-demo'),
                    description: t('common.auth.guard.subtitle'),
                    icon: 'solar:shield-check-line-duotone',
                    to: '/auth/guard-demo',
                    badge: 'New',
                }
            ]
        },
        {
            key: 'examples-group',
            title: t('common.nav.groups.examples'),
            description: t('common.nav.groups.examplesDesc'),
            items: [
                {
                    key: 'dashboard-example',
                    title: t('common.nav.dashboard-example'),
                    description: t('common.examples.dashboard.subtitle'),
                    icon: 'solar:monitor-line-duotone',
                    to: '/dashboard-example',
                    badge: 'Pro',
                },
                {
                    key: 'profile-example',
                    title: t('common.nav.profile-example'),
                    description: t('common.examples.profile.subtitle'),
                    icon: 'solar:user-line-duotone',
                    to: '/profile-example',
                },
                {
                    key: 'settings-example',
                    title: t('common.nav.settings-example'),
                    description: t('common.examples.settings.subtitle'),
                    icon: 'solar:settings-line-duotone',
                    to: '/settings-example',
                    shortcut: '⌘,',
                }
            ]
        }
    ];

    return (
        <VGroveLayout
            items={menuItems}
            navbarProps={{
                brandContent: <Brand className='w-10 h-10' name="VGrove Template" logo="/vgrove.svg" />
            }}
        >
            <Outlet />
        </VGroveLayout>
    );
};

export default RootLayout;