import React from 'react';
import BirthdayCake from '../images/Birthday-cake.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './event-page.css'
import CreateEvent from './create-event'




const EventPage = () => {
    return <div> 
    host name {CreateEvent.HostName}
    </div>
     }
    
    export default EventPage;