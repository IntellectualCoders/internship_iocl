import React from 'react';
import CenteredGrid from '../Components/main';
import Navbar from '../Components/navbar';
import {withRouter} from 'react-router-dom';

function Home ({history}){
    return(
        <>
        <Navbar history={history}/>
        <CenteredGrid />
        </>
    )
}
export default withRouter(Home);