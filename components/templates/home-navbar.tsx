import React from "react";
import { Header, LogoLink } from "@/components/uis";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const HomeNavbar = () => {
  return (
    <Header className="justify-between">
      <LogoLink />

      <div className="flex items-center gap-10">
        <Link
          href={"https://github.com/StepAsideLiL/car-or-goat"}
          target="_blank"
          className="p-2 rounded-full border-2 border-black inline-block"
        >
          <Github size={"24px"} />
        </Link>

        <Button asChild>
          <Link href={"/play"}>Play</Link>
        </Button>
      </div>
    </Header>
  );
};

export default HomeNavbar;
