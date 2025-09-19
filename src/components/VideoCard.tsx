import { Video } from "@/data/video";
import Link from "next/link";

export function VideoCard(props: Video)
{
  return (
    <Link href={`/watch/${props.id}`}>
      <div className="p-2 cursor-pointer">
        <div className="relative">
          <img className="rounded-xl w-full" src={props.thumbnail} />
          {props.progress !== undefined &&
          (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded">
              <div className="h-full bg-red-600 rounded" style={{ width: `${props.progress}%` }}/>
            </div>
          )}
        </div>
        <div className="grid grid-cols-12 pt-2">
          <div className="col-span-1">
            <img className="rounded-full w-18 h-10" src={props.logo} />
          </div>
          <div className="col-span-11 pl-2">
            <div>{props.title}</div>
            <div className="text-gray-400">{props.author} ✅</div>
            <div className="text-gray-400">
              {props.views} · {props.timestamp}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
