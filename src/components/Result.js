import React from "react";
import {connect} from 'react-redux'
import Header from "./Header";



const Result = (props) => {
    if(!props.result){
        return false
    }

    const img = require('../assets/img/Mask Group 33.png').default;
    return(
        <>

            <div className={'step1_body'}>
                <Header imgSrc = {img}/>
            </div>

            <div className={'plan_title'}>
                <h2>YOU WILL SAVE $600/YR.</h2>
            </div>

            <div className={'recommended_plan'}>
                <h2>Your recommended SIM and plan:</h2>
                <span>Net10</span>
            </div>

            <div className={'plan_info'}>
                <h3>$1</h3>
                <h4>Net10 SIM Kit</h4>
                <p>Includes Nano, Micro and SIM cards, compatible with ATT network or Unlocked compatible GSM phones.</p>
            </div>


            <div className={'plan_description'}>
                <h3>$35</h3>
                <h4>$35 5GB Plan, Plus $10 Intl. Calling Credit, 1 Line</h4>
                <ul>
                    <li><span>30</span>Service Days</li>
                    <li>Unlimited nationwide talk and text</li>
                    <li>Mobile Hotspot Capable (up to 5GB)</li>
                    <li>No Contract </li>
                    <li>Add more data whenever you need it</li>
                    <li>For 1 line/device</li>
                </ul>
            </div>

            <div className={'plan_save'}>
                <a>Start Over</a>


                <button><i className="fas fa-download"></i>Save Results</button>
            </div>

            </>
    )
}



function mapStateToProps(state) {

    return{
        result:state.appReducer.result
    }

}

export default connect(mapStateToProps,null)(Result);