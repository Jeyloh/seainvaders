import '../styles/globals.css';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar({
  size: 3,
  color: 'var(--pink)',
  className: 'bar-of-progress',
  delay: 100,
});

//Binding events.
Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.finish());
Router.events.on('routeChangeError', () => progress.finish());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
