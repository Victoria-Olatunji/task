import { useEffect, useState } from "react";
// import SideMenu from "./Components/SideMenu";
import { Link } from 'react-router-dom';
import photo from '../../Components/images/photo.png';
import user from '../../Components/images/user.png'

function Tailorapplication() {
  const [bankList, setBankList] = useState([]);
  const [selectedBank, setSelectedBank] = useState('')
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('')

  const selectBank = (e) => {
     setSelectedBank(e.target.value);
     console.log(e.target.value);
  };

  const getAccountDetails = ()=>{
    console.log('here');
    fetch('https://fitted-portal-api.herokuapp.com/api/v1/bank/resolveAccount', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
        body: JSON.stringify({
            bankCode: selectedBank,
            accountNo: accountName
        })
        .then(response=>response.json())
        .then(data=>setAccountName(data.content.data.account_name))
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
};

const getAccountNumber = (e) =>{
    setAccountNumber(e.target.value);
    console.log(e.target.value);
}

useEffect(() => {
  fetchBanks()
}, [bankList])

const fetchBanks = ()=>{
    fetch('https://fitted-portal-api.herokuapp.com/api/v1/bank/banks')
    .then(response=>response.json())
    .then(data=>setBankList(data.data))
}

  return (
    <>
        <div className="card">
            <div className="card-items">
                <div className="application-intro">
                    VETTED TAILOR APPLICATION
                </div>
                <div className="application-introii">
                One step closer to the goal! please provide us with your Bank details<br></br>with which you will be recieving payment.
                </div>
        <div className="application-section">
        <div className="form-profile">
            <div className="form-profilpic">
                <img className='photo'src={photo} alt="photo" />
            </div>
            <div className="profile-data">
                <div>Name: Samuel </div>
                <div>Gender: Male</div>
                <div>sew Gender:Both</div>
                <div>Phone Number:08137901372</div>
                <div>Email:biola@fitted.ng</div>
                <div>Store Name:Skibi Fashion House</div>
                <div> Location:Lagos, Nigeria</div>
            </div>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="form-selec">
                <div className="application-item-grp">
                <label className="application-item">
                    Gender You sew for? 
                </label>
                <label className="application-item">
                    Styles you sew?
                </label>
                </div>
                <div className="bar">
                <select className="bar">
                    <option value="1">Please select</option>  
                </select>
                <select className="bar">
                    <option value="1">Please select</option>
                </select>
                </div>
                
                </div>
        <div className="application-item-grp">   
            <div>
                <div>
                    <label className="application-item" htmlFor="name">Bank Name</label>
                </div>
                <div>
                    <select className="bars" value={selectedBank} onChange={selectBank}>
                    <option>Please select your bank</option>
                    {bankList.map(bank => (
                        <option key={bank.id} value={bank.code}>{bank.name}</option>
                    ))}
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <label className="application-item" htmlFor="email">Account Number:</label>
                </div>
                <div>
                <input className="bars" type="value" id="value" name="value" placeholder="please input your account number" value={accountNumber} onChange={getAccountNumber}/>
                </div>
            </div>

            <div>
                <div>
                    <label className="application-item"htmlFor="accountname">Account Name</label>
                </div>
                <div>
                <input className="bars" type="value" id="accountname" name="accountname" placeholder={accountName}  value={accountName}/>
                </div>
            </div>
        </div>
        <Link to="/vetapplication">
        <button className="btn" type="submit" onClick={getAccountDetails}>Submit Application</button>
        </Link>
            
        </form>
        </div>
            </div>
        </div>
    </>
  );
}export default Tailorapplication;
