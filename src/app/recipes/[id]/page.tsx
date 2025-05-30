import Image from "next/image";
export const dynamic = "force-dynamic";
interface RecipeDetails {
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: { id: number; original: string }[];
  summary: string;
}
export default async function RecipeDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  let recipe: RecipeDetails | null = null;
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) throw new Error("Error");
    recipe = await res.json();
    //console.log(recipe?.extendedIngredients);
  } catch (error) {
    console.log(error);
  }
  if (!recipe) {
    return <div className="p-6 text-red-600">Error</div>;
  }
  return (
    <div className="p-6 bg-gray-500 max-w-3xl mx-auto gap-[35px]">
      <h1 className="text-3xl text-center font-bold">{recipe.title}</h1>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={600}
        height={400}
        className="rounded-lg flex m-[auto]"
      />
      <div className="text-white">
        Сooking time: {recipe.readyInMinutes} min
      </div>
      <div className="text-white">Servings: {recipe.servings}</div>
      <h2 className="text-xl font-semibold mt-4">Ingredients:</h2>
      <ul className="gap-[10px]">
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Summary</h2>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      />
    </div>
  );
}
