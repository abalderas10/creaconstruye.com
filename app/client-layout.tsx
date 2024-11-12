'use client';

import { ChatProvider } from './components/ChatProvider';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return <ChatProvider>{children}</ChatProvider>;
}