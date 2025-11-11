// components/PDFModal.jsx - SIMPLE IFRAME VERSION (100% RELIABLE)
'use client';

import { useState, useEffect } from 'react';
import { X, Download, RefreshCw, AlertCircle } from 'lucide-react';

const PDFModal = ({ isOpen, onClose, pdfPath, title, language }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [iframeKey, setIframeKey] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setLoading(true);
            setError(false);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleIframeLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const handleIframeError = () => {
        setLoading(false);
        setError(true);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = `${title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleRetry = () => {
        setLoading(true);
        setError(false);
        setIframeKey(prev => prev + 1);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-2 sm:p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[95vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <div className="bg-white/20 p-2 rounded">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-bold text-white truncate">{title}</h3>
                            <p className="text-xs text-white/80">
                                {language === 'hi' ? 'पीडीएफ दस्तावेज़' : 'PDF Document'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        {!loading && !error && (
                            <button
                                onClick={handleRetry}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                title={language === 'hi' ? 'रीफ्रेश करें' : 'Refresh'}
                            >
                                <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </button>
                        )}
                        <button
                            onClick={handleDownload}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors group"
                            title={language === 'hi' ? 'डाउनलोड करें' : 'Download'}
                        >
                            <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors group"
                            title={language === 'hi' ? 'बंद करें' : 'Close'}
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* PDF Viewer */}
                <div className="flex-1 relative bg-gray-100">
                    {/* Loading Overlay */}
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                            <div className="text-center p-4">
                                <div className="inline-block animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-4 border-orange-600 mb-4"></div>
                                <p className="text-gray-700 font-semibold text-base sm:text-lg">
                                    {language === 'hi' ? 'पीडीएफ लोड हो रहा है...' : 'Loading PDF...'}
                                </p>
                                <p className="text-gray-500 text-xs sm:text-sm mt-2">
                                    {language === 'hi' ? 'कृपया प्रतीक्षा करें' : 'Please wait'}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                            <div className="text-center p-6 sm:p-8 max-w-md">
                                <AlertCircle className="w-16 h-16 sm:w-20 sm:h-20 text-red-500 mx-auto mb-4" />
                                <p className="text-red-600 font-bold text-xl sm:text-2xl mb-2">
                                    {language === 'hi' ? 'लोड करने में विफल' : 'Failed to Load'}
                                </p>
                                <p className="text-gray-600 text-sm sm:text-base mb-6">
                                    {language === 'hi' 
                                        ? 'PDF लोड नहीं हो सका। कृपया डाउनलोड करें।'
                                        : 'Could not load PDF. Please download instead.'}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                                    <button
                                        onClick={handleRetry}
                                        className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center space-x-2 font-semibold"
                                    >
                                        <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span>{language === 'hi' ? 'पुनः प्रयास' : 'Retry'}</span>
                                    </button>
                                    <button
                                        onClick={handleDownload}
                                        className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-2 font-semibold"
                                    >
                                        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span>{language === 'hi' ? 'डाउनलोड' : 'Download'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* PDF Iframe - Browser's Native PDF Viewer */}
                    <iframe
                        key={iframeKey}
                        src={`${pdfPath}#toolbar=1&navpanes=1&scrollbar=1`}
                        className="w-full h-full border-0"
                        onLoad={handleIframeLoad}
                        onError={handleIframeError}
                        title={title}
                        allow="fullscreen"
                    />
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 bg-gray-50 px-3 sm:px-4 py-2 sm:py-3">
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">
                            {language === 'hi' ? '📄 पीडीएफ व्यूअर' : '📄 PDF Viewer'}
                        </span>
                        <span className="text-gray-500">
                            {language === 'hi' 
                                ? '💡 यदि PDF नहीं दिख रहा है, तो डाउनलोड करें'
                                : '💡 If PDF not visible, please download'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PDFModal;
