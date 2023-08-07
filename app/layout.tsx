import { GlobalNav } from '../ui/global-nav';
import { isHome } from '../public/Context';

export default function RootLayout({
  children,
  home,
}: {
  children: React.ReactNode;
  home: null;
}) {

  return (
    <div className='bg-primary'>
      <isHome.Provider value={home}>
        <GlobalNav />
      </isHome.Provider>
      <div className='lg:ml-sidebar py-6'>
        <div className='flex justify-center'>
          <div className='w-5/6'>
            {children}
          </div>
        </div>
        <div className="w-full h-screen bg-primary"></div>
      </div>
    </div>
  );
}
