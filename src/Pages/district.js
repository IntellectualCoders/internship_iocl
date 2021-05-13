import React from 'react';
import Navbar from '../Components/navbar';
import vaccinationbydistrict from '../Components/vaccinationbydistrict';
import {withRouter} from 'react-router-dom';

function Districtpage({history}){
    return(
        <>
        <Navbar history={history} />
     <vaccinationbydistrict/>
    </>
    )
}
export default withRouter(Districtpage);
