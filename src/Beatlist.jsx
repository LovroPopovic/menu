import React from 'react';
import "./Beatlist.css";
import BeatPlayer from './BeatPlayer';
import beatImage from './img.png';
import beatAudio from './beat.mp3';

const Beatlist = () => {
  const beats = [
    {
      title: 'Beat 1',
      author: 'Author 1',
      length: '3:12',
      genre: 'Hip Hop',
      bpm: 90,
      price: '$19.99',
      audioUrl: beatAudio,
      imageUrl: beatImage
    },
    {
      title: 'Beat 2',
      author: 'Author 2',
      length: '2:45',
      genre: 'Trap',
      bpm: 140,
      price: '$24.99',
      audioUrl: beatAudio,
      imageUrl: beatImage
    },
    {
      title: 'Beat 3',
      author: 'Author 3',
      length: '3:30',
      genre: 'R&B',
      bpm: 100,
      price: '$14.99',
      audioUrl: beatAudio,
      imageUrl: beatImage
    },
    {
      title: 'Beat 4',
      author: 'Author 4',
      length: '4:15',
      genre: 'Pop',
      bpm: 120,
      price: '$29.99',
      audioUrl: beatAudio,
      imageUrl: beatImage
    },
  ];

  return (
    <div className="beatlist-container">
      <div className="beatlist-scroll">
        {beats.map((beat, index) => (
          <div className="beat-item" key={index}>
            <BeatPlayer title={beat.title} artist={beat.author} imageUrl={beat.imageUrl} audioUrl={beat.audioUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beatlist;
