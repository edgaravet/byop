import React, {useState} from "react";
import HelpModal from "./Modals/HelpModal";
import {connect} from 'react-redux'
import {checkNetwork, imeiCheck, openHelpModal} from "../redux/actions";
import {Header} from "./Header";

 const Step1 = (props) => {
    const  languages = [
        {
        value:'t_mobile',
        img:<img src={require('../assets/img/Font-Verizon-Logo.jpg').default}/>
    },

        {
            value: 'verizon',
            img:<img src={require('../assets/img/Font-Verizon-Logo.jpg').default}/>
        },

        {
            value: 'at&t',
            img:<img src={require('../assets/img/Font-Verizon-Logo.jpg').default}/>
        }

    ];
    const [selectedLanguage,setSelectedLanguage] = useState('');


    const updateLanguage = (language) => {
        setSelectedLanguage(language)
    }

    const handleCheck = () => {
       const data = props.data;
       if(selectedLanguage === "at&t"){
           data.carrier = selectedLanguage;

           return props.dispatch(checkNetwork(selectedLanguage))
       }

       data.carrier = selectedLanguage

        return props.dispatch(imeiCheck())
    }

    if(props.currentStep !== 1){
        return false
    }

    return(
        <div>
            <div className={'step1_body'}>
                <Header/>

                <div className={'step_select_network'}>
                    <h3>Select your current network:</h3>

                    {languages.map(function(lang) {
                        return <button className={'networks_content' + (lang.value === selectedLanguage ? ' active_network' : '')}
                                      value={lang.value}
                                      onClick = {updateLanguage.bind(null, lang.value)}
                        >{lang.img}</button>
                    },this)}
                </div>

                <div className={'help_content'}>
                    <p>Not sure? No problem. <button onClick={() => props.dispatch(openHelpModal())}>Click Here</button> to get help.</p>
                </div>

                <div className={'step_check'}>
                    <button className={(selectedLanguage ? '' : ' disabled_button')} disabled={!selectedLanguage} onClick={handleCheck}>Check Compatibility</button>
                </div>

            </div>


            <HelpModal/>

        </div>
    )
}

function mapStateToProps(state) {
     return{
         data:state.appReducer.data,
         currentStep:state.appReducer.currentStep
     }

}

export default connect(mapStateToProps,null)(Step1)