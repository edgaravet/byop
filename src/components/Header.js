import React from "react";
import {connect} from "react-redux";


 const Header = (props) => {
     console.log(props);

    return(


        <>
            <img src={props.imgSrc}/>
            <div className={'back_button'}>
                <button><i className="fal fa-chevron-left"/>Back</button>
            </div>

            <div className={'logo_content'}>
                <img src={require('../assets/img/kroger_svg_logo-desktop-1573041240175.svg').default}/>
            </div>

            <div className={'step1_title'}>
                <h2>Let’s Confirm</h2>
                <p>Your phone is compatible</p>
            </div>

            <div className={'step_progress'}>

                <img src={require('../assets/img/Subtraction 7.svg').default}/>
                <img src={require('../assets/img/Subtraction 7.svg').default}/>
                <img src={require('../assets/img/Subtraction 7.svg').default}/>
                <img src={require('../assets/img/Subtraction 7.svg').default}/>
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