interface CuisineSelectProps {
  cuisine: string;
  setCuisine: (value: string) => void;
}
export function CookSelect({ cuisine, setCuisine }: CuisineSelectProps) {
  return (
    <select
      value={cuisine}
      onChange={(e) => setCuisine(e.target.value)}
      className="w-[300px] px-4 py-2 rounded-full border text-white"
    >
      <option className="text-black" value="">
        Cuisine
      </option>
      <option className="text-black" value="italian">
        Italian
      </option>
      <option className="text-black" value="mexican">
        Mexican
      </option>
      <option className="text-black" value="chinese">
        Chinese
      </option>
    </select>
  );
}
