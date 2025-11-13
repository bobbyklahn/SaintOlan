'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PasswordGate from './components/PasswordGate';
import IntroPage from './components/IntroPage';
import OverviewPage from './components/OverviewPage';
import StyleDetailPage from './components/StyleDetailPage';

type AppState = 'password' | 'intro' | 'overview' | 'detail';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('password');
  const [selectedStyleId, setSelectedStyleId] = useState<number | null>(null);

  const handlePasswordSuccess = () => {
    setAppState('intro');
  };

  const handleIntroComplete = () => {
    setAppState('overview');
  };

  const handleStyleSelect = (styleId: number) => {
    setSelectedStyleId(styleId);
    setAppState('detail');
  };

  const handleCloseDetail = () => {
    setAppState('overview');
    setSelectedStyleId(null);
  };

  const handleNextStyle = () => {
    if (selectedStyleId && selectedStyleId < 5) {
      setSelectedStyleId(selectedStyleId + 1);
    }
  };

  const handlePrevStyle = () => {
    if (selectedStyleId && selectedStyleId > 1) {
      setSelectedStyleId(selectedStyleId - 1);
    }
  };

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {appState === 'password' && (
          <PasswordGate key="password" onSuccess={handlePasswordSuccess} />
        )}
        {appState === 'intro' && (
          <IntroPage key="intro" onComplete={handleIntroComplete} />
        )}
        {appState === 'overview' && (
          <OverviewPage key="overview" onStyleSelect={handleStyleSelect} />
        )}
        {appState === 'detail' && selectedStyleId && (
          <StyleDetailPage
            key={`detail-${selectedStyleId}`}
            styleId={selectedStyleId}
            onClose={handleCloseDetail}
            onNext={handleNextStyle}
            onPrev={handlePrevStyle}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
