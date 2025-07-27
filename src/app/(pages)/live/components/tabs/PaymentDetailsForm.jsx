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
            <label htmlFor="price" style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              Price <span style={{ color: 'red' }}>*</span>
            </label>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              width: '96%',
              marginBottom: '12px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '8px 10px',
              backgroundColor: '#fff'
            }}>
              <span style={{ fontSize: '16px' }}>₹</span>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter amount"
                value={formData.price}
                onChange={handleChange}
                style={{
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  fontSize: '14px',
                }}
              />
            </div>

            {/* Discount checkbox */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <input
                type="checkbox"
                name="offerDiscount"
                checked={formData.offerDiscount}
                onChange={handleChange}
              />
              Offer discounted price
              <span
                title="Enable this to set a lower price for promotional purposes"
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  borderRadius: '4px',
                  fontSize: '12px',
                  padding: '2px 6px',
                  cursor: 'pointer',
                }}
              >
                i
              </span>
            </label>
      </div>
    </>
  );
}
