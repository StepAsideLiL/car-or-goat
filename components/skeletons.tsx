import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export const LeaderboardTableSkeleton = () => {
  const arr10 = Array.from({ length: 10 }, (_, index) => index + 1);

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

      {arr10.map((list) => (
        <TableBody key={list}>
          <TableRow>
            <TableCell className="w-[100px]">
              <Skeleton className="h-4 w-20"></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-20"></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-20"></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-20"></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-20"></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-20"></Skeleton>
            </TableCell>
          </TableRow>
        </TableBody>
      ))}
    </Table>
  );
};
