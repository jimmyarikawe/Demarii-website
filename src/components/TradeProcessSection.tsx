'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export function TradeProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const corridors = [
    {
      step: '01',
      title: 'Origin Sourcing',
      subtitle: 'Farmgate Aggregation',
      location: 'Lagos & Abidjan Corridors',
      moisture: 'Moisture: 7.2%',
      spec: 'Purity: 99.6% Grade 1'
    },
    {
      step: '02',
      title: 'Lab Assay',
      subtitle: 'Multi-Point Grading',
      location: 'Kano & Addis Ababa Hubs',
      moisture: 'Moisture: 5.8%',
      spec: 'Oil Content: 52.4%'
    },
    {
      step: '03',
      title: 'Trade Contract',
      subtitle: 'Incoterms & Finance',
      location: 'Ho Chi Minh & Binh Duong Hub',
      moisture: 'Moisture: 8.5%',
      spec: 'Outturn: 49-51 LBS (KOR)'
    },
    {
      step: '04',
      title: 'Ocean Freight',
      subtitle: 'Vessel & Customs',
      location: 'Rotterdam & Qingdao Seaports',
      moisture: 'Phytosanitary: SGS Cleared',
      spec: 'Multi-Modal Vessel Transit'
    }
  ];

  return (
    <section id="step" className="section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="layouts_component">
              
              {/* Heading */}
              <div className="layout_content margin-bottom margin-medium">
                <div className="layouts_content-left">
                  <div className="margin-bottom margin-xsmall">
                    <div className="section-tag">
                      <span className="tag-dot"></span>
                      <span>Trade Execution</span>
                    </div>
                  </div>
                  <h2 className="heading-style-h2 text-weight-medium">
                    Origin-to-Destination Trade<br />
                    <span className="text-secondary">Transparent and Direct</span>
                  </h2>
                </div>

                <div className="layout_content-right">
                  <p className="text-size-medium text-weight-normal text-style-muted">
                    Our institutional trade infrastructure connects origin harvesting directly with global industrial processors, eliminating unverified intermediaries and mitigating cross-border risk.
                  </p>
                </div>
              </div>

              {/* 4 Step Cards Grid */}
              <div className="benefit-grid">
                {corridors.map((item, idx) => (
                  <div
                    key={idx}
                    className={`benefit-card ${activeIndex === idx ? 'is-active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <div style={{
                      background: 'rgba(3, 79, 16, 0.1)',
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ fontWeight: 700, color: '#034F10' }}>{item.step}</span>
                    </div>
                    <div className="wrapper-text_benefit">
                      <div className="text-size-large text-weight-semibold">{item.title}</div>
                      <div className="text-size-small text-style-muted">{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual with Interactive Telemetry Map Pins */}
              <div className="layout_image-wrapper" style={{ position: 'relative' }}>
                <Image
                  src="/images/trade-logistics.jpg"
                  alt="Demarii International Agro Logistics Terminal"
                  fill
                  className="layout_image"
                  style={{ objectFit: 'cover' }}
                />
                
                <div className="location-wrapper">
                  <div className="pin_map">
                    <span className="pulse-indicator">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#CBEC4B" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
                      </svg>
                    </span>
                    <div className="text-size-regular text-weight-semibold text-color-white">
                      {corridors[activeIndex].location}
                    </div>
                  </div>

                  <div className="feature-wrapper">
                    <div className="telemetry-chip">
                      <span className="telemetry-dot"></span>
                      <span>{corridors[activeIndex].moisture}</span>
                    </div>
                    <div className="telemetry-chip hide-mobile-landscape">
                      <span>{corridors[activeIndex].spec}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Stats */}
              <div className="margin-top margin-large">
                <div className="stats_list">
                  
                  <div className="stats_item">
                    <div className="margin-bottom margin-xxsmall">
                      <h3 className="heading-style-h2 text-weight-bold text-color-dark">
                        250K+ MT
                      </h3>
                    </div>
                    <div className="text-size-regular text-weight-medium text-style-muted">
                      Metric Tons Traded
                    </div>
                  </div>

                  <div className="stats_item">
                    <div className="margin-bottom margin-xxsmall">
                      <h3 className="heading-style-h2 text-weight-bold text-color-dark">
                        35+ Countries
                      </h3>
                    </div>
                    <div className="text-size-regular text-weight-medium text-style-muted">
                      Origins & Global Ports
                    </div>
                  </div>

                  <div className="stats_item">
                    <div className="margin-bottom margin-xxsmall">
                      <h3 className="heading-style-h2 text-weight-bold text-color-dark">
                        99.8%
                      </h3>
                    </div>
                    <div className="text-size-regular text-weight-medium text-style-muted">
                      Contract Spec Compliance
                    </div>
                  </div>

                  <div className="stats_item">
                    <div className="margin-bottom margin-xxsmall">
                      <h3 className="heading-style-h2 text-weight-bold text-color-dark">
                        $180M+
                      </h3>
                    </div>
                    <div className="text-size-regular text-weight-medium text-style-muted">
                      Cumulative Trade Volume
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
