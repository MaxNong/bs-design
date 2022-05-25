import Table from "eh-design/components/table/Table";

import "eh-design/components/table/style/index";

const TableDemo = (): JSX.Element => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <span>{text}</span>
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags: string[]) => <span>{tags}</span>
    }
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["teacher"]
    }
  ];
  return <Table columns={columns} dataSource={data} rowKey="key" />;
};

export default TableDemo;
