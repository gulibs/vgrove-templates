import { useState } from 'react';
import { Link, Navigate } from 'react-router';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Checkbox,
    Divider,
    Input,
    Spacer
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { I18nMessage, PageContainer } from '@gulibs/vgrove-ui';
import { useI18n } from '@gulibs/vgrove-client';

interface LoginCredentials {
    email: string;
    password: string;
    rememberMe: boolean;
}

export default function LoginPage() {
    const { t } = useI18n();

    // 简化的认证状态（实际项目中应该使用全局状态管理）
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        isLoading: false,
        error: null as string | null
    });

    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: '',
        password: '',
        rememberMe: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState<Partial<LoginCredentials>>({});

    // 如果已经登录，重定向到首页
    if (authState.isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    const validateForm = () => {
        const errors: Partial<LoginCredentials> = {};

        if (!credentials.email) {
            errors.email = t('auth.validation.emailRequired') || 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
            errors.email = t('auth.validation.emailInvalid') || 'Email is invalid';
        }

        if (!credentials.password) {
            errors.password = t('auth.validation.passwordRequired') || 'Password is required';
        } else if (credentials.password.length < 6) {
            errors.password = t('auth.validation.passwordTooShort') || 'Password is too short';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const login = async (credentials: LoginCredentials) => {
        setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

        try {
            // 模拟API调用
            await new Promise(resolve => setTimeout(resolve, 1000));

            // 模拟登录验证
            if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
                setAuthState(prev => ({ ...prev, isAuthenticated: true, isLoading: false }));
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (err) {
            setAuthState(prev => ({
                ...prev,
                isLoading: false,
                error: err instanceof Error ? err.message : 'Login failed'
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            await login(credentials);
        } catch (err) {
            console.error('Login failed:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Social login with ${provider}`);
        // 这里可以集成第三方登录
    };

    return (
        <PageContainer classNames={{ main: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" }}>
            <div className="w-full max-w-md px-4">
                <Card className="w-full">
                    <CardHeader className="flex flex-col gap-2 pb-4">
                        <div className="flex items-center justify-center mb-4">
                            <Icon icon="solar:shield-user-line-duotone" className="text-primary" width={48} />
                        </div>
                        <h1 className="text-2xl font-bold text-center">
                            <I18nMessage id="common.auth.login.title" defaultValue="登录" />
                        </h1>
                        <p className="text-small text-default-500 text-center">
                            <I18nMessage id="common.auth.login.subtitle" defaultValue="欢迎回来！请登录您的账户" />
                        </p>
                    </CardHeader>

                    <CardBody className="pt-0">
                        {authState.error && (
                            <div className="mb-4 p-3 rounded-lg bg-danger-50 border border-danger-200 text-danger-700 dark:bg-danger-900/20 dark:border-danger-800 dark:text-danger-300">
                                <div className="flex items-center gap-2">
                                    <Icon icon="solar:danger-circle-line-duotone" width={16} />
                                    <span className="text-sm">{authState.error}</span>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                type="email"
                                label={t('common.auth.email') || 'Email'}
                                placeholder={t('common.auth.emailPlaceholder') || 'Enter your email'}
                                value={credentials.email}
                                onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                                startContent={<Icon icon="solar:letter-line-duotone" width={18} />}
                                errorMessage={validationErrors.email}
                                isInvalid={!!validationErrors.email}
                                variant="bordered"
                                classNames={{
                                    input: "text-small",
                                    label: "text-small font-medium"
                                }}
                            />

                            <Input
                                type={showPassword ? "text" : "password"}
                                label={t('common.auth.password') || 'Password'}
                                placeholder={t('common.auth.passwordPlaceholder') || 'Enter your password'}
                                value={credentials.password}
                                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                                startContent={<Icon icon="solar:lock-line-duotone" width={18} />}
                                endContent={
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="focus:outline-none"
                                    >
                                        <Icon
                                            icon={showPassword ? "solar:eye-line-duotone" : "solar:eye-closed-line-duotone"}
                                            width={18}
                                            className="text-default-400 hover:text-default-600"
                                        />
                                    </button>
                                }
                                errorMessage={validationErrors.password}
                                isInvalid={!!validationErrors.password}
                                variant="bordered"
                                classNames={{
                                    input: "text-small",
                                    label: "text-small font-medium"
                                }}
                            />

                            <div className="flex justify-between items-center">
                                <Checkbox
                                    size="sm"
                                    isSelected={credentials.rememberMe}
                                    onValueChange={(checked) => setCredentials(prev => ({ ...prev, rememberMe: checked }))}
                                >
                                    <span className="text-small">
                                        <I18nMessage id="common.auth.rememberMe" defaultValue="记住我" />
                                    </span>
                                </Checkbox>

                                <Link
                                    to="/auth/forgot-password"
                                    className="text-small text-primary hover:underline"
                                >
                                    <I18nMessage id="common.auth.forgotPassword" defaultValue="忘记密码？" />
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                color="primary"
                                size="lg"
                                className="w-full"
                                isLoading={isSubmitting || authState.isLoading}
                                disabled={isSubmitting || authState.isLoading}
                            >
                                <I18nMessage id="common.auth.login.button" defaultValue="登录" />
                            </Button>
                        </form>

                        <div className="mt-6">
                            <Divider />
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-content1 px-2 text-default-500">
                                    <I18nMessage id="common.auth.orContinueWith" defaultValue="或者继续使用" />
                                </span>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <Button
                                variant="bordered"
                                size="lg"
                                startContent={<Icon icon="logos:google-icon" width={18} />}
                                onClick={() => handleSocialLogin('google')}
                            >
                                Google
                            </Button>

                            <Button
                                variant="bordered"
                                size="lg"
                                startContent={<Icon icon="logos:github-icon" width={18} />}
                                onClick={() => handleSocialLogin('github')}
                            >
                                GitHub
                            </Button>
                        </div>

                        <Spacer y={4} />

                        <div className="text-center text-small">
                            <span className="text-default-500">
                                <I18nMessage id="common.auth.noAccount" defaultValue="还没有账户？" />
                            </span>{' '}
                            <Link to="/auth/register" className="text-primary hover:underline font-medium">
                                <I18nMessage id="common.auth.register" defaultValue="立即注册" />
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </PageContainer>
    );
} 