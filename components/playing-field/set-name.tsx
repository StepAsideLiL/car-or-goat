"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useScoreStore } from "@/lib/store/store";
import AddName from "@/components/forms/add-name";

const SetUsername = () => {
  const username = useScoreStore((s) => s.username);

  return (
    <Dialog open={username === "" ? true : false}>
      <DialogContent>
        <AddName />
      </DialogContent>
    </Dialog>
  );
};

export default SetUsername;
