"use client";
import { useRouter } from "next/navigation";
export default function Error() {
  const router = useRouter();
  const BackHome = () => {
    router.push("/");
  };
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-red-600">Something wrong....</h1>
      <button
        onClick={BackHome}
        className="mt-6 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        Back to Home
      </button>
    </main>
  );
}
