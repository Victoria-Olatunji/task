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
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <>
    <div>
      <img className='profile-section'src={profilesection} alt="profilesection" />
      </div>
    <div className="transsection">
      <h3 className="searchbar"></h3>
      <table className="transtable">
        <tr className="transheading">
          <th>
          <label>
                <select className="transheading" >
                    <option value="" >Transaction ID</option>
                </select>
            </label>
          </th>
          <th>
          <label>
                <select className="transheading">
                    <option value="">Transaction type</option>
                </select>
            </label>
          </th>
          <th>
          <label>
                <select className="transheading">
                    <option value="">Date</option>
                </select>
            </label>
          </th>
          <th>
          <label>
                <select className="transheading">
                    <option value="">Amount</option>
                </select>
            </label>
          </th>
          <th>
          <label>
                <select className="transheading">
                    <option value="1">Payment</option>
                </select>
            </label>
          </th>
          <th>
          <label>
                <select className="transheading">
                    <option value="1">Status</option>
                </select>
            </label>
          </th>
        </tr>
        <tr className="firsttransrow">
          <td className="transdata">790841</td>
          <td className="transtype">ReceiveToken</td>
          <td className="date">12-June-2021</td>
          <td className="amount">5 Tokens</td>
          <td className="paymentt">Token Wallet</td>
          <td className="status">
            <Button type="Successful" />
          </td>
        </tr>
        <tr className="sectransrow">
          <td className="transdata">790841</td>
          <td className="transtype">ReceiveToken</td>
          <td className="date">12-June-2021</td>
          <td className="amount">5 Tokens</td>
          <td className="paymentt">Token Wallet</td>
          <td className="status">
            <Button type="Successful" />
          </td>
        </tr>
        <tr className="thirdtransrow">
          <td className="transdata">790841</td>
          <td className="transtype">ReceiveToken</td>
          <td className="date">12-June-2021</td>
          <td className="amount">5 Tokens</td>
          <td className="paymentt">Token Wallet</td>
          <td className="status">
            <Button type="Successful" />
          </td>
        </tr>
        <tr className="thirdtransrow">
          <td className="transdata">790841</td>
          <td className="transtype">ReceiveToken</td>
          <td className="date">12-June-2021</td>
          <td className="amount">5 Tokens</td>
          <td className="paymentt">Token Wallet</td>
          <td className="status">
            <Button type="Successful" />
          </td>
        </tr>
        <tr className="thirdtransrow">
          <td className="transdata">790841</td>
          <td className="transtype">ReceiveToken</td>
          <td className="date">12-June-2021</td>
          <td className="amount">5 Tokens</td>
          <td className="paymentt">Token Wallet</td>
          <td className="status">
            <Button type="Successful" />
          </td>
        </tr>
      </table>
    </div>
    </>
  );
}


export default Myprofile;
