const HowToPlay = () => {
  return (
    <section className="max-w-2xl mx-auto space-y-3">
      <h1 className="text-xl font-semibold">How to Play</h1>

      <ul className="list-decimal list-inside space-y-2">
        <li>
          There are three cards (Card A, Card B, and Card C). Behind one of the
          cards is a car (the prize you want), and behind the other two cards
          are goats.
        </li>

        <li>You choose one of the cards, say Card A.</li>

        <li>
          The game, who knows what is behind each card, reveals the face of
          another card, say Card B, showing a goat.
        </li>

        <li>
          Now, you are faced with a choice: stick with your original choice
          (Card A) or switch to the other unopened card (Card C).
        </li>

        <li>
          The host flips open the card you selected, and you receive whatever is
          behind it.
        </li>
      </ul>
    </section>
  );
};

export default HowToPlay;
