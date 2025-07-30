import type { SidebarMenuGroupItems } from '@gulibs/vgrove-ui';
import { VGroveLayout, Brand } from '@gulibs/vgrove-ui';
import { useI18n } from '@gulibs/vgrove-ui';
import { Outlet } from 'react-router';

const RootLayout = () => {
    const { t } = useI18n();

    const menuItems: SidebarMenuGroupItems = [
        {
            key: 'main-group',
            title: "Dashboard",
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