import { useState } from "react";
// import SideMenu from "./Components/SideMenu";
import photo from '../../Components/images/photo.png'

export default function Multiple() {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
};

  return (
    <>
        <div>
            <div>
                <img className='photo'src={photo} alt="photo" />
            </div>
            <div>
                Name:
                Gender:
                sew Gender:
                Phone Number:
                Email Address:
                Store Name:
                Location:
            </div>
        </div>

        <form onSubmit={handleSubmit}>
            <label>
                Gender You sew for?
                <select>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </select>
            </label>
            <label>
                Styles you sew?
                <select>
                    <option value="1">Agdada</option>
                    <option value="2">Gown</option>
                </select>
            </label>
            <label htmlFor="name">Bank Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

            <label htmlFor="email">Account Number:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

            <label htmlFor="email">Account Name:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

            <button type="submit">Submit</button>
        </form>
    </>
  );
}