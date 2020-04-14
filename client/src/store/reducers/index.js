import * as actionTypes from '../actions/types';

const initialState = {
    sending: false
};

const sendMessageStart = (state, action) => {
    return { ...state, sending: true };
};

const sendMessageSuccess = (state, action) => {
    return { ...state, sending: false };
};

const sendMessageFail = (state, action) => {
    return { ...state, sending: false };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_MESSAGE_START: return sendMessageStart(state, action);
        case actionTypes.SEND_MESSAGE_SUCCESS: return sendMessageSuccess(state, action);
        case actionTypes.SEND_MESSAGE_FAIL: return sendMessageFail(state, action);
        default: return state;
    }
}

export default reducer;