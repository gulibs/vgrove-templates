import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.examples.profile.title',
        description: 'User profile management and settings interface'
    },
    pageMeta: {
        title: 'common.examples.profile.title',
        description: 'common.examples.profile.subtitle'
    },
    breadcrumbs: {
        href: '/profile-example',
        className: 'text-primary'
    }
});

export default handle; 