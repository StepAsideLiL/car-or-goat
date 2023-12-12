import React from "react";
import { Header, LogoLink } from "@/components/uis";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomeNavbar = () => {
  return (
    <Header className="justify-between">
      <LogoLink />

      <div className="">
        <Button asChild>
          <Link href={"/play"}>Play</Link>
        </Button>
      </div>
    </Header>
  );
};

export default HomeNavbar;
