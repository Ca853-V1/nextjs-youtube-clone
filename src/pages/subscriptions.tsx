import { Appbar } from "@/components/Appbar";
import { SidePane } from "@/components/SidePane";
import { useEffect, useState } from "react";

type SubscribedChannel = {
  id: string;
  logo: string;
  author: string;
  subscribers: string;
};

export default function Subscriptions()
{
  const [channels, setChannels] = useState<SubscribedChannel[]>([]);
  const [sideExpanded, setSideExpanded] = useState(false);
  useEffect(() =>
  {
    const saved = JSON.parse(localStorage.getItem("subscriptions") || "[]");
    setChannels(saved);
  }, []);
  const handleUnsubscribe = (id: string) => 
  {
    const updated = channels.filter((ch) => ch.id !== id);
    setChannels(updated);
    localStorage.setItem("subscriptions", JSON.stringify(updated));
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
          <h1 className="text-2xl font-bold mb-4">All Subscriptions</h1>
          {channels.length === 0 ? (<p className="text-gray-400">No subscriptions yet.</p>) :
          (
            <div className="space-y-4">
              {channels.map((ch) =>
              (
                <div key={ch.id} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img src={ch.logo} alt={ch.author} className="w-12 h-12 rounded-full"/>
                    <div>
                      <div className="font-semibold">{ch.author}</div>
                      <div className="text-gray-400 text-sm">
                        {ch.subscribers}
                      </div>
                    </div>
                  </div>
                  <button onClick={() => handleUnsubscribe(ch.id)} className="px-3 py-1 border border-white rounded-full cursor-pointer text-sm hover:bg-gray-800">
                    Unsubscribe
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
