import { FC, useState, useCallback } from "react";
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
import { Grid, Item, SortableItem, TopBar } from "./components";

const App: FC = () => {
  const [items, setItems] = useState([
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
  ]);
  const [selectedItem, setSelectedItem] = useState<string[]>([]);

  console.log("my selected items are", selectedItem);

  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const removeItems = () => {
    const filteredA = items.filter((item) => !selectedItem.includes(item));
    setItems(filteredA);
    setSelectedItem([]);
  };

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
    <div
      style={{
        maxWidth: "800px",
        margin: "100px auto",
      }}
      className="p-5"
    >
      <TopBar removeItems={removeItems} selectedItem={selectedItem} />
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
              <SortableItem
                key={id}
                id={id}
                isFirst={index === 0}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
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
      </DndContext>
    </div>
  );
};

export default App;
