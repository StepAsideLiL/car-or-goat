import LeaderboardTable from "@/components/leaderboard/table";
import { LeaderboardTableSkeleton } from "@/components/skeletons";
import { Main } from "@/components/uis";
import { Suspense } from "react";

const LeaderboardPage = async () => {
  return (
    <Main>
      <h1 className="text-center text-2xl font-semibold">Leaderboard</h1>

      <section className="">
        <Suspense fallback={<LeaderboardTableSkeleton />}>
          <LeaderboardTable />
        </Suspense>
      </section>
    </Main>
  );
};

export default LeaderboardPage;
