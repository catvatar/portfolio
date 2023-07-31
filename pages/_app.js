import '../styles/global.css';
import { GlobalNav } from '../ui/global-nav';

export default function App({ Component, pageProps }) {
  return (
  <>
     <GlobalNav />
    <Component {...pageProps} />
  </>);
}
