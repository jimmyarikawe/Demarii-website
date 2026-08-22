'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTradeModal } from '@/context/TradeModalContext';

export function HeroSection() {
  const { openTradeModal } = useTradeModal();

  return (
    <section className="section_headers">
      <div className="padding-global">
        <div className="container-large">
          <div className="headers_content">
            
            <div className="margin-bottom margin-small">
              <div className="section-tag is-white">
                <span className="tag-dot"></span>
                <span>Cross-Border Trade Excellence</span>
              </div>
            </div>

            <div className="margin-bottom margin-small">
              <h1 className="heading-style-h1 text-weight-medium">
                Global Agro-Commodity Sourcing for <span className="text-secondary">International Trade</span>
              </h1>
            </div>

            <div className="margin-bottom margin-medium">
              <p className="text-size-medium text-weight-normal" style={{ maxWidth: '680px', color: 'rgba(255, 255, 255, 0.88)' }}>
                Demarii connects origin producers to international buyers—sourcing and trading premium cocoa, sesame seeds, raw cashew nuts, soybeans, and specialty agricultural commodities across borders with certified quality and end-to-end logistics.
              </p>
            </div>

            <div>
              <div className="button-group">
                <button
                  onClick={() => openTradeModal()}
                  className="button is-alternate"
                >
                  Request Trade Quote
                </button>
                <Link href="#benefit" className="button is-secondary">
                  Explore Commodities
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Background Image & Overlay */}
      <div className="header_background-image-wrapper">
        <div className="image-overlay-layer"></div>
        <Image
          src="/images/hero-bg.jpg"
          alt="Demarii Agricultural Farmland"
          fill
          priority
          className="header_background-image"
          style={{ objectFit: 'cover' }}
        />
      </div>

    </section>
  );
}
