import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.demo.charts.title',
        description: 'Data visualization components and chart examples'
    },
    pageMeta: {
        title: 'common.demo.charts.title',
        description: 'common.demo.charts.subtitle'
    },
    breadcrumbs: {
        href: '/charts-demo',
        className: 'text-primary'
    }
});

export default handle; 