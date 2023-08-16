import { useEffect, useState } from "react";
// import SideMenu from "./Components/SideMenu";
import photo from '../../Components/images/photo.png';
import { useNavigate } from "react-router-dom";

function Tailorapplication() {
  const [bankList, setBankList] = useState([]);
  const [selectedBank, setSelectedBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const navigate = useNavigate();

  const selectBank = (e) => {
     setSelectedBank(e.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    const payload = JSON.stringify({
        bankCode: selectedBank,
        accountNo: accountNumber
    });
    
    fetch('https://fitted-portal-api.herokuapp.com/api/v1/bank/resolveAccount', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
        body: payload
    })
    .then(response=>response.json())
    .then(data=>setAccountName(data.content.data.account_name));
    
  }



const getAccountNumber = (e) =>{
    setAccountNumber(e.target.value);
}

useEffect(() => {
  fetchBanks()
}, [bankList])

const fetchBanks = ()=>{
    fetch('https://fitted-portal-api.herokuapp.com/api/v1/bank/banks')
    .then(response=>response.json())
    .then(data=>setBankList(data.data))
}

const onSuccess = (e) =>{
    e.preventDefault()
    navigate('/vetapplication')
}
  return (
    <>
    <div className="card">
            <div className="card-items">
                <div className="application-intro">
                    Vetted Tailor Application
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
                <div>Sew Gender:Both</div>
                <div>Phone Number:08137901372</div>
                <div>Email:biola@fitted.ng</div>
                <div>Store Name:Skibi Fashion House</div>
                <div>Location:Lagos, Nigeria</div>
            </div>
        </div>

        <form>
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
                    <option value="">Please select</option>  
                </select>
                <select className="bar">
                    <option value="">Please select</option>
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
                <input className="bars" type="value" id="value" name="value" placeholder="please input your account number" value={accountNumber} onChange={getAccountNumber} onBlur={handleSubmit}/>
                </div>
            </div>

            <div>
                <div>
                    <label className="application-item"htmlFor="accountname">Account Name</label>
                </div>
                <div>
                <input className="bars" type="value" id="accountname" name="accountname" placeholder={accountName.toString()}  value={accountName}/>
                </div>
            </div>
            </div>     
            <button className="btn" type="button" onClick={onSuccess}>Submit Application</button>       
        </form>
        </div>
            </div>
    </div>
    </>
  );
}export default Tailorapplication;
