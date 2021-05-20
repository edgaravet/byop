import React from "react";
import Header from "./Header";
import {connect} from 'react-redux';
import {changeStep} from "../redux/actions";


 const CompatibleNetwork = (props) => {

    if(!props.network_checked){
        return false
    }

    const handleNextStep = () => {
        props.dispatch(changeStep(2))
    }

     const img = require('../assets/img/Group 2744.png').default;
     const title = 'Let’s Confirm';
     const description = 'Your phone is compatible'

    return(
        <>
        <div className={'step1_body'}>


            <Header imgSrc = {img} title = {title} description = {description}/>

        </div>

            <div>
                <div className={'checked_network'}>
                    <h2>Your phone is compatible!</h2>
                    <p>Now let’s find the perfect service plan and SIM card for you.</p>
                </div>

                <div className={'step_check start_button_content'}>
                    <button className={'start_button'} onClick={handleNextStep}>Let’s Go</button>
                </div>
            </div>

            </>
    )
}


function mapStateToProps(state) {
    return{
        network_checked:state.appReducer.network_checked
    }

}


export default connect(mapStateToProps,null)(CompatibleNetwork)