import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.demo.forms.title',
        description: 'HeroUI form components demonstration and examples'
    },
    pageMeta: {
        title: 'common.demo.forms.title',
        description: 'common.demo.forms.subtitle'
    },
    breadcrumbs: {
        href: '/forms-demo',
        className: 'text-primary'
    }
});

export default handle; 