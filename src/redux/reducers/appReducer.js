import {
    CHECKEDNETWORK,
    HIDEHELPMODAL,
    HIDEIMEIMODAL,
    IMEICHECK,
    NEXTSTEP,
    SHOWHELPMODAL,
    SHOWIMEIMODAL,
    STEP2
} from "../types";

const initialState = {
    show_help_modal:false,
    data:{ lineCount: 1, data: 25, carrier: '', spendingNow: ''},
    network_checked:false,
    currentStep:1,
    imeiCheck:false,
    show_imei_modal:false
}

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOWHELPMODAL:{
            return {
                ...state,
                show_help_modal:true

            }
        }

        case HIDEHELPMODAL:{
            return {
                ...state,
                show_help_modal:false

            }
        }


        case CHECKEDNETWORK:{
            return {
                ...state,
                network_checked:true,
                currentStep: null
            }
        }


        case IMEICHECK:{
            return {
                ...state,
                imeiCheck: true,
                currentStep: null
            }

        }

        case SHOWIMEIMODAL:{

            return {
                ...state,
                show_imei_modal:true
            }
        }


        case HIDEIMEIMODAL:{
            return {
                ...state,
                show_imei_modal:false
            }
        }

        case NEXTSTEP:{
            return {
                ...state,
                currentStep: action.payload,
                network_checked:false
            }
        }

        default:
            return state
    }


}