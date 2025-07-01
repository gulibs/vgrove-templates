import {
    PageContainer
} from '@gulibs/vgrove-ui';
import {
    Card,
    CardBody,
    CardHeader,
    Button,
    Code,
    Snippet,
    Link
} from '@heroui/react';
import { Icon } from '@iconify/react';

export default function RoutingDemo() {
    const routeExamples = [
        {
            file: 'pages/page.tsx',
            route: '/',
            description: '首页路由'
        },
        {
            file: 'pages/about/page.tsx',
            route: '/about',
            description: '关于页面'
        },
        {
            file: 'pages/user/[id]/page.tsx',
            route: '/user/:id',
            description: '动态用户页面'
        },
        {
            file: 'pages/blog/[...slug]/page.tsx',
            route: '/blog/*',
            description: '捕获所有路由'
        }
    ];

    const configExample = `// vite.config.ts
import { defineConfig } from 'vite';
import { vgroute } from '@gulibs/vgrove-autoroutes';

export default defineConfig({
  plugins: [
    vgroute({
      pagesDir: 'src/pages',
      extensions: ['.tsx', '.ts'],
      routeBlockLang: 'yaml',
      importMode: 'async'
    })
  ]
});`;

    return (
        <PageContainer>
            <div className="max-w-6xl mx-auto space-y-8 p-6">
                {/* 页面标题 */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">自动路由系统演示</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        展示 VGrove 基于文件系统的自动路由生成功能
                    </p>
                </div>

                {/* 路由映射示例 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Icon icon="solar:route-line-duotone" width={24} />
                            文件路由映射
                        </h2>
                    </CardHeader>
                    <CardBody className="space-y-4">
                        <div className="space-y-3">
                            {routeExamples.map((example, index) => (
                                <div key={index} className="p-3 bg-default-100 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <Code size="sm" className="bg-transparent p-0">
                                            {example.file}
                                        </Code>
                                        <Icon icon="solar:arrow-right-line-duotone" width={16} />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Code size="sm" color="primary" className="bg-transparent p-0">
                                            {example.route}
                                        </Code>
                                        <span className="text-xs text-gray-500">
                                            {example.description}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>

                {/* 配置示例 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Icon icon="solar:code-line-duotone" width={24} />
                            Vite 配置
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <Snippet hideSymbol variant="bordered" className="w-full">
                            <pre className="text-xs overflow-x-auto">
                                {configExample}
                            </pre>
                        </Snippet>
                    </CardBody>
                </Card>

                {/* 当前路由信息 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Icon icon="solar:info-circle-line-duotone" width={24} />
                            当前路由信息
                        </h2>
                    </CardHeader>
                    <CardBody className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600 dark:text-gray-400">当前路径:</span>
                                <Code size="sm">{window.location.pathname}</Code>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Button
                                as={Link}
                                href="/"
                                size="sm"
                                variant="bordered"
                                startContent={<Icon icon="solar:home-line-duotone" width={16} />}
                            >
                                首页
                            </Button>
                            <Button
                                as={Link}
                                href="/navbar-demo"
                                size="sm"
                                variant="bordered"
                                startContent={<Icon icon="solar:widget-line-duotone" width={16} />}
                            >
                                组件演示
                            </Button>
                            <Button
                                as={Link}
                                href="/forms-demo"
                                size="sm"
                                variant="bordered"
                                startContent={<Icon icon="solar:document-text-line-duotone" width={16} />}
                            >
                                表单示例
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </PageContainer>
    );
} 