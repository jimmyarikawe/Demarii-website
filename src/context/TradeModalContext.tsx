'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TradeModalContextType {
  isOpen: boolean;
  selectedCommodity: string;
  openTradeModal: (commodity?: string) => void;
  closeTradeModal: () => void;
}

const TradeModalContext = createContext<TradeModalContextType | undefined>(undefined);

export function TradeModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCommodity, setSelectedCommodity] = useState('cocoa-beans');

  const openTradeModal = (commodity?: string) => {
    if (commodity) {
      setSelectedCommodity(commodity);
    }
    setIsOpen(true);
  };

  const closeTradeModal = () => {
    setIsOpen(false);
  };

  return (
    <TradeModalContext.Provider value={{ isOpen, selectedCommodity, openTradeModal, closeTradeModal }}>
      {children}
    </TradeModalContext.Provider>
  );
}

export function useTradeModal() {
  const context = useContext(TradeModalContext);
  if (!context) {
    throw new Error('useTradeModal must be used within a TradeModalProvider');
  }
  return context;
}
