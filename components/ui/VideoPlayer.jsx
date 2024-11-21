import React from 'react';

const VideoPlayer = ({ videoId = "OzEF9ml8HNU", width = "560", height = "315", autoplay = false, start = 0, controls = true }) => {
    const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        start: start.toString(),
        controls: controls ? "1" : "0",
    });

    const embedUrl = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

    return (
        <div style={{ maxWidth: width }}>
            <iframe
              width={width}
              height={height}
              src={embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
