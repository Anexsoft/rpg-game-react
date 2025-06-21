import SceneLayout from "@layout/SceneLayout/SceneLayout";

import type { SceneComponent } from "@scenes/types/index.types";

import { ZONES } from "@src/modules/zones";
import type { ZoneId } from "@src/modules/zones/types/ids.types";

type HuntingZoneSceneProps = {
  zoneId: ZoneId;
};

export default function HuntingZoneScene({
  zoneId,
}: HuntingZoneSceneProps): SceneComponent {
  const zone = ZONES.find((zone) => zone.id === zoneId);

  if (!zone) {
    return;
  }

  return (
    <SceneLayout
      title={zone.name}
      subtitle={zone.description}
      backgroundImage={zone.background}
    >
      Hello
    </SceneLayout>
  );
}
