import React from 'react';
import { useDroppable} from '@dnd-kit/core';

export function DroppableDois(props) {
    const {isOver, setNodeRef} = useDroppable({
        id: 'droppableDois',
    });
    const style = {
        color: isOver ? 'green' : undefined,
        height: "300px",
        width: "300px",
    };


    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}