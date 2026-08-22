'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "Demarii has been our most dependable origin partner for Grade 1 cocoa beans and natural sesame seeds. Their pre-shipment SGS assays match 100% with destination lab results in Rotterdam, and vessel dispatches are consistently on schedule.",
      name: "Michael Henderson",
      role: "Head of Global Commodity Procurement, Swiss Confectionery Group",
      image: "/images/partner-1.jpg"
    },
    {
      quote: "Managing cross-border raw cashew and soybean flows usually carries high risk of moisture damage and quality disputes. Demarii's rigorous sorting, fumigation, and container sealing standards have eliminated our operational losses entirely.",
      name: "Lin Wei",
      role: "Supply Chain Director, Asia Pacific Oilseed & Grain Mills, Singapore",
      image: "/images/partner-2.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonial" className="section overflow-hidden">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="testimonial">
              
              {/* Header */}
              <div className="margin-bottom margin-medium">
                <div className="layout_content">
                  <div className="layouts_content-left">
                    <div className="margin-bottom margin-xsmall">
                      <div className="section-tag">
                        <span className="tag-dot"></span>
                        <span>Testimonials</span>
                      </div>
                    </div>
                    <h2 className="heading-style-h2 text-weight-medium">
                      Real Feedback from<br />
                      <span className="text-secondary">Global Trade Partners</span>
                    </h2>
                  </div>

                  <div className="layout_content-right">
                    <p className="text-size-medium text-weight-normal text-style-muted">
                      Hear how international commodity buyers, food processors, and trading houses rely on Demarii for consistent spec delivery and cross-border execution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Slider Carousel */}
              <div className="testimonial_slider">
                <div
                  className="testimonial_mask"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((item, idx) => (
                    <div key={idx} className="testimonial_slide">
                      <div className="testimonial-card">
                        <div className="testimonial-wrapper">
                          <svg width="40" height="40" viewBox="0 0 32 32" fill="#034F10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                          </svg>
                          <div className="testimonial-text">
                            &quot;{item.quote}&quot;
                          </div>
                          <div className="user-info">
                            <div className="text-size-large text-weight-semibold">{item.name}</div>
                            <div className="text-size-regular text-style-muted">{item.role}</div>
                          </div>
                        </div>
                        <div style={{ position: 'relative', height: '320px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="image-testimonial"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <div className="slider-controls">
                  <button onClick={prevSlide} className="slider-arrow-btn is-prev" aria-label="Previous Testimonial">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                  </button>
                  <button onClick={nextSlide} className="slider-arrow-btn is-next" aria-label="Next Testimonial">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
