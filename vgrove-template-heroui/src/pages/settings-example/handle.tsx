import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.examples.settings.title',
        description: 'Application configuration and preferences management'
    },
    pageMeta: {
        title: 'common.examples.settings.title',
        description: 'common.examples.settings.subtitle'
    },
    breadcrumbs: {
        href: '/settings-example',
        className: 'text-primary'
    }
});

export default handle; 