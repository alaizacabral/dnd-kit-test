import React, {useState} from 'react';
import {SortableContext} from "@dnd-kit/sortable";
import {DndContext, DragOverlay} from '@dnd-kit/core';

import {Draggable} from './Draggable';

function App() {
    const [items] = useState(['1', '2', '3', '4', '5']);
    const [activeId, setActiveId] = useState(null);

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <SortableContext items={items}>
                {items.map(id =>
                    <Draggable key={id} id={id}>
                        `Item ${id}`
                    </Draggable>
                )}
            </SortableContext>
            <DragOverlay>
                {activeId ? (
                    `Item ${activeId}}`
                ): null}
            </DragOverlay>
        </DndContext>
    );

    function handleDragStart(event) {
        setActiveId(event.active.id);
    }

    function handleDragEnd() {
        setActiveId(null);
    }
}

export default App;