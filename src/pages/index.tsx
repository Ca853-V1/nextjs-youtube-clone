import { useState } from "react";
import { Appbar } from "@/components/Appbar";
import { VideoGrid } from "@/components/VideoGrid";
import { SidePane } from "@/components/SidePane";
import { Video, VIDEOS } from "../data/video";

export default function Home()
{
  const [sideExpanded, setSideExpanded] = useState(false);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>(VIDEOS);
  const handleSearch = (query: string) =>
  {
    const filtered = VIDEOS.filter(video =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredVideos(filtered);
  };
  return (
    <div className="bg-black min-h-screen">
      <div className="sticky top-0 z-50 bg-black">
        <Appbar onMenuClick={() => setSideExpanded(!sideExpanded)} onSearch={handleSearch} />
      </div>
      <div className="flex">
        <div className={`bg-black text-white h-[calc(100vh-3.5rem)] sticky top-14 transition-all duration-300 ${sideExpanded ? "w-40" : "w-15"}`}>
          <SidePane expanded={sideExpanded} />
        </div>
        <div className={`flex-1 transition-all duration-300 ${sideExpanded ? "ml-20" : "ml-5"}`}>
          <VideoGrid videos={filteredVideos} />
        </div>
      </div>
    </div>
  );
}
