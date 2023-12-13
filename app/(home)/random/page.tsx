import RandomBtn from "@/components/sections/random-btn";
import { Main } from "@/components/uis";
import { carGoatArrayGenerator } from "@/lib/utils";

const RandomPage = () => {
  const arr = carGoatArrayGenerator();

  return (
    <Main className="flex items-center justify-center">
      <div>
        <RandomBtn arr={arr} />
      </div>
    </Main>
  );
};

export default RandomPage;
