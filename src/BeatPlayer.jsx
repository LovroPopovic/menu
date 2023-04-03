import React, { useState, useRef, useCallback } from 'react';
import "./Beatplayer.css"
import { FaPlay, FaPause } from 'react-icons/fa';

const BeatPlayer = ({ title, artist, imageUrl, audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [isPlaying, audioRef]);

  return (
    <div className="beat-player-container">
      <div className="beat-image-container">
        <img src={imageUrl} alt={title} className="beat-image" />
      </div>
      <div className="beat-info-container">
        <div className="beat-title">{title}</div>
        <div className="beat-author">{artist}</div>
      </div>
      <div className="beat-player-controls">
      <audio ref={audioRef} src={audioUrl} preload="none" />
        <div className="play-btn" onClick={handlePlayPause}>
          {isPlaying ? (
            <FaPause className="pause-icon" />
          ) : (
            <FaPlay className="play-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BeatPlayer;
