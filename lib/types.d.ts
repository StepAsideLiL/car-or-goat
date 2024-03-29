export type Children = {
  children: React.ReactNode;
};

export type Classname = {
  className?: string;
};

export type ChildrenClassname = {
  children: React.ReactNode;
  className?: string;
};

export type UserScore = {
  totalPlayed: number;
  totalWin: number;
  totalChange: number;
  winWithChange: number;
  winWithoutChange: number;
  updatedAt: string;
};
