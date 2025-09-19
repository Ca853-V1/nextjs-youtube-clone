import { useState } from "react";

export const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) =>
{
  const [query, setQuery] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };
  return (
    <div className="w-full max-w-lg">
      <div className="flex border border-gray-500 rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleChange}
          className="flex-1 px-4 py-2 bg-slate-950 text-white outline-none"/>
        <button
          onClick={() => onSearch(query)}
          className="px-4 bg-slate-800 border-l border-gray-500 flex items-center justify-center hover:bg-slate-700 transition-colors">
          <svg
            className="w-5 h-5 text-gray-400 cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};
