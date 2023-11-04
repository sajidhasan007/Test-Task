import { forwardRef, HTMLAttributes, CSSProperties } from "react";

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
  id: string;
  withOpacity?: boolean;
  isDragging?: boolean;
  isFirst?: boolean;
  selectedItem?: string[];
  setSelectedItem?: (selectedItems: string[]) => void;
};

const Item = forwardRef<HTMLDivElement, ItemProps>(
  (
    {
      id,
      withOpacity,
      isDragging,
      style,
      isFirst,
      selectedItem,
      setSelectedItem,
      ...props
    },
    ref
  ) => {
    const inlineStyles: CSSProperties = {
      opacity: withOpacity ? "0.5" : "1",
      transformOrigin: "50% 50%",
      borderRadius: "8px",
      cursor: isDragging ? "grabbing" : "grab",
      backgroundColor: "#ffffff",
      boxShadow: isDragging
        ? "rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px"
        : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
      transform: isDragging ? "scale(1.05)" : "scale(1)",
      overflow: "hidden",
      ...style,
    };
    const gridStyle: CSSProperties = {
      gridColumn: isFirst && !isDragging ? "span 2" : "auto",
      gridRow: isFirst && !isDragging ? "span 2" : "auto",
    };
    const addValue = (value: string) => {
      if (selectedItem?.includes(value)) {
        const newArray = selectedItem.filter((item: string) => item !== value);
        setSelectedItem!(newArray);
      } else {
        setSelectedItem!([...selectedItem!, value]);
      }
    };
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log("my agent is = ", isMobile);
    return (
      <div style={gridStyle} className="relative group border rounded-lg">
        <div
          ref={ref}
          style={inlineStyles}
          {...props}
          className="item-container"
        >
          <div className="relative">
            <img src={id} alt="Image" />
            <span className="absolute w-full h-full top-0 left-0 hover:bg-black hover:opacity-25"></span>
          </div>
        </div>
        <div className="absolute top-0 ml-3 mt-2 mb-5 z-50 test-border">
          <input
            type="checkbox"
            onClick={() => addValue(id)}
            className={`${
              selectedItem?.includes(id)
                ? "block"
                : isMobile
                ? "block"
                : "hidden group-hover:block"
            } `}
          />
        </div>
      </div>
    );
  }
);

export default Item;
