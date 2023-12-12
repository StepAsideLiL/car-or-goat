import { Main } from "@/components/uis";
import { leaderboard } from "@/lib/data";

const LeaderboardPage = async () => {
  const users = await leaderboard();
  return (
    <Main>
      <h1 className="text-center text-2xl font-semibold">Leaderboard</h1>

      <section>
        {users.map((user) => (
          <div key={user.id}>{user.username}</div>
        ))}
      </section>
    </Main>
  );
};

export default LeaderboardPage;
