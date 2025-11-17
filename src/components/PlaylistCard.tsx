import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaylistCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export const PlaylistCard = ({ title, description, imageUrl }: PlaylistCardProps) => {
  return (
    <div className="group bg-card p-4 rounded-md hover:bg-card/80 transition-all cursor-pointer">
      <div className="relative mb-4">
        <div className="w-full aspect-square bg-muted rounded-md shadow-lg" />
        <Button
          size="icon"
          className="absolute bottom-2 right-2 h-12 w-12 rounded-full bg-primary text-primary-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-lg hover:scale-105"
        >
          <Play className="h-5 w-5 fill-current" />
        </Button>
      </div>
      <h3 className="font-semibold text-foreground mb-1 truncate">{title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
    </div>
  );
};
