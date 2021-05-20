import {
    BACKSTEP,
    CHANGE_DATA, CHANGE_STEP,
    CHECKEDNETWORK,
    GETRESULT,
    HIDEHELPMODAL,
    HIDEIMEIMODAL,
    IMEICHECK,
    SHOWHELPMODAL,
    SHOWIMEIMODAL, SORTED_DATA, STARTOVER
} from "./types";

export function openHelpModal() {

    return{
        type:SHOWHELPMODAL
    }

}



export function closeHelpModal() {

    return{
        type:HIDEHELPMODAL
    }

}



export function checkNetwork(network) {
        if(network === 'at&t'){
            return {
                type:CHECKEDNETWORK
            }
        }
}


export function imeiCheck() {
  return{
      type:IMEICHECK
  }
}



export function showImeiModal() {

    return{
        type:SHOWIMEIMODAL
    }
}

export function hideImeiModal() {
    return{
        type:HIDEIMEIMODAL
    }
}


export function getResult(){

    return{
        type:GETRESULT
    }
}


export function changeStep(step) {
    return{
        type:CHANGE_STEP,
        payload:step
    }
}

export function changeData(newData,nextStep) {

    return dispatch => {

        dispatch(changeStep(nextStep))
        return dispatch({
            type:CHANGE_DATA,
            payload:newData
        })
    }

}

export function saveSortedData(sortedData){

    return dispatch => {

        dispatch({
            type:SORTED_DATA,
            payload:sortedData
        })
    }
}

export function back(prevStep = 0) {
    if(prevStep > 0){
        return{
            type:BACKSTEP,
            payload:prevStep
        }
    }
    return{
        type:BACKSTEP
    }

}


export function startOver() {
    return{
        type:STARTOVER
    }

}





