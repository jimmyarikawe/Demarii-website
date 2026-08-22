'use client';

import React, { useState } from 'react';
import { useTradeModal } from '@/context/TradeModalContext';

interface SpecInfo {
  title: string;
  origin: string;
  moisture: string;
  packaging: string;
  fclCapacity: number;
}

export function TradeQuoteModal() {
  const { isOpen, selectedCommodity, closeTradeModal } = useTradeModal();
  const [commodity, setCommodity] = useState(selectedCommodity);
  const [volume, setVolume] = useState(50);
  const [incoterm, setIncoterm] = useState('CIF');
  const [port, setPort] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync when prop changes
  React.useEffect(() => {
    setCommodity(selectedCommodity);
  }, [selectedCommodity]);

  const commoditySpecs: Record<string, SpecInfo> = {
    'cocoa-beans': {
      title: 'Grade 1 Sun-Dried Fermented Cocoa Beans',
      origin: "West Africa (Ghana / Côte d'Ivoire / Nigeria)",
      moisture: 'Max 7.5%',
      packaging: '64kg Jute Bags (approx. 25 MT per 40ft FCL or 12.5 MT per 20ft FCL)',
      fclCapacity: 12.5
    },
    'white-sesame': {
      title: 'Natural White Sesame Seeds (99.9% Sortex Cleaned)',
      origin: 'Nigeria / Ethiopia / Sudan',
      moisture: 'Max 6.0%',
      packaging: '50kg or 25kg Polypropylene (PP) bags',
      fclCapacity: 19
    },
    'raw-cashew': {
      title: 'Raw Cashew Nuts in Shell (RCN)',
      origin: 'Nigeria / Côte d\'Ivoire / Guinea-Bissau',
      moisture: 'Max 8.5% - 9.0%',
      packaging: '80kg Jute Bags',
      fclCapacity: 17
    },
    'soybeans': {
      title: 'Non-GMO Golden Soybeans (Feed & Food Grade)',
      origin: 'Brazil / Nigeria / Argentina',
      moisture: 'Max 12.0%',
      packaging: 'Bulk Container Liner or 50kg PP Bags',
      fclCapacity: 21
    },
    'green-coffee': {
      title: 'Specialty Arabica & Robusta Green Coffee Beans',
      origin: 'Ethiopia / Uganda / Vietnam',
      moisture: 'Max 11.5% - 12.0%',
      packaging: '60kg GrainPro lined Jute Bags',
      fclCapacity: 19.2
    },
    'split-ginger': {
      title: 'Dried Split Ginger Roots (Export Grade A)',
      origin: 'Nigeria / India',
      moisture: 'Max 8.0%',
      packaging: '40kg Jute / Mesh Bags',
      fclCapacity: 14
    }
  };

  if (!isOpen) return null;

  const currentSpec = commoditySpecs[commodity] || commoditySpecs['cocoa-beans'];
  const containersCount = Math.ceil(volume / currentSpec.fclCapacity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        alert('Thank you! Your Demarii Trade Quote inquiry has been logged. Our international commodity trading desk will dispatch an official specification sheet and FOB/CIF pricing within 4 business hours.');
        setSubmitted(false);
        closeTradeModal();
      }, 600);
    }, 1000);
  };

  return (
    <div className="trade-modal-overlay is-active" role="dialog" aria-modal="true">
      <div className="trade-modal-card">
        <button onClick={closeTradeModal} className="modal-close-btn" aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="margin-bottom margin-xsmall">
          <div className="section-tag">
            <span className="tag-dot"></span>
            <span>Demarii Trading Desk</span>
          </div>
        </div>

        <h3 className="heading-style-h3 text-weight-semibold text-color-dark margin-bottom margin-xxsmall">
          Request an Agro-Commodity Quote
        </h3>
        <p className="text-size-regular text-style-muted margin-bottom margin-small">
          Specify your commodity, volume, and target destination port to receive certified lab specs and indicative FOB/CIF trade pricing.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            
            <div className="form-group">
              <label className="form-label" htmlFor="modalCommodity">Commodity Category</label>
              <select
                id="modalCommodity"
                className="form-select"
                value={commodity}
                onChange={(e) => setCommodity(e.target.value)}
                required
              >
                <option value="cocoa-beans">Cocoa Beans (Grade 1 Sun-Dried)</option>
                <option value="white-sesame">White Sesame Seeds (99.9% Cleaned)</option>
                <option value="raw-cashew">Raw Cashew Nuts - RCN (48-52 KOR)</option>
                <option value="soybeans">Non-GMO Golden Soybeans</option>
                <option value="green-coffee">Specialty Green Coffee (Arabica/Robusta)</option>
                <option value="split-ginger">Dried Split Ginger Roots</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="modalVolume">Required Volume (Metric Tons)</label>
              <input
                type="number"
                id="modalVolume"
                className="form-input"
                min="10"
                max="50000"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="modalIncoterm">Preferred Incoterm 2020</label>
              <select
                id="modalIncoterm"
                className="form-select"
                value={incoterm}
                onChange={(e) => setIncoterm(e.target.value)}
                required
              >
                <option value="CIF">CIF - Cost, Insurance & Freight (Destination Port)</option>
                <option value="FOB">FOB - Free On Board (Origin Port)</option>
                <option value="CFR">CFR - Cost & Freight</option>
                <option value="DAP">DAP - Delivered At Place</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="modalPort">Destination Port / Country</label>
              <input
                type="text"
                id="modalPort"
                className="form-input"
                placeholder="e.g. Port of Rotterdam, Netherlands"
                value={port}
                onChange={(e) => setPort(e.target.value)}
                required
              />
            </div>

            {/* Dynamic Spec Box */}
            <div className="form-group full-width">
              <div style={{ backgroundColor: 'var(--color-neutral-lightest)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#034F10', marginBottom: '6px' }}>
                  Specification & Container Estimation
                </div>
                <div style={{ fontSize: '0.9rem', lineHeight: 1.4, color: 'var(--color-darkest)' }}>
                  <strong>{currentSpec.title}</strong><br />
                  <span style={{ color: '#667085', fontSize: '0.85rem' }}>
                    Origin: {currentSpec.origin} &bull; Moisture: {currentSpec.moisture} &bull; Packaging: {currentSpec.packaging}
                  </span>
                </div>
                <div style={{ marginTop: '8px', fontSize: '0.85rem', fontWeight: 600, color: '#034F10' }}>
                  Estimated Logistics: <span style={{ color: 'var(--color-darkest)', fontWeight: 400 }}>
                    ~{containersCount} x 20ft FCL (approx. {(containersCount * currentSpec.fclCapacity).toFixed(1)} MT capacity)
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="modalBuyerName">Contact Full Name</label>
              <input
                type="text"
                id="modalBuyerName"
                className="form-input"
                placeholder="e.g. Alexander Vance"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="modalCompany">Company / Trade House</label>
              <input
                type="text"
                id="modalCompany"
                className="form-input"
                placeholder="e.g. Continental Agribusiness Ltd"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="modalEmail">Corporate Email</label>
              <input
                type="email"
                id="modalEmail"
                className="form-input"
                placeholder="procurement@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="modalPhone">Phone / WhatsApp Number</label>
              <input
                type="tel"
                id="modalPhone"
                className="form-input"
                placeholder="+44 20 7946 0912"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group full-width">
              <label className="form-label" htmlFor="modalNotes">Contract Timing & Quality Specifications</label>
              <textarea
                id="modalNotes"
                className="form-textarea"
                placeholder="Provide any special packaging requirements, target delivery month, or target quality parameters..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div className="form-group full-width margin-top">
              <button
                type="submit"
                className="button is-primary"
                disabled={isSubmitting}
                style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem' }}
              >
                {isSubmitting ? 'Transmitting RFQ to Trade Desk...' : submitted ? '✓ Trade Quote Request Received!' : 'Submit Request for Quotation (RFQ)'}
              </button>
            </div>

          </div>
        </form>

      </div>
    </div>
  );
}
