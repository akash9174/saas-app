'use client';
import React, { useState } from 'react';
import './AdvancedSettingsForm.css';

export default function AdvancedSettingsForm() {
  const [otpEmail, setOtpEmail] = useState(false);

  return (
    <>

      {/* Checkout Experience */}
      <div className="section">
        <h3>Checkout Experience</h3>
        <p>Customer information</p>
        <div className="checkout-option">
          <span>Email ID</span>
          <button className="customize-btn">OTP Verification</button>
        </div>
      </div>

      {/* Terms and Policies */}
<div className="section">
  <h3>Terms and Policies</h3>

  <div className="pricing-row">
    <div>
      <strong>Terms and Conditions</strong>
      <p>Add additional terms you want to show to the users</p>
    </div>
    <button className="setup-btn">Setup</button>
  </div>

  <div className="pricing-row">
    <div>
      <strong>Refund Policy</strong>
      <p>Refund policy will be shown to the customers</p>
    </div>
    <button className="setup-btn">Setup</button>
  </div>

  <div className="pricing-row">
    <div>
      <strong>Privacy Policy</strong>
      <p>Privacy policy will be shown to the customers</p>
    </div>
    <button className="setup-btn">Setup</button>
  </div>
</div>

{/* Page URL */}
<div className="section">
  <h3>Page URL</h3>
  <div className="pricing-row">
    <div>
      <p>Customize the slug of your course page URL</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <input
        type="text"
        placeholder="/your-custom-url"
        style={{
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          width: '200px'
        }}
      />
      <button className="setup-btn" title="Edit URL">✎</button>
    </div>
  </div>
</div>

{/* Post Purchase Behaviour */}
<div className="section">
  <h3>Post Purchase Behaviour</h3>
  <div className="pricing-row">
    <div>
      <strong>Behaviour</strong>
      <p>Define what needs to happen when someone completes the purchase</p>
    </div>
    <button className="setup-btn">Setup</button>
  </div>
</div>

    </>
  );
}
