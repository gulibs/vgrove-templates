import { Outlet } from 'react-router';
import { useI18n } from '@gulibs/vgrove-client';
import { useState, useEffect } from 'react';
import './layout.css';

export default function RootLayout() {
    const { locale, setLocale, availableLocales } = useI18n();
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // 主题切换逻辑
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const handleLanguageChange = async (newLocale: string) => {
        try {
            await setLocale(newLocale);
        } catch (error) {
            console.error('语言切换失败:', error);
        }
    };

    return (
        <div className="layout">
            {/* 导航栏 */}
            <header className="navbar">
                <div className="navbar-content">
                    <div className="navbar-brand">
                        <img src="/vgrove.svg" alt="VGrove" className="logo" />
                        <span className="brand-name">VGrove Basic</span>
                    </div>

                    <div className="navbar-actions">
                        {/* 语言切换 */}
                        <select
                            value={locale}
                            onChange={(e) => handleLanguageChange(e.target.value)}
                            className="language-select"
                        >
                            {availableLocales.map((loc) => (
                                <option key={loc} value={loc}>
                                    {loc === 'zh' ? '中文' : loc === 'en' ? 'English' : loc}
                                </option>
                            ))}
                        </select>

                        {/* 主题切换 */}
                        <button onClick={toggleTheme} className="theme-toggle">
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
                    </div>
                </div>
            </header>

            {/* 主内容区域 */}
            <main className="main">
                <Outlet />
            </main>

            {/* 页脚 */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        © 2025 VGrove Team. All rights reserved.
                    </div>
                    <div className="footer-links">
                        <a href="https://github.com/gulibs/vgrove-projects" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="/docs">文档</a>
                        <a href="/about">关于</a>
                    </div>
                </div>
            </footer>
        </div>
    );
} 