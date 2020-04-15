import axios from 'axios';
// thunks

// Redux is synchronous
// we need to perform an async operation
export const fetchJoke = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_JOKE_START' });
    axios
      .get('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general')
      .then(res => {
        const str = (res.data[0].setup + " " + res.data[0].punchline)
        dispatch({ type: 'FETCH_JOKE_SUCCESS', payload: str });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_JOKE_FAILURE',
          payload: `Error ${err.response.status}: ${err.response.data}`
        });
      });
  };
};

export const updateTitle = newTitle => { 
  return {};
};
