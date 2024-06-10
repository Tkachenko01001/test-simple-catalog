import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/lib/theme'
import { CssBaseline } from "@mui/material";
import NavMenu from "@/components/NavMenu";


export const metadata: Metadata = {
  title: {
    default: 'Магазин "Задоволення"',
    template: '%s - Магазин "Задоволення"',
  },
  description: 'Ласкаво просимо до нашого інтернет-магазину! У нас ви знайдете товари для вашої душі.',
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    siteName: 'Магазин Гаджетів',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavMenu />
            <main>
              {children}
            </main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
