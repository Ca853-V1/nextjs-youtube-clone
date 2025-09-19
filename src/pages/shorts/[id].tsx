import { Appbar } from "@/components/Appbar";
import { SidePane } from "@/components/SidePane";
import { SHORTS } from "@/data/shorts";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ShortsWatch()
{
  const router = useRouter();
  const { id } = router.query;
  const [sideExpanded, setSideExpanded] = useState(false);
  const short = SHORTS.find((s) => s.id === id) ?? SHORTS[0];
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="sticky top-0 z-50 bg-black">
        <Appbar onMenuClick={() => setSideExpanded(!sideExpanded)} onSearch={() => {}}/>
      </div>
      <div className="flex">
        <div  className={`sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto bg-black transition-all duration-300 ${sideExpanded ? "w-40" : "w-5"}`}>
          <SidePane expanded={sideExpanded} />
        </div>
        <div className={`flex-1 flex justify-center items-center transition-all duration-300 ${sideExpanded ? "ml-20" : "ml-5"}`}>
          <div className="w-full max-w-[400px] aspect-[9/16] flex flex-col bg-black">
            <div className="flex-1">
              <iframe
                width="100%"
                height="100%"
                src={`${short.videoUrl}?autoplay=1&modestbranding=1`} 
                title={short.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-t-lg"/>
            </div>
            <div className="p-3 bg-black rounded-b-lg">
              <h2 className="text-sm font-semibold">{short.title}</h2>
              <div className="flex items-center mt-2 space-x-2">
                <img src={short.logo} alt="channel" className="w-6 h-6 rounded-full" />
                <span className="text-xs text-gray-300">{short.author}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {short.views} • {short.timestamp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
