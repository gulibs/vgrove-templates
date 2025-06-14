import { Card, CardBody, CardHeader, Divider, Spacer } from '@heroui/react';
import { useI18n } from '@gulibs/react-autoroutes-client';
import LanguageSwitch, {
    LanguageSwitchSelect,
    LanguageSwitchButtons,
    LanguageSwitchChips
} from '../components/LanguageSwitch';

export default function LanguageDemoPage() {
    const { t, locale, isReady, availableLocales } = useI18n();

    if (!isReady) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-lg">{t('common.common.loading')}</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">
                    {t('common.common.switchLanguage')} 演示
                </h1>
                <p className="text-foreground-600">
                    测试不同样式的语言切换组件
                </p>
            </div>

            {/* 当前状态信息 */}
            <Card className="mb-6">
                <CardHeader>
                    <h3 className="text-lg font-semibold">当前状态</h3>
                </CardHeader>
                <CardBody>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <strong>当前语言:</strong> {locale}
                        </div>
                        <div>
                            <strong>是否准备就绪:</strong> {isReady ? '是' : '否'}
                        </div>
                        <div>
                            <strong>可用语言:</strong> {availableLocales.join(', ')}
                        </div>
                    </div>
                </CardBody>
            </Card>

            {/* 翻译测试 */}
            <Card className="mb-6">
                <CardHeader>
                    <h3 className="text-lg font-semibold">翻译测试</h3>
                </CardHeader>
                <CardBody>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium mb-2">通用文本:</h4>
                            <ul className="space-y-1 text-sm">
                                <li><strong>欢迎:</strong> {t('common.common.welcome')}</li>
                                <li><strong>加载中:</strong> {t('common.common.loading')}</li>
                                <li><strong>成功:</strong> {t('common.common.success')}</li>
                                <li><strong>错误:</strong> {t('common.common.error')}</li>
                                <li><strong>保存:</strong> {t('common.common.save')}</li>
                                <li><strong>取消:</strong> {t('common.common.cancel')}</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">导航文本:</h4>
                            <ul className="space-y-1 text-sm">
                                <li><strong>首页:</strong> {t('common.nav.home')}</li>
                                <li><strong>关于:</strong> {t('common.nav.about')}</li>
                                <li><strong>仪表盘:</strong> {t('common.nav.dashboard')}</li>
                                <li><strong>登录:</strong> {t('common.nav.login')}</li>
                                <li><strong>设置:</strong> {t('common.nav.settings')}</li>
                            </ul>
                        </div>
                    </div>
                </CardBody>
            </Card>

            {/* 语言切换组件演示 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Select 样式 */}
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-semibold">Select 下拉选择</h3>
                    </CardHeader>
                    <CardBody className="space-y-4">
                        <div>
                            <h4 className="text-sm font-medium mb-2">默认样式</h4>
                            <LanguageSwitchSelect />
                        </div>
                        <Divider />
                        <div>
                            <h4 className="text-sm font-medium mb-2">不显示标签</h4>
                            <LanguageSwitchSelect showLabel={false} />
                        </div>
                        <Divider />
                        <div>
                            <h4 className="text-sm font-medium mb-2">小尺寸</h4>
                            <LanguageSwitchSelect size="sm" />
                        </div>
                    </CardBody>
                </Card>

                {/* Button 样式 */}
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-semibold">Button 按钮组</h3>
                    </CardHeader>
                    <CardBody className="space-y-4">
                        <div>
                            <h4 className="text-sm font-medium mb-2">默认样式</h4>
                            <LanguageSwitchButtons />
                        </div>
                        <Divider />
                        <div>
                            <h4 className="text-sm font-medium mb-2">不显示标签</h4>
                            <LanguageSwitchButtons showLabel={false} />
                        </div>
                        <Divider />
                        <div>
                            <h4 className="text-sm font-medium mb-2">大尺寸</h4>
                            <LanguageSwitchButtons size="lg" />
                        </div>
                    </CardBody>
                </Card>

                {/* Chip 样式 */}
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-semibold">Chip 标签</h3>
                    </CardHeader>
                    <CardBody className="space-y-4">
                        <div>
                            <h4 className="text-sm font-medium mb-2">默认样式</h4>
                            <LanguageSwitchChips />
                        </div>
                        <Divider />
                        <div>
                            <h4 className="text-sm font-medium mb-2">不显示旗帜</h4>
                            <LanguageSwitchChips showFlag={false} />
                        </div>
                        <Divider />
                        <div>
                            <h4 className="text-sm font-medium mb-2">小尺寸</h4>
                            <LanguageSwitchChips size="sm" />
                        </div>
                    </CardBody>
                </Card>

                {/* 自定义样式 */}
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-semibold">自定义样式</h3>
                    </CardHeader>
                    <CardBody className="space-y-4">
                        <div>
                            <h4 className="text-sm font-medium mb-2">无标签无旗帜</h4>
                            <LanguageSwitch variant="buttons" showLabel={false} showFlag={false} />
                        </div>
                        <Divider />
                        <div>
                            <h4 className="text-sm font-medium mb-2">紧凑版选择器</h4>
                            <LanguageSwitch variant="select" size="sm" showLabel={false} />
                        </div>
                    </CardBody>
                </Card>
            </div>

            <Spacer y={8} />

            {/* 使用说明 */}
            <Card>
                <CardHeader>
                    <h3 className="text-lg font-semibold">使用说明</h3>
                </CardHeader>
                <CardBody className="prose prose-sm max-w-none">
                    <p>
                        此页面演示了三种不同的语言切换组件样式：
                    </p>
                    <ul>
                        <li><strong>Select:</strong> 下拉选择器，适合空间有限的场景</li>
                        <li><strong>Buttons:</strong> 按钮组，直观明了，适合选项较少时使用</li>
                        <li><strong>Chips:</strong> 标签样式，现代化设计，适合移动端</li>
                    </ul>
                    <p>
                        每种样式都支持自定义尺寸、是否显示标签、是否显示旗帜等属性。
                        切换语言后，页面上的所有文本都会立即更新。
                    </p>
                </CardBody>
            </Card>
        </div>
    );
} 