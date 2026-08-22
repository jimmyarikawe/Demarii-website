import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';
import { TradeModalProvider } from '@/context/TradeModalContext';
import { TradeQuoteModal } from '@/components/TradeQuoteModal';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Demarii | Cross-Border Agro-Commodity Sourcing & Trading',
  description: 'Demarii connects origin producers to international buyers—sourcing and trading premium cocoa, sesame seeds, raw cashew nuts, soybeans, and specialty agricultural commodities across borders with certified quality and end-to-end logistics.',
  keywords: ['Agro-Commodities', 'Cross-Border Trade', 'Cocoa Beans', 'Sesame Seeds', 'Raw Cashew Nuts', 'Soybeans', 'Agricultural Export', 'Incoterms 2020'],
  openGraph: {
    title: 'Demarii | Cross-Border Agro-Commodity Sourcing & Trading',
    description: 'Connecting agricultural origins with global industrial processors. Certified grading, seamless multi-modal freight, and structured trade finance.',
    type: 'website',
    url: 'https://demarii.com',
  },
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interTight.variable}>
      <body>
        <TradeModalProvider>
          {children}
          <TradeQuoteModal />
        </TradeModalProvider>
      </body>
    </html>
  );
}
