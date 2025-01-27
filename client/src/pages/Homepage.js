import React from 'react';
import { useNavigate } from 'react-router-dom';
import dateHelper from '../components/helper functions/DateTime'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear,faBell } from '@fortawesome/free-solid-svg-icons';




const today = dateHelper(new Date())

export default function Homepage() {
    const n = useNavigate();
    return (
        <div className='homepageContainer col-11 mt-5 bg-info'>
            {/* header section*/}
           <div className='homepageHeader col-12 d-flex justify-content-between p-3'>
            <p>
                Account Name
            </p>
            <p>
                Main Dashboard
            </p>
            
            <div className='d-flex justify-content-center gap-2 '>
            <p>
                {today.formattedDate}
            </p>
            
            <p>
            <FontAwesomeIcon
            onClick={() => n('/Notifications')}
            icon={faBell} 
            style={{ cursor: 'pointer' }}
            />
            </p>
            <p>
            <FontAwesomeIcon
            icon={faGear} 
            onClick={() => n('/Settings')}
            style={{ cursor: 'pointer'}}
            />
            </p>
            </div>
            
           </div>

           {/* KPI section */}
           <div className='kpiContainer'>

           </div>

           {/* footer section */}
           <div className='homepageFooter'>

           </div>

        </div>
    );
    }  