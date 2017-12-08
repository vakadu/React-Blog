import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type){
        case FETCH_POSTS:
            // console.log(action.payload.data);
            return _.mapKeys(action.payload.data, 'id');
            // _.mapKeys converts array into object

        case FETCH_POST:
             //ES5
            //const post = action.payload.data;
             // const newState = { ...state };
             // newState[post.id] = post;
             // return newState;

            return { ...state, [action.payload.data.id]: action.payload.data };
        //take all the existing posts we have out of state object and put them into a new object we are about to return

        case DELETE_POST:
            return _.omit(state, action.payload);

        default:
            return state;
    }
}
