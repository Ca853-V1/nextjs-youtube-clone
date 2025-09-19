import { VideoCard } from "./VideoCard";
import { Video } from "../data/video";
import { useEffect, useState } from "react";

export const VideoGrid = ({ videos }: { videos: Video[] }) =>
{
  const [videosWithProgress, setVideosWithProgress] = useState<Video[]>(videos);
  useEffect(() =>
  {
    const updated = videos.map((video) =>
    {
      const saved = localStorage.getItem(`progress-${video.id}`);
      return {
        ...video,
        progress: saved ? parseInt(saved) : 0,
      };
    });
    setVideosWithProgress(updated);
  }, [videos]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {videosWithProgress.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};
