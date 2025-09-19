import { Appbar } from "@/components/Appbar";
import { SidePane } from "@/components/SidePane";
import { useEffect, useState } from "react";
import { Video } from "../data/video";

export default function Downloads()
{
  const [downloads, setDownloads] = useState<Video[]>([]);
  const [sideExpanded, setSideExpanded] = useState(false);
  useEffect(() =>
  {
    const saved = JSON.parse(localStorage.getItem("downloads") || "[]");
    setDownloads(saved);
  }, []);
  const handleRemove = (id: string) => 
  {
    const updated = downloads.filter((v) => v.id !== id);
    setDownloads(updated);
    localStorage.setItem("downloads", JSON.stringify(updated));
  };
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="sticky top-0 z-50 bg-black">
        <Appbar onMenuClick={() => setSideExpanded(!sideExpanded)} onSearch={() => {}}/>
      </div>
      <div className="flex">
        <div className={`w-15 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto bg-black transition-all duration-300 ${sideExpanded ? "w-40" : "w-5"}`}>
          <SidePane expanded={sideExpanded} />
        </div>
        <div className={`flex-1 p-6 transition-all duration-300 ${sideExpanded ? "ml-20" : "ml-5"}`}>
          <h1 className="text-2xl font-bold mb-6">Downloads</h1>
          {downloads.length === 0 ? (<p className="text-gray-400">No videos downloaded yet.</p>) :
          (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {downloads.map((video) =>
              (
                <div key={video.id} className="bg-gray-900 p-3 rounded-lg flex flex-col">
                  <img src={video.thumbnail} alt={video.title} className="rounded-lg w-full h-40 aspect-square object-cover"/>
                  <div className="mt-3 flex-1">
                    <div className="font-semibold text-sm line-clamp-2">
                      {video.title}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {video.author}
                    </div>
                    <div className="text-xs text-gray-400">
                      {video.views} • {video.timestamp}
                    </div>
                  </div>
                  <button onClick={() => handleRemove(video.id)} className="mt-3 px-2 py-1 border border-white rounded cursor-pointer text-sm hover:bg-gray-800">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
