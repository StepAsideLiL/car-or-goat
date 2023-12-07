import VariableStat from "@/components/playing-field/variable-stat";
import Score from "@/components/playing-field/score";
import StageCount from "../playing-field/stage-count";
import { Dices } from "lucide-react";
import Sidebar from "./side-bar";

const Navbar = () => {
  return (
    <header className="container flex gap-2 md:w-full py-3 items-center">
      <div className="w-full">
        <StageCount />
      </div>

      <div className="w-full flex justify-center">
        <Dices className="md:w-12 w-6 md:h-12 h-6" />
      </div>

      <div className="w-full flex justify-end items-center gap-2">
        <Score />

        <VariableStat />
        <Sidebar />
      </div>
    </header>
  );
};

export default Navbar;
