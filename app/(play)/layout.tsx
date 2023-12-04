import BottomStat from "@/components/playing-field/botton-stat";
import { Children } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play",
};

const PlayboardLayout = ({ children }: Children) => {
  return (
    <div>
      {children}

      <div className="fixed bottom-4 right-4">
        <BottomStat />
      </div>
    </div>
  );
};

export default PlayboardLayout;
