import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.auth.login.title',
        description: 'User authentication login page'
    },
    pageMeta: {
        title: 'common.auth.login.title',
        description: 'common.auth.login.subtitle'
    },
    breadcrumbs: {
        href: '/auth/login',
        className: 'text-primary'
    }
});

export default handle; 