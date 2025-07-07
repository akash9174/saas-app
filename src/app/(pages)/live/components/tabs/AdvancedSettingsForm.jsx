'use client';
import React, { useState } from 'react';
import './AdvancedSettingsForm.css';

export default function AdvancedSettingsForm() {
  const [otpEmail, setOtpEmail] = useState(false);
  const [otpPhone, setOtpPhone] = useState(false);

  return (
    <>
      {/* Theme and Styling */}
      <div className="section">
        <h3>Theme and Styling</h3>
        <div className="themes">
          <div className="theme selected">
            <img src="/theme-default.png" alt="Default" />
            <p>Default</p>
          </div>
          <div className="theme locked">
            <img src="/theme-locked.png" alt="Dawn" />
            <button className="unlock-btn">Unlock</button>
            <p>Dawn</p>
          </div>
          <div className="theme locked">
            <img src="/theme-locked.png" alt="Dusk" />
            <button className="unlock-btn">Unlock</button>
            <p>Dusk</p>
          </div>
        </div>

        <div className="style-row">
          <div className="color-preview" />
          <button>Change</button>
          <button className="reset-btn">Reset to default</button>
        </div>

        <div className="style-info">
          The default style uses the same styling you have on your store. This helps your store and all your products to look consistent and create a seamless store experience to your site visitors. <a href="#">Learn more</a>
        </div>
      </div>

      {/* Checkout Experience */}
      <div className="section">
        <h3>Checkout Experience</h3>
        <p>Customize how you would like customers to checkout on this product</p>
        <div className="checkout-option">
          <span>Same Page Checkout</span>
          <button className="customize-btn">Customize</button>
        </div>
      </div>

      {/* Customer Information */}
      <div className="section">
        <h3>Customer information</h3>
        <div className="form-row">
          <label>Email ID</label>
          <div className="toggle-row">
            <span>OTP Verification</span>
            <input
              type="checkbox"
              checked={otpEmail}
              onChange={() => setOtpEmail(!otpEmail)}
            />
          </div>
        </div>
        <div className="warning-box">
          Turning off OTP verification could lead to your customers sharing spam emails, affecting your future marketing opportunities. <a href="#">Learn more</a>
        </div>
      </div>

      {/* Additional Questions */}
      <div className="section">
        <h3>Ask additional questions</h3>
        <div className="form-row">
          <label>Phone number *</label>
          <div className="phone-row">
            <input type="text" placeholder="📞 Phone number" />
            <div className="toggle-row">
              <span>OTP Verification</span>
              <input
                type="checkbox"
                checked={otpPhone}
                onChange={() => setOtpPhone(!otpPhone)}
              />
            </div>
          </div>
        </div>
        <button className="add-question">+ Add Question</button>
      </div>

      {/* Pricing */}
      <div className="section">
        <h3>Pricing</h3>
        <div className="pricing-row">
          <strong>GST</strong>
          <button className="setup-btn">Setup</button>
        </div>
        <p>You can enable or disable GST on price here</p>
      </div>

      {/* Boost Sales */}
      <div className="section">
        <h3>Boost Sales</h3>

        <div className="pricing-row">
          <strong>Bump Offer</strong>
          <button className="setup-btn">Setup</button>
        </div>
        <p>Offer add-on product during checkout</p>

        <div className="pricing-row">
          <strong>Automated Email</strong>
          <button className="setup-btn">Setup</button>
        </div>
        <p>Trigger Email Automations based on certain triggers</p>

        <div className="pricing-row">
          <strong>Discount Coupons</strong>
          <button className="setup-btn">Setup</button>
        </div>
        <p>Offer discounts to your audience to boost sales</p>
        <button className="add-question">+ Create Coupon</button>
        <p style={{ fontSize: '13px', color: '#555' }}>
          Payment Page links to pre-apply discount code will be available after creating discounts
        </p>
      </div>

      {/* Terms and Policies */}
      <div className="section">
        <h3>Terms and Policies</h3>

        <div className="pricing-row">
          <strong>Terms and Conditions</strong>
          <button className="setup-btn">Setup</button>
        </div>
        <p>Add additional terms you want to show to the users</p>

        <div className="pricing-row">
          <strong>Refund Policy</strong>
          <button className="setup-btn">Setup</button>
        </div>
        <p>Refund policy will be shown to the customers</p>

        <div className="pricing-row">
          <strong>Privacy Policy</strong>
          <button className="setup-btn">Setup</button>
        </div>
        <p>Privacy policy will be shown to the customers</p>
      </div>

      {/* Page URL */}
      <div className="section">
        <h3>Page URL</h3>
        <p>Customize the slug of your course page URL</p>
        <div className="pricing-row">
          <input type="text" placeholder="/your-custom-url" style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
          <button className="setup-btn" title="Edit URL">✎</button>
        </div>
      </div>

      {/* Post Purchase Behaviour */}
      <div className="section">
        <h3>Post Purchase Behaviour</h3>
        <div className="pricing-row">
          <strong>Behavior</strong>
          <button className="setup-btn">Setup</button>
        </div>
        <p>Define what needs to happen when someone completes the purchase</p>
      </div>

      {/* Tracking */}
      <div className="section">
        <h3>Tracking</h3>

        <div className="pricing-row">
          <strong>Meta Pixel</strong>
          <button className="setup-btn">Setup</button>
        </div>
        <p>Connect your Pixel IDs to this product to run re-marketing campaigns on Meta Business</p>

        <div className="pricing-row">
          <strong>Google Analytics</strong>
          <button className="setup-btn">Setup</button>
        </div>
        <p>Add your Google Analytics Tracking IDs to get crucial visitor-level data on your GA dashboard</p>
      </div>

      {/* Publish Button */}
      <div style={{ textAlign: 'right' }}>
        <button className="setup-btn" style={{ background: '#111', color: '#fff', marginTop: '16px' }}>Publish</button>
      </div>
    </>
  );
}
