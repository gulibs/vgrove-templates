import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.demo.themes.title',
        description: 'Theme system functionality and customization examples'
    },
    pageMeta: {
        title: 'common.demo.themes.title',
        description: 'common.demo.themes.subtitle'
    },
    breadcrumbs: {
        href: '/themes-demo',
        className: 'text-primary'
    }
});

export default handle; 