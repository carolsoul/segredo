import React from 'react';

const SpotifyPlayer = () => {
  return (
    <div style={{ width: '370px', maxWidth: '600px', margin: '0 auto' }}>
      <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/2F9Gt8Rd8JbH7jqp5DARP9?utm_source=generator" width="100%" height="160" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
};

export default SpotifyPlayer;
