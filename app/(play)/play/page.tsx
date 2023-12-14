import CardSection from "@/components/playing-field/cards-section";

const PlayPage = () => {
  return (
    <main className="container py-3 text-center space-y-4">
      <section className="flex justify-center gap-3">
        <CardSection />
      </section>
    </main>
  );
};

export default PlayPage;
