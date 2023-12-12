import VariableStat from "@/components/templates/variable-stat";
import Score from "@/components/playing-field/score";
import StageCount from "../playing-field/stage-count";
import { Dices } from "lucide-react";
import Sidebar from "./side-bar";
import { Header, LogoLink } from "@/components/uis";

const Navbar = () => {
  return (
    <Header>
      <div className="w-full">
        <StageCount />
      </div>

      <div className="w-full flex justify-center">
        <LogoLink />
      </div>

      <div className="w-full flex justify-end items-center gap-2">
        <Score />

        <VariableStat />
        <Sidebar />
      </div>
    </Header>
  );
};

export default Navbar;
