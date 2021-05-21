import {
    BACKSTEP,
    CHANGE_DATA, CHANGE_STEP,
    CHECKEDNETWORK, GETRESULT,
    HIDEHELPMODAL,
    HIDEIMEIMODAL,
    IMEICHECK,
    SHOWHELPMODAL,
    SHOWIMEIMODAL, SORTED_DATA, STARTOVER,
} from "../types";


const initialState = {
    show_help_modal:false,
    data:{ lineCount: 1, data: '', carrier: '', spendingNow: ''},
    network_checked:false,
    currentStep:1,
    imeiCheck:false,
    show_imei_modal:false,
    result:false,
    sortedData:null,
    header_anim:false
}

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOWHELPMODAL:{
            return {
                ...state,
                show_help_modal:true,
                header_anim:true

            }
        }

        case HIDEHELPMODAL:{
            return {
                ...state,
                show_help_modal:false,
                header_anim: false


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
                show_imei_modal:true,

            }
        }


        case HIDEIMEIMODAL:{
            return {
                ...state,
                show_imei_modal:false,

            }
        }

        case CHANGE_STEP:{
            return {
                ...state,
                currentStep: action.payload,
                network_checked:false,
                imeiCheck: false
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



        case BACKSTEP:{
            return {
                ...state,
                currentStep:action.payload ? action.payload : state.currentStep - 1,
                network_checked:false,
                imeiCheck:false,
                result: false

            }
        }


        case STARTOVER:{
            return {
                ...state,
                currentStep: 1,
                result: false,
                network_checked:false,
                imeiCheck:false

            }
        }



        default:
            return state
    }


}