import React from "react";
import {connect} from "react-redux";
import {back} from "../redux/actions";


 const Header = (props) => {

     const backStep = () => {
         if(props.currentStep === null){
             return props.dispatch(back(1))
         }
         props.dispatch(back())
     }
    console.log(props.currentStep)
    return(


        <>
            <img src={props.imgSrc} alt={'header_img'}/>
            <div className={'back_button'}>
                <button onClick={backStep} className={props.result ? 'result_desc' : ''}><i className="fal fa-chevron-left"/>BACK</button>
            </div>

            <div className={'logo_content'}>
                <img src={require('../assets/img/kroger_svg_logo-desktop-1573041240175.svg').default} alt={'logo'}/>
            </div>

            <div className={'step1_title'}>

                <h2>{props.title}</h2>
                <p className={props.result ? 'result_desc' : ''}>{props.description}</p>
            </div>

            <div className={'step_progress'}>

                <img src={require('../assets/img/Subtraction 7.svg').default} alt={'step1'}/>
                <img src={require('../assets/img/Subtraction 7.svg').default} alt={'step2'}/>
                <img src={require('../assets/img/Subtraction 7.svg').default} alt={'step3'}/>
                <img src={require('../assets/img/Subtraction 7.svg').default} alt={'step4'}/>
            </div>

            </>
    )
}


function mapStateToProps(state) {

    return{
        currentStep: state.appReducer.currentStep
    }

}

export default connect(mapStateToProps,null)(Header);