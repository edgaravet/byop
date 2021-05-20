import {
    CHANGE_DATA, CHANGE_STEP,
    CHECKEDNETWORK, GETRESULT,
    HIDEHELPMODAL,
    HIDEIMEIMODAL,
    IMEICHECK,
    SHOWHELPMODAL,
    SHOWIMEIMODAL, SORTED_DATA,
} from "../types";


const initialState = {
    show_help_modal:false,
    data:{ lineCount: 1, data: '', carrier: '', spendingNow: ''},
    network_checked:false,
    currentStep:1,
    imeiCheck:false,
    show_imei_modal:false,
    result:false,
    sortedData:null
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

        case CHANGE_STEP:{
            return {
                ...state,
                currentStep: action.payload,
                network_checked:false
            }
        }


        case GETRESULT:{
            return {
                ...state,
                result: true,
                currentStep: null

            }
        }

        case CHANGE_DATA:{
            return {
                ...state,
                data:action.payload
            }
        }
        case SORTED_DATA:{

            return {
                ...state,
                sortedData:action.payload,

            }
        }



        default:
            return state
    }


}