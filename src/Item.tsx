import React, {
  forwardRef,
  HTMLAttributes,
  CSSProperties,
  useState,
} from "react";

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
  id: string;
  withOpacity?: boolean;
  isDragging?: boolean;
  isFirst?: boolean;
};

const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ id, withOpacity, isDragging, style, isFirst, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
      opacity: withOpacity ? "0.5" : "1",
      transformOrigin: "50% 50%",
      height: isFirst ? "" : "140px",
      width: isFirst && isDragging ? "140px" : "100%",
      borderRadius: "10px",
      cursor: isDragging ? "grabbing" : "grab",
      backgroundColor: "#ffffff",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      boxShadow: isDragging
        ? "rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px"
        : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
      transform: isDragging ? "scale(1.05)" : "scale(1)",
      // gridColumn: isFirst && !isDragging ? "span 2" : "auto",
      // gridRow: isFirst && !isDragging ? "span 2" : "auto",
      background: isDragging ? "yellow" : "",
      overflow: "hidden",
      ...style,
    };

    const inlineStyles2: CSSProperties = {
      opacity: withOpacity ? "0.5" : "1",
      transformOrigin: "50% 50%",
      height: isFirst && isDragging ? "280px" : "140px", // Adjust the height for the first item when dragging
      width: "", // Keep the width as it is
      borderRadius: "10px",
      cursor: isDragging ? "grabbing" : "grab",
      backgroundColor: "#ffffff",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      boxShadow: isDragging
        ? "rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px"
        : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
      transform: isDragging ? "scale(1.05)" : "scale(1)",
      background: isDragging ? "gray" : "",
      overflow: "hidden",
    };

    const gridStyle: CSSProperties = {
      gridColumn: isFirst && !isDragging ? "span 2" : "auto",
      gridRow: isFirst && !isDragging ? "span 2" : "auto",
    };

    // const overlayStyle: CSSProperties = {
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   width: "100%",
    //   height: "100%",
    //   background: "rgba(0, 0, 0, 0.5)", // Adjust the overlay color and opacity
    //   display: "block",
    // };

    // console.log("my selected items are = ", selectedItem);
    const addValue = (value: string) => {
      // setSelectedItem([...selectedItem, id]);
    };
    return (
      <div style={gridStyle} className="relative">
        <div
          ref={ref}
          style={isDragging ? inlineStyles2 : inlineStyles}
          {...props}
          className="item-container"
        >
          <div>
            <div className="absolute w-full h-full top-0 left-0 bg-transparent"></div>

            <img src={id} alt="Image" className="" />
          </div>
        </div>
        <div className="absolute top-0 ml-3 mt-2 mb-5 z-50">
          <input
            type="checkbox"
            // checked={true}
            // Pass the onClick event through
            onClick={() => addValue(id)}
            // Use onMouseDown to handle the click event

            // className=""
          />
        </div>
      </div>
    );
  }
);

export default Item;
