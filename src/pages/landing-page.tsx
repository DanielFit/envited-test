import React from 'react';
import landingpageImage from '../images/landing-page-image.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing-page.css'



 const LandingPage = () => {
return <div> 

<div className="titleOne"> Imagine if 
<div className="titleTwo">Snapchat</div>
had events</div> 


<span className='subText'>Easily host and share events with your</span>
<p className='subText'>friends across any social media</p>

<img className='mainImage' src={landingpageImage} />


<a className='button'  target="_blank">
 <button className='buttonText'>🎉 Create my event </button>
</a>
</div>
 }

export default LandingPage;