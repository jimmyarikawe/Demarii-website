'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

export function AboutSection() {
  const [activeId, setActiveId] = useState<number>(1);

  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: 'Origin Sourcing & Farmgate Aggregation',
      content: 'We establish direct procurement contracts with verified farming cooperatives across West Africa, East Africa, and Southeast Asia—guaranteeing authentic provenance, traceability, and fair value retention.'
    },
    {
      id: 2,
      title: 'Certified Quality Inspection & Lab Assays',
      content: 'Every batch undergoes stringent multi-point laboratory analysis for moisture content, purity percentage, bean count, outturn (KOR), and phytosanitary clearance certified by independent inspectors (SGS, Bureau Veritas).'
    },
    {
      id: 3,
      title: 'Multi-Modal Freight & Maritime Logistics',
      content: 'We coordinate end-to-end containerized (FCL) and breakbulk ocean freight, inland port haulage, export customs clearance, and Bill of Lading dispatch to key destination seaports across Europe, Asia, and the Americas.'
    },
    {
      id: 4,
      title: 'Structured Trade Finance & Incoterms',
      content: 'We execute trades under standardized Incoterms 2020 (FOB, CIF, CFR, DAP) supported by international Letters of Credit (L/C at Sight, CAD), escrow structures, and comprehensive marine cargo insurance.'
    }
  ];

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? 0 : id);
  };

  return (
    <section id="about" className="section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="layouts_component">
              <div className="layout_content">
                
                {/* Left Column */}
                <div className="layouts_content-left">
                  <div className="margin-bottom margin-xsmall">
                    <div className="section-tag">
                      <span className="tag-dot"></span>
                      <span>About Demarii</span>
                    </div>
                  </div>

                  <div className="margin-bottom margin-small">
                    <h2 className="heading-style-h2 text-weight-medium">
                      Cross-Border Commodity Trade<br />
                      <span className="text-secondary">Engineered for Reliability</span>
                    </h2>
                  </div>

                  <div className="margin-bottom margin-medium">
                    <p className="text-size-medium text-weight-normal text-style-muted">
                      From cocoa beans and raw cashew nuts to sesame, soybeans, non-GMO grains, and specialty spices—we manage the entire value chain from farmgate aggregation to destination port delivery.
                    </p>
                  </div>

                  {/* Accordions */}
                  <div className="faq_list">
                    {accordionData.map((item) => (
                      <div
                        key={item.id}
                        className={`faq_accordion no-border ${activeId === item.id ? 'is-active' : ''}`}
                        onClick={() => toggleAccordion(item.id)}
                      >
                        <div className="faq_question">
                          <div className="wrapper-question">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#034F10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                            <div className="text-size-large text-weight-semibold">{item.title}</div>
                          </div>
                          <div className="icon-embed-small">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          </div>
                        </div>
                        <div className="faq_answer">
                          <p className="text-size-regular text-style-muted">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Right Column: Visual */}
                <div className="about-image-card" style={{ position: 'relative', height: '520px' }}>
                  <Image
                    src="/images/about-inspect.jpg"
                    alt="Demarii Commodity Quality Specialists"
                    fill
                    className="img-agrovia_about"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="floating-badge">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span className="telemetry-dot"></span>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#CBEC4B' }}>99.8% Specification Match</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                      Certified by SGS & Bureau Veritas Pre-Shipment
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
