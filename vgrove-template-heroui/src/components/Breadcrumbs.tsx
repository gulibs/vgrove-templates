import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Breadcrumbs as HeruiBreadcrumbs, BreadcrumbItem } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useI18n } from '@gulibs/vgrove-client';

interface BreadcrumbsProps {
    className?: string;
}

export function Breadcrumbs({ className }: BreadcrumbsProps) {
    const { t } = useI18n();
    const location = useLocation();
    const navigate = useNavigate();

    // 生成基于路径的面包屑导航
    const pathBreadcrumbs = useMemo(() => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const items = [
            {
                key: 'home',
                href: '/',
                label: t('nav.home') || 'Home',
                icon: 'solar:home-2-line-duotone'
            }
        ];

        let currentPath = '';
        pathSegments.forEach((segment) => {
            currentPath += `/${segment}`;

            // 将路径段转换为标题
            let label = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

            // 尝试从国际化资源获取翻译
            const translationKey = `nav.${segment}`;
            const translated = t(translationKey);
            if (translated !== translationKey) {
                label = translated;
            }

            items.push({
                key: segment,
                href: currentPath,
                label,
                icon: getSegmentIcon(segment)
            });
        });

        return items;
    }, [location.pathname, t]);

    // 如果只有首页，不显示面包屑
    if (pathBreadcrumbs.length <= 1) {
        return null;
    }

    // 处理面包屑导航点击
    const handleNavigate = (href: string) => {
        navigate(href);
    };

    return (
        <div className={className}>
            <HeruiBreadcrumbs
                size="sm"
                color="foreground"
                separator={<Icon icon="solar:alt-arrow-right-line-duotone" width={12} />}
                classNames={{
                    list: "bg-content1 shadow-sm px-4 py-2 rounded-lg border-small border-default-100"
                }}
            >
                {pathBreadcrumbs.map((item, index) => {
                    const isLast = index === pathBreadcrumbs.length - 1;

                    if (isLast) {
                        return (
                            <BreadcrumbItem key={item.key}>
                                {item.icon && typeof item.icon === 'string' && <Icon icon={item.icon} width={14} className="mr-1" />}
                                {item.label}
                            </BreadcrumbItem>
                        );
                    }

                    return (
                        <BreadcrumbItem
                            key={item.key}
                            onPress={() => handleNavigate(item.href)}
                            startContent={item.icon && typeof item.icon === 'string' ? <Icon icon={item.icon} width={14} /> : undefined}
                            className="cursor-pointer"
                        >
                            {item.label}
                        </BreadcrumbItem>
                    );
                })}
            </HeruiBreadcrumbs>
        </div>
    );
}

// 为不同的路径段提供图标
function getSegmentIcon(segment: string): string | undefined {
    const iconMap: Record<string, string> = {
        'auth': 'solar:shield-user-line-duotone',
        'login': 'solar:login-line-duotone',
        'register': 'solar:user-plus-line-duotone',
        'guard-demo': 'solar:shield-check-line-duotone',
        'forms-demo': 'solar:document-text-line-duotone',
        'tables-demo': 'solar:table-line-duotone',
        'charts-demo': 'solar:chart-line-duotone',
        'themes-demo': 'solar:palette-line-duotone',
        'i18n-demo': 'solar:translation-line-duotone',
        'routing-demo': 'solar:routing-line-duotone',
        'navbar-demo': 'solar:widget-line-duotone',
        'dashboard-example': 'solar:monitor-line-duotone',
        'profile-example': 'solar:user-line-duotone',
        'settings-example': 'solar:settings-line-duotone'
    };

    return iconMap[segment];
} 