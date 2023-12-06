"use client";

import { useStore } from "@/lib/store/store";

const StageCount = () => {
  const stage = useStore((state) => state.stage);

  return <h1 className="text-xl font-medium">Stage: {stage + 1} / 5</h1>;
};

export default StageCount;
