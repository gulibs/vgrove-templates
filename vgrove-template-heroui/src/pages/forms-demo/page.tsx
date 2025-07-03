import { useI18n } from '@gulibs/vgrove-client';
import {
    I18nMessage,
    I18nSwitch,
    PageContainer,
    ThemeSwitch
} from '@gulibs/vgrove-ui';
import {
    Autocomplete,
    AutocompleteItem,
    Button,
    Checkbox,
    CheckboxGroup,
    DatePicker,
    Input,
    Radio,
    RadioGroup,
    Select,
    SelectItem,
    Slider,
    Switch,
    Textarea,
    TimeInput
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
    country: string;
    interests: string[];
    theme: string;
    newsletter: boolean;
    volume: number;
}

export default function FormDemo() {
    const { t } = useI18n();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        country: '',
        interests: [],
        theme: 'light',
        newsletter: false,
        volume: 50,
    });

    const countries = [
        { key: 'china', label: t('common.form.china') },
        { key: 'usa', label: t('common.form.usa') },
        { key: 'japan', label: t('common.form.japan') },
        { key: 'uk', label: t('common.form.uk') },
    ];

    const interests = [
        { key: 'programming', label: t('common.form.programming') },
        { key: 'design', label: t('common.form.design') },
        { key: 'music', label: t('common.form.music') },
        { key: 'reading', label: t('common.form.reading') },
    ];

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    const handleClear = () => {
        setFormData({
            name: '',
            email: '',
            message: '',
            country: '',
            interests: [],
            theme: 'light',
            newsletter: false,
            volume: 50,
        });
    };

    return (
        <PageContainer>
            <div className="space-y-8">
                {/* 页面标题 */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">
                        <I18nMessage id="common.demo.forms.title" />
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        <I18nMessage id="common.demo.forms.subtitle" />
                    </p>
                </div>

                {/* 基础输入组件 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
                            <Icon icon="solar:document-text-line-duotone" width={24} />
                            <I18nMessage id="common.form.basicInputs" />
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            <I18nMessage id="common.form.basicInputsDesc" />
                        </p>
                    </div>
                    <div className="space-y-6">
                        {/* 文本输入 */}
                        <Input
                            label={t('common.form.name')}
                            placeholder={t('common.form.namePlaceholder')}
                            startContent={<Icon icon="solar:user-line-duotone" />}
                            value={formData.name}
                            onValueChange={(value) => setFormData({ ...formData, name: value })}
                        />

                        {/* 邮箱输入 */}
                        <Input
                            type="email"
                            label={t('common.form.email')}
                            placeholder={t('common.form.emailPlaceholder')}
                            startContent={<Icon icon="solar:letter-line-duotone" />}
                            value={formData.email}
                            onValueChange={(value) => setFormData({ ...formData, email: value })}
                            validate={(value) => {
                                if (!value.includes('@')) {
                                    return t('common.form.emailInvalid');
                                }
                                return true;
                            }}
                        />

                        {/* 密码输入 */}
                        <Input
                            type="password"
                            label={t('common.form.password')}
                            placeholder={t('common.form.passwordPlaceholder')}
                            startContent={<Icon icon="solar:lock-line-duotone" />}
                            endContent={
                                <button type="button" aria-label="Toggle password visibility">
                                    <Icon icon="solar:eye-line-duotone" width={18} />
                                </button>
                            }
                        />

                        {/* 文本域 */}
                        <Textarea
                            label={t('common.form.bio')}
                            placeholder={t('common.form.bioPlaceholder')}
                            description={t('common.form.bioDesc')}
                            maxLength={500}
                            value={formData.message}
                            onValueChange={(value) => setFormData({ ...formData, message: value })}
                        />
                    </div>
                </div>

                {/* 选择组件 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
                            <Icon icon="solar:checklist-line-duotone" width={24} />
                            <I18nMessage id="common.form.selectionComponents" />
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            <I18nMessage id="common.form.selectionComponentsDesc" />
                        </p>
                    </div>
                    <div className="space-y-6">
                        {/* 下拉选择 */}
                        <Select
                            label={t('common.form.country')}
                            placeholder={t('common.form.countryPlaceholder')}
                            startContent={<Icon icon="solar:global-line-duotone" />}
                            selectedKeys={formData.country ? [formData.country] : []}
                            onSelectionChange={(keys) => {
                                const selectedKey = Array.from(keys)[0] as string;
                                setFormData({ ...formData, country: selectedKey });
                            }}
                        >
                            {countries.map((country) => (
                                <SelectItem key={country.key}>
                                    {country.label}
                                </SelectItem>
                            ))}
                        </Select>

                        {/* 自动完成 */}
                        <Autocomplete
                            label={t('common.form.skills')}
                            placeholder={t('common.form.skillsPlaceholder')}
                            startContent={<Icon icon="solar:magnifer-line-duotone" />}
                        >
                            <AutocompleteItem key="react">{t('common.form.react')}</AutocompleteItem>
                            <AutocompleteItem key="vue">{t('common.form.vue')}</AutocompleteItem>
                            <AutocompleteItem key="angular">{t('common.form.angular')}</AutocompleteItem>
                            <AutocompleteItem key="typescript">TypeScript</AutocompleteItem>
                            <AutocompleteItem key="nodejs">Node.js</AutocompleteItem>
                        </Autocomplete>

                        {/* 复选框组 */}
                        <CheckboxGroup
                            label={t('common.form.interests')}
                            description={t('common.form.interestsDesc')}
                            value={formData.interests}
                            onValueChange={(value) => setFormData({ ...formData, interests: value })}
                        >
                            {interests.map((interest) => (
                                <Checkbox key={interest.key} value={interest.key}>
                                    {interest.label}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>

                        {/* 单选框组 */}
                        <RadioGroup
                            label={t('common.form.theme')}
                            value={formData.theme}
                            onValueChange={(value) => setFormData({ ...formData, theme: value })}
                        >
                            <Radio value="light">{t('common.form.light')}</Radio>
                            <Radio value="dark">{t('common.form.dark')}</Radio>
                            <Radio value="auto">{t('common.form.auto')}</Radio>
                        </RadioGroup>
                    </div>
                </div>

                {/* 其他组件 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
                            <Icon icon="solar:settings-line-duotone" width={24} />
                            <I18nMessage id="common.form.otherComponents" />
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            <I18nMessage id="common.form.otherComponentsDesc" />
                        </p>
                    </div>
                    <div className="space-y-6">
                        {/* 开关 */}
                        <Switch
                            isSelected={formData.newsletter}
                            onValueChange={(value) => setFormData({ ...formData, newsletter: value })}
                            startContent={<Icon icon="solar:letter-line-duotone" />}
                            endContent={<Icon icon="solar:bell-line-duotone" />}
                        >
                            {t('common.form.subscribe')}
                        </Switch>

                        {/* 滑块 */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t('common.form.experience')} ({formData.volume} {t('common.form.years')})</label>
                            <Slider
                                value={formData.volume}
                                onChange={(value) => setFormData({ ...formData, volume: value as number })}
                                minValue={0}
                                maxValue={20}
                                step={1}
                                showTooltip
                                className="max-w-md"
                                aria-label={t('common.form.experience')}
                            />
                        </div>

                        {/* 日期选择器 */}
                        <DatePicker
                            label={t('common.form.birthdate')}
                            className="max-w-md"
                            startContent={<Icon icon="solar:calendar-line-duotone" />}
                        />

                        {/* 时间输入 */}
                        <TimeInput
                            label={t('common.form.workTime')}
                            className="max-w-md"
                            startContent={<Icon icon="solar:clock-line-duotone" />}
                        />

                        {/* 组件集成演示 */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium">
                                <I18nMessage id="common.theme.title" /> & <I18nMessage id="common.language.title" />
                            </label>
                            <div className="flex items-center gap-3">
                                <ThemeSwitch size="sm" />
                                <I18nSwitch size="sm" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 表单操作 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
                            <Icon icon="solar:disk-line-duotone" width={24} />
                            <I18nMessage id="common.form.formState" />
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {/* 当前表单数据预览 */}
                        <div className="space-y-3">
                            <h3 className="font-medium">
                                <I18nMessage id="common.form.formData" />
                            </h3>
                            <div className="p-4 bg-default-100 rounded-lg">
                                <pre className="text-sm overflow-auto">
                                    {JSON.stringify(formData, null, 2)}
                                </pre>
                            </div>
                        </div>

                        {/* 操作按钮 */}
                        <div className="flex gap-3">
                            <Button
                                color="primary"
                                onClick={handleSubmit}
                                startContent={<Icon icon="solar:check-circle-line-duotone" />}
                            >
                                {t('common.form.submitForm')}
                            </Button>
                            <Button
                                variant="flat"
                                onClick={handleClear}
                                startContent={<Icon icon="solar:restart-line-duotone" />}
                            >
                                {t('common.form.clearForm')}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 功能特性 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                            <Icon icon="solar:check-circle-line-duotone" className="text-2xl text-green-500 mb-2" />
                            <h4 className="font-semibold">
                                <I18nMessage id="common.form.formValidation" />
                            </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            <I18nMessage id="common.form.realTimeValidation" />
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                            <Icon icon="solar:palette-line-duotone" className="text-2xl text-blue-500 mb-2" />
                            <h4 className="font-semibold">
                                <I18nMessage id="common.form.customStyles" />
                            </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            <I18nMessage id="common.form.customStyles" />
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                            <Icon icon="solar:smartphone-line-duotone" className="text-2xl text-purple-500 mb-2" />
                            <h4 className="font-semibold">
                                <I18nMessage id="common.form.responsiveDesign" />
                            </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            <I18nMessage id="common.form.responsiveDesign" />
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                            <Icon icon="solar:global-line-duotone" className="text-2xl text-orange-500 mb-2" />
                            <h4 className="font-semibold">
                                <I18nMessage id="common.features.i18n.title" />
                            </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            <I18nMessage id="common.features.i18n.description" />
                        </p>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
} 