import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {incNumbr,decrNumbr} from './actions/index'
function App() {
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h3>React REDUX Counterr Project</h3>
        <div className="container">
          <a onClick={()=>dispatch(incNumbr())} className='txt' href="#" style={{'textDecoration':'none'}}>+</a>
          {/* <input className='inpt' type="text" value={myState}/> */}
          <p> {myState}</p>
          <a onClick={()=>dispatch(decrNumbr())} className='txt' href="#" style={{'textDecoration':'none'}}>-</a>
        </div>

    </div>
  );
}

export default App;
