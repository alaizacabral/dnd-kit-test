import { useDraggable } from "@dnd-kit/core";
import { FC } from "react";
import { CSS } from "@dnd-kit/utilities";

interface DraggableProps {
    children: string;
}

const Draggable: FC<DraggableProps> = (props) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.children,
        data: { title: props.children }
    });

    return (
        <div
            ref={setNodeRef}
            style={{ transform: CSS.Translate.toString(transform) }}
            {...attributes}
            {...listeners}
        >
            {props.children}
        </div>
    );
};

export default Draggable;