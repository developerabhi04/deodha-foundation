// components/DocumentViewer.jsx - RELIABLE MAMMOTH.JS VERSION
'use client';

import { useState, useEffect } from 'react';
import { X, Download, FileText, Loader, AlertCircle, RefreshCw } from 'lucide-react';

const DocumentViewer = ({ isOpen, onClose, docPath, title, fileType, language }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            loadDocument();
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, docPath]);

    const loadDocument = async () => {
        setLoading(true);
        setError(false);
        setHtmlContent('');

        try {
            if (fileType === 'docx' || fileType === 'doc') {
                // Dynamically import mammoth.js
                const mammoth = (await import('mammoth')).default;
                
                // Fetch the file with error handling
                const response = await fetch(docPath);
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch document: ${response.status}`);
                }
                
                const arrayBuffer = await response.arrayBuffer();

                if (!arrayBuffer || arrayBuffer.byteLength === 0) {
                    throw new Error('Empty document received');
                }

                // Convert to HTML with options for better formatting
                const result = await mammoth.convertToHtml(
                    { arrayBuffer },
                    {
                        styleMap: [
                            "p[style-name='Heading 1'] => h1:fresh",
                            "p[style-name='Heading 2'] => h2:fresh",
                            "p[style-name='Heading 3'] => h3:fresh",
                        ]
                    }
                );

                if (result.value) {
                    setHtmlContent(result.value);
                    setLoading(false);
                } else {
                    throw new Error('No content in document');
                }

                // Log any warnings from mammoth
                if (result.messages && result.messages.length > 0) {
                    console.warn('Document conversion warnings:', result.messages);
                }
            } else {
                setError(true);
                setLoading(false);
            }
        } catch (err) {
            console.error('Error loading document:', err);
            setError(true);
            setLoading(false);
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = docPath;
        link.download = `${title}.${fileType}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleRetry = () => {
        loadDocument();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-2 sm:p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-[95vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <div className="bg-white/20 p-2 rounded-lg">
                            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-bold text-white truncate">{title}</h3>
                            <div className="flex items-center space-x-2">
                                <span className="px-2 py-0.5 bg-white/30 rounded text-xs font-bold text-white uppercase">
                                    {fileType}
                                </span>
                                <span className="text-xs text-white/80 hidden sm:inline">
                                    {language === 'hi' ? 'दस्तावेज़ व्यूअर' : 'Document Viewer'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        <button
                            onClick={handleDownload}
                            className="flex items-center space-x-1 px-2 sm:px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors group"
                            title={language === 'hi' ? 'डाउनलोड करें' : 'Download'}
                        >
                            <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
                            <span className="hidden md:inline text-white text-sm font-semibold">
                                {language === 'hi' ? 'डाउनलोड' : 'Download'}
                            </span>
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

                {/* Content */}
                <div className="flex-1 overflow-auto bg-white">
                    {/* Loading State */}
                    {loading && (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center p-4">
                                <Loader className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 animate-spin mx-auto mb-4" />
                                <p className="text-gray-700 font-semibold text-base sm:text-lg">
                                    {language === 'hi' ? 'दस्तावेज़ लोड हो रहा है...' : 'Loading document...'}
                                </p>
                                <p className="text-gray-500 text-xs sm:text-sm mt-2">
                                    {language === 'hi' ? 'कृपया प्रतीक्षा करें' : 'Please wait'}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="flex items-center justify-center h-full p-4">
                            <div className="text-center max-w-md">
                                <AlertCircle className="w-16 h-16 sm:w-20 sm:h-20 text-red-500 mx-auto mb-4" />
                                <p className="text-red-600 font-bold text-xl sm:text-2xl mb-2">
                                    {language === 'hi' ? 'लोड करने में विफल' : 'Failed to Load'}
                                </p>
                                <p className="text-gray-600 text-sm sm:text-base mb-6">
                                    {language === 'hi' 
                                        ? 'दस्तावेज़ लोड नहीं हो सका। कृपया पुनः प्रयास करें या डाउनलोड करें।'
                                        : 'Could not load document. Please try again or download it.'}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                                    <button
                                        onClick={handleRetry}
                                        className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2 font-semibold text-sm"
                                    >
                                        <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span>{language === 'hi' ? 'पुनः प्रयास करें' : 'Retry'}</span>
                                    </button>
                                    <button
                                        onClick={handleDownload}
                                        className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-2 font-semibold text-sm"
                                    >
                                        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span>{language === 'hi' ? 'डाउनलोड' : 'Download'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Document Content */}
                    {!loading && !error && htmlContent && (
                        <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
                            <div 
                                className="document-content prose prose-slate max-w-none"
                                dangerouslySetInnerHTML={{ __html: htmlContent }}
                            />
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 bg-gray-50 px-3 sm:px-4 py-2 sm:py-3">
                    <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2 text-gray-600">
                            <FileText className="w-3 h-3" />
                            <span className="font-semibold truncate">{title}.{fileType}</span>
                        </div>
                        <span className="text-gray-500 text-xs hidden sm:inline">
                            {language === 'hi' 
                                ? '📄 दस्तावेज़ व्यूअर'
                                : '📄 Document Viewer'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Inline Styles for Document Content */}
            <style jsx global>{`
                .document-content {
                    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.8;
                    color: #1f2937;
                }
                
                .document-content h1 {
                    font-size: 2em;
                    font-weight: 700;
                    margin-top: 1.5em;
                    margin-bottom: 0.75em;
                    color: #111827;
                    border-bottom: 2px solid #e5e7eb;
                    padding-bottom: 0.3em;
                }
                
                .document-content h2 {
                    font-size: 1.5em;
                    font-weight: 600;
                    margin-top: 1.25em;
                    margin-bottom: 0.5em;
                    color: #1f2937;
                }
                
                .document-content h3 {
                    font-size: 1.25em;
                    font-weight: 600;
                    margin-top: 1em;
                    margin-bottom: 0.5em;
                    color: #374151;
                }
                
                .document-content p {
                    margin-bottom: 1em;
                    line-height: 1.8;
                    text-align: justify;
                }
                
                .document-content ul, 
                .document-content ol {
                    margin-left: 2em;
                    margin-bottom: 1em;
                    padding-left: 0.5em;
                }
                
                .document-content li {
                    margin-bottom: 0.5em;
                    line-height: 1.6;
                }
                
                .document-content strong, 
                .document-content b {
                    font-weight: 600;
                    color: #111827;
                }
                
                .document-content em, 
                .document-content i {
                    font-style: italic;
                }
                
                .document-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1.5em 0;
                    font-size: 0.95em;
                }
                
                .document-content th, 
                .document-content td {
                    border: 1px solid #d1d5db;
                    padding: 0.75em;
                    text-align: left;
                }
                
                .document-content th {
                    background-color: #f3f4f6;
                    font-weight: 600;
                    color: #111827;
                }
                
                .document-content tr:hover {
                    background-color: #f9fafb;
                }
                
                .document-content a {
                    color: #2563eb;
                    text-decoration: underline;
                }
                
                .document-content a:hover {
                    color: #1d4ed8;
                }
                
                .document-content blockquote {
                    border-left: 4px solid #3b82f6;
                    padding-left: 1em;
                    margin-left: 0;
                    margin-right: 0;
                    font-style: italic;
                    color: #4b5563;
                    background-color: #f9fafb;
                    padding: 1em;
                    border-radius: 0 0.5em 0.5em 0;
                }
                
                .document-content code {
                    background-color: #f3f4f6;
                    padding: 0.2em 0.4em;
                    border-radius: 0.25em;
                    font-family: 'Courier New', monospace;
                    font-size: 0.9em;
                }
                
                .document-content pre {
                    background-color: #1f2937;
                    color: #f9fafb;
                    padding: 1em;
                    border-radius: 0.5em;
                    overflow-x: auto;
                    margin: 1em 0;
                }
                
                .document-content img {
                    max-width: 100%;
                    height: auto;
                    margin: 1em 0;
                    border-radius: 0.5em;
                }
                
                @media (max-width: 640px) {
                    .document-content {
                        font-size: 14px;
                    }
                    
                    .document-content h1 {
                        font-size: 1.75em;
                    }
                    
                    .document-content h2 {
                        font-size: 1.35em;
                    }
                    
                    .document-content h3 {
                        font-size: 1.15em;
                    }
                }
            `}</style>
        </div>
    );
};

export default DocumentViewer;
