import CardSection from "@/components/playing-field/cards-section";
import { carGoatArrayGenerator } from "@/lib/utils";

const PlayPage = () => {
  const cards = carGoatArrayGenerator();

  return (
    <main className="container py-3 text-center space-y-4">
      {/* <section>
        <h1 className="text-3xl font-medium">
          Choose A <span className="text-red-600">Card</span>
        </h1>
      </section> */}

      <section className="flex justify-center gap-3">
        <CardSection cards={cards} />
      </section>
    </main>
  );
};

export default PlayPage;
