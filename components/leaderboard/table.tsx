import { leaderboard } from "@/lib/data";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LeaderboardTable = async () => {
  const users = await leaderboard();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Total Played</TableHead>
          <TableHead>Total Win</TableHead>
          <TableHead>Total Change</TableHead>
          <TableHead>Win With Change</TableHead>
          <TableHead>Win Without Change</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="w-[100px]">{user.username}</TableCell>
            <TableCell>{user.totalPlayed}</TableCell>
            <TableCell>{user.totalWin}</TableCell>
            <TableCell>{user.totalChange}</TableCell>
            <TableCell>{user.winWithChange}</TableCell>
            <TableCell>{user.winWithoutChange}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LeaderboardTable;
