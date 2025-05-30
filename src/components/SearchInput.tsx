"use client";
interface SearchInputProps {
  searchInput: string;
  setsearchInput: (value: string) => void;
}
export function SearchInput({ searchInput, setsearchInput }: SearchInputProps) {
  return (
    <input
      type="text"
      value={searchInput}
      onChange={(e) => setsearchInput(e.target.value)}
      placeholder="Search..."
      className="w-[300px] px-4 py-2 rounded-full border placeholder-gray-400"
    />
  );
}
