import React, {useState} from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {changeStep, showImeiModal, startOver} from "../redux/actions";
import axios from "axios";
import Loader from "react-loader-spinner";



const ImeiCheck = (props) => {
        const [imeiValue,setImeiValue] = useState('')
        const [eligible,setEligible] = useState(null)
        const [error,setError] = useState('')
        const [loader,setLoader] = useState(false)


     if(!props.imeiCheck){
         return false
     }



     const handleImeiValue = (event) => {
            const {value} = event.target
            setError('')
            setImeiValue(value)
     }


     const showModal = () => {

         props.dispatch(showImeiModal())
     }


     const handleSubmit = () => {
         const carrier = props.data.carrier === 'verizon' ? 'VZW ' : 'TMO ';
         setLoader(true)
         axios.get(`https://api.saveonyourwirelessbill.com/v2/imeilookup?imei=${imeiValue}&carrier=${carrier}`,{
             headers: {
                 'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
             },
         })
             .then(res => {
                 setLoader(false)
                if(res.data.retry){
                    return setError('Wrong IMEI')
                }
                 setEligible(res.data.eligible)
                 setLoader(false)

             })
     }

     const handleClose = () => {
         setEligible(null)
         setImeiValue('')
         props.dispatch(startOver())
     }

     const handleNext = () => {
         props.dispatch(changeStep(2))
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
                    {error && <h5 className={'error_message'}>{error}</h5>}
                    <Loader
                        visible = {loader}
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                    {eligible === null ? <button onClick={handleSubmit} disabled={!imeiValue} className={'default_buttons' + (!imeiValue ? ' disabled_button' : '')}>Submit</button> : ''}

                    {eligible === true &&
                        <>
                            <p className={'imei_check_text success_message'}><span>Your phone is compatible!<br/></span>Now let’s find the perfect service plan and SIM card for you.</p>
                        <div className={'step_check start_button_content'}>
                            <button onClick={handleNext}>Let's go</button>
                        </div>
                        </>
                    }
                    {eligible === false &&
                        <>
                    <p className={'imei_check_text'}><span>Oh No!<br/></span>Your phone is not compatible. But don't worry, you can find an excellent selection of compatible phones online.</p>
                     <div className={'step_check start_button_content'}>
                    <button onClick={handleClose}>Close</button>
                     </div>
                    </>
                    }
                </div>

            </div>

            </>
    )
}


function mapStateToProps(state) {
    return{
        imeiCheck:state.appReducer.imeiCheck,
        data:state.appReducer.data,
    }

}


export default connect(mapStateToProps,null)(ImeiCheck);