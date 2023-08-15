import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import profilesection from '../../Components/images/profile-section.png'
import { getAllBanks, getResolveAccountNumber } from "../../API";

function Myprofile() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllBanks().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
  <>
      <div>
      <img className='profile-section'src={profilesection} alt="profilesection" />
      </div>
    <Space size={20} direction="vertical" className="ref">
      <Typography.Title level={4}></Typography.Title>
      <Table className="table"
        loading={loading}
        columns={[
          {
            title: "Transaction ID",
            dataIndex: "Transaction ID",
          },
          {
            title: "Transaction type",
            dataIndex: "Transaction type",
            render: (value) => <span>{value}</span>,
          },
          {
            title: "Date",
            dataIndex: "Date",
            render: (value) => <span>{value}</span>,
          },
          {
            title: "Amount",
            dataIndex: "Amount",
          },
          {
            title: "Payment",
            dataIndex: "Paymentl",
          },
          {
            title: "Status",
            dataIndex: "Status",
          },
        ]}
        
      ></Table>
    </Space>
    </>
  );
}
export default Myprofile;
