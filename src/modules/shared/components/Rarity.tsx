import { RARITY_STYLES } from "@ui/theme/rarity";

type RarityProps = {
  rarity: keyof typeof RARITY_STYLES;
};

export default function Rarity({ rarity }: RarityProps) {
  const style = RARITY_STYLES[rarity];
  return <p className={`${style.text} capitalize`}>{rarity}</p>;
}
