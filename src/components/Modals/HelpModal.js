import React from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {connect} from 'react-redux'
import {closeHelpModal} from "../../redux/actions";


 const HelpModal = (props) => {


    const onCloseModal = () => props.dispatch(closeHelpModal())
    return(
        <div>

            <Modal classNames={{
                modal:'step1_help_modal',
                overlay:"help_modal_overlay",
                overlayAnimationIn: 'customEnterOverlayAnimation',
                overlayAnimationOut: 'customLeaveOverlayAnimation',
                modalAnimationIn: 'customEnterModalAnimation',
                modalAnimationOut: 'customLeaveModalAnimation',
            }}  open={props.show_help_modal}  onClose={onCloseModal} center>
                <h2>If You Don’t Know Your Devices Carrier</h2>
                <p>Try turning the device off and back on and watch the screen. Some devices will display the network or carrier logo when starting up.</p>
                <p>If this does not work, contact your service provider to find out what carrier it was using or if your phone can be unlocked.</p>
            </Modal>
        </div>
    )
}



function mapStateToProps(state) {

    return{
        show_help_modal:state.appReducer.show_help_modal
    }

}

export default connect(mapStateToProps,null)(HelpModal)
