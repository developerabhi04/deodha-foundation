// Main layout wrapper with header and footer (UI-only)
import { motion } from 'framer-motion';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex-grow"
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
}
