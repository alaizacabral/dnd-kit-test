import React from 'react';
import type {FC} from "react";
import { useDroppable} from '@dnd-kit/core';

interface DroppableProps {
    items: string[];
}

const Style = {
    backgroundColor: 'lightBlue',
    padding: '8px',
}

const Droppable: FC<DroppableProps> = (props) => {
    const { setNodeRef } = useDroppable({
        id: "cart-droppable"
    });

    return (
        <ul style={{ height: "auto", background: "blue" }} ref={setNodeRef}>
            {props.items.map((item, idx) => (
                <div key={`${item}-${idx}`} style={Style}>
                    {item}
                </div>
            ))}
        </ul>
    );
}

export default Droppable;