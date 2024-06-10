import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/lib/theme'
import { CssBaseline } from "@mui/material";
import NavMenu from "@/components/NavMenu";


export const metadata: Metadata = {
  openGraph: {
    title: 'Купляй із задоволенням',
    description: 'Товари для вашої душі',
    url: 'https://test-simple-catalog.vercel.app',
    siteName: 'simple catalog app',
    images: [
      {
        url: 'https://png.pngtree.com/png-clipart/20200722/original/pngtree-chat-store-logo-design-inspiration-png-image_4945665.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://png.pngtree.com/png-clipart/20200722/original/pngtree-chat-store-logo-design-inspiration-png-image_4945665.jpg',
        width: 1800,
        height: 1600,
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
}

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
