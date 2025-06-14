import { useI18n } from '@gulibs/react-autoroutes-client';
import { Button, ButtonGroup, Chip, Select, SelectItem } from '@heroui/react';

export interface LanguageSwitchProps {
    variant?: 'select' | 'buttons' | 'chips';
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
    showFlag?: boolean;
}

const languageConfig = {
    en: {
        label: 'English',
        flag: '🇺🇸',
        nativeLabel: 'English'
    },
    zh: {
        label: '简体中文',
        flag: '🇨🇳',
        nativeLabel: '简体中文'
    }
} as const;

export function LanguageSwitch({
    variant = 'select',
    size = 'md',
    showLabel = true,
    showFlag = true
}: LanguageSwitchProps) {
    const { t, locale, setLocale } = useI18n();

    const handleLocaleChange = async (newLocale: string) => {
        try {
            await setLocale(newLocale);
        } catch (error) {
            console.error('Failed to change locale:', error);
        }
    };

    const currentLanguage = languageConfig[locale as keyof typeof languageConfig];
    const availableLanguages = Object.entries(languageConfig);

    if (variant === 'select') {
        return (
            <div className="flex flex-col gap-2 min-w-[200px]">
                {showLabel && (
                    <label className="text-sm font-medium text-foreground-600">
                        {t('common.common.language')}
                    </label>
                )}
                <Select
                    size={size}
                    selectedKeys={[locale]}
                    onSelectionChange={(keys) => {
                        const selectedLocale = Array.from(keys)[0] as string;
                        if (selectedLocale !== locale) {
                            handleLocaleChange(selectedLocale);
                        }
                    }}
                    placeholder={t('common.common.switchLanguage')}
                    aria-label={t('common.common.switchLanguage')}
                    startContent={showFlag ? currentLanguage?.flag : undefined}
                >
                    {availableLanguages.map(([code, config]) => (
                        <SelectItem
                            key={code}
                            startContent={showFlag ? config.flag : undefined}
                        >
                            {config.nativeLabel}
                        </SelectItem>
                    ))}
                </Select>
            </div>
        );
    }

    if (variant === 'buttons') {
        return (
            <div className="flex flex-col gap-2">
                {showLabel && (
                    <label className="text-sm font-medium text-foreground-600">
                        {t('common.common.language')}
                    </label>
                )}
                <ButtonGroup size={size} variant="bordered">
                    {availableLanguages.map(([code, config]) => (
                        <Button
                            key={code}
                            onPress={() => handleLocaleChange(code)}
                            variant={locale === code ? 'solid' : 'bordered'}
                            color={locale === code ? 'primary' : 'default'}
                            startContent={showFlag ? config.flag : undefined}
                        >
                            {config.nativeLabel}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
        );
    }

    if (variant === 'chips') {
        return (
            <div className="flex flex-col gap-2">
                {showLabel && (
                    <label className="text-sm font-medium text-foreground-600">
                        {t('common.common.language')}
                    </label>
                )}
                <div className="flex gap-2 flex-wrap">
                    {availableLanguages.map(([code, config]) => (
                        <Chip
                            key={code}
                            size={size}
                            variant={locale === code ? 'solid' : 'bordered'}
                            color={locale === code ? 'primary' : 'default'}
                            avatar={showFlag ? config.flag : undefined}
                            className="cursor-pointer"
                            onClick={() => locale !== code && handleLocaleChange(code)}
                        >
                            {config.nativeLabel}
                        </Chip>
                    ))}
                </div>
            </div>
        );
    }

    return null;
}

// 预设的组合组件
export function LanguageSwitchSelect(props: Omit<LanguageSwitchProps, 'variant'>) {
    return <LanguageSwitch {...props} variant="select" />;
}

export function LanguageSwitchButtons(props: Omit<LanguageSwitchProps, 'variant'>) {
    return <LanguageSwitch {...props} variant="buttons" />;
}

export function LanguageSwitchChips(props: Omit<LanguageSwitchProps, 'variant'>) {
    return <LanguageSwitch {...props} variant="chips" />;
}

export default LanguageSwitch; 