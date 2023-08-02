import '../styles/global.css';
import { GlobalNav } from '../ui/global-nav';
import { isHome } from '../public/Context';

export default function App({ Component, pageProps }) {
  return (
  <>
    <isHome.Provider value={Component.name == 'Home'}>
      <GlobalNav />
    </isHome.Provider>
    <Component {...pageProps} />
  </>);
}