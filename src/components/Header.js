import React from "react";


export const Header = () => {
    return(
        <>
            <img src={require('../assets/img/Group 2744.png').default}/>
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
            </div>
            </>
    )
}