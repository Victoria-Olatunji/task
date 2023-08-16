import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { LiaTapeSolid } from 'react-icons/lia';
import { LiaTshirtSolid } from 'react-icons/lia';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { MdLogout} from 'react-icons/md';
import logo from '../images/logo.png';
import profile from '../images/profile-picture.png';
import icon from '../images/icon.png';
import application from '../images/application.png';
import iconii from '../images/iconii.png';
import { withRouter } from 'react-router-dom';

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenuVertical">
      <div className='sidebar'>
            <ul>
                <div className='main'>
                    <div>
                    <img src={logo} alt="logo" />
                    </div>
                    <div className='profile'>
                        <img className='proflepic' src={profile} alt="profile-picture" />
                        <img src={icon} alt="profile-picture" />
                    </div>
                    <div className='tailor-profile'>Sikiru Agbaje</div>
                    <div className='tailor-email'>
                    www.tailors.fitted.ng/sikiru
                    <img className='iconii'src={iconii} alt="icon" />
                    </div>
                    <div className='getmeasurement'>Get measurements from any customer via this link</div>
                </div>
                <div className='drop-down'>
                    <select>
                    <option value="Non-vetted Tailor">Non-vetted Tailor</option>
                    <option value="Vetted Tailor">Vetted Tailor</option>
                    </select>
                <Menu className="application"
                mode="vertical"
                onClick={(item) => {
                  navigate(item.key);
                }}
                selectedKeys={[selectedKeys]}
                    items={[
                      {
                        label: "Apply to be a VETTED Tailor",
                        key: "/Tailorapplication",
                        
                      },
                    ]}
                    ></Menu>
                </div> 
              </ul>
      </div>
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Measurements",
            icon: <LiaTapeSolid  />,
            
          },
          {
            label: "Orders",
            
            icon: <RiShoppingBag2Line  />,
          },
          {
            label: "Products",
             
            icon: <LiaTshirtSolid  />,
          },
          {
            label: "Customers",
            
            icon: <UserOutlined />,
          },
          {
            label: "My Profile",
            key: "/myprofile",
            icon: <UserOutlined />,
          },
          {
            label: "Logout",
            
            icon: <MdLogout />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
