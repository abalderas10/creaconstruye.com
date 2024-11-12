'use client';

import React from 'react';

export default function ChatInterface({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`chat-container fixed bottom-24 right-6 w-96 z-40 ${
        isOpen ? 'open' : ''
      }`}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-100">Chat con PM_Bob</h3>
      </div>
      
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start space-x-2">
          <div className="rounded-lg p-3 max-w-[80%] bg-slate-900/30 backdrop-blur-sm">
            <p className="text-slate-100">¡Hola! Soy PM_Bob, tu asistente en construcción y creatividad. ¿En qué puedo ayudarte hoy?</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            className="flex-1 bg-slate-900/30 text-slate-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm placeholder-slate-400"
          />
          <button className="bg-blue-600/80 hover:bg-blue-700/80 text-white px-4 py-2 rounded-lg transition-colors backdrop-blur-sm">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}