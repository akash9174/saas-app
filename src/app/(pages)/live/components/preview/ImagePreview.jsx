import React from 'react'
import { useSelector } from 'react-redux';
import {isValidVideoUrl} from '../../../../../lib/commanFun'
import { useState } from 'react';
import Image from 'next/image';
const ImagePreview = () => {
    const [videoLoading, setVideoLoading] = useState(true);
    const [videoError, setVideoError] = useState(false);
    const { imageFile, videoUrl } = useSelector((state) => state.form.formData);


    const extractYouTubeID = (url) => {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      if (hostname.includes('youtu.be')) {
        return parsedUrl.pathname.split('/')[1].split('?')[0];
      }

      if (hostname.includes('youtube.com')) {
        const params = parsedUrl.searchParams;
        if (params.has('v')) return params.get('v');
        const paths = parsedUrl.pathname.split('/');
        return paths.includes('embed') || paths.includes('shorts')
          ? paths[paths.length - 1].split('?')[0]
          : null;
      }
    } catch {
      return null;
    }
  };

  const extractDailymotionID = (url) => {
    const match = url.match(/(?:dai\.ly\/|video\/)([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  };
    const youtubeId = extractYouTubeID(videoUrl);
    const dailymotionId = extractDailymotionID(videoUrl);
    const isVideoValid = isValidVideoUrl(videoUrl);


     if ((videoLoading || videoError) && !youtubeId && !dailymotionId && isVideoValid) {
    return (
      <div className="skeleton-box" ></div>
    );
  }

  

  if (youtubeId) {
    return (
      <div className="video-container">
        <iframe
          key={videoUrl}
          src={`https://www.youtube.com/embed/${youtubeId}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube video"
          className="video-frame"
        />
      </div>
    );
  }

  if (dailymotionId) {
    return (
      <div className="video-container">
        <iframe
          key={videoUrl}
          src={`https://www.dailymotion.com/embed/video/${dailymotionId}`}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Dailymotion video"
          className="video-frame"
        />
      </div>
    );
  }

  if (isVideoValid) {
    return (
      <div className="video-container">
        <video
          key={videoUrl}
          controls
          onLoadedData={() => setVideoLoading(false)}
          onError={() => {
            setVideoError(true);
            setVideoLoading(false);
          }}
        >
          <source src={videoUrl} />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  return (
    <div className="image-container">
      <Image
        key={imageFile || 'placeholder'}
        src={imageFile || '/placeholder.jpg'}
        alt="Hero"
        fill
        style={{ objectFit: 'cover' }}
        className="hero-image"
        priority
      />
    </div>
  );
  
}

export default ImagePreview