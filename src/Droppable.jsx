import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import React from "react";

const Droppable = ({ id, items }) => {
    const { setNodeRef } = useDroppable({ id });

    const droppableStyle = {
        padding: "10px",
        backgroundColor: "#f1f2f2",
        borderRadius: "5px",
        minWidth: "200px",
    };

    return (
        <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
            <div ref={setNodeRef} style={droppableStyle}>
                {items.map((item) => (
                    <SortableItem key={item} id={item} />
                ))}
            </div>
        </SortableContext>
    );
};

export default Droppable;
