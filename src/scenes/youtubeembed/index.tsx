import React from 'react';

interface YouTubeEmbedProps {
  videoUrl: string;
  width?: string;
  height?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoUrl, width = "640", height = "360" }) => {
  // Extract the YouTube video ID from the URL
  const videoId = videoUrl;

  return (
    <section>
    <div className="flex items-center justify-center min-h-scree/2 bg-black">
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </section>
  );
};

export default YouTubeEmbed;
