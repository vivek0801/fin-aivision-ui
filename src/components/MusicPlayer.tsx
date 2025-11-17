import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { usePlayer } from "@/contexts/PlayerContext";
import { cn } from "@/lib/utils";

export const MusicPlayer = () => {
  const {
    currentTrack,
    isPlaying,
    volume,
    progress,
    isShuffle,
    isRepeat,
    togglePlay,
    setVolume,
    setProgress,
    toggleShuffle,
    toggleRepeat,
    skipNext,
    skipPrevious,
  } = usePlayer();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-2 md:px-4 py-3 z-50">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto gap-2 md:gap-4">
        {/* Current Track Info */}
        <div className="flex items-center gap-2 md:gap-4 w-[25%] md:w-[30%] min-w-0">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-muted rounded flex-shrink-0" />
          <div className="min-w-0 hidden sm:block">
            <p className="text-xs md:text-sm font-semibold text-foreground truncate">
              {currentTrack?.title || "No track playing"}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {currentTrack?.artist || "Unknown artist"}
            </p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-1 md:gap-2 flex-1 max-w-2xl">
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8 md:h-10 md:w-10",
                isShuffle ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
              onClick={toggleShuffle}
            >
              <Shuffle className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground h-8 w-8 md:h-10 md:w-10"
              onClick={skipPrevious}
            >
              <SkipBack className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button
              size="icon"
              className="h-8 w-8 md:h-10 md:w-10 bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-transform"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 fill-current" />
              ) : (
                <Play className="h-4 w-4 fill-current ml-0.5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground h-8 w-8 md:h-10 md:w-10"
              onClick={skipNext}
            >
              <SkipForward className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8 md:h-10 md:w-10",
                isRepeat ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
              onClick={toggleRepeat}
            >
              <Repeat className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {formatTime(progress)}
            </span>
            <Slider
              value={[progress]}
              onValueChange={(value) => setProgress(value[0])}
              max={currentTrack?.duration || 100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {currentTrack ? formatTime(currentTrack.duration) : "0:00"}
            </span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="items-center gap-2 w-[20%] md:w-[30%] justify-end hidden md:flex">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <Slider
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
            className="w-20 md:w-24"
          />
        </div>
      </div>
    </div>
  );
};
