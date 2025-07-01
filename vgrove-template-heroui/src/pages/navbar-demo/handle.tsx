import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.demo.navbar.title',
        description: 'HeroUI Navbar component demonstration page'
    },
    pageMeta: {
        title: 'common.demo.navbar.title',
        description: 'common.demo.navbar.subtitle'
    },
    breadcrumbs: {
        href: '/navbar-demo',
        className: 'text-primary'
    }
});

export default handle; 