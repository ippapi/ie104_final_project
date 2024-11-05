import '../styles/globals.css'; 
import { LayoutGenerator } from '../context/LayoutContext';
import Layout from '../components/layouts/Layouts';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutGenerator >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutGenerator >
  );
}

export default MyApp;
