# 🌳 Grove Basic Template

A modern, minimal React application template built with **VGrove** - featuring automatic routing, internationalization, and a unified development experience.

## ✨ Features

- 🚀 **Auto Routes** - File-based routing system that generates routes automatically
- 🌍 **i18n Support** - Built-in internationalization with JSON-based translations
- ⚡ **Fast Development** - Powered by Vite with hot module replacement
- 🔧 **Zero Configuration** - Smart defaults with minimal setup required
- 📦 **Unified Toolchain** - Single CLI tool for all development needs
- 🎨 **Modern UI** - Clean, responsive design with dark mode support
- 📱 **Mobile-First** - Responsive design that works on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Using create-vgrove
npx @gulibs/create-vgrove@latest my-app --template basic

# Or clone this template
git clone <your-template-repo>
cd my-app
npm install
```

### Development

```bash
# Start development server
npm run dev
# or
vgrove dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build optimized production bundle
npm run build
# or
vgrove build
```

## 📁 Project Structure

```
src/
├── pages/           # Route pages (auto-generated routes)
│   ├── layout.tsx   # Root layout component
│   ├── page.tsx     # Home page (/)
│   └── about.tsx    # About page (/about)
├── locales/         # Internationalization files
│   ├── en/          # English translations
│   └── zh/          # Chinese translations
├── App.tsx          # Root App component
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## 🛣️ Routing

VGrove uses file-based routing. Routes are automatically generated based on your file structure:

| File | Route | Description |
|------|-------|-------------|
| `src/pages/page.tsx` | `/` | Home page |
| `src/pages/about.tsx` | `/about` | About page |
| `src/pages/users/[id].tsx` | `/users/:id` | Dynamic route |
| `src/pages/layout.tsx` | - | Layout wrapper |

### Dynamic Routes

Create dynamic routes using square brackets:

```tsx
// src/pages/users/[id].tsx
import { useParams } from 'react-router';

export default function UserPage() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}
```

## 🌍 Internationalization

### Adding Languages

1. Create translation files in `src/locales/[locale]/`:

   ```
   src/locales/
   ├── en/
   │   ├── common.json
   │   └── about.json
   └── zh/
       ├── common.json
       └── about.json
   ```

2. Configure supported locales in `vgrove.config.ts`

### Using Translations

```tsx
import { useI18n } from '@gulibs/react-autoroutes-client';

export default function MyComponent() {
  const { t, locale, switchLocale } = useI18n();

  return (
    <div>
      <h1>{t('common.welcome', 'Welcome')}</h1>
      <button onClick={() => switchLocale('zh')}>
        Switch to Chinese
      </button>
    </div>
  );
}
```

## ⚙️ Configuration

Configure your project in `vgrove.config.ts`:

```typescript
import { defineConfig } from '@gulibs/vgrove'

export default defineConfig({
  vgrove: {
    // Auto Routes configuration
    routes: {
      dirs: [{ dir: 'src/pages', baseRoute: '/' }],
      mode: 'flat',
      cache: true
    },

    // i18n configuration
    i18n: {
      basePath: 'src/locales',
      defaultLocale: 'en',
      extensions: ['.json', '.ts', '.js']
    },

    // Build configuration
    build: {
      target: 'es2020',
      outDir: 'dist',
      sourcemap: true
    }
  },

  // Vite configuration (optional)
  vite: {
    server: {
      port: 3000,
      open: true
    }
  }
})
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## 🎨 Styling

This template uses vanilla CSS with:

- CSS custom properties for theming
- Responsive design with CSS Grid and Flexbox
- Dark mode support using `prefers-color-scheme`
- Mobile-first responsive design

### Adding Your Own Styles

1. Edit `src/index.css` for global styles
2. Create component-specific CSS files
3. Import CSS files in your components

## 🔧 Customization

### Adding New Pages

Simply create new `.tsx` files in `src/pages/`:

```tsx
// src/pages/contact.tsx
export default function ContactPage() {
  return <div>Contact Us</div>;
}
// Automatically available at /contact
```

### Adding UI Libraries

Install your preferred UI library:

```bash
# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Ant Design
npm install antd

# Material-UI
npm install @mui/material @emotion/react @emotion/styled
```

## 🚀 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📚 Learn More

- [VGrove Documentation](https://github.com/gulibs/vgrove)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This template is available under the [MIT License](LICENSE).

---

Built with ❤️ using [VGrove](https://github.com/gulibs/vgrove)
