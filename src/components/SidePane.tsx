import { useRouter } from "next/router";

export const SidePane = ({ expanded }: { expanded: boolean }) =>
{
  const router = useRouter();
  const handleHomeClick = () =>
  {
    Object.keys(localStorage).forEach((key) =>
    {
      if (key.startsWith("progress-"))
      {
        localStorage.removeItem(key);
      }
    });
    router.push("/");
  };
  const handleShortsClick = () =>
  {
    router.push("/shorts");
  };
  const handleSubscriptionsClick = () =>
  {
    router.push("/subscriptions");
  };
  const handleDownloadsClick = () =>
  {
    router.push("/downloads");
  };
  return (
    <div className="flex flex-col py-4 space-y-6">
      <div className="flex items-center space-x-4 px-4 cursor-pointer" onClick={handleHomeClick}>
        <img className="h-7 w-7" src="/home.png" />
        {expanded && <span className="text-sm">Home</span>}
      </div>
      <div className="flex items-center space-x-4 px-4 cursor-pointer" onClick={handleShortsClick}>
        <img className="h-7 w-7" src="/shorts.png" />
        {expanded && <span className="text-sm">Shorts</span>}
      </div>
      <div className="flex items-center space-x-4 px-4 cursor-pointer" onClick={handleSubscriptionsClick}>
        <img className="h-7 w-7" src="/subscription.png" />
        {expanded && <span className="text-sm">Subscriptions</span>}
      </div>
      <div className="flex items-center space-x-4 px-4 cursor-pointer" onClick={handleDownloadsClick}>
        <img className="h-7 w-7" src="/download.png" />
        {expanded && <span className="text-sm">Downloads</span>}
      </div>
    </div>
  );
};
