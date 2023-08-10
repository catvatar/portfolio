import { GlobalNav } from '../ui/global-nav';
import { IsHomeProvider } from '../public/Context';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {

  return (
    <div className='bg-primary'>
      <IsHomeProvider value={home}>
        <GlobalNav />
      </IsHomeProvider>
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
