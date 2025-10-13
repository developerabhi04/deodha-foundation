// Gallery page with filtering and lightbox (UI-only)
import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Lightbox from '../components/Lightbox';
import { gallery } from '../lib/data';

export default function GalleryPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    return (
        <>
            <SEO
                title="Gallery"
                description="Explore our gallery showcasing the impact of our programs and the communities we serve."
                image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop"
            />

            <Hero
                title="Our Gallery"
                subtitle="Moments of transformation, hope, and community empowerment captured through images."
                backgroundImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80&auto=format&fit=crop"
            />

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <Gallery images={gallery} onImageClick={openLightbox} />
                </div>
            </section>

            <Lightbox
                isOpen={lightboxOpen}
                currentIndex={currentImageIndex}
                images={gallery}
                onClose={closeLightbox}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </>
    );
}
