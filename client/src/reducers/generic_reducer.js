import {
    GENERIC_ACTION
} from '../actions/types/generic_types';

const default_state = {
    genericAttribute: ''
};

export default function(state = default_state, action) {

    switch (action.type) {
        case(GENERIC_ACTION):
            return {
                ...state, // Get slice of state
                genericAttribute: action.payload[0].genericAttribute
            }
    }

    return state;
}