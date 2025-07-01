import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'common.demo.tables.title',
        description: 'Advanced table functionality with sorting, filtering and pagination'
    },
    pageMeta: {
        title: 'common.demo.tables.title',
        description: 'common.demo.tables.subtitle'
    },
    breadcrumbs: {
        href: '/tables-demo',
        className: 'text-primary'
    }
});

export default handle; 