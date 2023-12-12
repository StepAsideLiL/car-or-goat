import HomeNavbar from "@/components/templates/home-navbar";
import { Children } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomeLayout = ({ children }: Children) => {
  return (
    <div>
      <HomeNavbar />

      {children}
    </div>
  );
};

export default HomeLayout;
