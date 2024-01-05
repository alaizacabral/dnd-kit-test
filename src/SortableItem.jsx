import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        width: "100%",
        height: "30px",
        display: "flex",
        alignItems: "center",
        padding: "5px 10px",
        backgroundColor: "#ddd",
        borderRadius: 5,
        marginBottom: 5,
        userSelect: "none",
        cursor: "grab",
        boxSizing: "border-box"
    };

    return (
        <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
            Card {props.id}
        </div>
    );
};

export default SortableItem;
