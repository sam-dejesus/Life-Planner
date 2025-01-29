import React from 'react';
import { useNavigate } from 'react-router-dom';
import dateHelper from '../components/helper functions/DateTime'
import ProgressWheel from '../components/UI/ProgressWheel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear,faBell,faHomeUser,faMoneyBills,faDumbbell,faBookBookmark } from '@fortawesome/free-solid-svg-icons';




const today = dateHelper(new Date())

export default function Homepage() {
    const n = useNavigate();
    return (
        <div className='homepageContainer col-11 mt-5 border'>
            {/* header section*/}
           <div className='homepageHeader col-12 d-flex justify-content-between p-3 bg-info'>
            <p>
                Account Name
            </p>
            <p>
                <FontAwesomeIcon
                icon={faHomeUser}
                />
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
           <div className=" d-flex flex-row m-5">
            <ProgressWheel
                size={150}
                strokeWidth={18}
                color="#99ffbb"

            />
            <ProgressWheel
                size={150}
                strokeWidth={18}
                color="#99ffbb"

            />
            <ProgressWheel
                size={150}
                strokeWidth={18}
                color="#99ffbb"

            />
            <ProgressWheel
                size={150}
                strokeWidth={18}
                color="#99ffbb"

            />
            </div>

           </div>

           {/* footer section */}
           <div className='homepageFooter bg-info d-flex flex-row justify-content-center align-items-center gap-5'>

            <FontAwesomeIcon
            icon={faMoneyBills}
            onClick={() => n('/Finance-Hub')}
            style={{ cursor: 'pointer'}}
            
            />
            <FontAwesomeIcon
            icon={faDumbbell}
            onClick={() => n('/Health-Hub')}
            style={{ cursor: 'pointer'}}
            
            />
            <FontAwesomeIcon
            icon={faBookBookmark}
            onClick={() => n('/Personal-hub')}
            style={{ cursor: 'pointer'}}

            />

           </div>

        </div>
    );
    }  