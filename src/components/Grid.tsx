import React, { FC } from "react";
import { BsImage } from "react-icons/bs";
type GridProps = {
  columns: number;
  children: any;
};

const Grid: FC<GridProps> = ({ children, columns }) => {
  return (
    <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 cursor-pointer">
      {children}
      <div className="border border-dashed border-gray-300 rounded-lg">
        <div className="overflow-hidden">
          <img src={"/addImage.png"} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
