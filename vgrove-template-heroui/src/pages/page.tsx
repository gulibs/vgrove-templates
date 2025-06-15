import { useI18n } from '@gulibs/react-autoroutes-client';
import {
    Card,
    CardBody,
    CardHeader,
    Button,
    Chip,
    Divider,
    Spinner
} from '@heroui/react';
import { LanguageSwitch } from '../components/LanguageSwitch';

export default function WelcomePage() {
    const { t, locale, isReady } = useI18n();

    if (!isReady) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Spinner size="lg" label={t('common.common.loading')} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        {t('common.welcome.title')}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        {t('common.welcome.subtitle')}
                    </p>
                    <Chip color="primary" variant="flat">
                        {t('common.welcome.version')}
                    </Chip>
                </div>

                {/* Language Switch */}
                <Card className="max-w-md mx-auto">
                    <CardHeader className="pb-2">
                        <h3 className="text-lg font-semibold">{t('common.language.title')}</h3>
                    </CardHeader>
                    <CardBody className="pt-0">
                        <div className="space-y-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t('common.language.description')}
                            </p>
                            <LanguageSwitch variant="buttons" size="md" />
                            <div className="text-xs text-gray-500">
                                {t('common.language.current')}: <strong>{locale}</strong>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* HeroUI Features */}
                    <Card>
                        <CardHeader>
                            <h3 className="text-xl font-semibold text-primary">
                                {t('common.features.heroui.title')}
                            </h3>
                        </CardHeader>
                        <CardBody>
                            <div className="space-y-3">
                                <p className="text-gray-600 dark:text-gray-300">
                                    {t('common.features.heroui.description')}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Card', 'Button', 'Chip', 'Spinner'].map((component) => (
                                        <Chip key={component} size="sm" variant="bordered">
                                            {component}
                                        </Chip>
                                    ))}
                                </div>
                                <Button
                                    color="primary"
                                    variant="flat"
                                    size="sm"
                                    onPress={() => window.open('https://heroui.com', '_blank')}
                                >
                                    {t('common.features.heroui.learnMore')}
                                </Button>
                            </div>
                        </CardBody>
                    </Card>

                    {/* i18n Features */}
                    <Card>
                        <CardHeader>
                            <h3 className="text-xl font-semibold text-secondary">
                                {t('common.features.i18n.title')}
                            </h3>
                        </CardHeader>
                        <CardBody>
                            <div className="space-y-3">
                                <p className="text-gray-600 dark:text-gray-300">
                                    {t('common.features.i18n.description')}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Chip size="sm" color="secondary" variant="flat">
                                        🇺🇸 English
                                    </Chip>
                                    <Chip size="sm" color="secondary" variant="flat">
                                        🇨🇳 中文
                                    </Chip>
                                </div>
                                <Button
                                    color="secondary"
                                    variant="flat"
                                    size="sm"
                                >
                                    {t('common.features.i18n.addLanguage')}
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <Divider />

                {/* Getting Started */}
                <Card>
                    <CardHeader>
                        <h3 className="text-xl font-semibold">{t('common.gettingStarted.title')}</h3>
                    </CardHeader>
                    <CardBody>
                        <div className="space-y-4">
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('common.gettingStarted.description')}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <h4 className="font-medium">{t('common.gettingStarted.development')}</h4>
                                    <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm">
                                        vgrove dev
                                    </code>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-medium">{t('common.gettingStarted.build')}</h4>
                                    <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm">
                                        vgrove build
                                    </code>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                {/* Footer */}
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    {t('common.footer.poweredBy')} VGrove + HeroUI + Tailwind CSS
                </div>
            </div>
        </div>
    );
} 