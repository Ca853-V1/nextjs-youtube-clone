import { Appbar } from "@/components/Appbar";
import { SidePane } from "@/components/SidePane";
import { useState } from "react";
import { SHORTS } from "@/data/shorts";
import { useRouter } from "next/router";

export default function ShortsPage()
{
  const [sideExpanded, setSideExpanded] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="sticky top-0 z-50 bg-black">
        <Appbar onMenuClick={() => setSideExpanded(!sideExpanded)} onSearch={() => {}} />
      </div>
      <div className="flex">
        <div className={`w-15 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto bg-black transition-all duration-300 ${sideExpanded ? "w-40" : "w-5"}`}>
          <SidePane expanded={sideExpanded} />
        </div>
        <div className={`flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 transition-all duration-300 ${sideExpanded ? "ml-20" : "ml-5"}`}>
          {SHORTS.map((short) =>
          (
            <div key={short.id} className="cursor-pointer" onClick={() => router.push(`/shorts/${short.id}`)}>
              <div className="relative w-full aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden">
                <img src={short.thumbnail} alt={short.title} className="w-full h-full object-cover"/>
              </div>
              <div className="mt-2 text-sm font-semibold truncate">{short.title}</div>
              <div className="text-xs text-gray-400">{short.author}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
