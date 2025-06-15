import { Button, ButtonGroup } from '@heroui/react';
import { useI18n } from '@gulibs/react-autoroutes-client';

export interface LanguageSwitchProps {
    variant?: 'select' | 'buttons' | 'chips';
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
    showFlag?: boolean;
}

const languageConfig = {
    en: { label: 'English', flag: '🇺🇸' },
    zh: { label: '中文', flag: '🇨🇳' }
};

export function LanguageSwitch({
    variant = 'buttons',
    size = 'md',
    showLabel = true,
    showFlag = true
}: LanguageSwitchProps) {
    const { locale, setLocale, availableLocales } = useI18n();

    const handleLocaleChange = async (newLocale: string) => {
        try {
            await setLocale(newLocale);
        } catch (error) {
            console.error('Failed to change locale:', error);
        }
    };

    if (variant === 'buttons') {
        return (
            <ButtonGroup size={size}>
                {availableLocales.map((loc) => {
                    const config = languageConfig[loc as keyof typeof languageConfig];
                    if (!config) return null;

                    return (
                        <Button
                            key={loc}
                            variant={locale === loc ? 'solid' : 'bordered'}
                            color={locale === loc ? 'primary' : 'default'}
                            onPress={() => handleLocaleChange(loc)}
                        >
                            {showFlag && config.flag} {showLabel && config.label}
                        </Button>
                    );
                })}
            </ButtonGroup>
        );
    }

    // Default to buttons variant
    return (
        <ButtonGroup size={size}>
            {availableLocales.map((loc) => {
                const config = languageConfig[loc as keyof typeof languageConfig];
                if (!config) return null;

                return (
                    <Button
                        key={loc}
                        variant={locale === loc ? 'solid' : 'bordered'}
                        color={locale === loc ? 'primary' : 'default'}
                        onPress={() => handleLocaleChange(loc)}
                    >
                        {showFlag && config.flag} {showLabel && config.label}
                    </Button>
                );
            })}
        </ButtonGroup>
    );
}

// 预设的组合组件
