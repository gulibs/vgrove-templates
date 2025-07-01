import { resources, supportedLocales } from '@gulibs/i18n-locales';
import { routes } from '@gulibs/react-autopages';
import { createI18nClient, I18nProvider } from '@gulibs/vgrove-client';
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
  resources,
  supportedLocales,
  defaultLocale: 'zh'
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
