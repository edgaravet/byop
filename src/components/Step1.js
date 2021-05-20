import React, {useState} from "react";
import HelpModal from "./Modals/HelpModal";
import {connect} from 'react-redux'
import {changeData, checkNetwork, imeiCheck, openHelpModal} from "../redux/actions";
import Header from "./Header";

 const Step1 = (props) => {
    const  languages = [
        {
        value:'t_mobile',
        img:<img src={require('../assets/img/Font-Verizon-Logo.jpg').default} alt={'t_mobile'}/>
    },

        {
            value: 'verizon',
            img:<img src={require('../assets/img/Font-Verizon-Logo.jpg').default} alt={'verizon'}/>
        },

        {
            value: 'at&t',
            img:<img src={require('../assets/img/Font-Verizon-Logo.jpg').default} alt={'at&t'}/>
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
        props.dispatch(changeData(data))
        return props.dispatch(imeiCheck())
    }

    if(props.currentStep !== 1){
        return false
    }

    const img = require('../assets/img/Group 2744.png').default
    const title = 'Let’s Confirm';
    const description = 'Your phone is compatible'


    return(
        <div>
            <div className={'step1_body'}>
                <Header imgSrc = {img} title = {title} description = {description}/>

                <div className={'step_select_network'}>
                    <h3>Select your current network:</h3>

                    {languages.map(function(lang,key) {
                        return <button key={key} className={'networks_content' + (lang.value === selectedLanguage ? ' active_network' : '')}
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