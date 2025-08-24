import { useState, useEffect, useCallback } from "react";
import { SearchIcon } from "../../icons/SearchIcon";
import axios from "axios";
import { BACKEND_URL } from "./config";
import clsx from "clsx";

export const SearchInput = ({ placeholder }: { placeholder: string }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Function to call API
  const handleSearch = useCallback(async () => {
    if (!query.trim()) {
      setResult([]);
      setError(null);
      return;
    }
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `${BACKEND_URL}/api/v1/search?query=${encodeURIComponent(query)}`
      );

      if (res.status === 404 || !res.data) {
        setResult([]);
        setError("🧠 Brain not found");
        return;
      }

      const matches = res.data.match ? [res.data.match] : res.data.matches || [];
      setResult(matches);

      if (matches.length === 0) {
        setError("🧠 Brain not found");
      }
    } catch (err: any) {
      console.error("Search error:", err);
      setError("Failed to fetch results");
      setResult([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  // Debounce (2s typing wait)
  useEffect(() => {
    if (!query) return;
    const timeout = setTimeout(() => {
      handleSearch();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [query, handleSearch]);

  return (
    <>
      {/* Overlay */}
      {isFocused && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsFocused(false)}
        />
      )}

      {/* Search Bar */}
      <div
        className={clsx(
          "transition-all duration-300 ease-in-out z-50",
          isFocused
            ? "fixed top-1/4 left-1/2 transform -translate-x-1/2 w-1/2"
            : "w-full"
        )}
      >
        <div className="p-4 rounded-2xl bg-white shadow flex items-center">
          <SearchIcon size="lg"  />
          <input
            value={query}
            type="text"
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full ml-2 p-2 text-lg rounded focus:outline-none"
          />
        </div>

        {/* Suggestion List */}
        {isFocused && (
          <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg max-h-64 overflow-y-auto">
            {loading && (
              <p className="text-sm text-gray-500 p-3">Searching...</p>
            )}
            {error && !loading && (
              <p className="text-sm text-red-500 p-3">{error}</p>
            )}

            {result.map((item) => (
              
              <a
                key={item._id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="block p-3 border-b last:border-none hover:bg-gray-50"
              >
                <p  className="text-blue-600 font-medium hover:underline">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">{item.type}</p>
              </a>
            ))}

            {!loading && !error && result.length === 0 && query && (
              <p className="text-sm text-gray-500 p-3">No results yet...</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};
