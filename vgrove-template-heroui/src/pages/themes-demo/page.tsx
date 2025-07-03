import {
    PageContainer,
    ThemeSwitch
} from '@gulibs/vgrove-ui';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Chip,
    Code,
    Divider,
    Progress,
    Snippet,
    Tab,
    Tabs
} from '@heroui/react';
import { useI18n } from '@gulibs/vgrove-client';
import { Icon } from '@iconify/react';
// import { useTheme } from '@gulibs/vgrove-ui';
// 暂时移除 useTheme 使用，因为 template 使用的是独立的主题系统
// import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function ThemesDemo() {
    const { t } = useI18n();
    // 移除 useTheme 使用，改为使用本地状态
    const [theme, setTheme] = useState('system');
    const [customColors] = useState({
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444'
    });

    const colorVariants = [
        { name: 'Primary', key: 'primary', value: customColors.primary },
        { name: 'Secondary', key: 'secondary', value: customColors.secondary },
        { name: 'Success', key: 'success', value: customColors.success },
        { name: 'Warning', key: 'warning', value: customColors.warning },
        { name: 'Danger', key: 'danger', value: customColors.danger }
    ];

    const themeExamples = [
        { name: '浅色主题', key: 'light', icon: 'solar:sun-line-duotone' },
        { name: '深色主题', key: 'dark', icon: 'solar:moon-line-duotone' },
        { name: '系统主题', key: 'system', icon: 'solar:monitor-line-duotone' }
    ];

    const componentExamples = [
        {
            category: '按钮组件',
            components: (
                <div className="flex flex-wrap gap-3">
                    <Button color="primary" variant="solid">Primary</Button>
                    <Button color="secondary" variant="solid">Secondary</Button>
                    <Button color="success" variant="solid">Success</Button>
                    <Button color="warning" variant="solid">Warning</Button>
                    <Button color="danger" variant="solid">Danger</Button>
                </div>
            )
        },
        {
            category: '状态标签',
            components: (
                <div className="flex flex-wrap gap-3">
                    <Chip color="primary" variant="flat">Primary</Chip>
                    <Chip color="secondary" variant="flat">Secondary</Chip>
                    <Chip color="success" variant="flat">Success</Chip>
                    <Chip color="warning" variant="flat">Warning</Chip>
                    <Chip color="danger" variant="flat">Danger</Chip>
                </div>
            )
        },
        {
            category: '进度条',
            components: (
                <div className="space-y-3 w-full">
                    <Progress value={75} color="primary" label="Primary" aria-label="Primary progress: 75%" />
                    <Progress value={60} color="secondary" label="Secondary" aria-label="Secondary progress: 60%" />
                    <Progress value={85} color="success" label="Success" aria-label="Success progress: 85%" />
                    <Progress value={45} color="warning" label="Warning" aria-label="Warning progress: 45%" />
                    <Progress value={30} color="danger" label="Danger" aria-label="Danger progress: 30%" />
                </div>
            )
        }
    ];

    const cssVariablesExample = `/* 自定义主题变量 */
:root {
  --hero-primary: 59 130 246;
  --hero-primary-foreground: 255 255 255;
  --hero-secondary: 139 92 246;
  --hero-secondary-foreground: 255 255 255;
  --hero-success: 16 185 129;
  --hero-warning: 245 158 11;
  --hero-danger: 239 68 68;
  
  /* 背景色 */
  --hero-background: 255 255 255;
  --hero-foreground: 17 24 39;
  --hero-content1: 255 255 255;
  --hero-content2: 249 250 251;
  
  /* 边框和分割线 */
  --hero-divider: 229 231 235;
  --hero-border: 229 231 235;
}

.dark {
  --hero-background: 17 24 39;
  --hero-foreground: 249 250 251;
  --hero-content1: 31 41 55;
  --hero-content2: 55 65 81;
  --hero-divider: 75 85 99;
  --hero-border: 75 85 99;
}`;

    const themeConfigExample = `// hero.ts
import { heroui } from '@heroui/react';

export default heroui({
  themes: {
    light: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          900: '#1e3a8a',
          DEFAULT: '#3b82f6',
          foreground: '#ffffff'
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          900: '#581c87',
          DEFAULT: '#8b5cf6',
          foreground: '#ffffff'
        }
      }
    },
    dark: {
      colors: {
        primary: {
          50: '#0f172a',
          100: '#1e293b',
          500: '#3b82f6',
          900: '#dbeafe',
          DEFAULT: '#3b82f6',
          foreground: '#ffffff'
        }
      }
    }
  }
});`;

    return (
        <PageContainer>
            <div className="max-w-6xl mx-auto space-y-8 p-6">
                {/* 页面标题 */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">主题系统演示</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        展示 VGrove 的主题切换和自定义功能
                    </p>
                    <div className="flex justify-center gap-2">
                        <Chip color="primary" variant="flat">
                            深色/浅色
                        </Chip>
                        <Chip color="success" variant="flat">
                            自定义主题
                        </Chip>
                        <Chip color="secondary" variant="flat">
                            CSS 变量
                        </Chip>
                    </div>
                </div>

                {/* 主题切换控制 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Icon icon="solar:palette-line-duotone" width={24} />
                            主题控制
                        </h2>
                    </CardHeader>
                    <CardBody className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* 主题切换器 */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">主题切换器</h3>
                                <div className="flex items-center gap-4">
                                    <ThemeSwitch size="lg" />
                                    <div className="space-y-1">
                                        <p className="font-medium">
                                            当前主题: <span className="text-primary">{theme}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            自动保存用户偏好
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 主题选项 */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">主题选项</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {themeExamples.map((themeOption) => (
                                        <Button
                                            key={themeOption.key}
                                            variant={theme === themeOption.key ? "solid" : "bordered"}
                                            color={theme === themeOption.key ? "primary" : "default"}
                                            onPress={() => setTheme(themeOption.key)}
                                            startContent={<Icon icon={themeOption.icon} width={18} />}
                                            className="justify-start"
                                        >
                                            {themeOption.name}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                {/* 主题效果展示 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Icon icon="solar:widget-line-duotone" width={24} />
                            组件主题效果
                        </h2>
                    </CardHeader>
                    <CardBody className="space-y-8">
                        {componentExamples.map((example, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="font-medium text-lg">{example.category}</h3>
                                <div className="p-4 bg-default-100 rounded-lg">
                                    {example.components}
                                </div>
                                {index < componentExamples.length - 1 && <Divider />}
                            </div>
                        ))}
                    </CardBody>
                </Card>

                {/* 颜色变量展示 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Icon icon="solar:color-picker-line-duotone" width={24} />
                            颜色系统
                        </h2>
                    </CardHeader>
                    <CardBody className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* 颜色变量 */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">设计令牌</h3>
                                <div className="space-y-3">
                                    {colorVariants.map((color) => (
                                        <div key={color.key} className="flex items-center justify-between p-3 bg-default-100 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                                                    style={{ backgroundColor: color.value }}
                                                />
                                                <div>
                                                    <p className="font-medium">{color.name}</p>
                                                    <p className="text-xs text-gray-500">--hero-{color.key}</p>
                                                </div>
                                            </div>
                                            <Code size="sm">{color.value}</Code>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 语义化颜色 */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">语义化色彩</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 bg-default-100 rounded-lg text-center">
                                        <div className="w-12 h-12 bg-default-200 rounded-lg mx-auto mb-2" />
                                        <p className="text-sm font-medium">Default</p>
                                        <p className="text-xs text-gray-500">中性色</p>
                                    </div>
                                    <div className="p-3 bg-primary-50 rounded-lg text-center">
                                        <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-2" />
                                        <p className="text-sm font-medium">Primary</p>
                                        <p className="text-xs text-gray-500">主色调</p>
                                    </div>
                                    <div className="p-3 bg-success-50 rounded-lg text-center">
                                        <div className="w-12 h-12 bg-success rounded-lg mx-auto mb-2" />
                                        <p className="text-sm font-medium">Success</p>
                                        <p className="text-xs text-gray-500">成功状态</p>
                                    </div>
                                    <div className="p-3 bg-danger-50 rounded-lg text-center">
                                        <div className="w-12 h-12 bg-danger rounded-lg mx-auto mb-2" />
                                        <p className="text-sm font-medium">Danger</p>
                                        <p className="text-xs text-gray-500">错误状态</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                {/* 主题配置示例 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Icon icon="solar:code-line-duotone" width={24} />
                            主题配置
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <Tabs aria-label={t("themes.themeConfig")}>
                            <Tab key="css-vars" title={t("themes.cssVariables")}>
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        使用 CSS 变量定义主题色彩系统
                                    </p>
                                    <Snippet hideSymbol variant="bordered" className="w-full">
                                        <pre className="text-xs overflow-x-auto">
                                            {cssVariablesExample}
                                        </pre>
                                    </Snippet>
                                </div>
                            </Tab>

                            <Tab key="theme-config" title={t("themes.themeConfig")}>
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        在 hero.ts 中配置自定义主题
                                    </p>
                                    <Snippet hideSymbol variant="bordered" className="w-full">
                                        <pre className="text-xs overflow-x-auto">
                                            {themeConfigExample}
                                        </pre>
                                    </Snippet>
                                </div>
                            </Tab>

                            <Tab key="usage" title={t("themes.usage")}>
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        在组件中使用主题变量
                                    </p>
                                    <Snippet hideSymbol variant="bordered" className="w-full">
                                        <pre className="text-xs overflow-x-auto">
                                            {`// 使用 Tailwind CSS 类名
<div className="bg-primary text-primary-foreground">
  Primary colored div
</div>

// 使用 CSS 变量
<div style={{ 
  backgroundColor: 'hsl(var(--hero-primary))',
  color: 'hsl(var(--hero-primary-foreground))'
}}>
  Custom styled div
</div>

// 在 CSS 中使用
.custom-button {
  background-color: hsl(var(--hero-primary));
  border: 1px solid hsl(var(--hero-border));
}`}
                                        </pre>
                                    </Snippet>
                                </div>
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>

                {/* 主题特性说明 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Icon icon="solar:star-line-duotone" width={24} />
                            主题系统特性
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="font-medium text-lg">核心特性</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:check-circle-line-duotone" className="text-success mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">自动主题检测</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                自动检测系统主题偏好
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:check-circle-line-duotone" className="text-success mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">用户偏好存储</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                记住用户的主题选择
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:check-circle-line-duotone" className="text-success mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">CSS 变量驱动</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                基于 CSS 变量的响应式主题
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-medium text-lg">扩展能力</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:settings-line-duotone" className="text-secondary mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">自定义主题</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                创建和使用自定义主题
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:settings-line-duotone" className="text-secondary mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">动态主题切换</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                运行时动态切换主题
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:settings-line-duotone" className="text-secondary mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">组件级主题</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                支持组件级别的主题自定义
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </PageContainer>
    );
} 