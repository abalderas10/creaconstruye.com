'use client';

import { useState } from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { AgentChat } from '@/components/pm-bob/AgentChat';
import { AgentResponse } from '@/components/pm-bob/AgentResponse';

export default function PMBob() {
  const [currentResponse, setCurrentResponse] = useState('');

  const handleChatSubmit = (message: string) => {
    // Here you would typically make an API call to your AI service
    setCurrentResponse(`Procesando solicitud: ${message}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="h-screen flex flex-col">
        <div className="px-4 py-4">
          <Breadcrumbs
            items={[
              { title: 'Inicio', href: '/' },
              { title: 'PM_Bob', href: '/pm-bob' },
            ]}
          />
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Chat Sidebar */}
          <div className="w-1/4 border-r border-slate-700/50 backdrop-blur-sm">
            <AgentChat onSubmit={handleChatSubmit} />
          </div>

          {/* Main Content Area */}
          <div className="w-3/4">
            <AgentResponse response={currentResponse} />
          </div>
        </div>
      </div>
    </main>
  );
}