import React from 'react';

export default function Homepage() {
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
                Date Time
            </p>
            
            <p>
                Notification
            </p>
            <p>
                Settings
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