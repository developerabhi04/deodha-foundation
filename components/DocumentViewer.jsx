// components/DocumentViewer.jsx - INLINE DOCUMENT VIEWER
'use client';

import { useState, useEffect } from 'react';
import { X, Download, FileText, RefreshCw, Loader } from 'lucide-react';

const DocumentViewer = ({ isOpen, onClose, docPath, title, fileType, language }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [viewerUrl, setViewerUrl] = useState('');

    useEffect(() => {
        if (isOpen && typeof window !== 'undefined') {
            document.body.style.overflow = 'hidden';
            setLoading(true);
            setError(false);

            // Get full URL for the document
            const fullUrl = `${window.location.origin}${docPath}`;
            
            // Use Microsoft Office Online Viewer for DOCX files
            if (fileType === 'docx' || fileType === 'doc') {
                setViewerUrl(`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fullUrl)}`);
            } else {
                // Fallback to Google Docs Viewer for other formats
                setViewerUrl(`https://docs.google.com/gview?url=${encodeURIComponent(fullUrl)}&embedded=true`);
            }
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, docPath, fileType]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = docPath;
        link.download = `${title}.${fileType}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleIframeLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const handleIframeError = () => {
        setLoading(false);
        setError(true);
    };

    const handleRetry = () => {
        setError(false);
        setLoading(true);
        // Force reload by updating URL
        const timestamp = new Date().getTime();
        setViewerUrl(prev => `${prev}&t=${timestamp}`);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[95vh] flex flex-col m-4">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-lg">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <div className="bg-white/20 p-2 rounded-lg">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white truncate">{title}</h3>
                            <div className="flex items-center space-x-2">
                                <span className="px-2 py-0.5 bg-white/30 rounded text-xs font-bold text-white uppercase">
                                    {fileType}
                                </span>
                                <span className="text-xs text-white/80">
                                    {language === 'hi' ? 'दस्तावेज़ व्यूअर' : 'Document Viewer'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={handleDownload}
                            className="flex items-center space-x-1 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors group"
                            title={language === 'hi' ? 'डाउनलोड करें' : 'Download'}
                        >
                            <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            <span className="hidden sm:inline text-white text-sm font-semibold">
                                {language === 'hi' ? 'डाउनलोड' : 'Download'}
                            </span>
                        </button>
                        {!loading && !error && (
                            <button
                                onClick={handleRetry}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                title={language === 'hi' ? 'रीफ्रेश करें' : 'Refresh'}
                            >
                                <RefreshCw className="w-5 h-5 text-white" />
                            </button>
                        )}
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors group"
                            title={language === 'hi' ? 'बंद करें' : 'Close'}
                        >
                            <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Viewer Container */}
                <div className="flex-1 relative bg-gray-100 overflow-hidden">
                    {/* Loading State */}
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
                            <div className="text-center">
                                <Loader className="w-16 h-16 text-blue-600 animate-spin mx-auto mb-4" />
                                <p className="text-gray-700 font-semibold text-lg">
                                    {language === 'hi' ? 'दस्तावेज़ लोड हो रहा है...' : 'Loading document...'}
                                </p>
                                <p className="text-gray-500 text-sm mt-2">
                                    {language === 'hi' ? 'कृपया प्रतीक्षा करें' : 'Please wait'}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
                            <div className="text-center p-8 max-w-md">
                                <div className="text-red-500 mb-4">
                                    <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-red-600 font-bold text-2xl mb-2">
                                    {language === 'hi' ? 'लोड करने में विफल' : 'Failed to Load'}
                                </p>
                                <p className="text-gray-600 mb-6">
                                    {language === 'hi' 
                                        ? 'दस्तावेज़ लोड नहीं हो सका। कृपया पुनः प्रयास करें या डाउनलोड करें।'
                                        : 'Could not load document. Please try again or download it.'}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <button
                                        onClick={handleRetry}
                                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2 font-semibold"
                                    >
                                        <RefreshCw className="w-5 h-5" />
                                        <span>{language === 'hi' ? 'पुनः प्रयास करें' : 'Retry'}</span>
                                    </button>
                                    <button
                                        onClick={handleDownload}
                                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-2 font-semibold"
                                    >
                                        <Download className="w-5 h-5" />
                                        <span>{language === 'hi' ? 'डाउनलोड' : 'Download'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Document Iframe */}
                    {viewerUrl && (
                        <iframe
                            src={viewerUrl}
                            className="w-full h-full border-0"
                            onLoad={handleIframeLoad}
                            onError={handleIframeError}
                            title={title}
                            allowFullScreen
                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        />
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 bg-gray-50 px-4 py-3">
                    <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2 text-gray-600">
                            <FileText className="w-3 h-3" />
                            <span className="font-semibold">{title}.{fileType}</span>
                        </div>
                        <span className="text-gray-500">
                            {language === 'hi' 
                                ? '💡 यदि दस्तावेज़ नहीं दिख रहा है, तो डाउनलोड करें'
                                : '💡 If document is not visible, please download'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentViewer;
