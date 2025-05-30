interface TimeInputProps {
  time: string;
  setTime: (value: string) => void;
}
export function TimeInput({ time, setTime }: TimeInputProps) {
  return (
    <input
      type="number"
      value={time}
      onChange={(e) => {
        const val = e.target.value;
        if (val === "" || Number(val) >= 0) {
          setTime(val);
        }
      }}
      placeholder="Preparation time"
      className="w-[300px] px-4 py-2 rounded-full border placeholder-gray-400"
    />
  );
}
