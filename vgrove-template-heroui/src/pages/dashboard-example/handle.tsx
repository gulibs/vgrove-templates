import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'examples.dashboard.title',
        description: 'Complete dashboard interface with management features'
    },
    pageMeta: {
        title: 'examples.dashboard.title',
        description: 'examples.dashboard.subtitle'
    },
    breadcrumbs: {
        href: '/dashboard-example',
        className: 'text-primary'
    }
});

export default handle; 