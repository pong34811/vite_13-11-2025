import React, { useEffect, useState } from "react";
import { Table, Image } from "antd";
import { getTransactions } from "../../utils/transactions";

export default function Index() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // กำหนด columns ของ antd table
  const columns = [
    {
      title: "วันที่",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "ประเภท",
      dataIndex: "type",
      key: "type",
      render: (type) => (type === "income" ? "รายรับ" : "รายจ่าย"),
    },
    {
      title: "ชื่อรายการ",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "จำนวนเงิน",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => `${amount} บาท`,
    },
    {
      title: "รูปภาพ",
      dataIndex: "image",
      key: "image",
      render: (img) =>
        img ? <Image width={120} src={img} /> : <span>-</span>,
    },
  ];

  useEffect(() => {
    async function load() {
      let data = await getTransactions();
      data.sort((a, b) => b.timestamp - a.timestamp);
      setTransactions(data);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>รายการธุรกรรม (Transactions)</h2>

      <Table
        columns={columns}
        dataSource={transactions}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}
