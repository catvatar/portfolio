import { Metadata } from 'next';
import { GlobalNav } from '../../ui/global-nav';
import { TagsContextProvider } from '../../lib/Context';
import { getSortedPostsData } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Aleksander Gogol Portfolio',
  description: 'Portfolio Aleksander Gogol',
}

export default function RootLayout({ children }:{ children: React.ReactNode }) {
  const allPostsData = getSortedPostsData();

  return (
    <html lang="en">
      <body>
        <TagsContextProvider allPostsData={allPostsData}>
          <div className='bg-primary'>
            <GlobalNav>
              <div className='py-6'>
                <div className='flex justify-center'>
                  <div className='w-5/6'>
                    {children}
                  </div>
                </div>
                <div className="w-full h-screen bg-primary"></div>
              </div>
            </GlobalNav>
          </div>
        </TagsContextProvider>
      </body>
    </html>
  )
}