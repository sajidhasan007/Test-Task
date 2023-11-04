import React, { FC } from "react";

type GridProps = {
  selectedItem: string[];
  removeItems: () => void;
};

const TopBar: FC<GridProps> = ({ selectedItem, removeItems }) => {
  return (
    <div className="flex justify-between mb-5">
      <div className="flex gap-2 items-center">
        <input type="checkbox" checked={selectedItem.length > 0} readOnly />
        <p>{selectedItem.length} item select</p>
      </div>
      <button
        onClick={removeItems}
        disabled={selectedItem.length === 0}
        className="text-red-600"
      >
        Delete Item
      </button>
    </div>
  );
};

export default TopBar;
