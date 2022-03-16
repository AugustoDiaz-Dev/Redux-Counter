import { useDispatch, useSelector } from 'react-redux';

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({
      type: 'INCREMENT'
    })
  }
  const decrement = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }
  const addValue = () => {
    dispatch({
      type: 'addValue',
      payload: 10
    })
  }

  return (
    <div className='App'>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addValue}>addValue</button>
    </div>
  );
}

export default App;
