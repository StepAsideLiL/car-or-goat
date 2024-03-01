import Navbar from "@/components/templates/navbar";
import { Children } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play",
};

const PlayboardLayout = ({ children }: Children) => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {children}
    </div>
  );
};

export default PlayboardLayout;
