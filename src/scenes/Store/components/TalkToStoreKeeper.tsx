import { STORE_KEEPER_NAME } from "@npc/defs/names";

import DialogueBox from "@ui/DialogueBox";
import ModalCard from "@ui/ModalCard";

import avatar from "@resources/images/npc/avatars/store-keeper.png";

type TalkToStoreKeeperProps = {
  title: string;
  onClose: () => void;
};

export const TalkToStoreKeeper = ({
  title,
  onClose,
}: TalkToStoreKeeperProps) => {
  const DIALOGUES = [
    "Fresh goods just arrived from the eastern road — finest quality you'll find for miles.",
    "Some say my wares bring good luck... others whisper of curses. Who's to say?",
    "I've got exactly what you're looking for — assuming your coin is good, of course.",
    "Supplies are getting harder to come by lately. If you see something you like, don't wait.",
    "You've got a sharp eye. Most folks walk right past the good stuff.",
    "Prices are going up every day — act now and you might just get a deal.",
    "I deal in coin, tales, and sometimes favors... depends on who's asking.",
    "Looks can be deceiving — not everything I sell is what it appears to be.",
    "Word around town is a rare shipment is arriving soon. Might be worth sticking around.",
    "Come closer — maybe something on these shelves will call out to you.",
  ];

  const randomMessage = DIALOGUES[Math.floor(Math.random() * DIALOGUES.length)];

  return (
    <ModalCard title={title} onClose={onClose} size="small">
      <DialogueBox
        avatar={avatar}
        name={STORE_KEEPER_NAME}
        messages={[randomMessage]}
        type="primary"
      />
    </ModalCard>
  );
};

export default TalkToStoreKeeper;
