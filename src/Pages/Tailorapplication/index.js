import { useState } from "react";
// import SideMenu from "./Components/SideMenu";
import photo from '../../Components/images/photo.png';
import user from '../../Components/images/user.png'

function Tailorapplication() {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
};

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
                <input type="text" id="name" name="name" placeholder="please select your Bank" value={formData.name} onChange={handleChange} className="bars"/>
                </div>
            </div>
            <div>
                <div>
                    <label className="application-item" htmlFor="email">Account Number:</label>
                </div>
                <div>
                <input className="bars" type="value" id="value" name="value" placeholder="please input your account number" value={formData.number} onChange={handleChange}/>
                </div>
            </div>

            <div>
                <div>
                    <label className="application-item"htmlFor="accountname">Account Name</label>
                </div>
                <div>
                <input className="bars" type="value" id="accountname" name="accountname" placeholder={user} value={formData.name} onChange={handleChange}/>
                </div>
            </div>
        </div>

            <button type="submit">Submit Application</button>
        </form>
        </div>
            </div>
        </div>
    </>
  );
}export default Tailorapplication;
