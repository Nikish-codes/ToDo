import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { FirebaseProvider } from '@/components/firebase-provider'
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from '@/components/error-boundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JEE Mains 2025 Prep Companion',
  description: 'AI-driven preparation tool for JEE Mains 2025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <FirebaseProvider>
              {children}
            </FirebaseProvider>
          </ThemeProvider>
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  )
}

