import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchJoke } from '../store/actions/jokeActions';

const DadJoke = props => {
  useEffect(() => {
    // call an action creator
    props.fetchJoke();
  }, []);

  // if (props.isFetching) {
  //   return <Loader />;
  // }

  return (
    <div>
      <h1>Dad Jokes</h1>
      <div className="Joke">
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.joke && <h3>"{props.joke}"</h3>}
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={props.fetchJoke}>Fetch a new joke</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    joke: state.jokes.quote,
    isFetching: state.jokes.isFetching,
    error: state.jokes.error
  };
};

export default connect(
  mapStateToProps,
  { fetchJoke }
)(DadJoke);
