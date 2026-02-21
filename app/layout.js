import './globals.css'

export const metadata = {
  title: 'Supreme Auto Parts | Auto Parts & Accessories – Shop Online',
  description: 'Your one-stop auto parts store. Same-day delivery and optional installation on select products.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="antialiased bg-[#0F0F0F]">{children}</body>
    </html>
  )
}
