import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { PlaylistCard } from "@/components/PlaylistCard";

const Search = () => {
  const categories = [
    { id: 1, title: "Pop", color: "bg-pink-500" },
    { id: 2, title: "Hip-Hop", color: "bg-purple-500" },
    { id: 3, title: "Rock", color: "bg-red-500" },
    { id: 4, title: "Latin", color: "bg-orange-500" },
    { id: 5, title: "Electronic", color: "bg-blue-500" },
    { id: 6, title: "R&B", color: "bg-amber-500" },
    { id: 7, title: "Country", color: "bg-yellow-500" },
    { id: 8, title: "Jazz", color: "bg-teal-500" },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="p-8">
        <div className="relative max-w-md mb-8">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="What do you want to listen to?"
            className="pl-12 h-12 bg-card border-0 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">Browse All</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${category.color} h-48 rounded-lg p-4 cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden`}
            >
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-black/20 rounded-tl-full transform translate-x-8 translate-y-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
