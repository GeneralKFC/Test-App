"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchInput } from "@/components/SearchInput";
import { CookSelect } from "@/components/CookSelect";
import { TimeInput } from "@/components/TimeInput";
export default function Home() {
  const router = useRouter();
  const [searchInput, setsearchInput] = useState<string>("");
  const [cuisine, setCuisine] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const noActiveButton = !searchInput && !cuisine && !time;
  const ButtonSearch = () => {
    const searchParams = new URLSearchParams();
    if (searchInput.trim() !== "") {
      searchParams.append("searchInput", searchInput.trim());
    }
    if (cuisine) {
      searchParams.append("cuisine", cuisine);
    }
    if (time !== "") {
      searchParams.append("time", time);
    }
    const searchString = searchParams.toString();
    const Url = `/recipes?${searchString}`;
    router.push(Url);
  };
  return (
    <main className="h-screen flex flex-col gap-4 items-center justify-center p-4 bg-black">
      <SearchInput searchInput={searchInput} setsearchInput={setsearchInput} />
      <CookSelect cuisine={cuisine} setCuisine={setCuisine} />
      <TimeInput time={time} setTime={setTime} />
      <button
        onClick={!noActiveButton ? ButtonSearch : () => {}}
        className={`w-[300px] cursor-pointer py-2 rounded-full font-semibold transition ${
          noActiveButton
            ? "bg-gray-400 text-white"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Next
      </button>
    </main>
  );
}
