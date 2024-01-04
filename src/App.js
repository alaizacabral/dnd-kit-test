import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Draggable} from './Draggable';
import {Droppable} from './Droppable';

function App() {
    const containers = ['ColunaA', 'ColunaB'];
    const [parent, setParent] = useState(null);

    const draggableMarkup = (
        <Draggable id="draggable">Me arrasta</Draggable>
    );

    function handleDragEnd(event) {
        const {over} = event;

        setParent(over ? over.id : null);
    }

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <DndContext onDragEnd={handleDragEnd}>
                {parent === null ? draggableMarkup : null}

                <div style={{ display: "flex", gap: "30px" }}>
                    {containers.map((id) => (
                        <Droppable key={id} id={id}>
                            {parent === id ? draggableMarkup : 'Drop here'}
                        </Droppable>
                    ))}
                </div>
            </DndContext>
        </div>
    )
}

export default App;