import React from "react";
import { Table } from "antd";
import { SortableItem } from "./SortableItem";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface XTableProps {
  data: any;
  columns: any;
  id: string;
}

const XTable: React.FC<XTableProps> = (props) => {
  // const { isOver, setNodeRef } = useDroppable({
  //   id: props.id,
  // });
  // const style = {
  //   opacity: isOver ? 1 : 0.5,
  // };
  return (
    <Droppable key={"1"} droppableId={props.id}>
      {(provided, snapshot) => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Table
              rowKey="id"
              className="dnd"
              dataSource={props.data}
              columns={props.columns}
              pagination={false}
              components={{ body: { row: SortableItem } }}
            />

            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default XTable;
