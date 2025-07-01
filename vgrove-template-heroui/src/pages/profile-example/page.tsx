import {
    PageContainer
} from '@gulibs/vgrove-ui';
import {
    Avatar,
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
    Chip,
    Divider,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Progress,
    Select,
    SelectItem,
    Switch,
    Tab,
    Tabs,
    Textarea,
    useDisclosure
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';

// 模拟用户数据
const userData = {
    id: '12345',
    name: '张三',
    email: 'zhang.san@example.com',
    phone: '+86 138 0013 8000',
    avatar: 'https://i.pravatar.cc/150?u=zhang-san',
    role: '产品经理',
    department: '产品部',
    location: '北京, 中国',
    timezone: 'Asia/Shanghai',
    bio: '热爱技术和产品设计，专注于用户体验优化和产品创新。拥有5年以上产品管理经验。',
    joinDate: '2019-03-15',
    lastLogin: '2024-01-15 14:30:25',
    status: 'active',
    verified: true,
    twoFactorEnabled: true
};

const userStats = [
    { label: '项目参与', value: '24', icon: 'solar:folder-line-duotone' },
    { label: '任务完成', value: '156', icon: 'solar:check-circle-line-duotone' },
    { label: '团队成员', value: '8', icon: 'solar:users-group-rounded-line-duotone' },
    { label: '工作天数', value: '1,205', icon: 'solar:calendar-line-duotone' }
];

const recentActivity = [
    {
        id: 1,
        type: 'project',
        title: '完成项目里程碑',
        description: 'VGrove UI 组件库 v2.0 发布',
        time: '2小时前',
        icon: 'solar:rocket-line-duotone',
        color: 'success'
    },
    {
        id: 2,
        type: 'meeting',
        title: '参加团队会议',
        description: '产品规划季度评审会议',
        time: '4小时前',
        icon: 'solar:videocamera-line-duotone',
        color: 'primary'
    },
    {
        id: 3,
        type: 'document',
        title: '更新文档',
        description: '用户体验设计规范 v3.2',
        time: '1天前',
        icon: 'solar:document-text-line-duotone',
        color: 'secondary'
    },
    {
        id: 4,
        type: 'review',
        title: '代码评审',
        description: '审查前端组件重构代码',
        time: '2天前',
        icon: 'solar:code-line-duotone',
        color: 'warning'
    }
];

const skillsData = [
    { name: 'React', level: 90, category: '前端开发' },
    { name: 'TypeScript', level: 85, category: '前端开发' },
    { name: 'UI/UX Design', level: 80, category: '设计' },
    { name: 'Product Management', level: 95, category: '产品' },
    { name: 'Agile/Scrum', level: 88, category: '项目管理' },
    { name: 'Figma', level: 75, category: '设计' }
];

const teamMembers = [
    { name: '李四', role: '前端工程师', avatar: 'https://i.pravatar.cc/150?u=li-si' },
    { name: '王五', role: 'UI设计师', avatar: 'https://i.pravatar.cc/150?u=wang-wu' },
    { name: 'Alex', role: '后端工程师', avatar: 'https://i.pravatar.cc/150?u=alex' },
    { name: 'Sarah', role: '测试工程师', avatar: 'https://i.pravatar.cc/150?u=sarah' }
];

export default function ProfileExample() {
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [formData, setFormData] = useState(userData);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleSave = () => {
        // 这里应该有保存逻辑
        setIsEditing(false);
        console.log('保存用户数据:', formData);
    };

    const handleCancel = () => {
        setFormData(userData);
        setIsEditing(false);
    };

    return (
        <PageContainer>
            <div className="max-w-6xl mx-auto space-y-8 p-6">
                {/* 用户头部信息 */}
                <Card className="border-none bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-900/30">
                    <CardBody className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <Avatar
                                        src={userData.avatar}
                                        className="w-24 h-24"
                                        isBordered
                                    />
                                    {userData.verified && (
                                        <Badge color="success"
                                            placement="bottom-right"
                                            className="border-white"
                                        >
                                            <Icon icon="solar:check-circle-bold" width={16} />
                                        </Badge>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <h1 className="text-3xl font-bold">{userData.name}</h1>
                                        <Chip
                                            color="success"
                                            variant="flat"
                                            size="sm"
                                            startContent={<Icon icon="solar:check-circle-line-duotone" width={14} />}
                                        >
                                            已验证
                                        </Chip>
                                    </div>
                                    <p className="text-lg text-default-600">{userData.role}</p>
                                    <div className="flex items-center gap-4 text-sm text-default-500">
                                        <div className="flex items-center gap-1">
                                            <Icon icon="solar:buildings-line-duotone" width={16} />
                                            {userData.department}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Icon icon="solar:map-point-line-duotone" width={16} />
                                            {userData.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Icon icon="solar:calendar-line-duotone" width={16} />
                                            入职于 {userData.joinDate}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1" />

                            <div className="flex gap-3">
                                <Button
                                    variant="flat"
                                    startContent={<Icon icon="solar:chat-line-duotone" width={18} />}
                                >
                                    发消息
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={() => setIsEditing(true)}
                                    startContent={<Icon icon="solar:pen-line-duotone" width={18} />}
                                >
                                    编辑资料
                                </Button>
                            </div>
                        </div>

                        {/* 用户统计 */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {userStats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-white/60 dark:bg-white/10 rounded-lg backdrop-blur-sm">
                                    <div className="flex justify-center mb-2">
                                        <Icon icon={stat.icon} width={24} className="text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                                    <p className="text-sm text-default-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>

                {/* 内容标签页 */}
                <Tabs
                    aria-label="用户资料标签页"
                    selectedKey={activeTab}
                    onSelectionChange={(key) => setActiveTab(key as string)}
                    className="w-full"
                >
                    <Tab key="overview" title={
                        <div className="flex items-center gap-2">
                            <Icon icon="solar:user-line-duotone" width={18} />
                            概览
                        </div>
                    }>
                        <div className="grid lg:grid-cols-3 gap-8 mt-6">
                            {/* 基本信息 */}
                            <div className="lg:col-span-2 space-y-6">
                                <Card>
                                    <CardHeader>
                                        <h2 className="text-xl font-semibold flex items-center gap-2">
                                            <Icon icon="solar:info-circle-line-duotone" width={20} />
                                            基本信息
                                        </h2>
                                    </CardHeader>
                                    <CardBody className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm font-medium text-default-600">用户ID</label>
                                                <p className="mt-1 font-mono text-sm">{userData.id}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-default-600">邮箱地址</label>
                                                <p className="mt-1">{userData.email}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-default-600">电话号码</label>
                                                <p className="mt-1">{userData.phone}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-default-600">时区</label>
                                                <p className="mt-1">{userData.timezone}</p>
                                            </div>
                                        </div>
                                        <Divider />
                                        <div>
                                            <label className="text-sm font-medium text-default-600">个人简介</label>
                                            <p className="mt-1 text-default-700">{userData.bio}</p>
                                        </div>
                                    </CardBody>
                                </Card>

                                {/* 技能和专长 */}
                                <Card>
                                    <CardHeader>
                                        <h2 className="text-xl font-semibold flex items-center gap-2">
                                            <Icon icon="solar:star-line-duotone" width={20} />
                                            技能和专长
                                        </h2>
                                    </CardHeader>
                                    <CardBody className="space-y-4">
                                        {skillsData.map((skill, index) => (
                                            <div key={index} className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <span className="font-medium">{skill.name}</span>
                                                        <span className="text-sm text-default-500 ml-2">
                                                            {skill.category}
                                                        </span>
                                                    </div>
                                                    <span className="text-sm font-medium">{skill.level}%</span>
                                                </div>
                                                <Progress
                                                    value={skill.level}
                                                    color="primary"
                                                    className="w-full"
                                                />
                                            </div>
                                        ))}
                                    </CardBody>
                                </Card>
                            </div>

                            {/* 右侧边栏 */}
                            <div className="space-y-6">
                                {/* 最近活动 */}
                                <Card>
                                    <CardHeader>
                                        <h2 className="text-lg font-semibold flex items-center gap-2">
                                            <Icon icon="solar:clock-circle-line-duotone" width={18} />
                                            最近活动
                                        </h2>
                                    </CardHeader>
                                    <CardBody className="space-y-4">
                                        {recentActivity.map((activity) => (
                                            <div key={activity.id} className="flex gap-3">
                                                <div className={`p-2 rounded-lg bg-${activity.color}-100 dark:bg-${activity.color}-900/20 shrink-0`}>
                                                    <Icon
                                                        icon={activity.icon}
                                                        width={16}
                                                        className={`text-${activity.color}`}
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-medium text-sm">{activity.title}</h3>
                                                    <p className="text-xs text-default-500 mt-1">{activity.description}</p>
                                                    <p className="text-xs text-default-400 mt-2">{activity.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </CardBody>
                                </Card>

                                {/* 团队成员 */}
                                <Card>
                                    <CardHeader>
                                        <h2 className="text-lg font-semibold flex items-center gap-2">
                                            <Icon icon="solar:users-group-rounded-line-duotone" width={18} />
                                            团队成员
                                        </h2>
                                    </CardHeader>
                                    <CardBody className="space-y-3">
                                        {teamMembers.map((member, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <Avatar src={member.avatar} size="sm" />
                                                <div className="flex-1">
                                                    <p className="font-medium text-sm">{member.name}</p>
                                                    <p className="text-xs text-default-500">{member.role}</p>
                                                </div>
                                                <Button isIconOnly variant="light" size="sm">
                                                    <Icon icon="solar:chat-line-duotone" width={16} />
                                                </Button>
                                            </div>
                                        ))}
                                        <Button variant="light" size="sm" className="w-full mt-2">
                                            查看全部成员
                                        </Button>
                                    </CardBody>
                                </Card>

                                {/* 账户状态 */}
                                <Card>
                                    <CardHeader>
                                        <h2 className="text-lg font-semibold flex items-center gap-2">
                                            <Icon icon="solar:shield-check-line-duotone" width={18} />
                                            账户状态
                                        </h2>
                                    </CardHeader>
                                    <CardBody className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">账户状态</span>
                                            <Chip color="success" variant="flat" size="sm">
                                                活跃
                                            </Chip>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">邮箱验证</span>
                                            <Icon icon="solar:check-circle-bold" className="text-success" width={20} />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">双因子认证</span>
                                            <Switch defaultSelected size="sm" />
                                        </div>
                                        <Divider />
                                        <div>
                                            <span className="text-sm text-default-500">最后登录</span>
                                            <p className="text-sm font-medium">{userData.lastLogin}</p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </Tab>

                    <Tab key="settings" title={
                        <div className="flex items-center gap-2">
                            <Icon icon="solar:settings-line-duotone" width={18} />
                            设置
                        </div>
                    }>
                        <Card className="mt-6">
                            <CardHeader>
                                <h2 className="text-xl font-semibold">账户设置</h2>
                            </CardHeader>
                            <CardBody className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h3 className="font-semibold">通知偏好</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">邮件通知</span>
                                                <Switch defaultSelected />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">推送通知</span>
                                                <Switch defaultSelected />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">短信通知</span>
                                                <Switch />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">营销邮件</span>
                                                <Switch />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="font-semibold">隐私设置</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">公开资料</span>
                                                <Switch defaultSelected />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">显示在线状态</span>
                                                <Switch defaultSelected />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">活动可见</span>
                                                <Switch defaultSelected />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">搜索可见</span>
                                                <Switch />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Divider />

                                <div className="space-y-4">
                                    <h3 className="font-semibold text-danger">危险区域</h3>
                                    <div className="space-y-3">
                                        <Button
                                            variant="bordered"
                                            color="warning"
                                            startContent={<Icon icon="solar:refresh-line-duotone" width={16} />}
                                        >
                                            重置密码
                                        </Button>
                                        <Button
                                            variant="bordered"
                                            color="danger"
                                            onPress={onOpen}
                                            startContent={<Icon icon="solar:trash-bin-minimalistic-line-duotone" width={16} />}
                                        >
                                            删除账户
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>

                {/* 编辑资料模态框 */}
                <Modal
                    isOpen={isEditing}
                    onOpenChange={(open) => {
                        if (!open) setIsEditing(false);
                    }}
                    size="2xl"
                    scrollBehavior="inside"
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    编辑个人资料
                                </ModalHeader>
                                <ModalBody>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-6">
                                            <Avatar
                                                src={formData.avatar}
                                                className="w-20 h-20"
                                                isBordered
                                            />
                                            <div>
                                                <Button variant="flat" size="sm">
                                                    更换头像
                                                </Button>
                                                <p className="text-xs text-default-500 mt-1">
                                                    支持 JPG、PNG 格式，文件大小不超过 2MB
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <Input
                                                label="姓名"
                                                value={formData.name}
                                                onValueChange={(value) => setFormData({ ...formData, name: value })}
                                            />
                                            <Input
                                                label="邮箱"
                                                type="email"
                                                value={formData.email}
                                                onValueChange={(value) => setFormData({ ...formData, email: value })}
                                            />
                                            <Input
                                                label="电话"
                                                value={formData.phone}
                                                onValueChange={(value) => setFormData({ ...formData, phone: value })}
                                            />
                                            <Select
                                                label="时区"
                                                selectedKeys={[formData.timezone]}
                                                onSelectionChange={(keys) => setFormData({ ...formData, timezone: Array.from(keys)[0] as string })}
                                            >
                                                <SelectItem key="Asia/Shanghai">Asia/Shanghai</SelectItem>
                                                <SelectItem key="America/New_York">America/New_York</SelectItem>
                                                <SelectItem key="Europe/London">Europe/London</SelectItem>
                                                <SelectItem key="Asia/Tokyo">Asia/Tokyo</SelectItem>
                                            </Select>
                                            <Input
                                                label="职位"
                                                value={formData.role}
                                                onValueChange={(value) => setFormData({ ...formData, role: value })}
                                            />
                                            <Input
                                                label="部门"
                                                value={formData.department}
                                                onValueChange={(value) => setFormData({ ...formData, department: value })}
                                            />
                                        </div>

                                        <Textarea
                                            label="个人简介"
                                            value={formData.bio}
                                            onValueChange={(value) => setFormData({ ...formData, bio: value })}
                                            maxRows={4}
                                        />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button variant="light" onPress={() => { handleCancel(); onClose(); }}>
                                        取消
                                    </Button>
                                    <Button color="primary" onPress={() => { handleSave(); onClose(); }}>
                                        保存更改
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                {/* 删除账户确认模态框 */}
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    删除账户
                                </ModalHeader>
                                <ModalBody>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-danger-50 dark:bg-danger-900/20 rounded-lg">
                                            <div className="flex items-start gap-3">
                                                <Icon icon="solar:danger-triangle-line-duotone" className="text-danger mt-0.5" width={20} />
                                                <div>
                                                    <h3 className="font-semibold text-danger">警告</h3>
                                                    <p className="text-sm text-danger-600 dark:text-danger-400 mt-1">
                                                        此操作无法撤销。删除账户将永久移除所有数据。
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-default-600">
                                            请输入您的邮箱地址以确认删除：
                                        </p>
                                        <Input
                                            label="邮箱确认"
                                            placeholder={userData.email}
                                            variant="bordered"
                                        />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button variant="light" onPress={onClose}>
                                        取消
                                    </Button>
                                    <Button color="danger" variant="solid">
                                        确认删除
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