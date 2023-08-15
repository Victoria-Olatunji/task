import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import bell from '../images/bell.png'
import profile from '../images/profile-picture.png'
import vector from '../images/Vector.png'
import { getAllbanks, getResolveAccountNumber } from "../../API";

function AppHeader() {
  // const [comments, setComments] = useState([]);
  // const [orders, setOrders] = useState([]);
  // const [commentsOpen, setCommentsOpen] = useState(false);
  // const [notificationsOpen, setNotificationsOpen] = useState(false);

  // useEffect(() => {
  //   getAllBanks().then((res) => {
  //     setComments(res.comments);
  //   });
  //   getAllBanks().then((res) => {
  //     setOrders(res.products);
  //   });
  // }, []);

  return (
    <div className="AppHeader">
      <div>
      {/* <Typography.Title className="pro" style={{fontSize:15, marginLeft:200 }}>My Profile</Typography.Title> */}

      <Space>
        <div className="profile_title">
        <img className='vector' 
            src={vector}
            alt="vector" 
            style={{ width:15 }}
            />
          My Profile
        </div>
          <img className="pro"
            src={bell} 
            alt="bell"
            style={{ width:25 }}
            onClick={() => {
              
            }}
            
          />
          <img className="proi"
            src={profile} 
            alt="profile"
            style={{ width:30 }}
            onClick={() => {
              
            }}
          />
      </Space>
      </div>
    </div>
  );
}
export default AppHeader;
