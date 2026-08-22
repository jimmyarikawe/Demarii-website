/**
 * Demarii - Trade Quote & Calculator Module
 * Calculates container requirements, packaging options, and handles RFQ submissions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const quoteForm = document.getElementById('tradeQuoteForm');
  const commoditySelect = document.getElementById('modalCommodity');
  const volumeInput = document.getElementById('modalVolume');
  const specDisplay = document.getElementById('specOutput');
  const containersDisplay = document.getElementById('containerEstimate');

  const commoditySpecs = {
    'cocoa-beans': {
      title: 'Grade 1 Sun-Dried Fermented Cocoa Beans',
      origin: 'West Africa (Ghana / Côte d\'Ivoire / Nigeria)',
      moisture: 'Max 7.5%',
      beanCount: '95 - 105 beans per 100g',
      defective: 'Max 3% slaty, 3% moldy',
      packaging: '64kg Jute Bags (approx. 25 MT per 40ft FCL or 12.5 MT per 20ft FCL)',
      fclCapacity: 12.5 // MT per 20ft
    },
    'white-sesame': {
      title: 'Natural White Sesame Seeds (99.9% Sortex Cleaned)',
      origin: 'Nigeria / Ethiopia / Sudan',
      moisture: 'Max 6.0%',
      purity: 'Min 99.90% (Sortex cleaned)',
      oilContent: 'Min 50% - 52%',
      packaging: '50kg or 25kg Polypropylene (PP) bags',
      fclCapacity: 19 // MT per 20ft FCL
    },
    'raw-cashew': {
      title: 'Raw Cashew Nuts in Shell (RCN)',
      origin: 'Nigeria / Côte d\'Ivoire / Guinea-Bissau',
      moisture: 'Max 8.5% - 9.0%',
      outturn: '48 - 52+ LBS (KOR)',
      nutCount: '180 - 200 nuts/kg',
      packaging: '80kg Jute Bags',
      fclCapacity: 17 // MT per 20ft FCL
    },
    'soybeans': {
      title: 'Non-GMO Golden Soybeans (Feed & Food Grade)',
      origin: 'Brazil / Nigeria / Argentina',
      moisture: 'Max 12.0%',
      protein: 'Min 36.0% - 38.0%',
      oilContent: 'Min 18.0%',
      packaging: 'Bulk Container Liner or 50kg PP Bags',
      fclCapacity: 21 // MT per 20ft FCL
    },
    'green-coffee': {
      title: 'Specialty Arabica & Robusta Green Coffee Beans',
      origin: 'Ethiopia / Uganda / Vietnam',
      moisture: 'Max 11.5% - 12.0%',
      screenSize: 'Screen 16/18 Grade 1',
      defectCount: 'Max 5 defects per 300g',
      packaging: '60kg GrainPro lined Jute Bags',
      fclCapacity: 19.2 // MT per 20ft FCL
    },
    'split-ginger': {
      title: 'Dried Split Ginger Roots (Export Grade A)',
      origin: 'Nigeria / India',
      moisture: 'Max 8.0%',
      oilContent: 'Min 2.0% - 2.5% Volatile Oil',
      purity: 'Extraneous matter < 1%',
      packaging: '40kg Jute / Mesh Bags',
      fclCapacity: 14 // MT per 20ft FCL
    }
  };

  const updateCalculations = () => {
    if (!commoditySelect || !volumeInput) return;
    const selectedKey = commoditySelect.value;
    const volume = parseFloat(volumeInput.value) || 0;
    const spec = commoditySpecs[selectedKey];

    if (spec) {
      if (specDisplay) {
        specDisplay.innerHTML = `
          <strong>${spec.title}</strong><br>
          <span style="color: #667085; font-size: 0.85rem;">
            Origin: ${spec.origin} &bull; Moisture: ${spec.moisture} &bull; Packaging: ${spec.packaging}
          </span>
        `;
      }

      if (containersDisplay && volume > 0) {
        const containersCount = Math.ceil(volume / spec.fclCapacity);
        containersDisplay.textContent = `~${containersCount} x 20ft FCL (${(containersCount * spec.fclCapacity).toFixed(1)} MT payload)`;
      }
    }
  };

  commoditySelect?.addEventListener('change', updateCalculations);
  volumeInput?.addEventListener('input', updateCalculations);
  updateCalculations();

  // Form submission with realistic confirmation modal / alert
  quoteForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = quoteForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Transmitting RFQ to Trade Desk...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '✓ Trade Quote Request Received!';
        submitBtn.style.backgroundColor = '#22c55e';
        submitBtn.style.color = '#ffffff';

        setTimeout(() => {
          alert('Thank you! Your Demarii Trade Quote inquiry has been logged. Our international commodity trading desk will dispatch an official specification sheet and FOB/CIF pricing within 4 business hours.');
          quoteForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.color = '';
          if (window.closeTradeModal) window.closeTradeModal();
        }, 800);
      }, 1200);
    }
  });
});
