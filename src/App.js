import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApi } from './store/actions/action';

function App(props) {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const temp = useSelector(state => state.temp)

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(getApi(val))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={val} onChange={event => setVal(event.target.value)}/>
        <button>View</button>
      </form>
      <p>{temp}</p>
    </div>
  );
}

export default App;
