import React, { FC, useState, useCallback } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Grid from "./Grid";
import SortableItem from "./SortableItem";
import Item from "./Item";

const App: FC = () => {
  const [items, setItems] = useState(
    [
      "/image-1.webp",
      "/image-2.webp",
      "/image-3.webp",
      "/image-4.webp",
      "/image-5.webp",
      "/image-6.webp",
      "/image-7.webp",
      "/image-8.webp",
      "/image-9.webp",
      "/image-10.jpeg",
      "/image-11.jpeg",
    ]
    // Array.from({ length: 20 }, (_, i) => (i + 1).toString())
  );
  const [selectedItem, setSelectedItem] = useState<string[]>([]);

  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id);
  }, []);
  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over!.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }, []);
  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid columns={5}>
          {items.map((id, index) => (
            // <div key={index} onMouseDown={() => console.log("click")}>
            <SortableItem key={id} id={id} isFirst={index === 0} />
            // </div>
          ))}
        </Grid>
      </SortableContext>
      <DragOverlay
        adjustScale
        style={{
          transformOrigin: "0 0 ",
        }}
      >
        <div className="">
          {activeId ? (
            <Item
              id={activeId}
              isDragging
              isFirst={items.indexOf(activeId) === 0}
            />
          ) : null}
        </div>
      </DragOverlay>
      <div onClick={() => console.log("click")}>
        <h1>Sajid hasan</h1>
      </div>
    </DndContext>
  );
};

export default App;
