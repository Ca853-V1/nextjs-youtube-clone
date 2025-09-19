import { Appbar } from "@/components/Appbar";
import { SidePane } from "@/components/SidePane";
import { VideoList } from "@/components/VideoList";
import { VIDEOS } from "@/data/video";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Watch()
{
  const router = useRouter();
  const { id } = router.query;
  const [sideExpanded, setSideExpanded] = useState(false);
  const video = VIDEOS.find((v) => v.id === id) ?? VIDEOS[0];
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  useEffect(() =>
  {
    if (!id || !video) return;
    localStorage.setItem(`progress-${id}`, "100");
    const subs = JSON.parse(localStorage.getItem("subscriptions") || "[]");
    setIsSubscribed(subs.some((v: any) => v.id === video.id));
    const downs = JSON.parse(localStorage.getItem("downloads") || "[]");
    setIsDownloaded(downs.some((v: any) => v.id === video.id));
  }, [id, video]);
  const handleSubscribe = () =>
  {
    if (!video) return;
    const existing = JSON.parse(localStorage.getItem("subscriptions") || "[]");
    if (!isSubscribed)
    {
      existing.push({
        id: video.id,
        logo: video.logo,
        author: video.author,
        subscribers: video.subscribers,
      });
      localStorage.setItem("subscriptions", JSON.stringify(existing));
      setIsSubscribed(true);
    }
  };
  const handleDownload = () =>
  {
    if (!video) return;
    const existing = JSON.parse(localStorage.getItem("downloads") || "[]");
    if (!isDownloaded)
    {
      existing.push(video);
      localStorage.setItem("downloads", JSON.stringify(existing));
      setIsDownloaded(true);
    }
  };
  return (
    <div className="bg-black min-h-screen">
      <div className="sticky top-0 z-50 bg-black">
        <Appbar onMenuClick={() => setSideExpanded(!sideExpanded)} onSearch={() => {}} />
      </div>
      <div className="flex">
        <div className={`w-15 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto bg-black transition-all duration-300 ${sideExpanded ? "w-40" : "w-5"}`}>
          <SidePane expanded={sideExpanded} />
        </div>
        <div className={`flex-1 flex flex-col lg:flex-row transition-all duration-300 ${sideExpanded ? "ml-20" : "ml-5"}`}>
          <div className="w-full lg:w-2/3 p-4">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            </div>
            <div className="text-lg font-bold text-white mt-2">
              {video.title}
            </div>
            <div className="flex items-center justify-between mt-3 text-white">
              <div className="flex items-center space-x-3">
                <img src={video.logo} alt={video.author} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">{video.author}</div>
                  <div className="text-gray-400 text-sm">
                    {video.subscribers}
                  </div>
                </div>
                <button onClick={handleSubscribe} disabled={isSubscribed}
                  className={`ml-4 px-4 py-1 rounded-full text-sm font-semibold ${
                    isSubscribed ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 cursor-pointer"}`}>
                  {isSubscribed ? "Subscribed" : "Subscribe"}
                </button>
              </div>
              <button onClick={handleDownload} disabled={isDownloaded}
                className={`px-4 py-1 rounded-full text-sm ${
                  isDownloaded ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "border-2 border-white cursor-pointer hover:bg-gray-800"}`}>
                {isDownloaded ? "Downloaded" : "Download"}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  );
}
