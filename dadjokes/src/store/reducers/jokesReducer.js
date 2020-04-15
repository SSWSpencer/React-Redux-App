const initialState = {
    joke: '',
    isFetching: false,
    error: ''
  };
  
  export const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_JOKE_START':
        return {
          ...state,
          isFetching: true
        };
      case 'FETCH_JOKE_SUCCESS':
        return {
          ...state,
          isFetching: false,
          quote: action.payload,
          error: ''
        };
      case 'FETCH_JOKE_FAILURE':
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  