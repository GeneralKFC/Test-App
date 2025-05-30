import Image from "next/image";
import Link from "next/link";
export default async function RecipesPage({
  searchParams,
}: {
  searchParams: { searchInput?: string; cuisine?: string; time?: string };
}) {
  const { searchInput = "", cuisine = "", time = "" } = searchParams;
  const params = new URLSearchParams({
    apiKey: process.env.API_KEY!,
    ...(searchInput && { query: searchInput }),
    ...(cuisine && { cuisine }),
    ...(time && { maxReadyTime: time }),
  });
  let data;
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?${params}`,
      {
        next: { revalidate: 60 },
      },
    );
    if (!res.ok) throw new Error("Ошибка запроса");
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="px-[200px] py-[100px] grid gap-6 xl:grid-cols-2 2xl:grid-cols-3">
      {data.results?.map((recipe: any) => (
        <Link
          key={recipe.id}
          href={`/recipes/${recipe.id}`}
          className="bg-gray-400 border-2 border-purple-300 rounded-lg w-[300px] hover:shadow-lg transition overflow-hidden"
        >
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={200}
            height={100}
            className="w-full h-48 object-cover"
          />
          <h2 className="p-4 text-lg font-semibold">{recipe.title}</h2>
        </Link>
      ))}
    </div>
  );
}
