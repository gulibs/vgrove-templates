import {
    PageContainer
} from '@gulibs/vgrove-ui';
import {
    Avatar,
    AvatarGroup,
    Badge,
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
    Link,
    Select,
    SelectItem,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useMemo, useState } from 'react';

// 模拟数据
const recentUsers = [
    {
        id: 1,
        name: '张三',
        email: 'zhang.san@example.com',
        avatar: 'https://ui-avatars.com/api/?name=张三&background=3b82f6&color=fff&size=150',
        role: '管理员',
        status: 'online',
        lastSeen: '刚刚'
    },
    {
        id: 2,
        name: '李四',
        email: 'li.si@example.com',
        avatar: 'https://ui-avatars.com/api/?name=李四&background=10b981&color=fff&size=150',
        role: '编辑',
        status: 'offline',
        lastSeen: '2小时前'
    },
    {
        id: 3,
        name: '王五',
        email: 'wang.wu@example.com',
        avatar: 'https://ui-avatars.com/api/?name=王五&background=8b5cf6&color=fff&size=150',
        role: '用户',
        status: 'online',
        lastSeen: '5分钟前'
    },
    {
        id: 4,
        name: 'Alex Smith',
        email: 'alex.smith@example.com',
        avatar: 'https://ui-avatars.com/api/?name=Alex+Smith&background=f59e0b&color=fff&size=150',
        role: '管理员',
        status: 'away',
        lastSeen: '30分钟前'
    }
];

const recentOrders = [
    {
        id: '#ORD-001',
        customer: '张三',
        product: 'VGrove Pro License',
        amount: '¥1,299',
        status: 'completed',
        date: '2024-01-15'
    },
    {
        id: '#ORD-002',
        customer: '李四',
        product: 'VGrove Starter',
        amount: '¥599',
        status: 'pending',
        date: '2024-01-14'
    },
    {
        id: '#ORD-003',
        customer: '王五',
        product: 'VGrove Enterprise',
        amount: '¥2,999',
        status: 'processing',
        date: '2024-01-14'
    },
    {
        id: '#ORD-004',
        customer: 'Alex Smith',
        product: 'VGrove Custom',
        amount: '¥5,999',
        status: 'completed',
        date: '2024-01-13'
    }
];

const systemNotifications = [
    {
        id: 1,
        type: 'security',
        title: '系统安全更新',
        message: '检测到新的安全补丁，建议立即更新',
        time: '5分钟前',
        priority: 'high'
    },
    {
        id: 2,
        type: 'performance',
        title: '性能监控警告',
        message: 'API 响应时间超过预期阈值',
        time: '15分钟前',
        priority: 'medium'
    },
    {
        id: 3,
        type: 'storage',
        title: '存储空间提醒',
        message: '数据库存储使用率达到 85%',
        time: '1小时前',
        priority: 'medium'
    },
    {
        id: 4,
        type: 'user',
        title: '用户活动异常',
        message: '检测到异常登录尝试',
        time: '2小时前',
        priority: 'high'
    }
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'completed': return 'success';
        case 'processing': return 'warning';
        case 'pending': return 'default';
        case 'cancelled': return 'danger';
        default: return 'default';
    }
};

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case 'high': return 'danger';
        case 'medium': return 'warning';
        case 'low': return 'success';
        default: return 'default';
    }
};

const getNotificationIcon = (type: string) => {
    switch (type) {
        case 'security': return 'solar:shield-warning-line-duotone';
        case 'performance': return 'solar:speedometer-line-duotone';
        case 'storage': return 'solar:database-line-duotone';
        case 'user': return 'solar:user-line-duotone';
        default: return 'solar:bell-line-duotone';
    }
};

const getUserStatusColor = (status: string) => {
    switch (status) {
        case 'online': return 'success';
        case 'away': return 'warning';
        case 'offline': return 'default';
        default: return 'default';
    }
};

export default function DashboardExample() {
    const [selectedPeriod, setSelectedPeriod] = useState('7days');
    const [searchQuery, setSearchQuery] = useState('');

    const kpiData = [
        {
            title: '总收入',
            value: '¥342,751',
            change: '+12.5%',
            trend: 'up',
            icon: 'solar:dollar-minimalistic-line-duotone',
            color: 'success'
        },
        {
            title: '新订单',
            value: '2,847',
            change: '+8.2%',
            trend: 'up',
            icon: 'solar:bag-line-duotone',
            color: 'primary'
        },
        {
            title: '活跃用户',
            value: '12,429',
            change: '-2.1%',
            trend: 'down',
            icon: 'solar:users-group-rounded-line-duotone',
            color: 'warning'
        },
        {
            title: '转化率',
            value: '24.8%',
            change: '+3.1%',
            trend: 'up',
            icon: 'solar:target-line-duotone',
            color: 'secondary'
        }
    ];

    const systemStatus = [
        { name: 'API 服务', status: 'healthy', uptime: '99.9%' },
        { name: '数据库', status: 'healthy', uptime: '99.8%' },
        { name: 'CDN', status: 'warning', uptime: '98.5%' },
        { name: '邮件服务', status: 'healthy', uptime: '99.7%' }
    ];

    const filteredUsers = useMemo(() => {
        if (!searchQuery) return recentUsers;
        return recentUsers.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <PageContainer>
            <div className="max-w-7xl mx-auto space-y-8 p-6">
                {/* 页面标题和操作 */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">管理控制台</h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                            欢迎回来！这是您的业务概览
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Select
                            placeholder="选择时间段"
                            className="w-40"
                            selectedKeys={[selectedPeriod]}
                            onSelectionChange={(keys) => setSelectedPeriod(Array.from(keys)[0] as string)}
                        >
                            <SelectItem key="24hours">24小时</SelectItem>
                            <SelectItem key="7days">7天</SelectItem>
                            <SelectItem key="30days">30天</SelectItem>
                            <SelectItem key="90days">90天</SelectItem>
                        </Select>
                        <Button color="primary" startContent={<Icon icon="solar:export-line-duotone" width={18} />}>
                            导出报告
                        </Button>
                    </div>
                </div>

                {/* KPI 指标卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {kpiData.map((kpi, index) => (
                        <Card key={index} className="border-none bg-gradient-to-br from-white to-default-200/20 dark:from-default-900/50 dark:to-default-800/50">
                            <CardBody className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-xl bg-${kpi.color}-100 dark:bg-${kpi.color}-900/20`}>
                                        <Icon
                                            icon={kpi.icon}
                                            width={24}
                                            className={`text-${kpi.color}`}
                                        />
                                    </div>
                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button isIconOnly variant="light" size="sm" aria-label="KPI actions">
                                                <Icon icon="solar:menu-dots-line-duotone" width={16} />
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu>
                                            <DropdownItem key="view">查看详情</DropdownItem>
                                            <DropdownItem key="export">导出数据</DropdownItem>
                                            <DropdownItem key="settings">设置</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-default-500">{kpi.title}</p>
                                    <h3 className="text-2xl font-bold">{kpi.value}</h3>
                                    <div className="flex items-center gap-1">
                                        <Icon
                                            icon={kpi.trend === 'up' ? 'solar:arrow-up-line-duotone' : 'solar:arrow-down-line-duotone'}
                                            width={16}
                                            className={kpi.trend === 'up' ? 'text-success' : 'text-danger'}
                                        />
                                        <span className={`text-sm ${kpi.trend === 'up' ? 'text-success' : 'text-danger'}`}>
                                            {kpi.change}
                                        </span>
                                        <span className="text-xs text-default-400">vs 上期</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                {/* 主要内容区域 */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* 左侧：最近订单 */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold flex items-center gap-2">
                                    <Icon icon="solar:bag-line-duotone" width={20} />
                                    最近订单
                                </h2>
                                <Button variant="light" size="sm" as={Link} href="#orders">
                                    查看全部
                                </Button>
                            </CardHeader>
                            <CardBody className="p-0">
                                <Table removeWrapper>
                                    <TableHeader>
                                        <TableColumn>订单</TableColumn>
                                        <TableColumn>客户</TableColumn>
                                        <TableColumn>产品</TableColumn>
                                        <TableColumn>金额</TableColumn>
                                        <TableColumn>状态</TableColumn>
                                        <TableColumn>操作</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        {recentOrders.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell>
                                                    <div>
                                                        <p className="font-medium">{order.id}</p>
                                                        <p className="text-xs text-default-500">{order.date}</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{order.customer}</TableCell>
                                                <TableCell>
                                                    <div className="max-w-32 truncate">
                                                        {order.product}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="font-medium">{order.amount}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <Chip
                                                        color={getStatusColor(order.status)}
                                                        variant="flat"
                                                        size="sm"
                                                    >
                                                        {order.status === 'completed' ? '已完成' :
                                                            order.status === 'processing' ? '处理中' :
                                                                order.status === 'pending' ? '待处理' : '已取消'}
                                                    </Chip>
                                                </TableCell>
                                                <TableCell>
                                                    <Dropdown>
                                                        <DropdownTrigger>
                                                            <Button isIconOnly variant="light" size="sm" aria-label="Order actions">
                                                                <Icon icon="solar:menu-dots-line-duotone" width={16} />
                                                            </Button>
                                                        </DropdownTrigger>
                                                        <DropdownMenu>
                                                            <DropdownItem key="view">查看</DropdownItem>
                                                            <DropdownItem key="edit">编辑</DropdownItem>
                                                            <DropdownItem key="delete" className="text-danger">删除</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardBody>
                        </Card>

                        {/* 系统状态监控 */}
                        <Card>
                            <CardHeader>
                                <h2 className="text-xl font-semibold flex items-center gap-2">
                                    <Icon icon="solar:monitor-line-duotone" width={20} />
                                    系统状态
                                </h2>
                            </CardHeader>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-4">
                                    {systemStatus.map((service, index) => (
                                        <div key={index} className="p-4 bg-default-100 rounded-lg">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-medium">{service.name}</h3>
                                                <Chip
                                                    color={service.status === 'healthy' ? 'success' : 'warning'}
                                                    variant="flat"
                                                    size="sm"
                                                >
                                                    {service.status === 'healthy' ? '正常' : '警告'}
                                                </Chip>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-default-500">运行时间</span>
                                                <span className="font-medium">{service.uptime}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    {/* 右侧：活动和通知 */}
                    <div className="space-y-6">
                        {/* 在线用户 */}
                        <Card>
                            <CardHeader className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold flex items-center gap-2">
                                    <Icon icon="solar:users-group-rounded-line-duotone" width={18} />
                                    团队成员
                                </h2>
                                <AvatarGroup isBordered max={3}>
                                    {recentUsers.slice(0, 4).map((user) => (
                                        <Avatar key={user.id} src={user.avatar} size="sm" />
                                    ))}
                                </AvatarGroup>
                            </CardHeader>
                            <CardBody className="space-y-4">
                                <Input
                                    placeholder="搜索成员..."
                                    value={searchQuery}
                                    onValueChange={setSearchQuery}
                                    startContent={<Icon icon="solar:magnifer-line-duotone" width={16} />}
                                    size="sm"
                                />
                                <div className="space-y-3">
                                    {filteredUsers.map((user) => (
                                        <div key={user.id} className="flex items-center gap-3">
                                            <div className="relative">
                                                <Avatar src={user.avatar} size="sm" />
                                                <div className={`absolute -bottom-0 -right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 bg-${getUserStatusColor(user.status)}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-sm truncate">{user.name}</p>
                                                <p className="text-xs text-default-500 truncate">{user.role}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-default-500">{user.lastSeen}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>

                        {/* 系统通知 */}
                        <Card>
                            <CardHeader className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold flex items-center gap-2">
                                    <Icon icon="solar:bell-line-duotone" width={18} />
                                    系统通知
                                </h2>
                                <Badge content="4" color="danger" size="sm">
                                    <Button isIconOnly variant="light" size="sm" aria-label="Notification settings">
                                        <Icon icon="solar:settings-line-duotone" width={16} />
                                    </Button>
                                </Badge>
                            </CardHeader>
                            <CardBody className="space-y-4">
                                {systemNotifications.map((notification) => (
                                    <div key={notification.id} className="flex gap-3 p-3 bg-default-50 dark:bg-default-100 rounded-lg">
                                        <div className={`p-2 rounded-lg bg-${getPriorityColor(notification.priority)}-100 dark:bg-${getPriorityColor(notification.priority)}-900/20 shrink-0`}>
                                            <Icon
                                                icon={getNotificationIcon(notification.type)}
                                                width={16}
                                                className={`text-${getPriorityColor(notification.priority)}`}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="font-medium text-sm">{notification.title}</h3>
                                                <Chip
                                                    color={getPriorityColor(notification.priority)}
                                                    variant="flat"
                                                    size="sm"
                                                    className="shrink-0"
                                                >
                                                    {notification.priority === 'high' ? '高' :
                                                        notification.priority === 'medium' ? '中' : '低'}
                                                </Chip>
                                            </div>
                                            <p className="text-xs text-default-500 mt-1">{notification.message}</p>
                                            <p className="text-xs text-default-400 mt-2">{notification.time}</p>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="light" size="sm" className="w-full">
                                    查看所有通知
                                </Button>
                            </CardBody>
                        </Card>

                        {/* 快速操作 */}
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-semibold flex items-center gap-2">
                                    <Icon icon="solar:flash-line-duotone" width={18} />
                                    快速操作
                                </h2>
                            </CardHeader>
                            <CardBody className="space-y-3">
                                <Button variant="flat" className="justify-start" startContent={<Icon icon="solar:user-plus-line-duotone" width={16} />}>
                                    添加新用户
                                </Button>
                                <Button variant="flat" className="justify-start" startContent={<Icon icon="solar:document-add-line-duotone" width={16} />}>
                                    创建订单
                                </Button>
                                <Button variant="flat" className="justify-start" startContent={<Icon icon="solar:chart-line-duotone" width={16} />}>
                                    生成报告
                                </Button>
                                <Button variant="flat" className="justify-start" startContent={<Icon icon="solar:settings-line-duotone" width={16} />}>
                                    系统设置
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
} 