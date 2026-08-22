'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function FAQSection() {
  const [activeId, setActiveId] = useState<number>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'Which Incoterms does Demarii support for international shipments?',
      answer: 'We execute shipments under standard ICC Incoterms 2020: FOB (Free On Board origin port), CIF (Cost, Insurance & Freight to destination port), CFR (Cost & Freight), and DAP (Delivered At Place for regional overland trades).'
    },
    {
      id: 2,
      question: 'How do you guarantee commodity specifications and purity?',
      answer: 'All export allocations are sampled, graded, and certified prior to container stuffing by accredited first-class independent survey companies (SGS, Bureau Veritas, or Cotecna). Certificates of Quality, Weight, Moisture, and Fumigation are included in the original shipping document package.'
    },
    {
      id: 3,
      question: 'What payment structures and trade finance terms do you accept?',
      answer: 'We work with 100% Irrevocable, Confirmed Letter of Credit at Sight (L/C at Sight) issued by a top-50 prime international bank, Cash Against Documents (CAD), and structured advance deposit arrangements for established long-term contract partners.'
    },
    {
      id: 4,
      question: 'What is Demarii’s Minimum Order Quantity (MOQ)?',
      answer: 'Our standard containerized MOQ is 1 x 20ft FCL (approx. 14 to 19 MT depending on commodity density) or 1 x 40ft FCL. We also structure multi-thousand metric ton annual recurring supply contracts with staggered monthly container or breakbulk vessel shipments.'
    },
    {
      id: 5,
      question: 'How are export documentation and customs compliance handled?',
      answer: 'Demarii prepares the complete regulatory document dossier: Clean on Board Ocean Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin (including EUR.1 / Form A where applicable), Phytosanitary Certificate, and Marine Cargo Insurance Policy.'
    }
  ];

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? 0 : id);
  };

  return (
    <section id="faq" className="section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            
            {/* Header */}
            <div className="margin-bottom margin-xxlarge text-align-center">
              <div className="max-width-large align-center">
                <div className="margin-bottom margin-xsmall">
                  <div className="section-tag">
                    <span className="tag-dot"></span>
                    <span>FAQ</span>
                  </div>
                </div>
                <h2 className="heading-style-h2 text-weight-medium">
                  Frequently Asked <span className="text-secondary">Trade Questions</span>
                </h2>
                <p className="text-size-medium text-weight-normal text-style-muted">
                  Essential details on contract execution, Incoterms, quality assays, and payment structures for buyers and trading desks.
                </p>
              </div>
            </div>

            {/* List */}
            <div className="max-width-large align-center">
              <div className="faqs_list">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className={`faqs_accordion ${activeId === faq.id ? 'is-active' : ''}`}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className="faqs_question">
                      <div className="heading-style-h6 text-weight-semibold">{faq.question}</div>
                      <div className="icon-embed-small">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </div>
                    <div className="faqs_answer">
                      <p className="text-size-regular text-style-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
