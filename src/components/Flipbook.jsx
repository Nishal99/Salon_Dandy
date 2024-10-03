import React from 'react';

const Flipbook = () => {
    return (
        <div style={{ position: 'relative', paddingTop: 'max(60%, 324px)', width: '100%', height: '0' }}>
            <iframe 
                style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: 0, top: 0 }} 
                src="//static.fliphtml5.com/web/js/plugin/LightBox/js/fliphtml5-light-box-api-min.js"  
                seamless="seamless" 
                scrolling="no" 
                frameBorder="0" 
                allowTransparency="true" 
                allowFullScreen="true"
            ></iframe>
        </div>
    );
};

export default Flipbook;
