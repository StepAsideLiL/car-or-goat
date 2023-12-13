import VariableStat from "@/components/templates/variable-stat";
import Score from "@/components/playing-field/score";
import Sidebar from "./side-bar";
import { Header, LogoLink } from "@/components/uis";
import HowToPlayHelp from "./how-to-play-help";

const Navbar = () => {
  return (
    <Header>
      <LogoLink />

      <div className="flex justify-end items-center gap-2">
        <Score />

        {process.env.NODE_ENV === "development" && <VariableStat />}

        <HowToPlayHelp />

        <Sidebar />
      </div>
    </Header>
  );
};

export default Navbar;
