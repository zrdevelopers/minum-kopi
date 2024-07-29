'use client';
import { ThemeProviderWrapper } from '@/components/MKThemeToggleButton/themeContext';
import { appWithTranslation } from 'next-i18next';

function RootLayout({ children }) {
  return (
    <ThemeProviderWrapper>
      <html lang="id">
        <body>{children}</body>
      </html>
    </ThemeProviderWrapper>
  );
}

export default appWithTranslation(RootLayout);
