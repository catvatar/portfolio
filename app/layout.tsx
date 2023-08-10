import { Metadata } from 'next';
import '../styles/global.css';
import { TagsContextProvider } from '../public/Context';

export const metadata: Metadata = {
  title: 'Aleksander Gogol Portfolio',
  description: 'Portfolio Aleksander Gogol',
  generator: 'Next.js',
  keywords: ['Next.js', 'React', 'JavaScript', 'Portfolio'],
  authors: [{ name: 'Aleksander Gogol' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><TagsContextProvider>{children}</TagsContextProvider></body>
    </html>
  )
}