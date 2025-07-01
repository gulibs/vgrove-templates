import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.demo.routing.title',
        description: 'Auto-routing system and navigation examples'
    },
    pageMeta: {
        title: 'common.demo.routing.title',
        description: 'common.demo.routing.subtitle'
    },
    breadcrumbs: {
        href: '/routing-demo',
        className: 'text-primary'
    }
});

export default handle; 