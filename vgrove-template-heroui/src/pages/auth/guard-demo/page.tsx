import { useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Chip,
    Code,
    Divider,
    Switch,
    Tabs,
    Tab
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { I18nMessage, PageContainer } from '@gulibs/vgrove-ui';
import { useRouteProtection } from '@gulibs/vgrove-client';
import { defineAuth, definePermissionGuard } from '@gulibs/vgrove-client';

interface AuthUser {
    id: string;
    name: string;
    email: string;
    roles: string[];
    permissions: string[];
}

interface GuardContext {
    path: string;
    params: Record<string, string>;
    query: Record<string, string>;
    user: AuthUser | null;
    roles: string[];
    permissions: string[];
    data: Record<string, unknown>;
}

interface GuardConfig {
    name?: string;
    check?: (context: GuardContext) => Promise<boolean> | boolean;
    roles?: string[];
    permissions?: string[];
    errorMessage?: string;
}

export default function GuardDemoPage() {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null as AuthUser | null,
        roles: [] as string[],
        permissions: [] as string[]
    });

    // 基础认证守卫
    const basicAuth = defineAuth({
        name: 'basic-auth',
        redirectTo: '/auth/login',
        errorMessage: 'Please login to access this page',
        check: () => {
            return authState.isAuthenticated && !!authState.user;
        }
    });

    // 角色守卫
    const editorGuard = defineAuth({
        name: 'editor-guard',
        roles: ['editor', 'admin'],
        redirectTo: '/403',
        errorMessage: 'Editor role required'
    });

    // 权限守卫
    const publishGuard = definePermissionGuard(
        ['publish'],
        '/403'
    );

    // 使用路由保护Hook
    const { isLoading, error, hasAccess } = useRouteProtection(
        [basicAuth], // 守卫列表
        [] // 中间件列表
    );

    interface GuardExampleProps {
        title: string;
        description: string;
        guard: GuardConfig;
        userContext: AuthUser | null;
    }

    const GuardExample = ({ title, description, guard, userContext }: GuardExampleProps) => {
        const [result, setResult] = useState<{ allowed: boolean; message?: string } | null>(null);

        const testGuard = async () => {
            try {
                const context = {
                    path: '/protected',
                    params: {},
                    query: {},
                    user: userContext,
                    roles: userContext?.roles || [],
                    permissions: userContext?.permissions || [],
                    data: {}
                };

                let allowed = false;
                if (guard.check) {
                    allowed = await guard.check(context);
                } else if (guard.roles) {
                    allowed = guard.roles.some((role: string) => userContext?.roles?.includes(role));
                } else if (guard.permissions) {
                    allowed = guard.permissions.some((perm: string) => userContext?.permissions?.includes(perm));
                }

                setResult({
                    allowed,
                    message: allowed ? 'Access granted' : guard.errorMessage || 'Access denied'
                });
            } catch {
                setResult({
                    allowed: false,
                    message: 'Guard execution failed'
                });
            }
        };

        return (
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <h3 className="text-lg font-semibold">{title}</h3>
                            <p className="text-sm text-default-500">{description}</p>
                        </div>
                        <Button
                            color="primary"
                            variant="flat"
                            size="sm"
                            onClick={testGuard}
                            startContent={<Icon icon="solar:play-circle-line-duotone" width={16} />}
                        >
                            Test Guard
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                            <Code size="sm">Name: {guard.name}</Code>
                            {guard.roles && (
                                <Code size="sm">Roles: {guard.roles.join(', ')}</Code>
                            )}
                            {guard.permissions && (
                                <Code size="sm">Permissions: {guard.permissions.join(', ')}</Code>
                            )}
                        </div>

                        {result && (
                            <div className={`p-3 rounded-lg border ${result.allowed
                                ? 'bg-success-50 border-success-200 text-success-700 dark:bg-success-900/20 dark:border-success-800'
                                : 'bg-danger-50 border-danger-200 text-danger-700 dark:bg-danger-900/20 dark:border-danger-800'
                                }`}>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon={result.allowed ? "solar:check-circle-line-duotone" : "solar:close-circle-line-duotone"}
                                        width={16}
                                    />
                                    <span className="text-sm font-medium">{result.message}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </CardBody>
            </Card>
        );
    };

    return (
        <PageContainer>
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Icon icon="solar:shield-check-line-duotone" className="text-primary" width={32} />
                    <div>
                        <h1 className="text-2xl font-bold">
                            <I18nMessage id="common.auth.guard.title" defaultValue="认证守卫演示" />
                        </h1>
                        <p className="text-default-500">
                            <I18nMessage id="common.auth.guard.subtitle" defaultValue="演示路由守卫和权限控制功能" />
                        </p>
                    </div>
                </div>

                {/* 用户状态控制 */}
                <Card>
                    <CardHeader>
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <Icon icon="solar:user-line-duotone" width={20} />
                            User Status Control
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span>Authentication Status</span>
                                <Switch
                                    isSelected={authState.isAuthenticated}
                                    onValueChange={(value) => setAuthState({ ...authState, isAuthenticated: value })}
                                    size="sm"
                                />
                            </div>

                            {authState.isAuthenticated && (
                                <div className="space-y-2">
                                    <div className="text-sm text-default-600">Current User:</div>
                                    <div className="flex flex-wrap gap-2">
                                        <Chip size="sm" variant="flat">{authState.user?.name}</Chip>
                                        <Chip size="sm" variant="flat" color="secondary">
                                            Roles: {authState.roles.join(', ')}
                                        </Chip>
                                        <Chip size="sm" variant="flat" color="primary">
                                            Permissions: {authState.permissions.join(', ')}
                                        </Chip>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardBody>
                </Card>

                {/* 守卫演示 */}
                <Tabs aria-label="Guard Examples" color="primary" variant="underlined">
                    <Tab key="auth" title="Authentication Guards">
                        <div className="space-y-4">
                            <GuardExample
                                title="Basic Authentication"
                                description="Requires user to be logged in"
                                guard={basicAuth}
                                userContext={authState.isAuthenticated ? authState.user : null}
                            />

                            <GuardExample
                                title="Role-based Guard"
                                description="Requires editor or admin role"
                                guard={editorGuard}
                                userContext={authState.isAuthenticated ? authState.user : null}
                            />

                            <GuardExample
                                title="Permission Guard"
                                description="Requires publish permission"
                                guard={publishGuard}
                                userContext={authState.isAuthenticated ? authState.user : null}
                            />
                        </div>
                    </Tab>

                    <Tab key="usage" title="Usage Examples">
                        <div className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <h3 className="text-lg font-semibold">Route Protection Hook</h3>
                                </CardHeader>
                                <CardBody>
                                    <div className="space-y-3">
                                        <p className="text-sm text-default-600">
                                            Use the <Code>useRouteProtection</Code> hook to protect components:
                                        </p>
                                        <Code className="block p-4 whitespace-pre text-xs">
                                            {`const { isLoading, error, hasAccess } = useRouteProtection(
    [basicAuth, editorGuard], // guards
    [] // middlewares
);

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
if (!hasAccess) return <div>Access Denied</div>;

return <ProtectedContent />;`}
                                        </Code>

                                        <div className="flex items-center gap-2 text-sm">
                                            <span>Current Status:</span>
                                            {isLoading && <Chip size="sm" color="warning">Loading</Chip>}
                                            {error && <Chip size="sm" color="danger">Error: {error}</Chip>}
                                            {hasAccess && <Chip size="sm" color="success">Access Granted</Chip>}
                                            {!hasAccess && !isLoading && !error && <Chip size="sm" color="danger">Access Denied</Chip>}
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <h3 className="text-lg font-semibold">Route-level Guards</h3>
                                </CardHeader>
                                <CardBody>
                                    <div className="space-y-3">
                                        <p className="text-sm text-default-600">
                                            Add guards to route handles:
                                        </p>
                                        <Code className="block p-4 whitespace-pre text-xs">
                                            {`// In handle.tsx
export const handle = defineHandle({
    meta: { title: 'Protected Page' },
    guards: [
        defineAuth({
            roles: ['admin'],
            redirectTo: '/login'
        })
    ]
});`}
                                        </Code>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Tab>

                    <Tab key="api" title="API Reference">
                        <div className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <h3 className="text-lg font-semibold">Available Guards</h3>
                                </CardHeader>
                                <CardBody>
                                    <div className="space-y-4">
                                        <div>
                                            <Code size="sm">defineAuth(options)</Code>
                                            <p className="text-sm text-default-600 mt-1">
                                                Create authentication guard with role/permission checks
                                            </p>
                                        </div>

                                        <Divider />

                                        <div>
                                            <Code size="sm">definePermissionGuard(permissions, redirectTo)</Code>
                                            <p className="text-sm text-default-600 mt-1">
                                                Quick permission-based guard creation
                                            </p>
                                        </div>

                                        <Divider />

                                        <div>
                                            <Code size="sm">useRouteProtection(guards, middlewares)</Code>
                                            <p className="text-sm text-default-600 mt-1">
                                                Hook for component-level route protection
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </PageContainer>
    );
} 