import React, {useState} from "react";
import {connect} from 'react-redux';
import Header from "./Header";
import {getResult, nextStep} from "../redux/actions";


const Step4 = (props) => {
    const [payValue,setPayValue] = useState()
    if(props.currentStep !== 4){
        return false
    }

    const img = require('../assets/img/Mask Group 32.png').default;


    const handleChangePay = (event) => {
        const {value} = event.target;

        setPayValue(value)
    }

    const handleSavePlan = () => {
        props.dispatch(getResult());
    }

    return(


    <>
        <div className={'step1_body'}>
            <Header imgSrc = {img}/>
        </div>

        <div className={'monthly_pay_content'}>
            <h2>As of today how much do you pay for your monthly service?</h2>
            <span>(All lines included.)</span>

            <div className={'pay_input_content'}>
                <input type={'number'} placeholder={'$'}  onChange={handleChangePay}/>
                <span>(optional)</span>
            </div>

            <p>We will use this information to calculate the difference between your current monthly payment and our best service plan for you.</p>

            <div className={'step_check start_button_content'}>
                <button onClick={handleSavePlan}>Find Your Plan</button>
            </div>
        </div>

        </>
    )
}




function mapStateToProps(state) {

    return{
        currentStep: state.appReducer.currentStep,
        data:state.appReducer.data
    }

}



export default connect(mapStateToProps,null)(Step4)