import React, {useState} from "react";
import {TabPanel} from "react-tabs";
import Slider from "rc-slider";

const RightTab = (props) => {
    const max = 1500;

    const [slider_value,setSliderValue] = useState(300)
    const [text,setText] = useState('Email Social Media & Light Browsing')
    const [imgUrl,setImgUrl] = useState(require('../../assets/img/conversation.svg').default)
    const [largeRels,setLargeRels] = useState('')


    const log = (value) => {


        if(value >= 300 && value < 500 ){
            setText('Connect when needed without worry')
            setLargeRels('')
        }

        if(value >= 500 && value !== 1000){
            setText('Ideal for all the moments that matter')
            setLargeRels('medium_slider')

        }

        if(value === 1000){
            setText('Great for most of your calling needs')
            setLargeRels('large_slider')

        }


        if (value > 1000) {
            setText('Great for most of your calling needs')
            setLargeRels('extra_slider')
            return setSliderValue(1500)
        }

        setSliderValue(value)

    }

    const marks = {
        300: {
            style: {

            }, label: <span className={slider_value === 5 ? 'activation' : 'slider_label'}>300</span>
        },
        500: {

        },

        1000: {

        },
        [max]: {
            style: {

            }, label: <span  className={slider_value === 50 ? 'activation' : 'slider_label'}>1500</span>
        }
    }


    return(
      <>
          <h2 className={'plan_title'}>Select the minutes you need per line</h2>

          <div style={{height:'236px'}}>
              <div className={'round_block'}>
                  <div style={props.tabIndex !== -1 ? {display:'block'} : {display:'none'} } className={(largeRels) + ' slider_info'}>
                      <h2>{slider_value + 'Min'}</h2>
                      <p>{text}</p>
                  </div>
              </div>
          </div>

          <Slider  dots={false}  className={'range_slider data_count_slider'} value={slider_value} onChange={log} step={10}  min={300}  max={max}  marks={marks}/>


      </>
    )
}

export default RightTab;