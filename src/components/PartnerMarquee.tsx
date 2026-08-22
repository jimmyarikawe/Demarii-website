import React from 'react';

export function PartnerMarquee() {
  const logos = [
    '✦ SGS INSPECTED',
    '✦ BUREAU VERITAS',
    '✦ GAFTA TRADE',
    '✦ FOSFA CONTRACTS',
    '✦ MAERSK FREIGHT',
    '✦ CMA CGM SHIPPING',
    '✦ GLOBAL GRAIN ALLIANCE',
    '✦ INCOTERMS 2020'
  ];

  return (
    <section id="logo" className="section_logos">
      <div className="padding-global">
        <div className="container-large">
          <div className="margin-bottom margin-small text-align-center">
            <h2 className="heading-style-h6 text-weight-normal text-style-muted">
              Adhering to international commodity inspection, logistics, and trading standards
            </h2>
          </div>
        </div>
      </div>

      <div className="logo_component">
        <div className="logo_marquee_track">
          <div className="logo_list">
            {logos.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="logo_wrapper">
                <span className="logo_text">{logo}</span>
              </div>
            ))}
          </div>
          <div className="logo_list">
            {logos.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="logo_wrapper">
                <span className="logo_text">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
