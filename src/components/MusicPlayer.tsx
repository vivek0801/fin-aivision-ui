import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Current Track Info */}
        <div className="flex items-center gap-4 w-[30%]">
          <div className="w-14 h-14 bg-muted rounded flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">
              Track Name
            </p>
            <p className="text-xs text-muted-foreground truncate">
              Artist Name
            </p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 w-[40%]">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="h-8 w-8 bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-transform"
            >
              <Play className="h-4 w-4 fill-current" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground">0:00</span>
            <Slider defaultValue={[0]} max={100} step={1} className="flex-1" />
            <span className="text-xs text-muted-foreground">3:45</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2 w-[30%] justify-end">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <Slider defaultValue={[70]} max={100} step={1} className="w-24" />
        </div>
      </div>
    </div>
  );
};
