import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.demo.i18n.title',
        description: 'Multi-language support and localization demonstration'
    },
    pageMeta: {
        title: 'common.demo.i18n.title',
        description: 'common.demo.i18n.subtitle'
    },
    breadcrumbs: {
        href: '/i18n-demo',
        className: 'text-primary'
    }
});

export default handle; 