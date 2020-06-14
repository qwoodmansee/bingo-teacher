import React from 'react';

export default function YoutubeDisplayer({videoUrl}) {
  const getEmbedUrl = () => {
    //TODO(quinton): Add ability to use start timestamps... &t= should be &start= -.-
    const EMBED_PREFIX = 'https://www.youtube.com/embed/';
    const hasVQueryParam = videoUrl.indexOf('v=') !== -1;
    if (hasVQueryParam) {
      const urlParams = new URLSearchParams(videoUrl.split('?')[1]);
      return  EMBED_PREFIX + urlParams.get('v');
    }
    
    const isShortUrl = videoUrl.indexOf('.be\/') !== -1;
    if (isShortUrl) {
      return EMBED_PREFIX + videoUrl.split('.be\/')[1];
    }
  }
  return (
    <div>
      <iframe src={getEmbedUrl()}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
      />
    </div>
  )
}