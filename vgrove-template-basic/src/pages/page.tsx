import { useI18n } from '@gulibs/vgrove-client';
import type { I18nKeys } from '../i18n-keys';
import './page.css';

export default function HomePage() {
    const { t, locale, isReady, availableLocales } = useI18n<I18nKeys>();

    if (!isReady) {
        return (
            <div className="loading">
                <div className="loading-text">{t('common.common.loading')}</div>
            </div>
        );
    }

    return (
        <div className="container">
            {/* 欢迎区域 */}
            <div className="welcome-section">
                <div className="vgrove-logo">
                    <img src="/vgrove.svg" alt="VGrove" className="logo-image" />
                </div>
                <h1>{t('common.common.welcome')}</h1>
                <p className="description">
                    {t('common.app.description')}
                </p>
            </div>

            {/* 语言信息 */}
            <div className="language-section">
                <h3>{t('common.common.language')}</h3>
                <div className="language-info">
                    <p><strong>当前语言:</strong> {locale === 'zh' ? '简体中文' : 'English'}</p>
                    <p><strong>可用语言:</strong> {availableLocales.map(loc =>
                        loc === 'zh' ? '简体中文' : 'English'
                    ).join(', ')}</p>
                </div>
            </div>

            {/* 特性介绍 */}
            <div className="info-section">
                <h2>🚀 VGrove Basic Template 特性</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h4>⚡ 现代化架构</h4>
                        <p>基于 React 19 + TypeScript + Vite</p>
                    </div>
                    <div className="feature-item">
                        <h4>🌍 国际化支持</h4>
                        <p>内置多语言支持，易于扩展</p>
                    </div>
                    <div className="feature-item">
                        <h4>🎨 主题系统</h4>
                        <p>支持亮色/暗色主题切换</p>
                    </div>
                    <div className="feature-item">
                        <h4>📱 响应式设计</h4>
                        <p>完美适配各种设备尺寸</p>
                    </div>
                    <div className="feature-item">
                        <h4>🔧 开发友好</h4>
                        <p>热重载、TypeScript、ESLint</p>
                    </div>
                    <div className="feature-item">
                        <h4>📦 开箱即用</h4>
                        <p>预配置常用工具和库</p>
                    </div>
                </div>
            </div>

            {/* 快速开始 */}
            <div className="quick-start">
                <h2>🏃‍♂️ 快速开始</h2>
                <div className="code-block">
                    <pre>
                        npm run dev    # 启动开发服务器
                        npm run build  # 构建生产版本
                        npm run lint   # 代码检查
                    </pre>
                </div>
                <p className="start-tip">
                    访问 <code>http://localhost:5173</code> 开始开发
                </p>
            </div>
        </div>
    );
} 