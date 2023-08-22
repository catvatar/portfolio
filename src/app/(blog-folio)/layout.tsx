import { Metadata } from 'next';
import { GlobalNavigation } from '../../ui/global-navigation';
import { TagsContextProvider } from '../../lib/Context';
import { getSortedPostsData } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Aleksander Gogol Portfolio',
  description: 'Portfolio Aleksander Gogol',
}

export default function BlogLayout({ children }:{ children: React.ReactNode }) {
  const allPostsData = getSortedPostsData('portfolio');

  return (
    <section>
      <TagsContextProvider allPostsData={allPostsData}>
        <GlobalNavigation>
          <div className='py-6'>
            <div className='flex justify-center'>
              <div className='w-5/6'>
                {children}
              </div>
            </div>
          </div>
        </GlobalNavigation>
      </TagsContextProvider>
    </section>
  )
}