import React, { useState, useRef } from 'react';
import "./Beatlist.css"
import { FaPlay, FaPause } from 'react-icons/fa';

const BeatPlayer = ({ title, artist, imageUrl, audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="beat-player">
      <div className="beat-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="beat-info">
        <div className="beat-title">{title}</div>
        <div className="beat-artist">{artist}</div>
      </div>
      <div className="beat-controls">
        <audio ref={audioRef} src={audioUrl} />
        {isPlaying ? (
          <FaPause className="pause-icon" onClick={handlePlayPause} />
        ) : (
          <FaPlay className="play-icon" onClick={handlePlayPause} />
        )}
      </div>
    </div>
  );
};

export default BeatPlayer;
