import DefaultLayout from "@/layouts/default";

import AudioPlayer from "@/components/audios/AudioPlayer";

import { cuentosMazatecos } from "@/Data/audios/cuentosMazatecosData";
import { cuentosCuicatecos } from "@/Data/audios/cuentosCuicatecosData";

export default function AudiosPage() {
  return (
    <DefaultLayout>
      <div className="contenedor-principal margin-top-page">
        <span className="text-2xl font-bold mb-4 text-title">
          Cuentos Mazatecos
        </span>
        <AudioPlayer audios={cuentosMazatecos} />
        <span className="text-2xl font-bold mb-4 text-title">
          Cuentos Cuicatecos
        </span>
        <AudioPlayer audios={cuentosCuicatecos} />
      </div>
    </DefaultLayout>
  );
}