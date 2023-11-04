import React, { FC } from "react";

type GridProps = {
  columns: number;
  children: any;
};

const Grid: FC<GridProps> = ({ children, columns }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${5}, 1fr)`,
        gridGap: 20,
        maxWidth: "800px",
      }}
      // className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {children}
    </div>
  );
};

export default Grid;
