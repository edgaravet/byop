import React, {useState} from "react";
import Slider from "rc-slider";

const RightTab = (props) => {
    const max = 1500;

    const [slider_value,setSliderValue] = useState(300)
    const [text,setText] = useState('Email Social Media & Light Browsing')
    const [largeRels,setLargeRels] = useState('')


    const log = (value) => {


        if(value >= 300 && value < 500 ){
            setText('Connect when needed without worry')
            setLargeRels('')
        }

        if(value >= 500 && value !== 1000){
            setText('Ideal for all the moments that matter')
            setLargeRels('medium_slider minutes_medium')

        }

        if(value === 1000){
            setText('Great for most of your calling needs')
            setLargeRels('large_slider large_minutes')

        }


        if (value > 1000) {
            setText('Great for most of your calling needs')
            setLargeRels('extra_slider minutes_extra')
            return setSliderValue(1500)
        }

        setSliderValue(value)

    }

    const marks = {
        300: {
            style: {

            },
            label: <span className={slider_value === 5 ? 'activation' : 'slider_label'}>300<h3 style={slider_value === 300 ? {display:'block'} : {display: 'none'}}>Starting at $<span>15</span></h3></span>,


        },
        500: {
        label:<span className={slider_value === 5 ? 'activation' : 'slider_label'}><h3 style={slider_value === 500 ? {display:'block'} : {display: 'none'}}>Starting at $<span>15</span></h3></span>
        },

        1000: {
        label:<span className={slider_value === 5 ? 'activation' : 'slider_label'}><h3 style={slider_value === 1000 ? {display:'block'} : {display: 'none'}}>Starting at $<span>25</span></h3></span>
        },
        [max]: {
            style: {

            }, label: <span  className={slider_value === 50 ? 'activation' : 'slider_label'}>1500<h3 style={slider_value === max ? {display:'block'} : {display: 'none'}}>Starting at $<span>11</span></h3></span>
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