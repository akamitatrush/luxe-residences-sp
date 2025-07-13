
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="text-center">
        <div className="loading-spinner mb-8"></div>
        <h2 className="text-2xl font-playfair text-gray-300 mb-4">BOTTICELLI IMÓVEIS</h2>
        <p className="text-white/70 font-light">Carregando experiência exclusiva...</p>
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
