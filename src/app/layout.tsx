import '../styles/global.css';
import { Metadata } from 'next';
import { GlobalNav } from '../ui/global-nav';
import { TagsContextProvider } from '../lib/Context';
import { getSortedPostsData } from '../lib/posts';

export const metadata: Metadata = {
  title: 'Aleksander Gogol Portfolio',
  description: 'Portfolio Aleksander Gogol',
  generator: 'Next.js',
  keywords: ['Next.js', 'React', 'JavaScript', 'Portfolio'],
  authors: [{ name: 'Aleksander Gogol' }],
}

export default function RootLayout({ children }:{ children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <TagsContextProvider allPostsData={getSortedPostsData()}>
          <div className='bg-primary'>
            <GlobalNav />
            <div className='lg:ml-sidebar py-6'>
              <div className='flex justify-center'>
                <div className='w-5/6'>
                  {children}
                </div>
              </div>
              <div className="w-full h-screen bg-primary"></div>
            </div>
          </div>
        </TagsContextProvider>
      </body>
    </html>
  )
}