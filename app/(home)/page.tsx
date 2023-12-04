import { Button } from "@/components/ui/button";
import { Main } from "@/components/uis";
import Link from "next/link";

const HomePage = () => {
  return (
    <Main className="flex items-center justify-center">
      <Button>
        <Link href={"/play"}>Play</Link>
      </Button>
    </Main>
  );
};

export default HomePage;
