import {CHECKEDNETWORK, HIDEHELPMODAL, HIDEIMEIMODAL, IMEICHECK, NEXTSTEP, SHOWHELPMODAL, SHOWIMEIMODAL} from "./types";

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


export function nextStep(step) {

    return{
        type:NEXTSTEP,
        payload:step
    }

}





