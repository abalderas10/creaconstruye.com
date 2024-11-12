'use client';

import React from 'react';

export default function ChatButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-blue-600/80 hover:bg-blue-700/80 text-white p-4 rounded-full shadow-lg z-50 transition-all backdrop-blur-sm"
    >
      <svg
        className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        )}
      </svg>
    </button>
  );
}