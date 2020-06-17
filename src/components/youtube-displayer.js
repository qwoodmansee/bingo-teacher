import React from 'react';

export default function YoutubeDisplayer({videoUrl, widthInPx, heightInPx}) {
  const getEmbedUrl = () => {
    const EMBED_PREFIX = 'https://www.youtube.com/embed/';
    const hasVQueryParam = videoUrl.indexOf('v=') !== -1;

    // for some reason embed syntax makes you change t= to start=
    videoUrl = videoUrl.replace('&t=', '&start=');
    videoUrl = videoUrl.replace('?t=', '?start=');

    if (hasVQueryParam) {
      const urlParams = new URLSearchParams(videoUrl.split('?')[1]);

      // also have to remove the 's' after the number of seconds in the v query param syntax.
      let startTimeAddition = '';
      console.log(urlParams.has('start'));
      if (urlParams.has('start')) {
        const timeWithoutS = urlParams.get('start').substring(0, urlParams.get('start').length - 1);
        startTimeAddition = `?start=${timeWithoutS}`;
      }
      return  EMBED_PREFIX + urlParams.get('v') + startTimeAddition;
    }
    
    const isShortUrl = videoUrl.indexOf('.be/') !== -1;
    if (isShortUrl) {
      return EMBED_PREFIX + videoUrl.split('.be/')[1];
    }
  }

  return (
    <div>
      <iframe src={getEmbedUrl()}
          width={widthInPx}
          height={heightInPx}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
      />
    </div>
  )
}