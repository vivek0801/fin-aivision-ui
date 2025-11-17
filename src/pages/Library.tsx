import { PlaylistCard } from "@/components/PlaylistCard";
import { Button } from "@/components/ui/button";
import { Plus, ListMusic } from "lucide-react";

const Library = () => {
  const library = [
    { id: 1, title: "Liked Songs", description: "250 liked songs", type: "playlist" },
    { id: 2, title: "My Playlist #1", description: "Your playlist • 45 songs", type: "playlist" },
    { id: 3, title: "Workout Mix", description: "Your playlist • 32 songs", type: "playlist" },
    { id: 4, title: "Chill Vibes", description: "Your playlist • 67 songs", type: "playlist" },
    { id: 5, title: "Favorites", description: "Your playlist • 128 songs", type: "playlist" },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <ListMusic className="h-6 w-6 text-muted-foreground" />
            <h1 className="text-2xl font-bold text-foreground">Your Library</h1>
          </div>
          <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Plus className="h-6 w-6" />
          </Button>
        </div>

        <div className="space-y-2 mb-8">
          {library.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-2 rounded hover:bg-card/50 cursor-pointer transition-colors"
            >
              <div className="w-12 h-12 bg-muted rounded flex-shrink-0 flex items-center justify-center">
                <ListMusic className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">{item.title}</p>
                <p className="text-sm text-muted-foreground truncate">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">Recommended Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array(5).fill(0).map((_, i) => (
            <PlaylistCard
              key={i}
              title={`Discover Mix ${i + 1}`}
              description="Personalized playlist based on your taste"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
