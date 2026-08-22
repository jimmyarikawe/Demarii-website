'use client';

import React from 'react';
import Image from 'next/image';
import { useTradeModal } from '@/context/TradeModalContext';

export function CommoditiesCatalog() {
  const { openTradeModal } = useTradeModal();

  const commodities = [
    {
      key: 'cocoa-beans',
      title: 'Cocoa & Specialty Coffee Beans',
      image: '/images/commodity-cocoa.jpg',
      description: "Main crop Grade 1 fermented cocoa beans (Ghana/Côte d'Ivoire/Nigeria origin) and washed Arabica/Robusta green coffee beans with complete farmgate traceability.",
      specs: ['Moisture < 7.5%', 'Bean Count: 95-105/100g', '64kg Jute Bags'],
      cta: 'Request Cocoa/Coffee Quote'
    },
    {
      key: 'white-sesame',
      title: 'White Sesame Seeds & Non-GMO Soybeans',
      image: '/images/commodity-sesame.jpg',
      description: 'Premium Sortex-cleaned natural and hulled white sesame seeds with minimum 52% oil content, alongside high-protein non-GMO golden soybeans.',
      specs: ['Purity: Min 99.90%', 'Oil Content: 52%+', '50kg PP Bags / Bulk'],
      cta: 'Request Sesame/Soy Quote'
    },
    {
      key: 'raw-cashew',
      title: 'Raw Cashew Nuts (RCN) & Dried Ginger',
      image: '/images/commodity-cashew.jpg',
      description: 'High outturn raw cashew nuts (KOR 48-52+ lbs) for processing mills, plus washed & dried split ginger roots with high volatile oil concentration.',
      specs: ['KOR Outturn: 48-52 LBS', 'Moisture: 8.5%', '80kg Jute Bags'],
      cta: 'Request Cashew/Ginger Quote'
    }
  ];

  return (
    <section id="benefit" className="section foreground">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            
            {/* Section Header */}
            <div className="margin-bottom margin-large">
              <div className="layout_content">
                <div className="layouts_content-left">
                  <div className="margin-bottom margin-xsmall">
                    <div className="section-tag">
                      <span className="tag-dot"></span>
                      <span>Agro-Commodities</span>
                    </div>
                  </div>
                  <h2 className="heading-style-h2 text-weight-medium">
                    High-Demand Commodities for<br />
                    <span className="text-secondary">Global Processors</span>
                  </h2>
                </div>

                <div className="layout_content-right">
                  <p className="text-size-medium text-weight-normal text-style-muted">
                    We supply certified raw and processed agricultural commodities adhering to international GAFTA and FOSFA trading standards for food, confectionery, and oilseed crushing industries.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Commodity Cards Grid */}
            <div className="layout_list">
              {commodities.map((item) => (
                <div key={item.key} className="card_item">
                  <div className="layouts_image-wrapper" style={{ position: 'relative' }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="layouts_image"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="margin-bottom margin-xxsmall">
                    <h3 className="heading-style-h5 text-weight-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-size-regular text-style-muted">
                    {item.description}
                  </p>
                  <div className="commodity-specs">
                    {item.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="spec-pill">{spec}</span>
                    ))}
                  </div>
                  <div className="margin-top" style={{ marginTop: 'auto' }}>
                    <button
                      onClick={() => openTradeModal(item.key)}
                      className="button is-secondary-dark"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {item.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
