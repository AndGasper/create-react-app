import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER
} from '../actions/types/auth_types';
// TODO 11/01/2017 - Add on the reset password stuff + "session" expiration


const default_state = {
    authenticated: false, // no one is logged in by default
    authError: null, // do not immediately set an auth error
    authorizedContent: null// set the available content to null
};
// Admittedly, authenticated + authorizedContent may be a little redundant,
// but I'd rather have a boolean for the logged in state instead of playing
// the "hmm will this evaluate to false?" game with action.payload

export default function(state = default_state, action) {

    switch(action.type) {

        case AUTH_USER:
            return {...state, authenticated: true, authorizedContent: action.payload};

        case AUTH_ERROR:
            // rely on server to send back the appropriate content if auth_error
            return {...state, authError: true, authorizedContent: action.payload};

        case UNAUTH_USER:
            return default_state;
    }
    return state;
}