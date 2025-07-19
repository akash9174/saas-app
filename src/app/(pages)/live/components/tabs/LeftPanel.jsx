import React from 'react'
import PageDetailsForm from './PageDetailsForm'
import PaymentDetailsForm from './PaymentDetailsForm'
import AdvancedSettingsForm from './AdvancedSettingsForm'
import { useState } from 'react'
import BottomButton from './components/BottomButton'
import './LeftPanel.css'
const LeftPanel = () => {
  const [activeTab, setActiveTab] = useState('pageDetails');

  return (
    <>
      <div className="left-panel"  >
        <div className="left-panel-inner">

          <div className="tabs">
            <button className={activeTab === 'pageDetails' ? 'active' : ''} onClick={() => setActiveTab('pageDetails')}>
              Page Details
            </button>
            <button className={activeTab === 'paymentDetails' ? 'active' : ''} onClick={() => setActiveTab('paymentDetails')}>
              Payment Page Details
            </button>
            <button className={activeTab === 'advancedSettings' ? 'active' : ''} onClick={() => setActiveTab('advancedSettings')}>
              Advanced Settings
            </button>
          </div>

          <div className="form-section">
            {activeTab === 'pageDetails' && <PageDetailsForm />}
            {activeTab === 'paymentDetails' && <PaymentDetailsForm />}
            {activeTab === 'advancedSettings' && <AdvancedSettingsForm />}
          </div>
        </div>


        {/* bottom buttons */}
        <div className="bottom-buttons">
          <BottomButton>previous</BottomButton>
          <BottomButton>save and next</BottomButton>
        </div>
      </div>
    </>
  )
}

export default LeftPanel