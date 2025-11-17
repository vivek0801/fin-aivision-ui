import { Play, MoreHorizontal, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Playlist = () => {
  const songs = [
    { id: 1, title: "Song Title 1", artist: "Artist Name", album: "Album Name", duration: "3:45" },
    { id: 2, title: "Song Title 2", artist: "Artist Name", album: "Album Name", duration: "4:12" },
    { id: 3, title: "Song Title 3", artist: "Artist Name", album: "Album Name", duration: "3:28" },
    { id: 4, title: "Song Title 4", artist: "Artist Name", album: "Album Name", duration: "5:01" },
    { id: 5, title: "Song Title 5", artist: "Artist Name", album: "Album Name", duration: "3:56" },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      {/* Playlist Header */}
      <div className="bg-gradient-to-b from-primary/20 to-background p-8">
        <div className="flex items-end gap-6 mb-6">
          <div className="w-56 h-56 bg-muted rounded shadow-2xl flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold mb-2">PLAYLIST</p>
            <h1 className="text-7xl font-bold text-foreground mb-4">Playlist Name</h1>
            <p className="text-sm text-muted-foreground mb-2">
              Your personalized playlist description goes here
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">User Name</span>
              <span className="text-muted-foreground">• 50 songs, 3 hr 25 min</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
          >
            <Play className="h-6 w-6 fill-current" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Songs List */}
      <div className="px-8 py-4">
        <div className="grid grid-cols-[16px_4fr_3fr_2fr_1fr] gap-4 px-4 py-2 text-sm text-muted-foreground border-b border-border mb-2">
          <div>#</div>
          <div>TITLE</div>
          <div>ALBUM</div>
          <div>DATE ADDED</div>
          <div className="flex justify-end">
            <Clock className="h-4 w-4" />
          </div>
        </div>

        {songs.map((song, index) => (
          <div
            key={song.id}
            className="grid grid-cols-[16px_4fr_3fr_2fr_1fr] gap-4 px-4 py-3 rounded hover:bg-card/50 group cursor-pointer"
          >
            <div className="text-muted-foreground group-hover:hidden">{index + 1}</div>
            <div className="hidden group-hover:block">
              <Play className="h-4 w-4 fill-current" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">{song.title}</p>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">{song.album}</div>
            <div className="flex items-center text-sm text-muted-foreground">5 days ago</div>
            <div className="flex items-center justify-end text-sm text-muted-foreground">
              {song.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
