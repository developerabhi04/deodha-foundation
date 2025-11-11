// components/PDFModal.jsx - WORKING VERSION WITHOUT CSS IMPORTS
'use client';

import { useState, useEffect } from 'react';
import { X, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

const PDFModal = ({ isOpen, onClose, pdfPath, title, language }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [loading, setLoading] = useState(true);
    const [Document, setDocument] = useState(null);
    const [Page, setPage] = useState(null);
    const [pdfjs, setPdfjs] = useState(null);

    // ✅ Load react-pdf on client side only (NO CSS imports)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Import react-pdf components
            import('react-pdf').then((module) => {
                setDocument(() => module.Document);
                setPage(() => module.Page);

                const pdfjsLib = module.pdfjs;
                pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
                setPdfjs(pdfjsLib);
            }).catch(err => {
                console.error('Error loading react-pdf:', err);
            });
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
        setLoading(false);
    };

    const onDocumentLoadError = (error) => {
        console.error('Error loading PDF:', error);
        setLoading(false);
    };

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => {
            const newPage = prevPageNumber + offset;
            if (newPage < 1) return 1;
            if (newPage > numPages) return numPages;
            return newPage;
        });
    };

    const previousPage = () => changePage(-1);
    const nextPage = () => changePage(1);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = `${title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const zoomIn = () => setScale(prevScale => Math.min(prevScale + 0.2, 2.5));
    const zoomOut = () => setScale(prevScale => Math.max(prevScale - 0.2, 0.5));
    const resetZoom = () => setScale(1.0);

    if (!isOpen || !Document || !Page || !pdfjs) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-[95vh] flex flex-col m-4">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-lg">
                    <div className="flex items-center space-x-2 flex-1 min-w-0">
                        <div className="bg-white/20 p-2 rounded">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white truncate">{title}</h3>
                            <p className="text-xs text-white/80">
                                {language === 'hi' ? 'पीडीएफ दस्तावेज़' : 'PDF Document'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={handleDownload}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors group"
                            title={language === 'hi' ? 'डाउनलोड करें' : 'Download'}
                        >
                            <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors group"
                            title={language === 'hi' ? 'बंद करें' : 'Close'}
                        >
                            <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Controls Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between p-3 border-b border-gray-200 bg-gray-50 gap-2">
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={previousPage}
                            disabled={pageNumber <= 1}
                            className="flex items-center space-x-1 px-3 py-1.5 bg-orange-600 text-white rounded-lg text-sm font-bold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-orange-700 transition-colors disabled:opacity-50"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">{language === 'hi' ? 'पिछला' : 'Previous'}</span>
                        </button>

                        <div className="bg-white border border-gray-300 px-3 py-1.5 rounded-lg">
                            <span className="text-sm font-semibold text-gray-700">
                                <span className="text-orange-600">{pageNumber}</span>
                                <span className="mx-1 text-gray-400">/</span>
                                <span>{numPages || '?'}</span>
                            </span>
                        </div>

                        <button
                            onClick={nextPage}
                            disabled={pageNumber >= numPages}
                            className="flex items-center space-x-1 px-3 py-1.5 bg-orange-600 text-white rounded-lg text-sm font-bold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-orange-700 transition-colors disabled:opacity-50"
                        >
                            <span className="hidden sm:inline">{language === 'hi' ? 'अगला' : 'Next'}</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button
                            onClick={zoomOut}
                            disabled={scale <= 0.5}
                            className="p-2 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title={language === 'hi' ? 'छोटा करें' : 'Zoom Out'}
                        >
                            <ZoomOut className="w-4 h-4 text-gray-700" />
                        </button>

                        <button
                            onClick={resetZoom}
                            className="px-3 py-1.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-sm font-semibold text-gray-700 min-w-[50px] inline-block text-center">
                                {Math.round(scale * 100)}%
                            </span>
                        </button>

                        <button
                            onClick={zoomIn}
                            disabled={scale >= 2.5}
                            className="p-2 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title={language === 'hi' ? 'बड़ा करें' : 'Zoom In'}
                        >
                            <ZoomIn className="w-4 h-4 text-gray-700" />
                        </button>
                    </div>
                </div>

                {/* PDF Viewer */}
                <div className="flex-1 overflow-auto bg-gray-200 p-4">
                    <div className="flex justify-center min-h-full">
                        <Document
                            file={pdfPath}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onDocumentLoadError}
                            loading={
                                <div className="flex items-center justify-center h-96">
                                    <div className="text-center">
                                        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-orange-600 mb-4"></div>
                                        <p className="text-gray-700 font-semibold text-lg">
                                            {language === 'hi' ? 'लोड हो रहा है...' : 'Loading...'}
                                        </p>
                                        <p className="text-gray-500 text-sm mt-2">
                                            {language === 'hi' ? 'कृपया प्रतीक्षा करें' : 'Please wait'}
                                        </p>
                                    </div>
                                </div>
                            }
                            error={
                                <div className="flex items-center justify-center h-96">
                                    <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                                        <div className="text-red-500 mb-4">
                                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-red-600 font-bold text-xl mb-2">
                                            {language === 'hi' ? 'त्रुटि' : 'Error'}
                                        </p>
                                        <p className="text-gray-600 mb-4">
                                            {language === 'hi'
                                                ? 'PDF लोड करने में विफल। कृपया पुनः प्रयास करें।'
                                                : 'Failed to load PDF. Please try again.'}
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                                        >
                                            {language === 'hi' ? 'बंद करें' : 'Close'}
                                        </button>
                                    </div>
                                </div>
                            }
                        >
                            <Page
                                pageNumber={pageNumber}
                                scale={scale}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                className="shadow-2xl"
                            />
                        </Document>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="border-t border-gray-200 bg-gray-50 px-4 py-2">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>
                            {language === 'hi' ? '📄 पीडीएफ व्यूअर' : '📄 PDF Viewer'}
                        </span>
                        <span>
                            {language === 'hi'
                                ? `पृष्ठ ${pageNumber} / ${numPages || '?'}`
                                : `Page ${pageNumber} of ${numPages || '?'}`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PDFModal;
