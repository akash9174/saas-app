'use client';
import React, { useState } from 'react';
import HeroImageUpload from './components/HeroImageUpload';
import './PaymentDetailsForm.css';

export default function PaymentDetailsForm() {
  const [formData, setFormData] = useState({
    videoUrl: '',
    price: '',
    offerDiscount: false,
  });

  const [pricingType, setPricingType] = useState('fixed');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <div className="section">
        <h3>Upload your digital files</h3>
        <HeroImageUpload formData={formData} setFormData={setFormData} />
      </div>

      <div className="section">
        <h3>Pricing</h3>
        <div className="pricing-toggle">
          <div
            className={`pricing-option ${pricingType === 'fixed' ? 'active' : ''}`}
            onClick={() => setPricingType('fixed')}
          >
            <span>Fixed Price</span>
            <small>Charge a one-time fixed pay</small>
          </div>
          <div
            className={`pricing-option ${pricingType === 'flexible' ? 'active' : ''}`}
            onClick={() => setPricingType('flexible')}
          >
            <span>Customers decide price</span>
            <small>Let customers pay any price</small>
          </div>
        </div>

        {pricingType === 'fixed' && (
          <>
            <label>Price *</label>
            <div className="price-input">
              <span>₹</span>
              <input
                type="number"
                name="price"
                placeholder="Enter amount"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
