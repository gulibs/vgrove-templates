import {
    PageContainer
} from '@gulibs/vgrove-ui';
import {
    Card,
    CardBody,
    CardHeader,
    Chip,
    CircularProgress,
    Divider,
    Progress,
    Select,
    SelectItem
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useMemo, useState } from 'react';

// 模拟图表数据
const generateData = (type: string) => {
    switch (type) {
        case 'line':
            return Array.from({ length: 12 }, (_, i) => ({
                month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
                value: Math.floor(Math.random() * 100) + 20,
                revenue: Math.floor(Math.random() * 50000) + 10000
            }));
        case 'bar':
            return Array.from({ length: 6 }, (_, i) => ({
                category: ['产品A', '产品B', '产品C', '产品D', '产品E', '产品F'][i],
                sales: Math.floor(Math.random() * 1000) + 100,
                profit: Math.floor(Math.random() * 500) + 50
            }));
        case 'pie':
            return [
                { name: '桌面端', value: 45, color: '#3b82f6' },
                { name: '移动端', value: 35, color: '#10b981' },
                { name: '平板端', value: 15, color: '#f59e0b' },
                { name: '其他', value: 5, color: '#ef4444' }
            ];
        default:
            return [];
    }
};

// 定义数据类型
type ChartData = {
    category: string;
    sales: number;
    profit: number;
} | {
    month: string;
    value: number;
    revenue: number;
} | {
    name: string;
    value: number;
    color: string;
};

// 简单的柱状图组件
const SimpleBarChart = ({ data, title }: { data: ChartData[], title: string }) => {
    const barData = data as Array<{ category: string; sales: number }>;
    const maxValue = Math.max(...barData.map(d => d.sales));

    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="space-y-3">
                {barData.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>{item.category}</span>
                            <span className="font-medium">{item.sales}</span>
                        </div>
                        <Progress
                            value={(item.sales / maxValue) * 100}
                            color="primary"
                            className="w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

// 简单的线图组件
const SimpleLineChart = ({ data, title }: { data: ChartData[], title: string }) => {
    const lineData = data as Array<{ month: string; value: number }>;
    const maxValue = Math.max(...lineData.map(d => d.value));

    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="h-64 flex items-end justify-between gap-2 p-4 bg-default-100 rounded-lg">
                {lineData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                        <div
                            className="w-full bg-primary rounded-t min-h-4 transition-all duration-300 hover:bg-primary-600"
                            style={{ height: `${(item.value / maxValue) * 200}px` }}
                            title={`${item.month}: ${item.value}`}
                        />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                            {item.month}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 简单的饼图组件
const SimplePieChart = ({ data, title }: { data: ChartData[], title: string }) => {
    const pieData = data as Array<{ name: string; value: number; color: string }>;
    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <CircularProgress
                        size="lg"
                        value={100}
                        color="default"
                        showValueLabel={false}
                        className="scale-150"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-medium">100%</span>
                    </div>
                </div>
                <div className="space-y-2 flex-1">
                    {pieData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-sm">{item.name}</span>
                            </div>
                            <span className="text-sm font-medium">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function ChartsDemo() {
    const [selectedChart, setSelectedChart] = useState('overview');

    const lineData = useMemo(() => generateData('line'), []);
    const barData = useMemo(() => generateData('bar'), []);
    const pieData = useMemo(() => generateData('pie'), []);

    const kpiData = [
        {
            title: '总收入',
            value: '¥342,751',
            change: '+12.5%',
            trend: 'up',
            color: 'success'
        },
        {
            title: '新用户',
            value: '1,429',
            change: '+8.2%',
            trend: 'up',
            color: 'primary'
        },
        {
            title: '转化率',
            value: '24.8%',
            change: '-2.1%',
            trend: 'down',
            color: 'warning'
        },
        {
            title: '客户满意度',
            value: '94.2%',
            change: '+3.1%',
            trend: 'up',
            color: 'secondary'
        }
    ];

    return (
        <PageContainer>
            <div className="max-w-7xl mx-auto space-y-8 p-6">
                {/* 页面标题 */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">图表数据可视化</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        展示各种数据可视化组件和图表类型
                    </p>
                    <div className="flex justify-center gap-2">
                        <Chip color="primary" variant="flat">
                            数据驱动
                        </Chip>
                        <Chip color="success" variant="flat">
                            实时更新
                        </Chip>
                        <Chip color="secondary" variant="flat">
                            交互式
                        </Chip>
                    </div>
                </div>

                {/* KPI 指标卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {kpiData.map((kpi, index) => (
                        <Card key={index} className="border-none bg-gradient-to-br from-white to-default-200/20 dark:from-default-900/50 dark:to-default-800/50">
                            <CardBody className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`p-2 rounded-full bg-${kpi.color}-100 dark:bg-${kpi.color}-900/20`}>
                                            <Icon
                                                icon="solar:chart-line-duotone"
                                                width={20}
                                                className={`text-${kpi.color}`}
                                            />
                                        </div>
                                        <span className="text-sm text-default-500">{kpi.title}</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
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
                                        <span className="text-xs text-default-400">vs 上月</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                {/* 图表切换控制 */}
                <Card>
                    <CardHeader className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Icon icon="solar:chart-line-duotone" width={24} />
                            数据图表
                        </h2>
                        <Select
                            placeholder="选择图表类型"
                            className="w-48"
                            selectedKeys={[selectedChart]}
                            onSelectionChange={(keys) => setSelectedChart(Array.from(keys)[0] as string)}
                        >
                            <SelectItem key="overview">概览</SelectItem>
                            <SelectItem key="revenue">收入趋势</SelectItem>
                            <SelectItem key="products">产品销量</SelectItem>
                            <SelectItem key="devices">设备分布</SelectItem>
                        </Select>
                    </CardHeader>
                </Card>

                {/* 主要图表区域 */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <Icon icon="solar:graph-line-duotone" width={20} />
                                月度趋势分析
                            </h3>
                        </CardHeader>
                        <CardBody>
                            <SimpleLineChart
                                data={lineData}
                                title="用户增长趋势"
                            />
                        </CardBody>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <Icon icon="solar:bar-chart-line-duotone" width={20} />
                                产品销量对比
                            </h3>
                        </CardHeader>
                        <CardBody>
                            <SimpleBarChart
                                data={barData}
                                title="各产品销量"
                            />
                        </CardBody>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <Icon icon="solar:pie-chart-line-duotone" width={20} />
                                用户设备分布
                            </h3>
                        </CardHeader>
                        <CardBody>
                            <SimplePieChart
                                data={pieData}
                                title="访问设备类型"
                            />
                        </CardBody>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <Icon icon="solar:target-line-duotone" width={20} />
                                目标完成度
                            </h3>
                        </CardHeader>
                        <CardBody className="space-y-6">
                            <div className="space-y-4">
                                <div className="text-center">
                                    <CircularProgress
                                        size="lg"
                                        value={78}
                                        color="success"
                                        showValueLabel={true}
                                        className="scale-125"
                                    />
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                        年度目标完成度
                                    </p>
                                </div>

                                <Divider />

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">销售目标</span>
                                        <span className="text-sm font-medium">85%</span>
                                    </div>
                                    <Progress value={85} color="primary" />

                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">用户增长</span>
                                        <span className="text-sm font-medium">72%</span>
                                    </div>
                                    <Progress value={72} color="secondary" />

                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">市场占有率</span>
                                        <span className="text-sm font-medium">91%</span>
                                    </div>
                                    <Progress value={91} color="success" />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* 图表功能说明 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Icon icon="solar:info-circle-line-duotone" width={24} />
                            图表组件说明
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="font-medium text-lg">内置组件</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:check-circle-line-duotone" className="text-success mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">Progress 进度条</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                用于显示任务完成度、加载状态等
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:check-circle-line-duotone" className="text-success mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">CircularProgress 环形进度</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                圆形进度指示器，适合显示百分比数据
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:check-circle-line-duotone" className="text-success mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">自定义图表组件</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                基于 HeroUI 组件构建的简单图表
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-medium text-lg">推荐图表库</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:star-line-duotone" className="text-warning mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">Chart.js</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                简单灵活的 JavaScript 图表库
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:star-line-duotone" className="text-warning mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">Recharts</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                基于 React 和 D3 的组合图表库
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Icon icon="solar:star-line-duotone" className="text-warning mt-1" width={16} />
                                        <div>
                                            <h4 className="font-medium">ApexCharts</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                功能丰富的现代图表库
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </PageContainer>
    );
} 