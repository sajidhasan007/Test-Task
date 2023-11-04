import React, { FC } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Item, { ItemProps } from "./Item";

const SortableItem: FC<ItemProps> = (props) => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });

  const style = {
    transform: props.isFirst ? "" : CSS.Transform.toString(transform),
    transition: props.isFirst ? "" : transition || undefined,
  };

  return (
    // <div onMouseDown={() => console.log("click")}>
    <Item
      ref={setNodeRef}
      style={style}
      withOpacity={isDragging}
      isFirst={props.isFirst}
      selectedItem={props.selectedItem}
      setSelectedItem={props.setSelectedItem}
      {...props}
      {...attributes}
      {...listeners}
    />
    // </div>
  );
};

export default SortableItem;
