import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { SearchBar } from "./Searchbar";
import { useState } from "react";

export const Appbar = ({ onMenuClick, onSearch }: { onMenuClick: () => void; onSearch: (query: string) => void; }) =>
{
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="flex items-center justify-between pl-3 pr-3 h-14 text-white bg-black relative">
      <div className="flex items-center text-xl space-x-4">
        <button onClick={onMenuClick} className="p-2 hover:bg-gray-800 rounded-full cursor-pointer">
          <Menu size={25} />
        </button>
        <Link href="/">
          <div className="flex items-center cursor-pointer hover:bg-gray-800 p-1 rounded transition-colors duration-200">
            <img className="rounded w-8 h-5 mr-1" alt="YouTube" src="/youtube_logo.png" />
            <span className="font-semibold">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex-1 flex justify-center px-4">
        <SearchBar onSearch={onSearch} />
      </div>
      {status === "loading" ?
      (
        <div>Loading...</div>
      ) : session ?
      (
        <div className="relative flex items-center space-x-2">
          {session.user?.image && (
            <img src={session.user.image} alt={session.user.name || "User"} className="w-9 h-9 rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}/>
          )}
          <span className="hidden sm:inline font-medium cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}>
            {session.user?.name}
          </span>
          <ChevronDown className="w-4 h-4 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)} />
          {dropdownOpen && (
            <div className="absolute right-0 mt-12 bg-black border border-gray-700 rounded shadow-lg w-36 text-white z-50">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-800 rounded cursor-pointer"
                onClick={() => signOut({ callbackUrl: "/" })}> Sign out </button>
            </div>
          )}
        </div>
      ) :
      (
        <button className="text-l cursor-pointer px-2 py-1 font-semibold border-2 border-white rounded-full hover:bg-gray-800 transition"
          onClick={() => signIn("google", { callbackUrl: "/" })}> Sign in </button>
      )}
    </div>
  );
};