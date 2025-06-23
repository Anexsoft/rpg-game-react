type EquippedInventoryProps = {
  label: string;
  name: string;
  picture: string;
};

export default function EquippedInventory({
  label,
  name,
  picture,
}: EquippedInventoryProps) {
  return (
    <div className="border border-gray-500 border-dashed rounded p-3 flex gap-4 items-center">
      <img
        alt={`Equipped ${label}`}
        className="w-16 h-16 bg-gray-800 rounded"
        src={picture}
      />
      <div>
        <p className="text-white font-bold text-sm">Equipped {label}</p>
        <p className="text-gray-300 text-sm">{name}</p>
      </div>
    </div>
  );
}
