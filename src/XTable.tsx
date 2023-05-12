import React from "react";
import { Table } from "antd";
import { SortableItem } from "./SortableItem";
import { useDroppable } from "@dnd-kit/core";

interface XTableProps {
  data: any;
  columns: any;
  id: string;
}

const XTable: React.FC<XTableProps> = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };
  return (
    <>
      <Table
        rowKey="id"
        className="dnd"
        dataSource={props.data}
        columns={props.columns}
        pagination={false}
        components={{ body: { row: SortableItem } }}
      />
    </>
    // <div ref={setNodeRef} style={style}>
    // </div>
  );
};

export default XTable;
