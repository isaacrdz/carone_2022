import { 
  GET_JOBS_ADVANCED_SEARCH, 
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  CREATE_APPLICANT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_JOBS_ADVANCED_SEARCH:
      return {
        ...state,
        jobs: action.payload.data,
        loading: false,
        error: null,
        results: action.payload.pagination.total
      };

      case CREATE_APPLICANT:
      return {
        ...state,
        applicant: action.payload,
        loading: false,
        error: null,
      };
      
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case CLEAR_STATE:
      return {
        job: {},
        jobs: [],
        loading: false,
        error: null
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
        }
    default:
      return state;
  }
};
