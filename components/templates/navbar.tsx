import VariableStat from "@/components/playing-field/variable-stat";
import Score from "@/components/playing-field/score";
import StageCount from "../playing-field/stage-count";

const Navbar = () => {
  return (
    <header className="container flex gap-2 w-full py-3 items-center">
      <div className="w-full">
        <StageCount />
      </div>

      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-medium">
          Choose A <span className="text-red-600">Card</span>
        </h1>
      </div>

      <div className="w-full flex justify-end items-center gap-2">
        <Score />

        <VariableStat />
      </div>
    </header>
  );
};

export default Navbar;
