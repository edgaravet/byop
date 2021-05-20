import React, {useState} from "react";
import {connect} from 'react-redux'
import Header from "./Header";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import RightTab from "./Tabs/RightTab";
import {changeData} from "../redux/actions";


const Step3 = (props) => {
    const [tabIndex,setTabIndex] = useState(-1)
    const [slider_value,setSliderValue] = useState(1)
    const [text,setText] = useState('Email Social Media & Light Browsing')
    const [imgUrl,setImgUrl] = useState(require('../assets/img/conversation.svg').default)
    const [largeRels,setLargeRels] = useState('')
    if(props.currentStep !== 3){
        return false
    }
    const max = 36
    const img = require('../assets/img/Mask Group 32.png').default;

    const log = (value) => {


        if(value >= 1 && value <10 ){
            setText('Email Social Media & Light Browsing')
            setLargeRels('')
        }

        if(value >= 10 && value !== 25){
            setText('Music & Moderate Browsing')
            setLargeRels('medium_slider')

        }

        if(value === 25){
            setText('Ideal for trips, Music & playing videos sometimes')
            setLargeRels('large_slider')

        }


        if (value > 25) {
            setText('Videos, Streaming, Music & Heavy Browsing')
            setLargeRels('extra_slider')
            return setSliderValue(36)
        }

        setSliderValue(value)
    }
    const marks = {
        1: {
            style: {

            },
            label: <span className={slider_value === 5 ? 'activation' : 'slider_label'}>1GB<h3 style={slider_value === 1 ? {display:'block'} : {display: 'none'}}>Starting at $<span>20</span></h3></span>
        },
        10: {
            label: <span className={slider_value === 10 ? 'activation slider_label' : 'slider_label'}><h3 style={slider_value === 10 ? {display:'block'} : {display: 'none'}}>Starting at $<span>40</span></h3></span>

        },

        25: {
            label: <span className={slider_value === 25 ? 'activation slider_label' : 'slider_label'}>1GB<h3 style={slider_value === 25 ? {display:'block'} : {display: 'none'}}>Starting at $<span>50</span></h3></span>

        },
        [max]: {
            style: {

            }, label: <span  className={slider_value === 50 ? 'activation slider_label' : 'slider_label'}>UNL<h3 style={slider_value === max ? {display:'block'} : {display: 'none'}}>Starting at $<span>50</span></h3></span>
        }
    }



    const changeTab = (index) => {
        if(index === 0){
            setImgUrl(require('../assets/img/conversation_active.svg').default)
        }else {
            setImgUrl(require('../assets/img/conversation.svg').default)
        }
        setTabIndex(index)
    }


    const handleSubmit = () => {
        const newData = props.data;

        newData.data = slider_value
        props.dispatch(changeData(newData,4))
    }


    const title = 'Now What About';
    const description = 'Your usage?'

    return(
       <>
           <div className={'step1_body'}>
               <Header imgSrc = {img} title = {title} description = {description} />
           </div>


            <div className={'tabs_content'}>

                <h2 className={'enter_plan_title'}>Click on your plan preference</h2>



                <Tabs className={'plan_tabs'} selectedIndex={tabIndex} onSelect={changeTab}>
                    <TabList>
                        <Tab><img src={imgUrl} alt = {'unlimited_icon'}/>Unlimited Talk & Text</Tab>
                        <Tab>
                            <svg className={tabIndex === 1 ? 'active_svg' : ''} xmlns="http://www.w3.org/2000/svg" width="38" height="38.626" viewBox="0 0 38 38.626">
                                <defs>

                                </defs>
                                <g transform="translate(-3.832 0)">
                                    <g transform="translate(3.832 0)">
                                        <g transform="translate(0 0)">
                                            <path className="a"
                                                  d="M40.6,12.9a1.527,1.527,0,0,0-2.856,1.081A15.937,15.937,0,0,1,16.552,34.272a16.073,16.073,0,0,1-3.164-1.8A15.937,15.937,0,0,1,28.606,4.775L27.524,6.6c-.3.5-.069.837.507.744l5.142-.83a.855.855,0,0,0,.693-1.169L32.121.44c-.2-.55-.6-.589-.9-.087L30.182,2.115A18.99,18.99,0,0,0,5.2,26.674a18.865,18.865,0,0,0,6.379,8.256,19.13,19.13,0,0,0,3.771,2.149A18.991,18.991,0,0,0,40.6,12.9Z"
                                                  transform="translate(-3.832 0)"/>
                                            <path className="a"
                                                  d="M214.22,90.917a1.236,1.236,0,0,0-1.236,1.237v12.32l11.268,5.825a1.237,1.237,0,1,0,1.135-2.2l-9.93-5.133V92.154A1.236,1.236,0,0,0,214.22,90.917Z"
                                                  transform="translate(-195.89 -83.486)"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>Fixed Talk & Text</Tab>
                    </TabList>


                    <div style={tabIndex !== -1 ? {display:'block'} : {display:'none'} } className={'tab_plan_content'}>



                    <TabPanel>
                        <h2 className={'plan_title'}>Select the monthly data you need per line</h2>

                        <div style={{height:'236px'}}>
                            <div className={'round_block'}>
                                <div style={tabIndex !== -1 ? {display:'block'} : {display:'none'} } className={(largeRels) + ' slider_info'}>
                                    <h2>{slider_value > 25 ? "UNL" : slider_value + 'GB'}</h2>
                                    <p>{text}</p>
                                </div>
                            </div>
                        </div>
                        <Slider  dots={false}  className={'range_slider data_count_slider'} value={slider_value} onChange={log} step={1} defaultValue={1} min={1}  max={max}  marks={marks}/>

                    </TabPanel>


                    <TabPanel>
                        <RightTab tabIndex = {tabIndex}/>
                    </TabPanel>
                        <div className={'step_check'}>
                        <button onClick={handleSubmit}>Let’s Find Your Savings</button>
                        </div>


                    </div>

                </Tabs>
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

export default connect(mapStateToProps,null)(Step3)