'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  const [commodity, setCommodity] = useState('cocoa-beans');
  const [volume, setVolume] = useState(100);
  const [incoterm, setIncoterm] = useState('CIF');
  const [port, setPort] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const commoditySpecs: Record<string, { title: string; origin: string; moisture: string; packaging: string; fclCapacity: number }> = {
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

  const currentSpec = commoditySpecs[commodity] || commoditySpecs['cocoa-beans'];
  const containersCount = Math.ceil(volume / currentSpec.fclCapacity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        alert('Thank you! Your Demarii Trade Desk inquiry has been dispatched. A senior physical trader will connect with indicative pricing and contract specifications within 4 business hours.');
        setSubmitted(false);
        setPort('');
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setNotes('');
      }, 600);
    }, 1000);
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-wrapper">
        
        {/* Hero */}
        <section className="section foreground" style={{ paddingTop: '140px', paddingBottom: '40px', borderBottom: '1px solid var(--color-border)' }}>
          <div className="padding-global">
            <div className="container-large">
              <div className="max-width-large">
                <div className="margin-bottom margin-xsmall">
                  <div className="section-tag">
                    <span className="tag-dot"></span>
                    <span>Direct Trade Portal</span>
                  </div>
                </div>
                <h1 className="heading-style-h1 text-weight-medium text-color-dark margin-bottom margin-small">
                  Connect with the Demarii <span className="text-secondary">Trading Desk</span>
                </h1>
                <p className="text-size-medium text-style-muted">
                  Whether you are contracting bulk metric tons of Grade 1 cocoa beans, booking container allocations of Sortex-cleaned sesame, or scheduling recurring non-GMO soybean deliveries—our international trading desk provides direct execution and transparent market access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & RFQ Grid */}
        <section id="rfq-form" className="section padding-section-medium">
          <div className="padding-global">
            <div className="container-large">
              <div className="layout_content" style={{ gap: '56px' }}>
                
                {/* Left Column: Trade Offices & Info */}
                <div className="layouts_content-left">
                  <div className="margin-bottom margin-medium">
                    <h2 className="heading-style-h3 text-weight-semibold text-color-dark margin-bottom margin-xsmall">
                      Global Trading Hubs & Corridors
                    </h2>
                    <p className="text-size-regular text-style-muted">
                      Our cross-border trade coordinators manage multi-origin aggregation hubs and maritime export logistics across four continents.
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
                    <div style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-darkest)' }}>
                          European Commercial & Finance Desk
                        </div>
                        <span className="spec-pill" style={{ background: 'rgba(3, 79, 16, 0.1)', color: '#034F10' }}>Rotterdam / London</span>
                      </div>
                      <p className="text-size-small text-style-muted" style={{ marginBottom: '12px' }}>
                        Incoterms 2020 contracting, Letter of Credit (L/C) administration, and destination port clearance oversight across ARA ports (Amsterdam-Rotterdam-Antwerp).
                      </p>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-darkest)' }}>
                        Email: <a href="mailto:europe.trade@demarii.com" style={{ color: '#0b681c' }}>europe.trade@demarii.com</a>
                      </div>
                    </div>

                    <div style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-darkest)' }}>
                          West & Central Africa Origin Aggregation Hub
                        </div>
                        <span className="spec-pill" style={{ background: 'rgba(3, 79, 16, 0.1)', color: '#034F10' }}>Lagos / Abidjan</span>
                      </div>
                      <p className="text-size-small text-style-muted" style={{ marginBottom: '12px' }}>
                        Direct farmgate cooperative aggregation, pre-shipment SGS laboratory grading, warehouse stuffing, and ocean vessel dispatch.
                      </p>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-darkest)' }}>
                        Email: <a href="mailto:origin.desk@demarii.com" style={{ color: '#0b681c' }}>origin.desk@demarii.com</a>
                      </div>
                    </div>

                    <div style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-darkest)' }}>
                          Asia-Pacific Trade & Distribution Hub
                        </div>
                        <span className="spec-pill" style={{ background: 'rgba(3, 79, 16, 0.1)', color: '#034F10' }}>Singapore / Ho Chi Minh</span>
                      </div>
                      <p className="text-size-small text-style-muted" style={{ marginBottom: '12px' }}>
                        Direct supply to crushing plants, food manufacturers, and raw cashew processing facilities across Vietnam, China, and Southeast Asia.
                      </p>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-darkest)' }}>
                        Email: <a href="mailto:apac.trade@demarii.com" style={{ color: '#0b681c' }}>apac.trade@demarii.com</a>
                      </div>
                    </div>

                  </div>

                  <div className="margin-top margin-medium">
                    <div style={{ backgroundColor: 'var(--color-neutral-lightest)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-darkest)', marginBottom: '6px' }}>
                        Trading Desk Hours & Rapid Response
                      </div>
                      <p className="text-size-small text-style-muted">
                        Our commercial team operates Monday through Saturday across GMT, CET, and SGT time zones. Indicative trade quotes are guaranteed within 4 business hours of RFQ transmission.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column: RFQ Form */}
                <div className="layouts_content-right">
                  <div style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '40px' }}>
                    
                    <div className="margin-bottom margin-xsmall">
                      <div className="section-tag">
                        <span className="tag-dot"></span>
                        <span>Request For Quotation (RFQ)</span>
                      </div>
                    </div>

                    <h3 className="heading-style-h3 text-weight-semibold text-color-dark margin-bottom margin-xxsmall">
                      Submit Trade Inquiry
                    </h3>
                    <p className="text-size-small text-style-muted margin-bottom margin-small">
                      Complete the formal request below to receive proforma specification sheets and verified trade pricing.
                    </p>

                    <form onSubmit={handleSubmit}>
                      <div className="form-grid">
                        
                        <div className="form-group">
                          <label className="form-label" htmlFor="deskCommodity">Commodity Category</label>
                          <select
                            id="deskCommodity"
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
                          <label className="form-label" htmlFor="deskVolume">Required Volume (Metric Tons)</label>
                          <input
                            type="number"
                            id="deskVolume"
                            className="form-input"
                            min="10"
                            max="50000"
                            value={volume}
                            onChange={(e) => setVolume(Number(e.target.value))}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="deskIncoterm">Preferred Incoterm 2020</label>
                          <select
                            id="deskIncoterm"
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
                          <label className="form-label" htmlFor="deskPort">Target Destination Port / Country</label>
                          <input
                            type="text"
                            id="deskPort"
                            className="form-input"
                            placeholder="e.g. Port of Qingdao, China"
                            value={port}
                            onChange={(e) => setPort(e.target.value)}
                            required
                          />
                        </div>

                        {/* Dynamic Spec Display */}
                        <div className="form-group full-width">
                          <div style={{ backgroundColor: 'var(--color-neutral-lightest)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#034F10', marginBottom: '6px' }}>
                              Specification & Container Calculation
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
                          <label className="form-label" htmlFor="deskName">Contact Full Name</label>
                          <input
                            type="text"
                            id="deskName"
                            className="form-input"
                            placeholder="e.g. Elena Rostova"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="deskCompany">Company / Trade House</label>
                          <input
                            type="text"
                            id="deskCompany"
                            className="form-input"
                            placeholder="e.g. Global Agri Commodities Ltd"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="deskEmail">Corporate Email</label>
                          <input
                            type="email"
                            id="deskEmail"
                            className="form-input"
                            placeholder="buyer@agritrade.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="deskPhone">Phone / WhatsApp Number</label>
                          <input
                            type="tel"
                            id="deskPhone"
                            className="form-input"
                            placeholder="+31 10 794 1100"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group full-width">
                          <label className="form-label" htmlFor="deskNotes">Contract Timing & Quality Specifications</label>
                          <textarea
                            id="deskNotes"
                            className="form-textarea"
                            placeholder="Indicate any target delivery window, preferred packaging bag type, or inspection requirements..."
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
                            {isSubmitting ? 'Dispatching RFQ to Commercial Trading Desk...' : submitted ? '✓ Trade Inquiry Dispatched!' : 'Dispatch RFQ to Commercial Trading Desk'}
                          </button>
                        </div>

                      </div>
                    </form>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
