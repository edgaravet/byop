import React from "react";
import {connect} from 'react-redux'
import {Header} from "./Header";


const Step2 = (props) => {
    if(props.currentStep !== 2){
        return false
    }
    return(
        <>
        <div className={'step1_body'}>
            <Header/>
        </div>

            <div className={'lines_select'}>
                <h3>How many lines? Select up to 5.</h3>
            </div>

            </>
    )
}

function mapStateToProps(state) {

    return{
        currentStep: state.appReducer.currentStep
    }

}

export default connect(mapStateToProps,null)(Step2);