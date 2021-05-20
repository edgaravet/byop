import React, {useState} from "react";
import {connect} from 'react-redux';
import Header from "./Header";
import {getResult, saveSortedData} from "../redux/actions";
import axios from "axios";
import _ from 'lodash';
import UAParser from 'ua-parser-js';


const Step4 = (props) => {
    const [payValue,setPayValue] = useState('')
    if(props.currentStep !== 4){
        return false
    }

    const img = require('../assets/img/Mask Group 32.png').default;


    const handleChangePay = (event) => {
        const {value} = event.target;


        if(isNaN(value)){
            return setPayValue('')
        }

        setPayValue(value)
    }

    const handleSavePlan = () => {
        const newData = props.data;

        newData.spendingNow = payValue;
        //props.dispatch(getResult());
        sendDataToBack(newData)
    }

    const sortByClosestData = (plans, data) => {
        let dataDiffs = plans.map((p, i) => ({...p, diff: Math.abs(p.plan_data - data)}))
        dataDiffs = _.sortBy(dataDiffs, ['diff'])
        return dataDiffs
    }

   const  filter = (plans,values) => {
        const sortedPlans = sortByClosestData(plans, values.data)
        const [recommendedPlan] = sortedPlans

        // Check if there's a plan with same price but better benefits
        const betterPlan = findPlanMoreBenefits(
            recommendedPlan, values.lineCount, sortedPlans
        )
        const plan = betterPlan || recommendedPlan;
        props.dispatch(saveSortedData(plan))


    }


  const   findPlanMoreBenefits = (recommendedPlan, lines, plans) => {
        const priceKey = lines === 1 ? 'price_per_month' : `price_per_month_${lines}_lines`
        return plans.find(plan => {
            // Skip if price is not the same
            if (parseInt(plan[priceKey], 10) !== parseInt(recommendedPlan[priceKey], 10)) {
                return false
            }

            // more data
            if (plan.plan_data > recommendedPlan.plan_data) {
                return true
            }

            // more minutes
            return plan.plan_minutes > recommendedPlan.plan_minutes;

        })
    }

    const  sendDataToBack = (data) => {

        const values = data

        values.client = 'straighttalkcom';

        axios.get(process.env.REACT_APP_API_URL,{
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
            },
            params:JSON.stringify(data)
        })
            .then(function (response) {
                handleAnalyticRequest(response,null,values)
                filter(response.data,data)
                props.dispatch(getResult())

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const  handleAnalyticRequest = (req , event , additionalData) => {

        const ANALYTICS_API = process.env.REACT_APP_ANALYTICS_API;
        const parser = new UAParser(req.headers['user-agent']);
        const agentInfo = parser.getResult();
        const predefinedDataFiends = {

        };
        const finalOutput =  {
            event,
            ...predefinedDataFiends,
            ...agentInfo,
            ...additionalData,
        };

        axios.post(ANALYTICS_API + '/analytics', finalOutput)
            .then(res => {})
            .catch(err => {
                console.log(err)
            })

    }

    const title = 'Almost Done';
    const description = 'We can calculate your savings'

    return(


    <>
        <div className={'step1_body'}>
            <Header imgSrc = {img} title = {title} description = {description} />
        </div>

        <div className={'monthly_pay_content'}>
            <h2>As of today how much do you pay for your monthly service?</h2>
            <span>(All lines included.)</span>

            <div className={'pay_input_content'}>
                <input type={'tel'}  maxLength="3" value={payValue} placeholder={'$'}  onChange={handleChangePay}/>
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