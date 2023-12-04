import CardSection from "@/components/playing-field/cards-section";
import { Main } from "@/components/uis";
import { carGoatArrayGenerator } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play",
};

const PlayPage = () => {
  const cards = carGoatArrayGenerator();

  return (
    <Main className="container py-3 text-center">
      <section>
        <h1 className="text-3xl font-medium">
          Choose A <span className="text-red-600">Card</span>
        </h1>
      </section>

      <section className="flex justify-center gap-3">
        <CardSection cards={cards} />
      </section>
    </Main>
  );
};

export default PlayPage;
