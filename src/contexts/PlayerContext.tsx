import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: number;
  imageUrl?: string;
}

interface PlayerContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  isShuffle: boolean;
  isRepeat: boolean;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  setProgress: (progress: number) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  skipNext: () => void;
  skipPrevious: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>({
    id: 1,
    title: "Sample Song",
    artist: "Sample Artist",
    duration: 225,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(70);
  const [progress, setProgressState] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setProgressState(0);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const setVolume = (vol: number) => setVolumeState(vol);
  const setProgress = (prog: number) => setProgressState(prog);
  const toggleShuffle = () => setIsShuffle(!isShuffle);
  const toggleRepeat = () => setIsRepeat(!isRepeat);
  const skipNext = () => console.log('Skip next');
  const skipPrevious = () => console.log('Skip previous');

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        volume,
        progress,
        isShuffle,
        isRepeat,
        playTrack,
        togglePlay,
        setVolume,
        setProgress,
        toggleShuffle,
        toggleRepeat,
        skipNext,
        skipPrevious,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider');
  }
  return context;
};
