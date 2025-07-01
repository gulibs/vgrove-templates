import {
    PageContainer
} from '@gulibs/vgrove-ui';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Chip,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    SelectItem,
    Slider,
    Switch,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tabs,
    Textarea,
    useDisclosure
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';

// 模拟设置数据
const generalSettings = {
    siteName: 'VGrove Dashboard',
    siteDescription: '基于 VGrove 框架构建的现代化管理界面',
    timezone: 'Asia/Shanghai',
    language: 'zh-CN',
    dateFormat: 'YYYY-MM-DD',
    currency: 'CNY',
    maintenanceMode: false,
    debugMode: false,
    analyticsEnabled: true
};

const securitySettings = {
    twoFactorRequired: true,
    sessionTimeout: 30,
    passwordMinLength: 8,
    passwordComplexity: true,
    sslForceHttps: true,
    auditLogging: true
};

const notificationSettings = {
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    systemAlerts: true,
    securityAlerts: true,
    weeklyReports: true
};

const integrationData = [
    {
        name: 'GitHub',
        description: '代码仓库集成',
        status: 'connected',
        icon: 'solar:programming-line-duotone',
        lastSync: '2分钟前'
    },
    {
        name: 'Slack',
        description: '团队协作通知',
        status: 'connected',
        icon: 'solar:chat-round-line-duotone',
        lastSync: '5分钟前'
    },
    {
        name: 'AWS S3',
        description: '文件存储服务',
        status: 'error',
        icon: 'solar:cloud-storage-line-duotone',
        lastSync: '1小时前'
    }
];

const systemLogs = [
    {
        timestamp: '2024-01-15 14:30:25',
        level: 'INFO',
        category: '用户登录',
        message: '用户 zhang.san@example.com 成功登录',
        user: 'zhang.san@example.com'
    },
    {
        timestamp: '2024-01-15 14:28:12',
        level: 'WARN',
        category: '系统性能',
        message: 'API 响应时间超过 2 秒',
        user: 'system'
    },
    {
        timestamp: '2024-01-15 14:25:03',
        level: 'ERROR',
        category: '数据库',
        message: '数据库连接池不足',
        user: 'system'
    }
];

const getLevelColor = (level: string) => {
    switch (level) {
        case 'ERROR': return 'danger';
        case 'WARN': return 'warning';
        case 'INFO': return 'primary';
        default: return 'default';
    }
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'connected': return 'success';
        case 'error': return 'danger';
        case 'disconnected': return 'default';
        default: return 'default';
    }
};

export default function SettingsExample() {
    const [activeTab, setActiveTab] = useState('general');
    const [settings, setSettings] = useState({
        general: generalSettings,
        security: securitySettings,
        notifications: notificationSettings
    });

    const { isOpen: isResetOpen, onOpen: onResetOpen, onOpenChange: onResetOpenChange } = useDisclosure();

    const handleSettingChange = (category: string, key: string, value: string | number | boolean | number[]) => {
        setSettings(prev => ({
            ...prev,
            [category]: {
                ...prev[category as keyof typeof prev],
                [key]: value
            }
        }));
    };

    const handleSaveSettings = () => {
        console.log('保存设置:', settings);
        // 这里应该有保存逻辑
    };

    const handleResetSettings = () => {
        setSettings({
            general: generalSettings,
            security: securitySettings,
            notifications: notificationSettings
        });
        onResetOpenChange();
    };

    return (
        <PageContainer>
            <div className="max-w-6xl mx-auto space-y-8 p-6">
                {/* 页面标题 */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">系统设置</h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                            管理应用程序配置和系统参数
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button
                            variant="bordered"
                            onPress={onResetOpen}
                            startContent={<Icon icon="solar:refresh-line-duotone" width={18} />}
                        >
                            重置设置
                        </Button>
                        <Button
                            color="primary"
                            onPress={handleSaveSettings}
                            startContent={<Icon icon="solar:diskette-line-duotone" width={18} />}
                        >
                            保存更改
                        </Button>
                    </div>
                </div>

                {/* 设置标签页 */}
                <Tabs
                    aria-label="设置标签页"
                    selectedKey={activeTab}
                    onSelectionChange={(key) => setActiveTab(key as string)}
                    className="w-full"
                >
                    {/* 常规设置 */}
                    <Tab key="general" title={
                        <div className="flex items-center gap-2">
                            <Icon icon="solar:settings-line-duotone" width={18} />
                            常规设置
                        </div>
                    }>
                        <div className="grid lg:grid-cols-2 gap-8 mt-6">
                            <Card>
                                <CardHeader>
                                    <h2 className="text-xl font-semibold">基本配置</h2>
                                </CardHeader>
                                <CardBody className="space-y-6">
                                    <Input
                                        label="站点名称"
                                        value={settings.general.siteName}
                                        onValueChange={(value) => handleSettingChange('general', 'siteName', value)}
                                    />
                                    <Textarea
                                        label="站点描述"
                                        value={settings.general.siteDescription}
                                        onValueChange={(value) => handleSettingChange('general', 'siteDescription', value)}
                                        maxRows={3}
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <Select
                                            label="时区"
                                            selectedKeys={[settings.general.timezone]}
                                            onSelectionChange={(keys) => handleSettingChange('general', 'timezone', Array.from(keys)[0])}
                                        >
                                            <SelectItem key="Asia/Shanghai">Asia/Shanghai</SelectItem>
                                            <SelectItem key="America/New_York">America/New_York</SelectItem>
                                            <SelectItem key="Europe/London">Europe/London</SelectItem>
                                        </Select>
                                        <Select
                                            label="语言"
                                            selectedKeys={[settings.general.language]}
                                            onSelectionChange={(keys) => handleSettingChange('general', 'language', Array.from(keys)[0])}
                                        >
                                            <SelectItem key="zh-CN">简体中文</SelectItem>
                                            <SelectItem key="en-US">English</SelectItem>
                                            <SelectItem key="ja-JP">日本語</SelectItem>
                                        </Select>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <h2 className="text-xl font-semibold">系统选项</h2>
                                </CardHeader>
                                <CardBody className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium">维护模式</h3>
                                            <p className="text-sm text-default-500">启用后将限制用户访问</p>
                                        </div>
                                        <Switch
                                            isSelected={settings.general.maintenanceMode}
                                            onValueChange={(value) => handleSettingChange('general', 'maintenanceMode', value)}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium">调试模式</h3>
                                            <p className="text-sm text-default-500">开发环境下启用详细日志</p>
                                        </div>
                                        <Switch
                                            isSelected={settings.general.debugMode}
                                            onValueChange={(value) => handleSettingChange('general', 'debugMode', value)}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium">数据分析</h3>
                                            <p className="text-sm text-default-500">收集匿名使用数据</p>
                                        </div>
                                        <Switch
                                            isSelected={settings.general.analyticsEnabled}
                                            onValueChange={(value) => handleSettingChange('general', 'analyticsEnabled', value)}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Tab>

                    {/* 安全设置 */}
                    <Tab key="security" title={
                        <div className="flex items-center gap-2">
                            <Icon icon="solar:shield-check-line-duotone" width={18} />
                            安全设置
                        </div>
                    }>
                        <Card className="mt-6">
                            <CardHeader>
                                <h2 className="text-xl font-semibold">安全配置</h2>
                            </CardHeader>
                            <CardBody className="space-y-6">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-medium">强制双因子认证</h3>
                                                <p className="text-sm text-default-500">所有用户必须启用 2FA</p>
                                            </div>
                                            <Switch
                                                isSelected={settings.security.twoFactorRequired}
                                                onValueChange={(value) => handleSettingChange('security', 'twoFactorRequired', value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">会话超时 (分钟)</label>
                                            <Slider
                                                step={5}
                                                minValue={5}
                                                maxValue={120}
                                                value={settings.security.sessionTimeout}
                                                onChange={(value) => handleSettingChange('security', 'sessionTimeout', value)}
                                                className="w-full"
                                            />
                                            <div className="flex justify-between text-xs text-default-500">
                                                <span>5分钟</span>
                                                <span>{settings.security.sessionTimeout}分钟</span>
                                                <span>120分钟</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <Input
                                            type="number"
                                            label="密码最小长度"
                                            value={settings.security.passwordMinLength.toString()}
                                            onValueChange={(value) => handleSettingChange('security', 'passwordMinLength', parseInt(value))}
                                        />
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">密码复杂度要求</span>
                                            <Switch
                                                isSelected={settings.security.passwordComplexity}
                                                onValueChange={(value) => handleSettingChange('security', 'passwordComplexity', value)}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">强制 HTTPS</span>
                                            <Switch
                                                isSelected={settings.security.sslForceHttps}
                                                onValueChange={(value) => handleSettingChange('security', 'sslForceHttps', value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>

                    {/* 通知设置 */}
                    <Tab key="notifications" title={
                        <div className="flex items-center gap-2">
                            <Icon icon="solar:bell-line-duotone" width={18} />
                            通知设置
                        </div>
                    }>
                        <Card className="mt-6">
                            <CardHeader>
                                <h2 className="text-xl font-semibold">通知配置</h2>
                            </CardHeader>
                            <CardBody className="space-y-6">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <h3 className="font-semibold">通知渠道</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">邮件通知</span>
                                                <Switch
                                                    isSelected={settings.notifications.emailNotifications}
                                                    onValueChange={(value) => handleSettingChange('notifications', 'emailNotifications', value)}
                                                />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">推送通知</span>
                                                <Switch
                                                    isSelected={settings.notifications.pushNotifications}
                                                    onValueChange={(value) => handleSettingChange('notifications', 'pushNotifications', value)}
                                                />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">短信通知</span>
                                                <Switch
                                                    isSelected={settings.notifications.smsNotifications}
                                                    onValueChange={(value) => handleSettingChange('notifications', 'smsNotifications', value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <h3 className="font-semibold">通知类型</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">系统警报</span>
                                                <Switch
                                                    isSelected={settings.notifications.systemAlerts}
                                                    onValueChange={(value) => handleSettingChange('notifications', 'systemAlerts', value)}
                                                />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">安全警报</span>
                                                <Switch
                                                    isSelected={settings.notifications.securityAlerts}
                                                    onValueChange={(value) => handleSettingChange('notifications', 'securityAlerts', value)}
                                                />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">周报</span>
                                                <Switch
                                                    isSelected={settings.notifications.weeklyReports}
                                                    onValueChange={(value) => handleSettingChange('notifications', 'weeklyReports', value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>

                    {/* 集成管理 */}
                    <Tab key="integrations" title={
                        <div className="flex items-center gap-2">
                            <Icon icon="solar:widget-2-line-duotone" width={18} />
                            集成管理
                        </div>
                    }>
                        <Card className="mt-6">
                            <CardHeader>
                                <h2 className="text-xl font-semibold">第三方集成</h2>
                            </CardHeader>
                            <CardBody>
                                <div className="grid gap-4">
                                    {integrationData.map((integration, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-default-100 rounded-lg">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-white dark:bg-default-200 rounded-lg">
                                                    <Icon icon={integration.icon} width={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">{integration.name}</h3>
                                                    <p className="text-sm text-default-500">{integration.description}</p>
                                                    <p className="text-xs text-default-400">上次同步: {integration.lastSync}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Chip
                                                    color={getStatusColor(integration.status)}
                                                    variant="flat"
                                                    size="sm"
                                                >
                                                    {integration.status === 'connected' ? '已连接' :
                                                        integration.status === 'error' ? '错误' : '未连接'}
                                                </Chip>
                                                <Dropdown>
                                                    <DropdownTrigger>
                                                        <Button isIconOnly variant="light" size="sm">
                                                            <Icon icon="solar:menu-dots-line-duotone" width={16} />
                                                        </Button>
                                                    </DropdownTrigger>
                                                    <DropdownMenu>
                                                        <DropdownItem key="configure">配置</DropdownItem>
                                                        <DropdownItem key="test">测试连接</DropdownItem>
                                                        <DropdownItem key="sync">立即同步</DropdownItem>
                                                        <DropdownItem key="disconnect" className="text-danger">断开连接</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>

                    {/* 系统监控 */}
                    <Tab key="monitoring" title={
                        <div className="flex items-center gap-2">
                            <Icon icon="solar:monitor-line-duotone" width={18} />
                            系统监控
                        </div>
                    }>
                        <Card className="mt-6">
                            <CardHeader className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold">系统日志</h2>
                                <div className="flex gap-2">
                                    <Button variant="flat" size="sm">
                                        导出日志
                                    </Button>
                                    <Button variant="flat" size="sm">
                                        清空日志
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardBody className="p-0">
                                <Table removeWrapper>
                                    <TableHeader>
                                        <TableColumn>时间</TableColumn>
                                        <TableColumn>级别</TableColumn>
                                        <TableColumn>类别</TableColumn>
                                        <TableColumn>消息</TableColumn>
                                        <TableColumn>用户</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        {systemLogs.map((log, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="font-mono text-xs">
                                                    {log.timestamp}
                                                </TableCell>
                                                <TableCell>
                                                    <Chip
                                                        color={getLevelColor(log.level)}
                                                        variant="flat"
                                                        size="sm"
                                                    >
                                                        {log.level}
                                                    </Chip>
                                                </TableCell>
                                                <TableCell>{log.category}</TableCell>
                                                <TableCell className="max-w-xs truncate">
                                                    {log.message}
                                                </TableCell>
                                                <TableCell className="text-sm text-default-500">
                                                    {log.user}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>

                {/* 重置设置确认模态框 */}
                <Modal isOpen={isResetOpen} onOpenChange={onResetOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader>重置设置</ModalHeader>
                                <ModalBody>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-warning-50 dark:bg-warning-900/20 rounded-lg">
                                            <div className="flex items-start gap-3">
                                                <Icon icon="solar:danger-triangle-line-duotone" className="text-warning mt-0.5" width={20} />
                                                <div>
                                                    <h3 className="font-semibold text-warning">确认重置</h3>
                                                    <p className="text-sm text-warning-600 dark:text-warning-400 mt-1">
                                                        这将恢复所有设置到默认值，此操作无法撤销。
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-default-600">
                                            确定要重置所有设置吗？
                                        </p>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button variant="light" onPress={onClose}>
                                        取消
                                    </Button>
                                    <Button color="warning" onPress={handleResetSettings}>
                                        确认重置
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </PageContainer>
    );
} 