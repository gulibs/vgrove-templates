import {
    ThemeSwitch,
    I18nSwitch,
    VGroveNavbar,
    VGroveFooter,
    Brand,
    PageContainer,
    useVGroveLayoutSettings
} from '@gulibs/vgrove-ui';

import {
    Avatar,
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useI18n } from '@gulibs/vgrove-client';

const CustomCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-w-0 max-w-full overflow-x-auto p-4 bg-content1 border-small border-default-100 rounded-lg shadow-sm'>
            <div className='min-w-0 max-w-full'>
                {children}
            </div>
        </div>
    )
}

export default function NavbarDemoPage() {
    const { t } = useI18n();
    const settings = useVGroveLayoutSettings();
    const [activeNavItem, setActiveNavItem] = useState<string>('home');

    // 新的中间内容示例
    const customCenterContent = (
        <div className="flex items-center gap-6">
            <Button
                variant={activeNavItem === 'home' ? 'solid' : 'light'}
                color={activeNavItem === 'home' ? 'primary' : 'default'}
                size="sm"
                startContent={<Icon icon="solar:home-2-line-duotone" width={16} />}
                onPress={() => setActiveNavItem('home')}
            >
                首页
            </Button>
            <Button
                variant={activeNavItem === 'products' ? 'solid' : 'light'}
                color={activeNavItem === 'products' ? 'primary' : 'default'}
                size="sm"
                startContent={<Icon icon="solar:box-line-duotone" width={16} />}
                onPress={() => setActiveNavItem('products')}
            >
                Products
            </Button>
            <Button
                variant={activeNavItem === 'services' ? 'solid' : 'light'}
                color={activeNavItem === 'services' ? 'primary' : 'default'}
                size="sm"
                onPress={() => setActiveNavItem('services')}
            >
                Services
            </Button>
            <Button
                variant={activeNavItem === 'about' ? 'solid' : 'light'}
                color={activeNavItem === 'about' ? 'primary' : 'default'}
                size="sm"
                onPress={() => setActiveNavItem('about')}
            >
                About
            </Button>
            <Button
                variant={activeNavItem === 'contact' ? 'solid' : 'light'}
                color={activeNavItem === 'contact' ? 'primary' : 'default'}
                size="sm"
                onPress={() => setActiveNavItem('contact')}
            >
                Contact
            </Button>
        </div>
    );

    // 另一种中间内容示例 - 面包屑导航
    const breadcrumbCenterContent = (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm">
                <Icon icon="solar:home-2-line-duotone" width={16} />
                <span>Home</span>
                <Icon icon="solar:alt-arrow-right-line-duotone" width={12} />
                <span>Products</span>
                <Icon icon="solar:alt-arrow-right-line-duotone" width={12} />
                <span className="text-primary font-medium">Category</span>
            </div>
        </div>
    );

    // 搜索框中间内容示例
    const searchCenterContent = (
        <div className="flex items-center gap-4 w-full max-w-md">
            <Input
                placeholder={t("navbar.searchPlaceholder")}
                startContent={<Icon icon="solar:magnifer-linear" width={16} />}
                size="sm"
                classNames={{
                    base: "w-full",
                    inputWrapper: "bg-default-100"
                }}
            />
        </div>
    );

    // 自定义品牌内容
    const customBrandContent = (
        <div className="flex items-center gap-2">
            <Icon icon="logos:react" width={32} height={32} />
            <span className="font-bold text-inherit">VGrove Demo</span>
        </div>
    );

    // 自定义右侧内容
    const customEndContent = (
        <div className="flex items-center gap-3">
            {/* 搜索框 */}
            <Input
                size="sm"
                placeholder="Search..."
                startContent={<Icon icon="solar:magnifer-linear" />}
                className="w-48 hidden md:flex"
            />

            {/* 通知图标 */}
            <Badge content="5" color="danger" size="sm">
                <Button
                    isIconOnly
                    variant="light"
                    size="sm"
                    aria-label={t("navbar.notifications")}
                >
                    <Icon icon="solar:bell-line-duotone" width={20} />
                </Button>
            </Badge>

            {/* 语言切换 */}
            <I18nSwitch />

            {/* 主题切换 */}
            <ThemeSwitch />

            <Divider orientation="vertical" className="h-6" />

            {/* 用户菜单 */}
            <Dropdown>
                <DropdownTrigger>
                    <Avatar
                        src="https://ui-avatars.com/api/?name=User&background=3b82f6&color=fff&size=150"
                        size="sm"
                        className="cursor-pointer"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label={t("navbar.userMenu")}>
                    <DropdownItem key="profile">Profile</DropdownItem>
                    <DropdownItem key="settings">Settings</DropdownItem>
                    <DropdownItem key="team">Team</DropdownItem>
                    <DropdownItem key="logout" color="danger">
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );



    return (
        <PageContainer>
            <div className="space-y-8 px-8 min-w-0 max-w-full overflow-hidden">
                {/* 页面标题 */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold">VGrove 布局组件演示</h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        展示 VGrove Navbar 和 Footer 组件的自定义功能
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        <Icon icon="solar:cursor-move-line-duotone" width={14} />
                        <span>页面支持横向滚动，可查看超出屏幕的内容</span>
                    </div>
                </div>

                {/* 基础导航栏演示 */}
                <CustomCard>
                    <h2 className="text-xl font-semibold">基础导航栏（仅品牌区域）</h2>
                    <div className="min-w-0 max-w-full overflow-hidden">
                        <VGroveNavbar
                            className='z-0'
                            settings={settings}
                            brandContent={<Brand className='w-10 h-10' name="VGrove" logo="/vgrove.svg" />}
                        />
                    </div>
                </CustomCard>

                {/* 使用 centerContent 的按钮导航 */}
                <CustomCard>
                    <h2 className="text-xl font-semibold">使用 centerContent 的按钮导航 (推荐)</h2>
                    <div className="min-w-0 max-w-full overflow-hidden">
                        <VGroveNavbar
                            className='z-0'
                            settings={settings}
                            brandContent={customBrandContent}
                            centerContent={customCenterContent}
                        />
                    </div>
                </CustomCard>

                {/* 面包屑导航示例 */}
                <CustomCard>
                    <h2 className="text-xl font-semibold">面包屑导航示例</h2>
                    <div className="min-w-0 max-w-full overflow-hidden">
                        <VGroveNavbar
                            className='z-0'
                            settings={settings}
                            brandContent={customBrandContent}
                            centerContent={breadcrumbCenterContent}
                            endContent={customEndContent}
                        />
                    </div>
                </CustomCard>

                {/* 搜索框导航示例 */}
                <CustomCard>
                    <h2 className="text-xl font-semibold">搜索框导航示例</h2>
                    <div className="min-w-0 max-w-full overflow-hidden">
                        <VGroveNavbar
                            className='z-0'
                            settings={settings}
                            brandContent={customBrandContent}
                            centerContent={searchCenterContent}
                            endContent={customEndContent}
                        />
                    </div>
                </CustomCard>

                {/* 完整功能导航栏（三个区域都有内容）*/}
                <CustomCard>
                    <h2 className="text-xl font-semibold">完整功能导航栏（三个区域都有内容）</h2>
                    <div className="min-w-0 max-w-full overflow-hidden">
                        <VGroveNavbar
                            className='z-0'
                            settings={settings}
                            brandContent={customBrandContent}
                            // centerContent={customCenterContent}
                            endContent={customEndContent}
                        />
                    </div>
                </CustomCard>

                {/* 功能说明 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">功能说明</h2>
                    </CardHeader>
                    <CardBody>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-primary">第一个区域：NavbarBrand</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    支持自定义品牌内容，可以是 Logo、公司名称或任何自定义组件
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-secondary">第二个区域：centerContent</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    支持完全自定义的中间内容，可以是任何 React 组件或渲染函数。
                                    提供最大的灵活性，支持按钮、面包屑、搜索框等任意组件。
                                    内容会自动包裹在 ScrollShadow 中支持水平滚动，防止内容溢出并确保在各种屏幕尺寸下的良好体验。
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-success">第三个区域：endContent</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    支持传入 React.ReactNode 或渲染函数，通常用于放置用户操作相关的内容，
                                    如用户头像、通知、设置按钮、主题切换、语言切换等
                                </p>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                {/* Footer 组件演示分隔线 */}
                <Divider className="my-8" />

                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold">VGrove Footer 组件演示</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        展示 VGrove Footer 组件的左右结构自定义功能
                    </p>
                </div>

                {/* 基础页脚演示 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">基础页脚（默认左右内容）</h2>
                    </CardHeader>
                    <CardBody>
                        <VGroveFooter settings={settings} />
                    </CardBody>
                </Card>

                {/* 自定义左侧内容的页脚 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">自定义左侧内容</h2>
                    </CardHeader>
                    <CardBody>
                        <VGroveFooter
                            settings={settings}
                            leftContent={
                                <div className="flex items-center gap-2">
                                    <Icon icon="logos:react" width={24} height={24} />
                                    <span className="text-sm font-medium">VGrove Framework</span>
                                    <span className="text-xs text-default-400">v1.0.0</span>
                                </div>
                            }
                        />
                    </CardBody>
                </Card>

                {/* 自定义右侧内容的页脚 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">自定义右侧内容</h2>
                    </CardHeader>
                    <CardBody>
                        <VGroveFooter
                            settings={settings}
                            rightContent={
                                <div className="flex items-center gap-4">
                                    <Button size="sm" variant="light" startContent={<Icon icon="mdi:github" />}>
                                        GitHub
                                    </Button>
                                    <Button size="sm" variant="light" startContent={<Icon icon="mdi:book-open-page-variant" />}>
                                        Docs
                                    </Button>
                                    <Button size="sm" variant="light" startContent={<Icon icon="mdi:help-circle" />}>
                                        Help
                                    </Button>
                                </div>
                            }
                        />
                    </CardBody>
                </Card>

                {/* 完全自定义的页脚 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">完全自定义（左右都自定义）</h2>
                    </CardHeader>
                    <CardBody>
                        <VGroveFooter
                            settings={settings}
                            leftContent={
                                <div className="flex items-center gap-3">
                                    <Avatar src="/vgrove.svg" size="sm" />
                                    <div>
                                        <div className="text-sm font-semibold">VGrove Platform</div>
                                        <div className="text-xs text-default-400">Build amazing apps faster</div>
                                    </div>
                                </div>
                            }
                            rightContent={
                                <div className="flex items-center gap-2">
                                    <ThemeSwitch />
                                    <I18nSwitch />
                                    <Divider orientation="vertical" className="h-4" />
                                    <span className="text-xs text-default-400">Made with ❤️</span>
                                </div>
                            }
                        />
                    </CardBody>
                </Card>

                {/* 使用渲染函数的页脚 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">使用渲染函数</h2>
                    </CardHeader>
                    <CardBody>
                        <VGroveFooter
                            settings={settings}
                            leftContent={({ className }) => (
                                <div className={className}>
                                    <span className="text-sm">
                                        © {new Date().getFullYear()} VGrove.
                                    </span>
                                    <Icon icon="mdi:heart" className="text-red-500 mx-1" width={14} />
                                    <span className="text-sm">Open Source</span>
                                </div>
                            )}
                            rightContent={({ className }) => (
                                <div className={className}>
                                    <Button size="sm" color="primary" variant="flat">
                                        Get Started
                                    </Button>
                                </div>
                            )}
                        />
                    </CardBody>
                </Card>

                {/* 样式定制演示 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">样式定制演示 (isBlurred & classNames)</h2>
                    </CardHeader>
                    <CardBody>
                        <div className="space-y-4">
                            {/* 关闭模糊效果 */}
                            <div>
                                <h3 className="font-medium mb-2">关闭模糊效果 (isBlurred=false)</h3>
                                <VGroveFooter
                                    settings={settings}
                                    isBlurred={false}
                                    leftContent="No Blur Footer"
                                    rightContent="Solid Background"
                                />
                            </div>

                            {/* 自定义样式 */}
                            <div>
                                <h3 className="font-medium mb-2">自定义样式 (classNames)</h3>
                                <VGroveFooter
                                    settings={settings}
                                    classNames={{
                                        footer: "bg-gradient-to-r from-primary-50 to-secondary-50 border-primary/30",
                                        container: "max-w-4xl",
                                        content: "gap-6",
                                        leftArea: "text-primary font-semibold",
                                        rightArea: "text-secondary"
                                    }}
                                    leftContent="🎨 Custom Styled Footer"
                                    rightContent="With Gradient Background"
                                />
                            </div>

                            {/* 高度定制 */}
                            <div>
                                <h3 className="font-medium mb-2">高度定制样式</h3>
                                <VGroveFooter
                                    settings={settings}
                                    isBlurred={false}
                                    classNames={{
                                        footer: "bg-content1 border-2 border-dashed border-warning rounded-lg",
                                        container: "px-8 py-6",
                                        content: "flex-col gap-3",
                                        leftArea: "text-lg font-bold text-success",
                                        rightArea: "text-sm text-warning"
                                    }}
                                    leftContent="🚀 Highly Customized Footer"
                                    rightContent="Complete Style Control"
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>

                {/* Footer 功能说明 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">Footer 功能说明</h2>
                    </CardHeader>
                    <CardBody>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-primary">左侧区域 (leftContent)</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    支持自定义左侧内容，通常用于放置品牌信息、版权声明等。支持 React.ReactNode 或渲染函数。
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-secondary">右侧区域 (rightContent)</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    支持自定义右侧内容，通常用于放置链接、按钮、社交媒体图标等。支持 React.ReactNode 或渲染函数。
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-success">模糊效果 (isBlurred)</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    控制背景模糊效果，默认为 true。启用时使用半透明背景和背景模糊，禁用时使用纯色背景。
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-warning">样式定制 (classNames)</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    支持 footer、container、content、leftArea、rightArea 五个部分的样式定制，提供精细的样式控制。
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-danger">向后兼容</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    如果提供了 children 属性，将使用 children 而不是左右结构，确保向后兼容性。
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-default">响应式设计</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    在移动设备上自动调整为纵向布局，在桌面设备上显示为横向布局。
                                </p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </PageContainer>
    );
} 