import { resources, supportedLocales } from '@gulibs/i18n-locales';
import { routes } from '@gulibs/react-autopages';
import { createI18nClient, I18nProvider } from '@gulibs/vgrove-ui';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { VGroveProvider } from '@gulibs/vgrove-ui';
import type { LayoutSettings } from '@gulibs/vgrove-ui';

// 根页面布局配置
const rootLayoutSettings: LayoutSettings = {
  // 侧边栏 - 是否显示侧边栏 
  sidebar: true,

  // 头部 - 是否显示导航栏/头部
  header: true,

  // 页脚 - 是否显示页脚
  footer: true,

  // 导航栏配置
  navbar: {
    sticky: true,
    transparent: false,
    height: '72px'
  },

  // 侧边栏配置
  sidebarConfig: {
    width: '320px',
    collapsible: true,
    defaultCollapsed: false
  },

  // 页脚配置
  footerConfig: {
    sticky: false,
    height: '80px'
  },

  // 主题相关配置
  theme: {
    mode: "auto"
  },

  // 响应式配置
  responsive: {
    hideSidebarOnMobile: true,
    mobileBreakpoint: '768px'
  }
};

const router = createBrowserRouter(routes);

const client = createI18nClient({
  // 传入资源以确保向后兼容
  resources,
  supportedLocales,
  // 自定义持久化配置（可选，会与默认配置合并）
  persistence: {
    key: 'vgrove_user_locale' // 自定义存储键，storage 和 enabled 使用默认值
  },
  // 启用浏览器语言检测（作为备选方案）
  detectBrowserLanguage: false, // 优先使用用户手动选择的语言
  // 启用回退到默认语言
  fallbackToDefault: true,
  // 开发环境下启用调试模式
  debug: process.env.NODE_ENV === 'development'
});

function App() {

  return (
    <VGroveProvider
      settings={rootLayoutSettings}
    >
      <I18nProvider client={client}>
        <RouterProvider router={router} />
      </I18nProvider>
    </VGroveProvider>
  )
}

export default App
