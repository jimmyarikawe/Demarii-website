'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTradeModal } from '@/context/TradeModalContext';

export function Footer() {
  const { openTradeModal } = useTradeModal();

  return (
    <footer className="footer">
      <div className="padding-global">
        <div className="container-large">
          <div className="footer-content-inner">
            
            {/* CTA Card */}
            <div className="cta_component">
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-style-h2 text-weight-medium">
                      Ready to Source or Trade Agro-Commodities with <span className="text-secondary">Demarii?</span>
                    </h2>
                  </div>
                  <p className="text-size-medium text-weight-normal" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    Connect directly with our international trading desk to receive live FOB/CIF indicative pricing, laboratory specification sheets, and allocation schedules.
                  </p>
                  <div className="margin-top margin-medium">
                    <div className="button-group is-center">
                      <button
                        onClick={() => openTradeModal()}
                        className="button is-alternate"
                      >
                        Request a Trade Quote
                      </button>
                      <Link href="/contact" className="button is-secondary">
                        Contact Trading Desk
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Top */}
            <div className="footer_top-wrapper">
              <div className="max-width-medium">
                <div className="margin-bottom margin-small">
                  <Link href="/" className="navbars_logo-link">
                    <Image
                      src="/icons/logo.svg"
                      alt="Demarii Logo"
                      width={180}
                      height={42}
                      className="footers_logo"
                    />
                  </Link>
                </div>
                <div className="margin-bottom margin-small">
                  <h3 className="heading-style-h5 text-weight-medium" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    Cross-border agro-commodity sourcing and trading engineered for global reliability and verified quality.
                  </h3>
                </div>
              </div>

              <div className="footers_right-wrapper">
                <div className="footer_menu-wrapper">
                  
                  <div className="footers_link-list">
                    <div className="footer_link_title">Navigation</div>
                    <Link href="/" className="footer_link">Home</Link>
                    <Link href="/#about" className="footer_link">About Demarii</Link>
                    <Link href="/#step" className="footer_link">Trade Process</Link>
                    <Link href="/#benefit" className="footer_link">Agro-Commodities</Link>
                    <Link href="/#testimonial" className="footer_link">Testimonials</Link>
                  </div>

                  <div className="footers_link-list">
                    <div className="footer_link_title">Commodities</div>
                    <button onClick={() => openTradeModal('cocoa-beans')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                      Cocoa Beans
                    </button>
                    <button onClick={() => openTradeModal('white-sesame')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                      White Sesame
                    </button>
                    <button onClick={() => openTradeModal('raw-cashew')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                      Raw Cashews (RCN)
                    </button>
                    <button onClick={() => openTradeModal('soybeans')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                      Non-GMO Soybeans
                    </button>
                    <button onClick={() => openTradeModal('split-ginger')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                      Dried Ginger & Spices
                    </button>
                  </div>

                  <div className="footers_link-list">
                    <div className="footer_link_title">Trade Desk</div>
                    <Link href="/contact" className="footer_link">Direct RFQ Desk</Link>
                    <Link href="/#faq" className="footer_link">Incoterms & Finance</Link>
                    <Link href="/#about" className="footer_link">Quality Lab Standards</Link>
                    <Link href="/contact#rfq-form" className="footer_link">Port Corridors</Link>
                  </div>

                </div>

                <div className="footers_social-list">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer_social-link" aria-label="Demarii LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer_social-link" aria-label="Demarii X">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="mailto:trade@demarii.com" className="footer_social-link" aria-label="Email Demarii Trade Desk">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footers_bottom-wrapper">
              <div className="footer_credit-text">
                © 2026 Demarii Commodities & Trading Ltd. All international rights reserved.
              </div>
              <div className="footers_legal-list">
                <Link href="#" className="footer_legal-link">Privacy Policy</Link>
                <Link href="#" className="footer_legal-link">Terms of Trade (Incoterms 2020)</Link>
                <Link href="#" className="footer_legal-link">Quality Certification Standards</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Background Image Texture */}
      <div className="bg-footer_wrapper">
        <Image
          src="/images/footer-bg.jpg"
          alt=""
          fill
          className="img-footer"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="overlay-footer"></div>
    </footer>
  );
}
