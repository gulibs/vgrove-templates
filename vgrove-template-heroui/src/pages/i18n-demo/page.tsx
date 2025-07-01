import {
    PageContainer,
    I18nSwitch,
    I18nMessage
} from '@gulibs/vgrove-ui';
import {
    Card,
    CardBody,
    CardHeader,
    Button,
    Chip,
    Divider,
    Code,
    Snippet,
    Tab,
    Tabs
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useI18n } from '@gulibs/vgrove-client';
import type { I18nKeys } from '@/i18n-keys';

export default function I18nDemo() {
    const { locale, t, availableLocales, setLocale } = useI18n<I18nKeys>();

    const codeExamples = {
        basic: `// 基础使用
import { useI18n } from '@gulibs/vgrove-client';

function MyComponent() {
    const { t, locale, setLocale } = useI18n();
    
    return (
        <div>
            <h1>{t('common.welcome.title')}</h1>
            <p>当前语言: {locale}</p>
        </div>
    );
}`,
        component: `// 使用 I18nMessage 组件
import { I18nMessage } from '@gulibs/vgrove-ui';

function MyComponent() {
    return (
        <div>
            <I18nMessage 
                id="common.welcome.title" 
                params={{ name: 'VGrove' }}
            />
        </div>
    );
}`,
        locales: `// locales/en/common.json
{
    "welcome": {
        "title": "Welcome to VGrove",
        "subtitle": "A modern React development toolkit"
    }
}

// locales/zh/common.json
{
    "welcome": {
        "title": "欢迎使用 VGrove",
        "subtitle": "现代化的 React 开发工具包"
    }
}`
    };

    return (
        <PageContainer>
            <div className="max-w-6xl mx-auto space-y-8 p-6">
                {/* 页面标题 */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">国际化 (i18n) 演示</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        展示 VGrove 的国际化功能和多语言支持
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        <Chip color="primary" variant="flat">
                            当前语言: {locale}
                        </Chip>
                        <I18nSwitch showFlag size="sm" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* 实际使用示例 */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-semibold flex items-center gap-2">
                                <Icon icon="solar:global-line-duotone" width={24} />
                                实际翻译示例
                            </h2>
                        </CardHeader>
                        <CardBody className="space-y-6">
                            {/* 基础翻译示例 */}
                            <div className="space-y-3">
                                <h3 className="font-semibold">基础翻译</h3>
                                <div className="p-4 bg-default-100 rounded-lg space-y-2">
                                    <p><strong>标题:</strong> {t('common.welcome.title')}</p>
                                    <p><strong>副标题:</strong> {t('common.welcome.subtitle')}</p>
                                    <p><strong>版本:</strong> {t('common.welcome.version')}</p>
                                </div>
                            </div>

                            <Divider />

                            {/* 组件式翻译 */}
                            <div className="space-y-3">
                                <h3 className="font-semibold">使用 I18nMessage 组件</h3>
                                <div className="p-4 bg-default-100 rounded-lg space-y-2">
                                    <I18nMessage
                                        id="common.features.heroui.title"
                                        as="h4"
                                        className="font-medium text-primary"
                                    />
                                    <I18nMessage
                                        id="common.features.heroui.description"
                                        as="p"
                                        className="text-sm text-gray-600 dark:text-gray-400"
                                    />
                                </div>
                            </div>

                            <Divider />

                            {/* 语言切换按钮 */}
                            <div className="space-y-3">
                                <h3 className="font-semibold">语言切换</h3>
                                <div className="flex flex-wrap gap-2">
                                    {availableLocales.map((lang) => (
                                        <Button
                                            key={lang}
                                            size="sm"
                                            variant={locale === lang ? 'solid' : 'bordered'}
                                            color={locale === lang ? 'primary' : 'default'}
                                            onPress={() => setLocale(lang)}
                                            startContent={
                                                <Icon
                                                    icon={lang === 'en' ? 'flag:gb-4x3' : 'flag:cn-4x3'}
                                                    width={16}
                                                />
                                            }
                                        >
                                            {lang === 'en' ? 'English' : '中文'}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    {/* 特性介绍 */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-semibold flex items-center gap-2">
                                <Icon icon="solar:star-line-duotone" width={24} />
                                i18n 特性
                            </h2>
                        </CardHeader>
                        <CardBody className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-line-duotone" className="text-success" width={20} />
                                    <div>
                                        <h4 className="font-medium">自动资源加载</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            基于 Vite 的自动翻译资源加载和打包
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-line-duotone" className="text-success" width={20} />
                                    <div>
                                        <h4 className="font-medium">类型安全</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            TypeScript 支持，自动生成翻译键类型
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-line-duotone" className="text-success" width={20} />
                                    <div>
                                        <h4 className="font-medium">懒加载</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            按需加载语言包，优化性能
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-line-duotone" className="text-success" width={20} />
                                    <div>
                                        <h4 className="font-medium">热更新</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            开发时修改翻译文件自动热更新
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-line-duotone" className="text-success" width={20} />
                                    <div>
                                        <h4 className="font-medium">命名空间支持</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            支持多命名空间组织翻译文件
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-line-duotone" className="text-success" width={20} />
                                    <div>
                                        <h4 className="font-medium">浏览器存储</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            自动保存用户语言偏好设置
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    {/* API 使用示例 */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <h2 className="text-2xl font-semibold flex items-center gap-2">
                                <Icon icon="solar:code-line-duotone" width={24} />
                                API 使用指南
                            </h2>
                        </CardHeader>
                        <CardBody>
                            <Tabs aria-label={t("i18n.configuration")}>
                                <Tab key="basic" title={t("i18n.basicUsage")}>
                                    <div className="space-y-4">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            使用 useI18n Hook 获取翻译函数和语言状态
                                        </p>
                                        <Snippet hideSymbol variant="bordered" className="w-full">
                                            <pre className="text-xs overflow-x-auto">
                                                {codeExamples.basic}
                                            </pre>
                                        </Snippet>
                                    </div>
                                </Tab>

                                <Tab key="component" title={t("i18n.componentUsage")}>
                                    <div className="space-y-4">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            使用 I18nMessage 组件进行声明式翻译
                                        </p>
                                        <Snippet hideSymbol variant="bordered" className="w-full">
                                            <pre className="text-xs overflow-x-auto">
                                                {codeExamples.component}
                                            </pre>
                                        </Snippet>
                                    </div>
                                </Tab>

                                <Tab key="locales" title={t("i18n.translationFiles")}>
                                    <div className="space-y-4">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            在 src/locales 目录下组织翻译文件
                                        </p>
                                        <Snippet hideSymbol variant="bordered" className="w-full">
                                            <pre className="text-xs overflow-x-auto">
                                                {codeExamples.locales}
                                            </pre>
                                        </Snippet>
                                    </div>
                                </Tab>
                            </Tabs>
                        </CardBody>
                    </Card>

                    {/* 配置示例 */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <h2 className="text-2xl font-semibold flex items-center gap-2">
                                <Icon icon="solar:settings-line-duotone" width={24} />
                                配置示例
                            </h2>
                        </CardHeader>
                        <CardBody className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-3">客户端配置</h3>
                                    <Snippet hideSymbol variant="bordered">
                                        <pre className="text-xs">{`// App.tsx
import { createI18nClient } from '@gulibs/vgrove-client';
import { resources, supportedLocales } from '@gulibs/i18n-locales';

const client = createI18nClient({
  resources,
  supportedLocales,
  defaultLocale: 'en'
});`}</pre>
                                    </Snippet>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-3">Vite 插件配置</h3>
                                    <Snippet hideSymbol variant="bordered">
                                        <pre className="text-xs">{`// vite.config.ts
import { i18nPlugin } from '@gulibs/vgrove-i18n';

export default {
  plugins: [
    i18nPlugin({
      basePath: 'src/locales',
      extensions: ['.json'],
      defaultLocale: 'en'
    })
  ]
}`}</pre>
                                    </Snippet>
                                </div>
                            </div>

                            <Divider />

                            <div className="space-y-3">
                                <h3 className="font-medium">文件结构</h3>
                                <div className="p-4 bg-default-100 rounded-lg">
                                    <Code className="text-xs block font-mono">
                                        {`src/
├── locales/
│   ├── en/
│   │   └── common.json
│   └── zh/
│       └── common.json
├── i18n-keys.ts (自动生成)
└── App.tsx`}
                                    </Code>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </PageContainer>
    );
} 