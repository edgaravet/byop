import React from "react";
import {connect} from 'react-redux'
import {Modal} from "react-responsive-modal";
import {hideImeiModal} from "../../redux/actions";


  const  ImeiInfoModal = (props) => {

      const onCloseModal = () => {
          props.dispatch(hideImeiModal())
      }

    return(
        <Modal classNames={{
            modal:'step1_help_modal imei_modal',
            overlay:"help_modal_overlay",
            overlayAnimationIn: 'customEnterOverlayAnimation',
            overlayAnimationOut: 'customLeaveOverlayAnimation',
            modalAnimationIn: 'customEnterModalAnimation',
            modalAnimationOut: 'customLeaveModalAnimation'
        }}  open={props.imei_modal} onClose={onCloseModal} center>
            <h2>How To Find Serial Number, IMEI or MEID:</h2>
           <div className={'imei_info'}>
               <span>iPhone:</span>
               <p><span>1.</span>Go to “Settings” <span>2.</span> “General” <span>3.</span> “About”</p>
           </div>

            <div className={'imei_info'}>
                <span>Android:</span>
                <p>Android: <span>1.</span> Go to “Settings” (or Settings> System) <span>2.</span> “About Device” (or “About Phone”) <span>3. </span>“Status” (on some models select IMEI information from the Status menu)</p>
            </div>


            <div className={'imei_info'}>
                <span>Basic phone:</span>
                <p> <span>1.</span> Go to “Menu” <span>2.</span> “Prepaid” <span>3.</span> “Serial Number”</p>
            </div>
        </Modal>
    )
}


function mapStateToProps(state) {

      return{
          imei_modal:state.appReducer.show_imei_modal
      }

}


export default connect(mapStateToProps,null)(ImeiInfoModal);