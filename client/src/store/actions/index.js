import * as actionTypes from '../actions/types';

export const sendMessageSuccess = () => {
    return {
      type: actionTypes.SEND_MESSAGE_SUCCESS
    };
};
  
export const sendMessageFail = error => {
    return {
      type: actionTypes.SEND_MESSAGE_FAIL,
      error: error
    };
};
  
export const sendMessageStart = () => {
    return {
      type: actionTypes.SEND_MESSAGE_START
    };
};
  
export const sendMessage = (messageData) => {
    return {
      type: actionTypes.SEND_MESSAGE,
      messageData: messageData
    };
};

