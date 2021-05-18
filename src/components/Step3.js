import React, {useState} from "react";
import {connect} from 'react-redux'
import Header from "./Header";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


const Step3 = (props) => {
    const [tabIndex,setTabIndex] = useState(false)
    if(props.currentStep !== 3){
        return false
    }

    const img = require('../assets/img/Mask Group 32.png').default;
    const marks = {
        '-10': '-10°C',
        0: <strong>0°C</strong>,
        26: '26°C',
        37: '37°C',
        50: '50°C',
        100: {
            style: {
                color: 'red',
            },
            label: <strong>100°C</strong>,
        },
    };

    const log = (value) =>  {
        console.log(value); //eslint-disable-line
    }
    return(
       <>
           <div className={'step1_body'}>
               <Header imgSrc = {img}/>
           </div>


           <Tabs className={'plan_tabs'} selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
               <TabList>
                   <Tab><img src={require('../assets/img/conversation.svg').default}/>Unlimited Talk & Text</Tab>
                   <Tab>Title 2</Tab>
               </TabList>

               <TabPanel>
                   <h2>Select the monthly data you need per line</h2>
                   <Slider min={-10} marks={marks} step={null} onChange={log} defaultValue={20} />

               </TabPanel>
               <TabPanel>
                   <h2>Any content 2</h2>
               </TabPanel>
           </Tabs>

           </>
    )
}


function mapStateToProps(state) {

    return{
        currentStep: state.appReducer.currentStep,
        data:state.appReducer.data
    }

}

export default connect(mapStateToProps,null)(Step3)