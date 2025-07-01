import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.common.home.title',
        description: 'VGrove HeroUI Template - Modern React application template'
    },
    pageMeta: {
        title: 'common.common.home.title',
        description: 'common.common.home.subtitle'
    },
    breadcrumbs: {
        href: '/',
        className: 'text-primary'
    }
});

export default handle; 