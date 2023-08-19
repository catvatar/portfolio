import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aleksander Gogol Blog',
  description: 'Blog Aleksander Gogol',
}

export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}