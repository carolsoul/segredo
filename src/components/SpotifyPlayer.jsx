import React from 'react';

const SpotifyPlayer = () => {
    return (
        <div style={{borderRadius: '12px', overflow: 'hidden'}}>

            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2F9Gt8Rd8JbH7jqp5DARP9?utm_source=generator" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"></iframe>

        </div>
    );
};

export default SpotifyPlayer;