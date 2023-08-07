import '../styles/global.css';
import { GlobalNav } from '../ui/global-nav';

export default function App({ Component, pageProps }) {
  return (
  <div className='bg-primary'>
    <GlobalNav />
    <div className='lg:ml-sidebar py-6'>
      <div className='flex justify-center'>
        <div className='w-5/6'>
          <Component {...pageProps} />
        </div>
      </div>
      <div className="w-full h-screen bg-primary"></div>
    </div>
  </div>);
}