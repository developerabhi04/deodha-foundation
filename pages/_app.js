import '../styles/globals.css';
import Layout from '../components/Layout';
import { LanguageProvider } from '../lib/LanguageContext';

export default function App({ Component, pageProps }) {
    return (
        <LanguageProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </LanguageProvider>
    );
}
