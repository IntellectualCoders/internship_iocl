import React from 'react';
import Navbar from '../Components/navbar';
import Vaccination from '../Components/vaccination';
import {withRouter} from 'react-router-dom';

function VaccinationPage({history}){
    return(
        <>
        <Navbar history={history} />
     <Vaccination/>
    </>
    )
}
export default withRouter(VaccinationPage);
