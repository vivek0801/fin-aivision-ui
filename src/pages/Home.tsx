import { PlaylistCard } from "@/components/PlaylistCard";
import { usePlayer } from "@/contexts/PlayerContext";

const Home = () => {
  const { playTrack } = usePlayer();

  const featuredPlaylists = [
    { id: 1, title: "Today's Top Hits", description: "Ed Sheeran is on top of the Hottest 50!" },
    { id: 2, title: "RapCaviar", description: "New music from Drake, Travis Scott and more." },
    { id: 3, title: "All Out 2010s", description: "The biggest songs of the 2010s." },
  ];

  const recommendedSongs = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", duration: 200 },
    { id: 2, title: "Shape of You", artist: "Ed Sheeran", duration: 234 },
    { id: 3, title: "Someone Like You", artist: "Adele", duration: 285 },
    { id: 4, title: "Levitating", artist: "Dua Lipa", duration: 203 },
    { id: 5, title: "Watermelon Sugar", artist: "Harry Styles", duration: 174 },
    { id: 6, title: "Save Your Tears", artist: "The Weeknd", duration: 215 },
  ];

  const recentlyPlayed = [
    { id: 1, title: "Liked Songs", description: "250 songs" },
    { id: 2, title: "Discover Weekly", description: "Your weekly mixtape of fresh music" },
    { id: 3, title: "Release Radar", description: "Catch all the latest music from artists you follow" },
  ];

  const genres = [
    { id: 1, title: "Pop", color: "bg-pink-500" },
    { id: 2, title: "Hip-Hop", color: "bg-purple-500" },
    { id: 3, title: "Rock", color: "bg-red-500" },
    { id: 4, title: "Latin", color: "bg-orange-500" },
  ];

  const handlePlaySong = (song: { id: number; title: string; artist: string; duration: number }) => {
    playTrack(song);
  };

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="bg-gradient-to-b from-muted/40 to-background p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Good afternoon</h1>
        
        {/* Recently Played */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {recentlyPlayed.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-card/50 rounded overflow-hidden hover:bg-card transition-colors cursor-pointer group"
            >
              <div className="w-20 h-20 bg-muted flex-shrink-0" />
              <p className="font-semibold text-foreground">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Featured Playlists */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
          {featuredPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              title={playlist.title}
              description={playlist.description}
            />
          ))}
        </div>

        {/* Recommended Songs */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Recommended Songs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8">
          {recommendedSongs.map((song) => (
            <div
              key={song.id}
              className="flex items-center gap-3 md:gap-4 bg-card/50 rounded p-3 md:p-4 hover:bg-card transition-colors cursor-pointer group"
              onClick={() => handlePlaySong(song)}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-muted rounded flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate text-sm md:text-base">{song.title}</p>
                <p className="text-xs md:text-sm text-muted-foreground truncate">{song.artist}</p>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}</p>
            </div>
          ))}
        </div>

        {/* Browse by Genre */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Browse by Genre</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className={`${genre.color} h-32 md:h-40 rounded-lg p-4 cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white">{genre.title}</h3>
              <div className="absolute bottom-0 right-0 w-20 md:w-28 h-20 md:h-28 bg-black/20 rounded-tl-full transform translate-x-6 md:translate-x-8 translate-y-6 md:translate-y-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
