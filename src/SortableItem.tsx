import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./styles.scss";
import { data } from "./DndKitTable";

export function SortableItem(props: any) {
  const id = props["data-row-key"];

  const [groupId, itemId] = id.split("-");

  const { style, className, children, ...rest } = props;
  const index = data
    .find((item) => item.id === groupId)
    ?.list?.findIndex((item) => item.id === itemId);

  return (
    <Draggable key={id} draggableId={id} index={index ?? 0}>
      {(provided) => (
        <tr
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          // {...listeners}
          // className={cls}
          // style={{ ...style }}
          {...rest}
          data-cypress="draggable-item"
        >
          {React.Children.map(children, (child) => {
            if (child.key === "sort") {
              return React.cloneElement(child, {
                additionalProps: { "data-cypress": "draggable-handle" },
              });
            }

            return child;
          })}
        </tr>
      )}
    </Draggable>
  );
}
