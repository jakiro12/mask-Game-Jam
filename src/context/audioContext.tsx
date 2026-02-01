import { createContext, useContext, useEffect, useRef, useState } from "react";

type AudioContextType = {
  startMusic: () => void;
  stopMusic: () => void;
  toggleMute: () => void;
  isMuted: boolean;
};

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/shamisen.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
  }, []);

  const startMusic = () => {
    if (!started && audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.play().catch(() => {});
      setStarted(true);
    }
  };

  const stopMusic = () => {
    audioRef.current?.pause();
    setStarted(false);
  };

  const toggleMute = () => {
    setIsMuted(prev => {
      if (audioRef.current) {
        audioRef.current.muted = !prev;
      }
      return !prev;
    });
  };

  return (
    <AudioContext.Provider
      value={{ startMusic, stopMusic, toggleMute, isMuted }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return ctx;
};
