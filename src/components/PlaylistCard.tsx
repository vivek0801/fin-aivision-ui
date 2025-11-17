import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePlayer } from "@/contexts/PlayerContext";

interface PlaylistCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export const PlaylistCard = ({ title, description, imageUrl }: PlaylistCardProps) => {
  const { playTrack } = usePlayer();

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTrack({
      id: Math.random(),
      title: title,
      artist: "Various Artists",
      duration: 180,
    });
  };

  return (
    <div className="group bg-card p-3 md:p-4 rounded-md hover:bg-card/80 transition-all cursor-pointer">
      <div className="relative mb-3 md:mb-4">
        <div className="w-full aspect-square bg-muted rounded-md shadow-lg" />
        <Button
          size="icon"
          onClick={handlePlay}
          className="absolute bottom-2 right-2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-primary-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-lg hover:scale-105"
        >
          <Play className="h-4 w-4 md:h-5 md:w-5 fill-current ml-0.5" />
        </Button>
      </div>
      <h3 className="font-semibold text-foreground mb-1 truncate text-sm md:text-base">{title}</h3>
      <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{description}</p>
    </div>
  );
};
