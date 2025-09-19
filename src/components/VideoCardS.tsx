import Link from "next/link";

export function VideoCardS(props: any)
{
  return (
    <Link href={`/watch/${props.id}`}>
      <div className="p-1 cursor-pointer flex relative">
        <div className="relative">
          <img className="rounded-xl w-45 h-25 object-cover" src={props.thumbnail}/>
          {props.progress > 0 &&
          (
            <div className="absolute bottom-0 left-0 h-1 bg-red-600 rounded-full" style={{ width: `${props.progress}%` }}/>
          )}
        </div>
        <div className="pl-3 flex flex-col justify-between text-sm">
          <div className="font-semibold">{props.title}</div>
          <div className="text-gray-400">{props.author} ✅</div>
          <div className="text-gray-400">
            {props.views} · {props.timestamp}
          </div>
        </div>
      </div>
    </Link>
  );
}
