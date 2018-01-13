import React from 'react';
import ReactDOM from 'react-dom';
import keys from '../keys.js'

import SearchBar from './components/search_bar';

const API_KEY = keys.youtube_api_key;

// Create a new component. This component should produce
// some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
