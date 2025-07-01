# VGrove Templates 🚀

VGrove 模板集合，提供两种不同复杂度的项目模板，满足不同开发需求。

## 📦 模板列表

### 1. VGrove Basic Template

**位置**: `vgrove-template-basic/`

**特性**:
- ⚡ 纯核心功能，不依赖 UI 框架
- 🎨 原生 CSS + CSS Variables
- 🌍 内置国际化支持
- 📱 手工编写的响应式设计
- 🎯 完全自定义样式控制
- 💡 轻量级（~300KB）

**技术栈**:
- React 19 + TypeScript + Vite
- @gulibs/vgrove-core + @gulibs/vgrove-client
- 原生 CSS + CSS Variables
- React Router 7

**适用场景**:
- 自定义设计需求
- 轻量级应用
- 学习底层实现
- 对包大小有严格要求

### 2. VGrove HeroUI Template

**位置**: `vgrove-template-heroui/`

**特性**:
- 🏢 完整的管理后台界面
- 📊 数据可视化仪表盘
- 👥 用户管理系统
- ⚙️ 系统设置面板
- 🔐 安全性配置
- 📱 响应式侧边栏
- 🎨 丰富的 UI 组件

**技术栈**:
- React 19 + TypeScript + Vite
- @gulibs/vgrove-ui （包含 HeroUI + Tailwind CSS)
- @gulibs/vgrove-core + @gulibs/vgrove-client

**适用场景**:
- 管理后台系统
- 企业级应用
- 数据管理平台
- CMS 系统

## 🎯 主要特点

### 模板对比

| 特性 | Basic Template | HeroUI Template |
|------|----------------|-----------------|
| **UI 框架** | 无 | HeroUI + Tailwind CSS |
| **包大小** | 小 (~300KB) | 大 (~1MB) |
| **依赖数量** | 最少 | 较多 |
| **定制性** | 极高 | 中等 |
| **开发速度** | 慢（需手写样式） | 快（预制组件） |
| **学习曲线** | 低 | 中等 |
| **适用复杂度** | 简单到中等 | 中等到复杂 |

### 核心依赖对比

#### Basic Template（最小化）

```json
{
  "dependencies": {
    "@gulibs/vgrove-client": "^0.0.7",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router": "^7.6.2",
    "react-router-dom": "^7.6.2"
  },
  "devDependencies": {
    "@gulibs/vgrove-core": "^0.0.4"
  }
}
```

#### HeroUI Template（功能完整）

```json
{
  "dependencies": {
    "@gulibs/vgrove-ui": "^0.0.2",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router-dom": "^7.6.2"
  },
  "devDependencies": {
    "@gulibs/vgrove-core": "^0.0.4",
    "tailwindcss": "^4.1.11"
  }
}
```

## 🚀 快速开始

### 基础模板

```bash
# 进入基础模板目录
cd frontend/vgrove-templates/vgrove-template-basic

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### HeroUI 模板

```bash
# 进入HeroUI模板目录
cd frontend/vgrove-templates/vgrove-template-heroui

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 🎨 界面预览

### 基础模板

- 🏠 原生 HTML/CSS 首页
- 🌐 简单的语言切换器（select 元素）
- 🎯 CSS Grid/Flexbox 布局
- 📖 代码示例展示
- 🌙 CSS Variables 主题切换

### HeroUI 模板

- 📊 HeroUI 数据仪表盘
- 👥 完整的用户管理表格
- ⚙️ 高级系统设置面板
- 🔄 HeroUI 主题切换组件
- 📱 响应式侧边栏布局

## 💡 选择建议

### 选择 Basic Template 当你：

- 需要完全控制界面设计
- 对包大小有严格要求
- 想要学习底层实现原理
- 有特殊的 UI 需求
- 团队有强 UI/UX 能力

### 选择 HeroUI Template 当你：

- 需要快速搭建管理后台
- 团队开发效率优先
- 需要企业级 UI 组件
- 不想花太多时间在样式上
- 需要复杂的数据展示

## 🛠️ 开发指南

### Basic Template 开发

1. **样式开发**: 使用 CSS Variables 实现主题
2. **组件开发**: 纯 React 组件，无外部 UI 依赖
3. **布局开发**: CSS Grid/Flexbox 手工布局
4. **响应式**: 标准 CSS 媒体查询

### HeroUI Template 开发

1. **组件使用**: 直接使用 VGrove UI 组件
2. **样式定制**: Tailwind CSS + HeroUI 主题
3. **布局系统**: VGroveLayout 组件
4. **快速开发**: 预制组件快速组合

## 🔧 配置说明

### vgrove.config.ts 差异

#### Basic Template

```typescript
export default defineConfig({
  vgrove: {
    ui: {
      framework: 'none'  // 不使用UI框架
    }
  }
});
```

#### HeroUI Template

```typescript
export default defineConfig({
  vgrove: {
    ui: {
      framework: 'heroui'  // 使用HeroUI框架
    }
  }
});
```

## 📚 文档链接

- [VGrove Core 文档](../../../tools/vgrove-core/README.md)
- [VGrove UI 文档](../../../plugins/vgrove-ui/README.md)
- [Basic Template 详细文档](./vgrove-template-basic/README.md)
- [HeroUI Template 详细文档](./vgrove-template-heroui/README.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进模板！

## �� 许可证

MIT License
