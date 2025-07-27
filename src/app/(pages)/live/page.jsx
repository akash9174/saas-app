'use client';
import React, { useState } from 'react';
import './live.css';
import { EditorOutputProvider } from '../../../package/context/EditorOutputContext';
import LeftPanel from '../live/components/tabs/LeftPanel'

import LivePreview from './components/preview/LivePreview';

export default function LivePage() {

  return (
    <EditorOutputProvider>

      <div className="live-container" >
     
         <LeftPanel/>
        <div className="right-preview">
          <LivePreview  />
        </div>
      </div>
    </EditorOutputProvider>

  );
}
