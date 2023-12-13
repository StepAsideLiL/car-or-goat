"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const RandomBtn = ({ arr }: { arr: number[] }) => {
  const router = useRouter();

  const handleClick = () => {
    router.refresh();
    console.log(arr);
  };

  return <Button onClick={handleClick}>Random</Button>;
};

export default RandomBtn;
