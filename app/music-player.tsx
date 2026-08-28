'use client';

import { useEffect, useRef } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const startPlayback = () => {
      void audio.play().catch(() => undefined);
    };

    startPlayback();
    window.addEventListener('pointerdown', startPlayback, { once: true });
    window.addEventListener('keydown', startPlayback, { once: true });

    return () => {
      window.removeEventListener('pointerdown', startPlayback);
      window.removeEventListener('keydown', startPlayback);
    };
  }, []);

  return (
    <div className="compact-player">
      <span>AUDIO CONTROL</span>
      <audio ref={audioRef} controls autoPlay loop preload="auto" aria-label="Play Mortals Funk Remix by LXNGVX and Warriyo">
        <source src="/audio/mortals-funk-remix.mp3" type="audio/mpeg" />
        Your browser does not support audio playback.
      </audio>
    </div>
  );
}
