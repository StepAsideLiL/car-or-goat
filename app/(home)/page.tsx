import HowToPlay from "@/components/sections/how-to-play";
import { Button } from "@/components/ui/button";
import { Main } from "@/components/uis";
import Link from "next/link";

const HomePage = () => {
  return (
    <Main className="md:space-y-24 space-y-16 pb-10">
      <section className="md:pt-20 pt-10 mx-auto max-w-4xl text-center flex justify-center items-center">
        <div>
          <h1 className="md:text-4xl text-2xl leading-tight font-medium pb-10">
            <Link
              href={"https://en.wikipedia.org/wiki/Monty_Hall_problem"}
              target="_blank"
              className="underline"
            >
              The Monty Hall problem
            </Link>{" "}
            is a famous probability puzzle named after the host of the
            television game show &rdquo;Let&rsquo;s Make a Deal,&rdquo; Monty
            Hall.
          </h1>

          <Button className="md:px-14 md:py-10 px-10 py-7">
            <Link href={"/play"} className="md:text-3xl text-lg">
              Play Now
            </Link>
          </Button>
        </div>
      </section>

      <HowToPlay />

      <section className="max-w-2xl mx-auto space-y-3">
        <h1 className="text-xl font-semibold">
          So?...What is the point of this?
        </h1>

        <div className="space-y-2">
          <p>
            At stage 4, when you change your initial choice, your probability of
            success increases to 66.66%, compared to the 33.33% probability
            before.
          </p>

          <p>
            So, change your choice and observe how many times you can win with
            that 66.66% chance.
          </p>
        </div>
      </section>
    </Main>
  );
};

export default HomePage;
