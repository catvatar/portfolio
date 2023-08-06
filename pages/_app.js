import '../styles/global.css';
import { GlobalNav } from '../ui/global-nav';
import { isHome } from '../public/Context';

export default function App({ Component, pageProps }) {
  return (
  <>
    <isHome.Provider value={Component.name == 'Home'}>
      <GlobalNav />
    </isHome.Provider>
    <div className='lg:ml-sidebar bg-primary py-6'>
      <div className='flex justify-center'>
        <div className='w-5/6'>
          <Component {...pageProps} />
        </div>
      </div>
      <div className="w-full h-screen bg-primary"></div>
    </div>
  </>);
}