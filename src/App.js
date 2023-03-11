import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const add10 = () => {
    dispatch(actions.addBy(10));
  }
  return (
    <div className="App">
      <h1>Counter using redux</h1>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add10}>Add 10</button>
    </div>
  );
}

export default App;
