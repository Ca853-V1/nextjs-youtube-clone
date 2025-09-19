import { VideoCardS } from "./VideoCardS";
import { Video, VIDEOS } from "../data/video"; 
import { useEffect, useState } from "react";

export const VideoList = () =>
{
  const [videosWithProgress, setVideosWithProgress] = useState<Video[]>([]);
  useEffect(() =>
  {
    const updated = VIDEOS.slice(0, 10).map((video) => {
      const saved = localStorage.getItem(`progress-${video.id}`);
      return {
        ...video,
        progress: saved ? parseInt(saved) : 0,
      };
    });
    setVideosWithProgress(updated);
  }, []);
  return (
    <div className="flex flex-col space-y-2">
      {videosWithProgress.map((video) => (
        <VideoCardS
          key={video.id}
          id={video.id}
          thumbnail={video.thumbnail}
          logo={video.logo}
          title={video.title}
          author={video.author}
          views={video.views}
          timestamp={video.timestamp}
          progress={video.progress ?? 0}/>
      ))}
    </div>
  );
};
