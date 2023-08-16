import React from 'react';
import { Link } from 'react-router-dom';
import vetted from '../../Components/images/vetted.png';

function VetApplication() {
  return (
  <>
    <div className='cardii'>
      <img className='vetted'src={vetted} alt="vetted" />
      <div className='vettediii'>Yay!!! 🎉</div>
      <div className='vettedi'>
          Your application to become a vetted tailor has been sent, a Fitted Agent<br></br> will get in touch with you regard the next steps. Goodluck!
      </div>
      <div>
        <Link to="/">
            <button className="btnii" type="submit" >Return to Dashboard</button>
          </Link>
      </div>
    </div>
    

  </> 
  )
}

export default  VetApplication
