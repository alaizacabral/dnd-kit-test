import React from 'react';
import { useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
    });
    const style = {
        color: isOver ? 'green' : undefined,
        height: "300px",
        width: "300px",
        backgroundColor: "blue",
    };


    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}