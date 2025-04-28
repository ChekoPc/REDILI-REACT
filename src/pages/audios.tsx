import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";

export default function AudiosPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-2">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Audios</h1>
        </div>
        <AudioPlayer/>
      </section>
    </DefaultLayout>
  );
}
