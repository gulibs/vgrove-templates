# VGrove HeroUI Template

一个基于 VGrove + HeroUI + TailwindCSS 4 的现代化 React 应用模板，提供完整的认证系统、路由守卫、面包屑导航和企业级功能。

## ✨ 特性

### 🎯 核心功能

- **🔐 认证系统** - 完整的用户登录、路由守卫和权限控制
- **🍞 面包屑导航** - 基于路由的智能面包屑导航
- **📋 Handle 系统** - 页面元数据和配置管理
- **🛡️ 路由守卫** - 基于角色和权限的路由保护
- **🌐 国际化** - 完整的多语言支持 （中文 / 英文）
- **🎨 主题系统** - 深色 / 浅色主题切换
- **📱 响应式设计** - 完美适配各种设备

### 🧩 组件演示

- **📝 表单组件** - 完整的表单控件演示和验证
- **📊 表格组件** - 高级表格功能：排序、筛选、分页
- **📈 图表展示** - 数据可视化组件示例
- **🎭 主题演示** - 主题系统功能展示
- **🌍 国际化演示** - 多语言功能演示
- **🚀 路由演示** - 自动路由系统演示

### 💼 实际应用

- **📊 控制台示例** - 完整的管理界面
- **👤 用户资料** - 用户信息管理
- **⚙️ 系统设置** - 应用配置管理

## 🚀 快速开始

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 开发模式

```bash
# 使用 VGrove CLI
vgrove dev

# 或使用包管理器
npm run dev
```

### 构建项目

```bash
# 使用 VGrove CLI
vgrove build

# 或使用包管理器
npm run build
```

## 🔐 认证系统

### 登录页面

位置：`/auth/login`

演示用户：
- 邮箱：`admin@example.com`
- 密码：`password`

特性：
- 表单验证
- 记住登录状态
- 社交登录集成示例
- 错误处理

### 路由守卫

位置：`/auth/guard-demo`

功能：
- 基础认证守卫
- 角色权限检查
- 权限验证
- 守卫测试工具

### 守卫使用示例

```tsx
// 定义认证守卫
import { defineAuth, definePermissionGuard } from '@gulibs/vgrove-client';

const authGuard = defineAuth({
    name: 'auth-required',
    redirectTo: '/auth/login',
    check: (context) => !!context.user
});

const adminGuard = defineAuth({
    name: 'admin-only',
    roles: ['admin'],
    redirectTo: '/403'
});

// 在组件中使用路由保护
import { useRouteProtection } from '@gulibs/vgrove-client';

function ProtectedComponent() {
    const { isLoading, error, hasAccess } = useRouteProtection([authGuard]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!hasAccess) return <div>Access Denied</div>;

    return <div>Protected Content</div>;
}
```

## 🍞 面包屑导航

基于路由自动生成的智能面包屑导航系统。

### 使用方法

```tsx
import { Breadcrumbs } from '@/components/Breadcrumbs';

function Layout() {
    return (
        <div>
            <Breadcrumbs className="mb-4" />
            <main>{/* 页面内容 */}</main>
        </div>
    );
}
```

### 特性

- 自动路径解析
- 国际化支持
- 图标集成
- 自定义样式

## 📋 Handle 系统

每个页面可以定义 handle 文件来管理页面元数据和配置。

### Handle 文件示例

```tsx
// src/pages/my-page/handle.tsx
import { defineHandle } from '@gulibs/vgrove-client';

const handle = defineHandle({
    meta: {
        title: 'page.title',
        description: 'Page description'
    },
    pageMeta: {
        title: 'page.title',
        description: 'page.subtitle'
    },
    breadcrumbs: {
        href: '/my-page',
        className: 'text-primary'
    }
});

export default handle;
```

### 使用 Handle 数据

```tsx
import { useHandle } from '@gulibs/vgrove-client';

function MyPage() {
    const { meta, breadcrumbs, pageExtras } = useHandle();

    return (
        <div>
            <h1>{meta?.title}</h1>
            {pageExtras}
        </div>
    );
}
```

## 🎨 TailwindCSS 配置

**重要：** 确保 `src/index.css` 中有正确的配置：

```css
@import "tailwindcss";
@plugin './hero.ts';
@source '../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}';
@source '../node_modules/@gulibs/vgrove-ui/dist/**/*.{js,ts,jsx,tsx}';
@custom-variant dark (&:is(.dark *));
```

这个配置确保 Tailwind CSS 能正确扫描和生成 HeroUI 和 VGrove UI 组件的样式。

## 🌐 国际化

### 添加新的翻译

1. 在 `src/locales/en/common.json` 和 `src/locales/zh/common.json` 中添加翻译
2. 在组件中使用：

```tsx
import { useI18n, I18nMessage } from '@gulibs/vgrove-client';

function MyComponent() {
    const { t } = useI18n();

    return (
        <div>
            <h1>{t('my.translation.key')}</h1>
            <I18nMessage id="my.message" defaultValue="Default text" />
        </div>
    );
}
```

## 📁 项目结构

```
src/
├── components/          # 共享组件
│   └── Breadcrumbs.tsx # 面包屑导航组件
├── pages/              # 页面目录
│   ├── auth/           # 认证相关页面
│   │   ├── login/      # 登录页面
│   │   └── guard-demo/ # 路由守卫演示
│   ├── forms-demo/     # 表单演示
│   ├── tables-demo/    # 表格演示
│   ├── charts-demo/    # 图表演示
│   ├── themes-demo/    # 主题演示
│   ├── i18n-demo/      # 国际化演示
│   ├── routing-demo/   # 路由演示
│   ├── navbar-demo/    # 导航栏演示
│   ├── dashboard-example/ # 控制台示例
│   ├── profile-example/   # 用户资料示例
│   ├── settings-example/  # 设置示例
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 首页
│   └── handle.tsx      # 首页Handle
├── locales/            # 国际化文件
│   ├── en/
│   └── zh/
├── App.tsx             # 应用根组件
├── main.tsx           # 应用入口
├── index.css          # 全局样式
└── hero.ts            # HeroUI 插件配置
```

## 🔧 添加新页面

1. 创建页面目录：`src/pages/my-new-page/`
2. 创建页面组件：`src/pages/my-new-page/page.tsx`
3. 创建 Handle 文件：`src/pages/my-new-page/handle.tsx`
4. 添加翻译：在 `locales/*/common.json` 中添加相关翻译
5. 更新导航菜单：在 `src/pages/layout.tsx` 中添加菜单项

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **UI 库**: HeroUI (NextUI v2)
- **样式**: TailwindCSS 4
- **路由**: React Router v7
- **国际化**: @gulibs/vgrove-i18n
- **图标**: @iconify/react
- **开发框架**: VGrove

## 📦 依赖说明

### 核心依赖

- `@gulibs/vgrove-client` - VGrove 客户端核心
- `@gulibs/vgrove-ui` - VGrove UI 组件库
- `@heroui/react` - HeroUI 组件库
- `react-router` - 路由管理

### 开发依赖

- `@gulibs/vgrove-core` - VGrove 开发工具
- `@gulibs/vgrove-autoroutes` - 自动路由生成
- `@gulibs/vgrove-i18n` - 国际化插件

## 🎯 主要功能页面

| 页面 | 路径 | 描述 |
|------|------|------|
| 首页 | `/` | 项目概览和功能展示 |
| 登录 | `/auth/login` | 用户登录界面 |
| 路由守卫 | `/auth/guard-demo` | 认证守卫演示 |
| 表单演示 | `/forms-demo` | 表单组件演示 |
| 表格演示 | `/tables-demo` | 表格功能演示 |
| 图表演示 | `/charts-demo` | 数据可视化演示 |
| 主题演示 | `/themes-demo` | 主题系统演示 |
| 国际化演示 | `/i18n-demo` | 多语言功能演示 |
| 路由演示 | `/routing-demo` | 路由系统演示 |
| 导航栏演示 | `/navbar-demo` | 导航组件演示 |
| 控制台示例 | `/dashboard-example` | 管理界面示例 |
| 用户资料 | `/profile-example` | 用户信息管理 |
| 系统设置 | `/settings-example` | 应用设置管理 |

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个模板！

## 📞 支持

如有问题，请提交 Issue 或联系开发团队。

---

## 🔗 相关链接

- [VGrove 文档](https://vgrove.dev)
- [HeroUI 文档](https://heroui.com)
- [TailwindCSS 文档](https://tailwindcss.com)
- [React 文档](https://react.dev)
