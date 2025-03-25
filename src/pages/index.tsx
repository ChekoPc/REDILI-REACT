import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-2">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "violet" })}>REDILI&nbsp;</span>
          <br />
          <span className={title()}>
            Repositorio Digital de Lenguas Indígenas
          </span>
        </div>
      </section>
    </DefaultLayout>
  );
}
