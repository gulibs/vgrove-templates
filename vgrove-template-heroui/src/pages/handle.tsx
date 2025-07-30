import type { I18nKeys } from '@/i18n-keys';
import type { PageHandle } from '@gulibs/vgrove-ui';

const handle: PageHandle<I18nKeys> = {
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
}

export default handle; 