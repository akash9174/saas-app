import Image from 'next/image';
import React, { memo, useEffect, useRef, useState } from 'react';
import RightCard from './RightCard';
import { useEditorOutput } from '../../../../../package/context/EditorOutputContext';
import { innerHTML } from 'diffhtml';
import './LivePreview.css';
import { isValidVideoUrl } from '../../../../../lib/commanFun'
import { useSelector } from 'react-redux';
import Testimonials from './Testimonials';
import ImagePreview from './ImagePreview'
import FAQ from './FAQ'


const LivePreview = memo(() => {


  const { html } = useEditorOutput();
  const descRef = useRef(null);
  const lastHtmlRef = useRef('');
  const { title, testonimals } = useSelector((state) => state.form.formData)
  console.log("fromData: ", useSelector((state) => state.form.formData.testimonials))

  useEffect(() => {
    if (descRef.current && html && html !== lastHtmlRef.current) {
      innerHTML(descRef.current, html);
      lastHtmlRef.current = html;
    }
  }, [html]);


  return (
    <div className="lp-wrapper">
      <div className="preview-header">Preview</div>
      <div className="preview-url">
        <span>https://mysaas.com</span>
      </div>
      <div className="web-container">
        <div className="preview-left">
          <div className="hero-section">
            <ImagePreview />
          </div>

          <h1 className="preview-title">
            {title || 'This is a Demo Title'}
          </h1>

          <h2 className="preview-subtitle">What you will get</h2>
          <div className="preview-description" ref={descRef}></div>
          <Testimonials />
          <FAQ />

        </div>

        <div className="preview-right">
          <RightCard />
          <div>
            <div className='copy-link'>
              Copy link
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LivePreview;
