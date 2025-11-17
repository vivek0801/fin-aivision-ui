import { PlaylistCard } from "@/components/PlaylistCard";

const Home = () => {
  const playlists = [
    { id: 1, title: "Today's Top Hits", description: "Ed Sheeran is on top of the Hottest 50!" },
    { id: 2, title: "RapCaviar", description: "New music from Drake, Travis Scott and more." },
    { id: 3, title: "All Out 2010s", description: "The biggest songs of the 2010s." },
    { id: 4, title: "Rock Classics", description: "Rock legends & epic songs that continue to inspire." },
    { id: 5, title: "Chill Hits", description: "Kick back to the best new and recent chill hits." },
    { id: 6, title: "Viva Latino", description: "Today's top Latin hits, elevando nuestra música." },
  ];

  const recentlyPlayed = [
    { id: 1, title: "Liked Songs", description: "250 songs" },
    { id: 2, title: "Discover Weekly", description: "Your weekly mixtape of fresh music" },
    { id: 3, title: "Release Radar", description: "Catch all the latest music from artists you follow" },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="bg-gradient-to-b from-muted/40 to-background p-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">Good afternoon</h1>
        
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

        <h2 className="text-2xl font-bold text-foreground mb-4">Made For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
          {playlists.slice(0, 6).map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              title={playlist.title}
              description={playlist.description}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">Popular Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              title={playlist.title}
              description={playlist.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
