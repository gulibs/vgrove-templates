import { useI18n } from '@gulibs/vgrove-client';
import {
    I18nSwitch,
    PageContainer,
    ThemeSwitch
} from '@gulibs/vgrove-ui';
import {
    Avatar,
    AvatarGroup,
    Button,
    Card,
    CardBody,
    CardHeader,
    Chip,
    Divider,
    Image,
    Link,
    Progress
} from '@heroui/react';
import { Icon } from '@iconify/react';

export default function HomePage() {

    const { t } = useI18n();

    const stats = [
        {
            title: '总用户数',
            value: '2,547',
            change: '+12.5%',
            trend: 'up',
            icon: 'solar:users-group-two-rounded-line-duotone',
            color: 'primary'
        },
        {
            title: '活跃会话',
            value: '1,823',
            change: '+8.2%',
            trend: 'up',
            icon: 'solar:chart-line-duotone',
            color: 'success'
        },
        {
            title: '转化率',
            value: '24.8%',
            change: '-2.1%',
            trend: 'down',
            icon: 'solar:target-line-duotone',
            color: 'warning'
        },
        {
            title: '收入',
            value: '¥48,392',
            change: '+15.3%',
            trend: 'up',
            icon: 'solar:wallet-money-line-duotone',
            color: 'secondary'
        }
    ];

    const recentActivities = [
        {
            id: 1,
            user: '张三',
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            action: '创建了新项目',
            target: 'VGrove Dashboard',
            time: '2分钟前',
            type: 'create'
        },
        {
            id: 2,
            user: '李四',
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
            action: '更新了组件',
            target: 'Button 组件',
            time: '5分钟前',
            type: 'update'
        },
        {
            id: 3,
            user: '王五',
            avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
            action: '部署了应用',
            target: '生产环境',
            time: '10分钟前',
            type: 'deploy'
        },
        {
            id: 4,
            user: '赵六',
            avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
            action: '添加了新功能',
            target: '国际化支持',
            time: '1小时前',
            type: 'feature'
        }
    ];

    const projects = [
        {
            name: 'VGrove UI',
            description: '现代化的 React UI 组件库',
            progress: 85,
            status: 'active',
            team: [
                'https://i.pravatar.cc/150?u=a042581f4e29026024d',
                'https://i.pravatar.cc/150?u=a042581f4e29026704d',
                'https://i.pravatar.cc/150?u=a04258114e29026702d'
            ],
            tech: ['React', 'TypeScript', 'HeroUI']
        },
        {
            name: 'VGrove Client',
            description: '客户端运行时和工具库',
            progress: 92,
            status: 'active',
            team: [
                'https://i.pravatar.cc/150?u=a048581f4e29026701d',
                'https://i.pravatar.cc/150?u=a092581d4ef9026700d'
            ],
            tech: ['TypeScript', 'Vite', 'i18n']
        },
        {
            name: 'VGrove Core',
            description: '核心开发工具和构建系统',
            progress: 78,
            status: 'active',
            team: [
                'https://i.pravatar.cc/150?u=a042581f4e29027007d',
                'https://i.pravatar.cc/150?u=a042581f4e29027008d'
            ],
            tech: ['Node.js', 'CLI', 'Build Tools']
        }
    ];

    const getActivityIcon = (type: string) => {
        switch (type) {
            case 'create':
                return 'solar:add-circle-line-duotone';
            case 'update':
                return 'solar:pen-line-duotone';
            case 'deploy':
                return 'solar:rocket-line-duotone';
            case 'feature':
                return 'solar:star-line-duotone';
            default:
                return 'solar:bell-line-duotone';
        }
    };

    const getActivityColor = (type: string) => {
        switch (type) {
            case 'create':
                return 'success';
            case 'update':
                return 'primary';
            case 'deploy':
                return 'warning';
            case 'feature':
                return 'secondary';
            default:
                return 'default';
        }
    };

    return (
        <PageContainer>
            <div className="max-w-7xl mx-auto space-y-8 p-6">
                {/* 欢迎区域 */}
                <div className="text-center space-y-6">
                    <div className="flex justify-center">
                        <Image
                            src="/vgrove.svg"
                            alt="VGrove Logo"
                            width={200}
                            height={200}
                            className="drop-shadow-lg"
                        />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {t('common.welcome.title')}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
                            {t("common.welcome.subtitle")}
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
                            {t("common.welcome.version")}
                        </p>
                    </div>

                    {/* 快速操作 */}
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                        <Button
                            as={Link}
                            href="/navbar-demo"
                            color="primary"
                            size="lg"
                            startContent={<Icon icon="solar:widget-line-duotone" width={20} />}
                        >
                            组件演示
                        </Button>
                        <Button
                            as={Link}
                            href="/forms-demo"
                            color="secondary"
                            variant="bordered"
                            size="lg"
                            startContent={<Icon icon="solar:document-text-line-duotone" width={20} />}
                        >
                            表单组件
                        </Button>
                        <ThemeSwitch size="lg" />
                        <I18nSwitch size="lg" showFlag />
                    </div>
                </div>

                {/* 统计卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Card key={index} className="border-none bg-gradient-to-br from-white to-default-200/20 dark:from-default-900/50 dark:to-default-800/50">
                            <CardBody className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icon
                                                icon={stat.icon}
                                                width={24}
                                                className={`text-${stat.color}`}
                                            />
                                            <span className="text-sm text-default-500">{stat.title}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold">{stat.value}</h3>
                                        <div className="flex items-center gap-1 mt-2">
                                            <Icon
                                                icon={stat.trend === 'up' ? 'solar:arrow-up-line-duotone' : 'solar:arrow-down-line-duotone'}
                                                width={16}
                                                className={stat.trend === 'up' ? 'text-success' : 'text-danger'}
                                            />
                                            <span className={`text-sm ${stat.trend === 'up' ? 'text-success' : 'text-danger'}`}>
                                                {stat.change}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* 项目进展 */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <h2 className="text-2xl font-semibold flex items-center gap-2">
                                <Icon icon="solar:folder-line-duotone" width={24} />
                                项目进展
                            </h2>
                        </CardHeader>
                        <CardBody className="space-y-6">
                            {projects.map((project, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-semibold text-lg">{project.name}</h3>
                                            <p className="text-sm text-default-500">{project.description}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <AvatarGroup size="sm" max={3}>
                                                {project.team.map((avatar, idx) => (
                                                    <Avatar key={idx} src={avatar} />
                                                ))}
                                            </AvatarGroup>
                                            <Chip
                                                color="success"
                                                variant="flat"
                                                size="sm"
                                            >
                                                {project.status === 'active' ? '进行中' : '已完成'}
                                            </Chip>
                                        </div>
                                    </div>

                                    <Progress
                                        value={project.progress}
                                        color="primary"
                                        showValueLabel
                                        className="w-full"
                                    />

                                    <div className="flex gap-2">
                                        {project.tech.map((tech, techIdx) => (
                                            <Chip key={techIdx} size="sm" variant="bordered">
                                                {tech}
                                            </Chip>
                                        ))}
                                    </div>

                                    {index < projects.length - 1 && <Divider />}
                                </div>
                            ))}
                        </CardBody>
                    </Card>

                    {/* 最近活动 */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-semibold flex items-center gap-2">
                                <Icon icon="solar:history-line-duotone" width={24} />
                                最近活动
                            </h2>
                        </CardHeader>
                        <CardBody className="space-y-4">
                            {recentActivities.map((activity) => (
                                <div key={activity.id} className="flex items-start gap-3">
                                    <div className="relative">
                                        <Avatar
                                            src={activity.avatar}
                                            size="sm"
                                            className="flex-shrink-0"
                                        />
                                        <div className="absolute -bottom-1 -right-1">
                                            <div className={`p-1 rounded-full bg-${getActivityColor(activity.type)} bg-opacity-20`}>
                                                <Icon
                                                    icon={getActivityIcon(activity.type)}
                                                    width={12}
                                                    className={`text-${getActivityColor(activity.type)}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm">
                                            <span className="font-medium">{activity.user}</span>
                                            {' '}
                                            <span className="text-default-500">{activity.action}</span>
                                            {' '}
                                            <span className="font-medium">{activity.target}</span>
                                        </p>
                                        <p className="text-xs text-default-400 mt-1">
                                            {activity.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </div>

                {/* 功能特性展示 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Icon icon="solar:star-line-duotone" width={24} />
                            核心特性
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="text-center space-y-3">
                                <div className="flex justify-center">
                                    <div className="p-4 bg-primary-100 dark:bg-primary-900/20 rounded-full">
                                        <Icon icon="solar:widget-line-duotone" width={32} className="text-primary" />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-lg">
                                    {t("common.features.heroui.title")}
                                </h3>
                                <p className="text-sm text-default-500">
                                    {t("common.features.heroui.description")}
                                </p>
                            </div>

                            <div className="text-center space-y-3">
                                <div className="flex justify-center">
                                    <div className="p-4 bg-success-100 dark:bg-success-900/20 rounded-full">
                                        <Icon icon="solar:global-line-duotone" width={32} className="text-success" />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-lg">
                                    {t("common.features.i18n.title")}
                                </h3>
                                <p className="text-sm text-default-500">
                                    {t("common.features.i18n.description")}
                                </p>
                            </div>

                            <div className="text-center space-y-3">
                                <div className="flex justify-center">
                                    <div className="p-4 bg-warning-100 dark:bg-warning-900/20 rounded-full">
                                        <Icon icon="solar:route-line-duotone" width={32} className="text-warning" />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-lg">
                                    {t("common.features.autoroutes.title")}
                                </h3>
                                <p className="text-sm text-default-500">
                                    {t("common.features.autoroutes.description")}
                                </p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </PageContainer>
    );
} 