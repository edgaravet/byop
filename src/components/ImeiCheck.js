import React, {useState} from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {showImeiModal} from "../redux/actions";


 const ImeiCheck = (props) => {
     const [imeiValue,setImeiValue] = useState('')

     if(!props.imeiCheck){
         return false
     }



     const handleImeiValue = (event) => {
         const {value} = event.target

         setImeiValue(value)
     }


     const showModal = () => {

         props.dispatch(showImeiModal())
     }


     const handleSubmit = () => {
         console.log('submited')
     }

     const img = require('../assets/img/Group 2744.png').default

    return(
        <>
        <div className={'step1_body'}>
          <Header imgSrc = {img}/>
        </div>

            <div className={'imei_check_content'}>
              <p>
                  Let’s do a quick check to confirm your device is compatible. Please enter your Phone’s <span>Serial Number,</span> also known as <span>IMEI.</span>
              </p>



                <div className={'imei_check_input'}>
                    <input type={'text'} name={'imei'} required={true} placeholder={'Enter your IMEI'} value={imeiValue} onChange={handleImeiValue}/>
                    <img src={require('../assets/img/Icon feather-info.svg').default} onClick={showModal} alt={'modal_icon'}/>

                </div>

                <div className={'imei_check_submit'}>
                    <button onClick={handleSubmit} disabled={!imeiValue} className={'default_buttons' + (!imeiValue ? ' disabled_button' : '')}>Submit</button>
                </div>

            </div>

            </>
    )
}


function mapStateToProps(state) {
    return{
        imeiCheck:state.appReducer.imeiCheck
    }

}


export default connect(mapStateToProps,null)(ImeiCheck);