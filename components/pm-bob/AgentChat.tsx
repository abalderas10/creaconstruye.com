'use client';

import { useState } from 'react';

interface AgentChatProps {
  onSubmit: (message: string) => void;
}

export function AgentChat({ onSubmit }: AgentChatProps) {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      role: 'assistant',
      content: '¡Hola! Soy PM_Bob, tu asistente en construcción y creatividad. ¿En qué puedo ayudarte hoy?'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { role: 'user', content: message }]);
    onSubmit(message);
    setMessage('');
  };

  return (
    <div className="h-full flex flex-col bg-slate-900/30">
      {/* Chat Header */}
      <div className="p-4 border-b border-slate-700/50">
        <h2 className="text-xl font-semibold text-slate-100">PM_Bob</h2>
        <p className="text-sm text-slate-400">Asistente de Construcción y Creatividad</p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === 'user'
                  ? 'bg-blue-600/20 text-slate-100'
                  : 'bg-slate-800/50 text-slate-200'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="flex-1 bg-slate-800/50 text-slate-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder-slate-400"
          />
          <button
            type="submit"
            className="bg-blue-600/80 hover:bg-blue-700/80 text-white px-4 py-2 rounded-lg transition-colors backdrop-blur-sm"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}