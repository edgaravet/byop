import React, {useState} from "react";
import {connect} from 'react-redux'
import Header from "./Header";
import {changeData} from "../redux/actions";


const Step2 = (props) => {

    let arr = new Array(5).fill(1)
    const [count,setCount] = useState(1)


    if(props.currentStep !== 2){
        return false
    }


    const increment = () => {

        setCount(count + 1)

    }


    const decrement = () => {
        if(count > 1 ){
        setCount(count - 1)

        }
    }

    const handleSetValue = () => {
       const data = props.data;
       data.lineCount = count

        props.dispatch(changeData(data,3))
    }

    const img = require('../assets/img/Group 2748.png').default;
    const title = 'Let’s Take a Look';
    const description = 'At what you need'
    return(
        <>
        <div className={'step1_body'}>
            <Header imgSrc = {img} title = {title} description = {description}/>
        </div>

            <div className={'lines_select'}>
                <h3>How many lines? Select up to 5.</h3>
            </div>

            <div className={'lines_select'}>
                <div onClick={decrement}><i className="fal fa-minus"></i></div>
                {arr.map((item,key) => {
                    return(

                        <i key={key} className={(key < count ? 'active fas ' :' far user_icons') + ' fa-user '}/>
                    )
                })}



                <div onClick={increment}><i className="fal fa-plus"></i></div>


            </div>

            <div className={'step_check start_button_content'}>
                <button className={'start_button'} onClick={handleSetValue}>Select Plan Preference</button>
            </div>

            </>
    )
}

function mapStateToProps(state) {
    return{
        data:state.appReducer.data,
        currentStep:state.appReducer.currentStep
    }

}

export default connect(mapStateToProps,null)(Step2);