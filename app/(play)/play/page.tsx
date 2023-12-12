import CardSection from "@/components/playing-field/cards-section";
import { carGoatArrayGenerator } from "@/lib/utils";

const PlayPage = () => {
  const cards = carGoatArrayGenerator();

  return (
    <main className="container py-3 text-center space-y-4">
      <section className="flex justify-center gap-3">
        <CardSection cards={cards} />
      </section>
    </main>
  );
};

export default PlayPage;
