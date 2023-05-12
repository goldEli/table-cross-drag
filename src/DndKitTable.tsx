import { useState } from "react";
import { DragOutlined } from "@ant-design/icons";
import { Table } from "antd";
import type { TableColumnProps } from "antd";

import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

import { SortableItem } from "./SortableItem";
import "./styles.scss";
import XTable from "./XTable";
import { Draggable } from "./Draggable";

const data = [
  { id: "1", name: "张三", age: 33, sex: "女" },
  { id: "2", name: "李四", age: 90, sex: "男" },
  { id: "3", name: "王五", age: 17, sex: "女" },
];
const data1 = [
  { id: "11", name: "孔艳", age: 33, sex: "女" },
  { id: "22", name: "江艳", age: 90, sex: "男" },
  { id: "33", name: "姚娜", age: 17, sex: "女" },
  { id: "44", name: "何洋", age: 77, sex: "女" },
  { id: "55", name: "卢静", age: 47, sex: "男" },
];

type TableItem = {
  id: string;
  name?: string;
  sex?: string;
  age?: number;
  address?: string;
};

const DndKitTable = () => {
  const [dataSource, setDataSource] = useState<any[]>(data);

  const columns: TableColumnProps<TableItem>[] = [
    {
      title: "排序",
      dataIndex: "sort",
      width: 60,
      render: () => <DragOutlined />,
      align: "center",
    },
    { title: "姓名", dataIndex: "name" },
    { title: "性别", dataIndex: "sex" },
    { title: "年龄", dataIndex: "age" },
    { title: "地址", dataIndex: "address" },
  ];

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    console.log(active, over);

    if (active.id !== over?.id) {
      const oldIndex = dataSource.findIndex((item) => item.id === active.id);
      const newIndex = dataSource.findIndex((item) => item.id === over?.id);

      const next = arrayMove(dataSource, oldIndex, newIndex);

      setDataSource(next);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext
        items={[...data1, ...dataSource].map((c) => c.id)}
        strategy={verticalListSortingStrategy}
      >
        <XTable id="1" data={data1} columns={columns} />
        <XTable id="2" data={dataSource} columns={columns} />
      </SortableContext>
    </DndContext>
  );
};

export default DndKitTable;
