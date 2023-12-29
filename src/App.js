import React, {useState} from 'react';
import {DndContext, DragEndEvent} from '@dnd-kit/core';

import Draggable from './Draggable';
import Droppable from './Droppable';

function App() {
    const todosItems = ['1', '2', '3', '4', '5'];
    const initialCartItems: string[] = [];
    const [items, setItems] = useState(initialCartItems);

    const addItemsToCart = (e: DragEndEvent) => {
        const newItem = e.active.data.current?.title;
        if (e.over?.id !== "cart-droppable" || !newItem) return;
        const temp = [...items];
        temp.push(newItem);
        setItems(temp);
    };

    return (
        <DndContext onDragEnd={addItemsToCart}>
            <div>
                <ul>
                    {todosItems.map((id) => (
                        <Draggable key={id}>Item {id}</Draggable>
                    ))}
                </ul>
            </div>
            <div style={{ backgroundColor: "#000", width: "100%", height: "auto", padding: "30px", color: "#FFF"}}>
                Coloque os itens abaixo:
                <Droppable items={todosItems} />
            </div>
        </DndContext>
    )
}

export default App;