import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POST:
        const { payload: { data }} = action;
        return { ...state, [data.id]: data}
    case FETCH_POSTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
