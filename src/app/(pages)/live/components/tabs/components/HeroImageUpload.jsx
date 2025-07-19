'use client';
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormFields } from '@/app/redux/features/formSlice'; // adjust import
import './HeroImageUpload.css';
import { isValidVideoUrl } from '../../../../../../lib/commanFun';
import { FaRegFolderOpen, FaRegImage, FaTrashAlt } from 'react-icons/fa';

export default function HeroImageUpload() {
  const dispatch = useDispatch();
  const fileInputRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [videoInput, setVideoInput] = useState('');

  const {
    imageFile,
    videoUrl,
    heroFileName,
    heroFileSize
  } = useSelector((state) => state.form.formData);

  const handleFileUpload = (file) => {
    const fileUrl = URL.createObjectURL(file);

    dispatch(updateFormFields({
      imageFile: fileUrl,
      videoUrl: '',
      heroFileName: file.name,
      heroFileSize: (file.size / 1024).toFixed(2)
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFileUpload(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleSetVideoUrl = () => {
    if (!isValidVideoUrl(videoInput)) {
      alert('Please enter a valid video URL.');
      return;
    }

    dispatch(updateFormFields({
      videoUrl: videoInput,
      imageFile: '',
      heroFileName: '',
      heroFileSize: ''
    }));
  };

  const handleRemove = () => {
    dispatch(updateFormFields({
      imageFile: '',
      videoUrl: '',
      heroFileName: '',
      heroFileSize: ''
    }));
    setVideoInput('');
  };

  const hasMedia = imageFile || videoUrl;

return (
  <div className="hero-upload-box">
    <label className="required-label" style={{  fontSize: '0.9rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '0.4rem',
      display: 'block',}}>
      Cover Image/Video <span style={{ color: 'red' }}>*</span>
    </label>

    <div className="media-upload-wrapper">
      {hasMedia ? (
        <div className="file-preview-box">
          <div className="file-preview-icon">
            <FaRegImage size={24} />
          </div>
          <div className="file-details">
            <div className="file-name">{heroFileName || 'From URL'}</div>
            <div className="file-size">
              {heroFileSize ? `${heroFileSize} KB` : 'External URL'}
            </div>
          </div>
          <button className="file-remove-btn" onClick={handleRemove}>
            <FaTrashAlt size={18} />
          </button>
        </div>
      ) : (
        <div className="upload-section-box">
          <div
            className={`upload-container ${isDragging ? 'dragging' : ''}`}
            onClick={() => fileInputRef.current.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input
              type="file"
              accept="image/*,video/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            <div className="upload-box">
              <div className="upload-icon">
                <FaRegFolderOpen size={32} color="#4a90e2" />
              </div>
              <p>
                <span className="upload-text">Upload</span> or drag & drop
              </p>
              <p className="upload-subtext">
                1280 x 720 (16:9) recommended; Up to 10 MB each
              </p>
            </div>
          </div>

          <div className="or-divider">
            <hr className="divider-line" />
            <span className="divider-text">OR</span>
            <hr className="divider-line" />
          </div>

          <div className="video-url-input">
            <input
              type="text"
              placeholder="Enter video URL"
              value={videoInput}
              onChange={(e) => setVideoInput(e.target.value)}
            />
            <button onClick={handleSetVideoUrl} className="video-url-submit-btn">
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
);

}
