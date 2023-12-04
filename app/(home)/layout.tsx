import { Children } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomeLayout = ({ children }: Children) => {
  return <div>{children}</div>;
};

export default HomeLayout;
