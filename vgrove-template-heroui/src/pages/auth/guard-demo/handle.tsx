import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.auth.guard.title',
        description: 'Authentication guards and route protection demonstration'
    },
    pageMeta: {
        title: 'common.auth.guard.title',
        description: 'common.auth.guard.subtitle'
    },
    breadcrumbs: {
        href: '/auth/guard-demo',
        className: 'text-primary'
    }
});

export default handle; 